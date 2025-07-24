import { useSection } from "@deco/deco/hooks";

export interface Props {
  title?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  submitLabel?: string;
}

export default function ContactForm({
  title = "Entre em contato",
  nameLabel = "Nome",
  emailLabel = "Email",
  messageLabel = "Mensagem",
  submitLabel = "Enviar mensagem"
}: Props) {
  return (
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-serif text-center mb-8">{title}</h2>
        
        <form
          hx-post={useSection()}
          hx-target="#form-result"
          hx-swap="innerHTML"
          hx-indicator="#loading"
          class="space-y-6"
        >
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              {nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder={`Digite seu ${nameLabel.toLowerCase()}`}
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              {emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder={`Digite seu ${emailLabel.toLowerCase()}`}
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              {messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
              placeholder={`Digite sua ${messageLabel.toLowerCase()}`}
            ></textarea>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
            >
              <span id="loading" class="htmx-indicator">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
              <span class="htmx-indicator-none">{submitLabel}</span>
            </button>
          </div>
        </form>

        <div id="form-result" class="mt-6"></div>
      </div>
    </div>
  );
}

export const action = async (props: Props, req: Request) => {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return new Response(
        `<div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p>Por favor, preencha todos os campos.</p>
        </div>`,
        { headers: { "Content-Type": "text/html" } }
      );
    }

    // Import the sendContactEmail action
    const { default: sendContactEmail } = await import("../actions/sendContactEmail.ts");
    const result = await sendContactEmail({ name, email, message });

    if (result.success) {
      return new Response(
        `<div class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p class="font-semibold">✅ ${result.message}</p>
        </div>
        <script>
          setTimeout(() => {
            document.querySelector('form').reset();
            document.getElementById('form-result').innerHTML = '';
          }, 5000);
        </script>`,
        { headers: { "Content-Type": "text/html" } }
      );
    } else {
      return new Response(
        `<div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p class="font-semibold">❌ ${result.message}</p>
        </div>`,
        { headers: { "Content-Type": "text/html" } }
      );
    }
  } catch (error) {
    console.error("Error in contact form action:", error);
    return new Response(
      `<div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <p class="font-semibold">❌ Erro interno. Tente novamente mais tarde.</p>
        <p class="text-sm mt-2">Detalhes: ${error.message}</p>
      </div>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }
};