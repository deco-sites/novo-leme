import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../../components/ui/Title.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";
import Card from  "../../components/ui/Card.tsx";

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

export default function HomeNewsEN({
  title = "News",
  description = "Stay updated with Leme's latest news",
  projects = [
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Project",
      },
      label: "Miriam Leitão Program: How to face police violence and organized crime, in the opinion of two specialists",
      description: "Joana Monteiro, director of Leme, in an interview with Daniel Hirata (UFF), on the Miriam Leitão Program.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Project",
      },
      label: "Folha de São Paulo: Brazil has always naturalized killing criminals, and now we have images",
      description: "Joana Monteiro, director of Leme, in an interview with Daniel Hirata (UFF), on the Miriam Leitão Program.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Project",
      },
      label: "J-PAL Blog: Julia Guerra Fernandes, J-PAL '17, on public safety and evidence use in Brazil",
      description: "Joana Monteiro, director of Leme, in an interview with Daniel Hirata (UFF), on the Miriam Leitão Program.",
      url: "/",
    },
  ],
  button = { label: "See more news", url: "/" },
}: Props) {
  return (
    <div className="md:mx-16 py-8 md:py-16 flex flex-col space-y-6 md:space-y-10 mb-16 text-white rounded-se-3xl rounded-es-3xl bg-[#0D6687] bg-[url(https://assets.decocache.com/novo-leme/d3eb5637-73f5-450d-90d6-9036a36595c2/bg2.svg)] bg-repeat-x">
      <div className="px-6 md:px-32">
          <Title label={title} description={description} serif />
      </div>
      <div className="flex flex-col flex-auto space-y-8 md:space-y-16 items-center px-6 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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