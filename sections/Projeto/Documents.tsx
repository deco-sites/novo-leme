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
      name: "Exemplo de documento",
      url: "/",
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Exemplo de documento",
      },
      description: "Exemplo de descrição de documento.",
    }, {
      name: "Exemplo de documento",
      url: "/",
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Exemplo de documento",
      },
      description: "Exemplo de descrição de documento.",
    }, {
      name: "Exemplo de documento",
      url: "/",
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Exemplo de documento",
      },
      description: "Exemplo de descrição de documento.",
    }
  ]
}: Props) {
  return (
    <div className="container flex gap-16 mb-9">
      <div className="hidden md:block flex-none w-44"/>
      <div className="flex-auto flex flex-col gap-5">
        <Title label={label} titleSize="2xl" serif />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div className="hidden md:block flex-none w-44"/>
    </div>
  );
}
