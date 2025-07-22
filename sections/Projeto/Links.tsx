import Title from  "../../components/ui/Title.tsx";
import CardDocument, { Props as DocProps } from  "../../components/ui/CardDocument.tsx";

export interface Props {
  /** @title Title */
  label?: string;
  links?: {
    label?: string;
    url?: string;
  }[]
}

export default function Links({
  label = "Links",
  links = [
    {
      label: "Avaliação Técnica dos Fatores de Risco Iniciais",
      url: "/",
    }, {
      label: "Relatório Final da Execução do Projeto",
      url: "/",
    }, {
      label: "Prestação de contas",
      url: "/",
    }
  ]
}: Props) {
  return (
    <div className="container flex gap-16 mb-9">
      <div className="flex-none w-44"/>
      <div className="flex-auto flex flex-col gap-5">
        <Title label={label} titleSize="xl" serif/>
        <div className="flex flex-col gap-4">
          {links?.map((link) => (
            <div>
              <a href={link.url} className="underline hover:text-secondary">{link.label}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-none w-44"/>
    </div>
  );
}
