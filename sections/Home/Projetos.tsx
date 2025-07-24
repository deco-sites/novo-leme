import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../../components/ui/Title.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";
import Card from  "../../components/ui/Card.tsx";
import Slider from  "../../components/ui/Slider.tsx";

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
  title = "Projetos",
  description = "Conheça nossa atuação através dos nossos projetos",
  projects = [
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/",
      tags: ["Crime Organizado e Polícia"],
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Mapeamento e análise de áreas de tratamento especial na região de concessão da Light",
      description: "Utilizando técnicas de pesquisa quantitativas e qualitativas, este projeto tem como objetivo desenvolver e validar estratégias metodológicas para mapear, monitorar e mitigar os impactos da atuação de organizações criminosas violentas em Áreas com Severas Restrições Operativas (ASRO) na área de concessão da Light. A iniciativa integra dados internos da empresa a outras fontes públicas e privadas de informação, focando na identificação da extensão e evolução das ASRO, bem como na análise das dinâmicas territoriais específicas de cada grupo criminoso, especialmente mensurando o impacto que tais grupos exercem sobre o controle territorial e sua relação com o serviço de distribuição de energia elétrica.",
      url: "/",
      tags: ["Crime Organizado e Polícia"],
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/",
      tags: ["Crime Organizado e Polícia"],
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/",
      tags: ["Crime Organizado e Polícia"],
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/",
      tags: ["Crime Organizado e Polícia"],
    },
  ],
  button = { label: "Ver mais projetos", url: "/" },
}: Props) {
  const id = "HomeProjetos";

  return (
    <div className="md:mx-16 py-8 md:py-16 flex flex-col space-y-6 md:space-y-10 mb-16 text-white rounded-se-3xl rounded-es-3xl bg-[#EA9642] bg-[url(https://assets.decocache.com/novo-leme/aa01eb61-8e76-4691-85bd-da34db62d246/bg1.svg)] bg-repeat-x">
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
              {projects?.map((project, index) => (
                <Slider.Item
                  index={index}
                  class="carousel-item w-full md:w-[calc(32.5%)]"
                >
                  <Card
                    image={project.image}
                    label={project.label}
                    description={project.description}
                    url={project.url}
                    tags={project.tags}
                  />
                </Slider.Item>
              ))}
            </Slider>

            <Slider.PrevButton
              class="text-white no-animation absolute -left-6 md:-left-16 top-1/2 disabled:opacity-50 md:hover:bg-primary rounded-full"
              disabled
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 27.5L16.25 20L23.75 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Slider.PrevButton>

            <Slider.NextButton
              class="text-white no-animation absolute -right-6 md:-right-16 top-1/2 disabled:opacity-50 md:hover:bg-primary rounded-full"
              disabled={projects.length < 2}
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
