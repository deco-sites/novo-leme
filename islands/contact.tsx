  //islands/form.tsx
  import { invoke } from "../runtime.ts";
  import { render } from "apps/resend/utils/reactEmail.ts";
  import { StripeWelcomeEmail } from "apps/resend/mailExamples/StripeWelcomeEmail.tsx";
  import { JSX } from "preact/jsx-runtime";

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    console.log('ENTROUUUUUU')
    
    await invoke.resend.actions.emails.send({
      to: "augustocbarbosa@gmail.com", // receiver optional 
      html: render(<StripeWelcomeEmail />, { // Convert your react email template when the action is triggered to HTML using render or pure HTML too
        pretty: true, // 
      }),
      subject: "Formulário de contato | Resend App - Deco", // subject optional
    });
  }

  export default function Form(){
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          <div>name</div>
          <input required type="text" className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white" />
        </label>
        <label className="flex flex-col gap-2">
          <div>email</div>
          <input required type="email" className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white" />
        </label>
        <label className="flex flex-col gap-2">
          <div>message</div>
          <textarea required className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white h-32">
          </textarea>
        </label>
        <div className="flex justify-end">
          <button type="submit" className="flex space-x-4 align-middle bg-base-100 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-semibold py-2 px-4 border-2 border-secondary rounded-md shadow-[2px_2px_0_rgba(234,115,66,1)]">send</button>
        </div>
      </form>
    )
  }