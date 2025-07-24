import { useSection } from "@deco/deco/hooks";
import sendContactEmailDirect from "../actions/sendContactEmailDirect.ts";

export interface Props {
  title?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  submitLabel?: string;
  successMessage?: string;
}

export default function SimpleContactForm({
  title = "Entre em contato",
  nameLabel = "Nome",
  emailLabel = "Email", 
  messageLabel = "Mensagem",
  submitLabel = "Enviar mensagem",
  successMessage = "Mensagem enviada com sucesso!"
}: Props) {
  return (
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto">
        <div id="contact-form-container">
          <h2 class="text-3xl font-serif text-center mb-8">{title}</h2>
          
          <form
            hx-post={useSection()}
            hx-target="#contact-form-container"
            hx-swap="outerHTML"
            hx-indicator="#loading-indicator"
            class="space-y-6"
          >
            <div>
              <label for="name" class="block text-sm font-medium mb-2">
                {nameLabel} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`Digite seu ${nameLabel.toLowerCase()}`}
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2">
                {emailLabel} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`Digite seu ${emailLabel.toLowerCase()}`}
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">
                {messageLabel} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder={`Digite sua ${messageLabel.toLowerCase()}`}
              ></textarea>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <span class="htmx-indicator" id="loading-indicator">
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
        </div>
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

    console.log("Form submitted:", { name, email, message: message?.substring(0, 50) });

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        `<div id="contact-form-container">
          <h2 class="text-3xl font-serif text-center mb-8">${props.title || "Entre em contato"}</h2>
          
          <div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-6">
            <p><strong>❌ Erro:</strong> Por favor, preencha todos os campos obrigatórios.</p>
          </div>
          
          <form
            hx-post="${req.url}"
            hx-target="#contact-form-container"
            hx-swap="outerHTML"
            hx-indicator="#loading-indicator"
            class="space-y-6"
          >
            <div>
              <label for="name" class="block text-sm font-medium mb-2">
                ${props.nameLabel || "Nome"} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value="${name || ''}"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu ${(props.nameLabel || "Nome").toLowerCase()}"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2">
                ${props.emailLabel || "Email"} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value="${email || ''}"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu ${(props.emailLabel || "Email").toLowerCase()}"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">
                ${props.messageLabel || "Mensagem"} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Digite sua ${(props.messageLabel || "Mensagem").toLowerCase()}"
              >${message || ''}</textarea>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <span class="htmx-indicator" id="loading-indicator">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
                <span class="htmx-indicator-none">${props.submitLabel || "Enviar mensagem"}</span>
              </button>
            </div>
          </form>
        </div>`,
        { headers: { "Content-Type": "text/html" } }
      );
    }

    // Send email using the new direct action
    console.log("Calling sendContactEmailDirect action...");
    const emailResult = await sendContactEmailDirect({
      name,
      email,
      message
    });

    console.log("Email result:", emailResult);

    if (emailResult.success) {
      // Success response - show message and reset form
      return new Response(
        `<div id="contact-form-container">
          <h2 class="text-3xl font-serif text-center mb-8">${props.title || "Entre em contato"}</h2>
          
          <div class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg mb-6">
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p><strong>✅ Sucesso!</strong> ${emailResult.message}</p>
                <p class="text-sm mt-1">Obrigado, <strong>${name}</strong>! Sua mensagem foi enviada para <strong>augustocbarbosa@gmail.com</strong></p>
              </div>
            </div>
          </div>
          
          <form
            hx-post="${req.url}"
            hx-target="#contact-form-container"
            hx-swap="outerHTML"
            hx-indicator="#loading-indicator"
            class="space-y-6"
          >
            <div>
              <label for="name" class="block text-sm font-medium mb-2">
                ${props.nameLabel || "Nome"} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu ${(props.nameLabel || "Nome").toLowerCase()}"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2">
                ${props.emailLabel || "Email"} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu ${(props.emailLabel || "Email").toLowerCase()}"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">
                ${props.messageLabel || "Mensagem"} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Digite sua ${(props.messageLabel || "Mensagem").toLowerCase()}"
              ></textarea>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <span class="htmx-indicator" id="loading-indicator">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
                <span class="htmx-indicator-none">${props.submitLabel || "Enviar mensagem"}</span>
              </button>
            </div>
          </form>
        </div>`,
        { headers: { "Content-Type": "text/html" } }
      );
    } else {
      // Email sending failed
      return new Response(
        `<div id="contact-form-container">
          <h2 class="text-3xl font-serif text-center mb-8">${props.title || "Entre em contato"}</h2>
          
          <div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-6">
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p><strong>❌ Erro:</strong> ${emailResult.message}</p>
                <p class="text-sm mt-1">Por favor, tente novamente ou entre em contato diretamente pelo email: <strong>augustocbarbosa@gmail.com</strong></p>
              </div>
            </div>
          </div>
          
          <form
            hx-post="${req.url}"
            hx-target="#contact-form-container"
            hx-swap="outerHTML"
            hx-indicator="#loading-indicator"
            class="space-y-6"
          >
            <div>
              <label for="name" class="block text-sm font-medium mb-2">
                ${props.nameLabel || "Nome"} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value="${name || ''}"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu ${(props.nameLabel || "Nome").toLowerCase()}"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2">
                ${props.emailLabel || "Email"} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value="${email || ''}"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu ${(props.emailLabel || "Email").toLowerCase()}"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">
                ${props.messageLabel || "Mensagem"} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Digite sua ${(props.messageLabel || "Mensagem").toLowerCase()}"
              >${message || ''}</textarea>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <span class="htmx-indicator" id="loading-indicator">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
                <span class="htmx-indicator-none">${props.submitLabel || "Enviar mensagem"}</span>
              </button>
            </div>
          </form>
        </div>`,
        { headers: { "Content-Type": "text/html" } }
      );
    }

  } catch (error) {
    console.error("Form action error:", error);
    return new Response(
      `<div id="contact-form-container">
        <h2 class="text-3xl font-serif text-center mb-8">${props.title || "Entre em contato"}</h2>
        
        <div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-6">
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p><strong>❌ Erro interno:</strong> ${error.message}</p>
              <p class="text-sm mt-1">Por favor, entre em contato diretamente pelo email: <strong>augustocbarbosa@gmail.com</strong></p>
            </div>
          </div>
        </div>
        
        <form
          hx-post="${req.url}"
          hx-target="#contact-form-container"
          hx-swap="outerHTML"
          hx-indicator="#loading-indicator"
          class="space-y-6"
        >
          <div>
            <label for="name" class="block text-sm font-medium mb-2">
              ${props.nameLabel || "Nome"} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite seu ${(props.nameLabel || "Nome").toLowerCase()}"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium mb-2">
              ${props.emailLabel || "Email"} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite seu ${(props.emailLabel || "Email").toLowerCase()}"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium mb-2">
              ${props.messageLabel || "Mensagem"} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="Digite sua ${(props.messageLabel || "Mensagem").toLowerCase()}"
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <span class="htmx-indicator" id="loading-indicator">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
              <span class="htmx-indicator-none">${props.submitLabel || "Enviar mensagem"}</span>
            </button>
          </div>
        </form>
      </div>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }
};