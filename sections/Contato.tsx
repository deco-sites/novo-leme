import { useSection } from "@deco/deco/hooks";
import { useComponent } from "./Component.tsx";
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
  successMessage?: string;
  errorMessage?: string;
  /** @hide */
  status?: string;
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
  status,
  successMessage = "Mensagem enviada com sucesso!",
  errorMessage = "Erro ao enviar mensagem.",
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-cols md:flex-row gap-14 md:gap-28 my-6 md:my-12">
      <div className="w-full md:w-auto flex flex-col md:flex-row gap-8 md:gap-28">
        <div className="md:w-96 flex flex-col gap-5">
          <h3 className="font-serif text-2xl">{form?.title}</h3>
          {
            status === "success" ? (
              <div className="px-4 py-2 rounded-md bg-primary text-white text-center">
                {successMessage}
              </div>
              ) : ''
          }
          {
            status === "error" ? (
              <div className="px-4 py-2 rounded-md bg-secondary text-white text-center">
                {errorMessage}
              </div>
              ) : ''
          }
          <form
            // deno-lint-ignore react-rules-of-hooks
            hx-post={useSection()}
            hx-target="closest section"
            hx-swap="outerHTML"
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
        <div className="lg:w-96 flex flex-col gap-5">
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

    // Send email using the new direct action
    console.log("Calling sendContactEmailDirect action...");
    const emailResult = await sendContactEmailDirect({
      name,
      email,
      message
    });

    console.log("Email result:", emailResult);

    // Return updated props to trigger re-render with success state
    return {
      ...props,
      status: "success",
    };

  } catch (error) {
    console.error("Form action error:", error);
    
    // Return props with error state
    return {
      ...props,
      status: "error",
    };
  }
};