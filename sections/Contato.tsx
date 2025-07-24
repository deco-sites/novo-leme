import Form from "../islands/contact.tsx"

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
        <div className="md:w-96 flex flex-col gap-5">
          <h3 className="font-serif text-2xl">{form?.title}</h3>
          <Form/>
          <form method="post" className="flexs flex-col gap-5 hidden">
            <label className="flex flex-col gap-2">
              <div>{form?.name}</div>
              <input required type="text" className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white" />
            </label>
            <label className="flex flex-col gap-2">
              <div>{form?.email}</div>
              <input required type="email" className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white" />
            </label>
            <label className="flex flex-col gap-2">
              <div>{form?.message}</div>
              <textarea required className="px-3 py-2 border border-primary rounded-md bg-base-100 focus:bg-white h-32">
              </textarea>
            </label>
            <div className="flex justify-end">
              <button type="submit" className="flex space-x-4 align-middle bg-base-100 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-semibold py-2 px-4 border-2 border-secondary rounded-md shadow-[2px_2px_0_rgba(234,115,66,1)]">{form?.submit}</button>
            </div>
          </form>
        </div>
        <div className="md:w-96 flex flex-col gap-5">
          <h3 className="font-serif text-2xl">{email?.title}</h3>
          <p>{email?.email}</p>
        </div>
      </div>
    </div>
  );
}
