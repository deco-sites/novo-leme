import CardDocument, { Props as DocProps } from  "../components/ui/CardDocument.tsx";

export interface Props {
  docs?: DocProps[];
}

export default function Transparencia({
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
  ],
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex mt-6 md:mt-12 mb-14 md:mb-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
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
  );
}
