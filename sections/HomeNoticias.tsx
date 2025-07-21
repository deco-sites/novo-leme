import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";
import Card from  "../components/ui/Card.tsx";

export interface Props {
  title?: string;
  description?: string;
  projects?: {
    image?: {
      src?: ImageWidget;
      alt?: string;
    };
    label?: string;
    description?: string;
    url?: string;
    tags?: string[];
  }[];
  button?: {
    label: string;
    url: string;
  }
}

export default function HomeProjetos({
  title = "Notícias",
  description = "Fique por dentro das novidades do Leme",
  projects = [
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Programa Miriam Leitão: Como enfrentar a violência policial e o crime organizado, na opinião de dois especialistas",
      description: "Joana Monteiro, diretora do Leme, em entrevista, com Daniel Hirata (UFF), ao Programa Miriam Leitão.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Folha de São Paulo: Brasil sempre naturalizou matar criminoso, e agora temos imagens",
      description: "Joana Monteiro, diretora do Leme, em entrevista, com Daniel Hirata (UFF), ao Programa Miriam Leitão.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "J-PAL Blog: Julia Guerra Fernandes, J-PAL '17, on public safety and evidence use in Brazil",
      description: "Joana Monteiro, diretora do Leme, em entrevista, com Daniel Hirata (UFF), ao Programa Miriam Leitão.",
      url: "/",
    },
  ],
  button = { label: "Ver mais projetos", url: "/" },
}: Props) {
  return (
    <div className="mx-16 py-16 flex flex-col space-y-10 mb-16 text-white rounded-se-3xl rounded-es-3xl bg-[url(https://assets.decocache.com/novo-leme/d3eb5637-73f5-450d-90d6-9036a36595c2/bg2.svg)]">
      <div className="px-32">
          <Title label={title} description={description} serif />
      </div>

      <div className="flex flex-col flex-auto space-y-16 items-center px-32">
        <div className="grid grid-cols-3 gap-8">
          {projects?.map((project) => (
            <Card
              borderColor="primary"
              image={project.image}
              label={project.label}
              description={project.description}
              url={project.url}
              tags={project.tags}
            />
          ))}
        </div>
        <div class="flex px-6">
          <FancyLink label={button?.label} url={button?.url} iconRight/>
        </div>
      </div>
    </div>
  );
}
