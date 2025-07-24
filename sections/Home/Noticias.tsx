import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../../components/ui/Title.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";
import Card from  "../../components/ui/Card.tsx";
import Slider from  "../../components/ui/Slider.tsx";

export interface Props {
  title?: string;
  description?: string;
  news?: {
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

export default function HomeNoticias({
  title = "Notícias",
  description = "Fique por dentro das novidades do Leme",
  news = [
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
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "J-PAL Blog: Julia Guerra Fernandes, J-PAL '17, on public safety and evidence use in Brazil",
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
  const id = "HomeNoticias";

  return (
    <div className="md:mx-16 py-8 md:py-16 flex flex-col space-y-6 md:space-y-10 mb-16 text-white rounded-se-3xl rounded-es-3xl bg-[#0D6687] bg-[url(https://assets.decocache.com/novo-leme/d3eb5637-73f5-450d-90d6-9036a36595c2/bg2.svg)] bg-repeat-x">
      <div className="px-6 md:px-32">
          <Title label={title} description={description} serif />
      </div>
      <div className="flex flex-col flex-auto space-y-8 md:space-y-16 items-center px-6 md:px-24">
        <div
        id={id}
        class="relative grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-[min-content_1fr]"
      >
        {/* Image Slider */}
        <div class="col-start-1 col-span-1 sm:col-start-2">
          <div class="h-min flex-grow">
            <Slider class="carousel carousel-center gap-6 w-full p-4 md:p-8">
              {news?.map((item, index) => (
                <Slider.Item
                  index={index}
                  class="carousel-item w-full md:w-[calc(32.5%)]"
                >
                  <Card
                    borderColor="primary"
                    image={item.image}
                    label={item.label}
                    description={item.description}
                    url={item.url}
                    tags={item.tags}
                  />
                </Slider.Item>
              ))}
            </Slider>

            <Slider.PrevButton
              class="text-white no-animation absolute -left-6 md:-left-16 top-1/2 disabled:opacity-50 md:hover:bg-secondary rounded-full"
              disabled
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 27.5L16.25 20L23.75 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Slider.PrevButton>

            <Slider.NextButton
              class="text-white no-animation absolute -right-6 md:-right-16 top-1/2 disabled:opacity-50 md:hover:bg-secondary rounded-full"
              disabled={news.length < 2}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 12.5L23.75 20L16.25 27.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Slider.NextButton>
          </div>
        </div>

        <Slider.JS rootId={id} />
      </div>
        <div class="flex px-6">
          <FancyLink label={button?.label} url={button?.url} iconRight/>
        </div>
      </div>
    </div>
  );
}