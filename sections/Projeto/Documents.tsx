import Title from  "../../components/ui/Title.tsx";
import CardDocument, { Props as DocProps } from  "../../components/ui/CardDocument.tsx";

export interface Props {
  /** @title Title */
  label?: string;
  docs?: DocProps[]
}

export default function TextBlock({
  label = "Documentos",
  docs = [
    {
      name: "Relatório Final da Execução do Projeto",
      url: "/",
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Relatório anual",
      },
      description: "Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base de dados consolidada e validada sobre as ASRO, o desenvolvimento de métricas. Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base.",
    }, {
      name: "Relatório Final da Execução do Projeto",
      url: "/",
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Relatório anual",
      },
      description: "Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base de dados consolidada e validada sobre as ASRO, o desenvolvimento de métricas. Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base.",
    }, {
      name: "Relatório Final da Execução do Projeto",
      url: "/",
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Relatório anual",
      },
      description: "Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base de dados consolidada e validada sobre as ASRO, o desenvolvimento de métricas. Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base.",
    }
  ]
}: Props) {
  return (
    <div className="container flex gap-16 mb-9">
      <div className="flex-none w-44"/>
      <div className="flex-auto flex flex-col gap-5">
        <Title label={label} titleSize="xl" serif />
        <div className="grid grid-cols-2 gap-4">
          {docs?.map((doc) => (
            <CardDocument
              name={doc.name}
              url={doc.url}
              image={doc.image}
              description={doc.description}
            />
          ))}
        </div>
      </div>
      <div className="flex-none w-44"/>
    </div>
  );
}
