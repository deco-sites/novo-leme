import { useSection } from "@deco/deco/hooks";
import sendContactEmailDirect from "../actions/sendContactEmailDirect.ts";

export interface Props {
  form?: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  }
  email?: {
    title: string;
    email: string;
  }
}

export default function Contato({
  form = {
    title: "Envie uma mensagem",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    submit: "Enviar",
  },
  email = {
    title: "Nosso email",
    email: "contato@lemelab.org",
  },
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-cols md:flex-row gap-14 md:gap-28 my-6 md:my-12">
      <div className="w-full md:w-auto flex flex-col md:flex-row gap-8 md:gap-28">
        <div id="contact-form-container" className="md:w-96 flex flex-col gap-5">
          <h3 className="font-serif text-2xl">{form?.title}</h3>
          <form
            hx-post={useSection()}
            hx-target="#contact-form-container"
            hx-swap="innerHTML"
            hx-indicator="#loading-indicator"
            className="flex flex-col gap-5"
          >
            <label className="flex flex-col gap-2">
              <div>{form?.name}</div>
              <input id="name" name="name" required type="text" className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white" />
            </label>
            <label className="flex flex-col gap-2">
              <div>{form?.email}</div>
              <input id="email" name="email" required type="email" className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white" />
            </label>
            <label className="flex flex-col gap-2">
              <div>{form?.message}</div>
              <textarea id="message" name="message" required className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white h-32">
              </textarea>
            </label>
            <div className="flex justify-end">
              <button type="submit" className="flex gap-4 align-middle bg-base-100 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-semibold py-2 px-4 border-2 border-secondary rounded-md shadow-[2px_2px_0_rgba(234,115,66,1)]">
                <span className="htmx-indicator hidden" id="loading-indicator">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
               </span>
               <span className="htmx-indicator-none">{form?.submit}</span>
              </button>
            </div>
          </form>
          <div id="form-result" className="mt-6"></div>
        </div>
        <div className="md:w-96 flex flex-col gap-5">
          <h3 className="font-serif text-2xl">{email?.title}</h3>
          <p>{email?.email}</p>
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
        `<h3 class="font-serif text-2xl">${props.form?.title || "Entre em contato"}</h3>
          
          <div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-6">
            <p><strong>❌ Erro:</strong> Por favor, preencha todos os campos obrigatórios.</p>
          </div>
          
          <form
            hx-post="${req.url}"
            hx-target="#contact-form-container"
            hx-swap="innerHTML"
            hx-indicator="#loading-indicator"
            class="flex flex-col gap-5"
          >
            <label class="flex flex-col gap-2">
              <div>${props.form?.name || "Nome"}</div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value="${name || ''}"
                class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white"
              />
            </label>

            <label class="flex flex-col gap-2">
              <div>${props.form?.email || "Email"}</div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value="${email || ''}"
                class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white"
              />
            </label>

            <label class="flex flex-col gap-2">
              <div>${props.form?.message || "Mensagem"}</div>
              <textarea
                id="message"
                name="message"
                required
                class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white h-32"
              >${message || ''}</textarea>
            </label>

            <div class="flex justify-end">
              <button
                type="submit"
                class="flex gap-4 align-middle bg-base-100 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-semibold py-2 px-4 border-2 border-secondary rounded-md shadow-[2px_2px_0_rgba(234,115,66,1)]"
              >
                <span class="htmx-indicator hidden" id="loading-indicator">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                <span class="htmx-indicator-none">${props.form?.submit || "Enviar"}</span>
              </button>
            </div>
          </form>`,
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
      // Success - show success message and redirect
      return new Response(
        `<div class="text-center py-8">
          <div class="p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg mb-6">
            <div class="flex items-center justify-center">
              <svg class="w-8 h-8 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <p class="text-lg font-semibold">✅ Mensagem enviada com sucesso!</p>
                <p class="text-sm mt-1">Obrigado pelo contato. Retornaremos em breve.</p>
              </div>
            </div>
          </div>
          <script>
            setTimeout(() => {
              window.location.href = '/';
            }, 3000);
          </script>
        </div>`,
        { headers: { "Content-Type": "text/html" } }
      );
    } else {
      // Email sending failed
      return new Response(
        `<h3 class="font-serif text-2xl">${props.form?.title || "Entre em contato"}</h3>
          
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
            hx-swap="innerHTML"
            hx-indicator="#loading-indicator"
            class="flex flex-col gap-5"
          >
            <label class="flex flex-col gap-2">
              <div>${props.form?.name || "Nome"}</div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value="${name || ''}"
                class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white"
              />
            </label>

            <label class="flex flex-col gap-2">
              <div>${props.form?.email || "Email"}</div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value="${email || ''}"
                class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white"
              />
            </label>

            <label class="flex flex-col gap-2">
              <div>${props.form?.message || "Mensagem"}</div>
              <textarea
                id="message"
                name="message"
                required
                class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white h-32"
              >${message || ''}</textarea>
            </label>

            <div class="flex justify-end">
              <button
                type="submit"
                class="flex gap-4 align-middle bg-base-100 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-semibold py-2 px-4 border-2 border-secondary rounded-md shadow-[2px_2px_0_rgba(234,115,66,1)]"
              >
                <span class="htmx-indicator hidden" id="loading-indicator">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                <span class="htmx-indicator-none">${props.form?.submit || "Enviar"}</span>
              </button>
            </div>
          </form>`,
        { headers: { "Content-Type": "text/html" } }
      );
    }

  } catch (error) {
    console.error("Form action error:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    
    return new Response(
      `<h3 class="font-serif text-2xl">${props.form?.title || "Entre em contato"}</h3>
        
        <div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-6">
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p><strong>❌ Erro interno:</strong> ${errorMessage}</p>
              <p class="text-sm mt-1">Por favor, entre em contato diretamente pelo email: <strong>augustocbarbosa@gmail.com</strong></p>
            </div>
          </div>
        </div>
        
        <form
          hx-post="${req.url}"
          hx-target="#contact-form-container"
          hx-swap="innerHTML"
          hx-indicator="#loading-indicator"
          class="flex flex-col gap-5"
        >
          <label class="flex flex-col gap-2">
            <div>${props.form?.name || "Nome"}</div>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white"
            />
          </label>

          <label class="flex flex-col gap-2">
            <div>${props.form?.email || "Email"}</div>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white"
            />
          </label>

          <label class="flex flex-col gap-2">
            <div>${props.form?.message || "Mensagem"}</div>
            <textarea
              id="message"
              name="message"
              required
              class="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white h-32"
            ></textarea>
          </label>

          <div class="flex justify-end">
            <button
              type="submit"
              class="flex gap-4 align-middle bg-base-100 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-semibold py-2 px-4 border-2 border-secondary rounded-md shadow-[2px_2px_0_rgba(234,115,66,1)]"
            >
              <span class="htmx-indicator hidden" id="loading-indicator">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              <span class="htmx-indicator-none">${props.form?.submit || "Enviar"}</span>
            </button>
          </div>
        </form>`,
      { headers: { "Content-Type": "text/html" } }
    );
  }
};