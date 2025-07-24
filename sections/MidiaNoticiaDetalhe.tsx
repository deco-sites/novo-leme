import SideNav, { Props as SideNavProps } from  "../components/ui/SideNav.tsx";
import NewsProps from  "../components/NewsProps.tsx";
import Image from "apps/website/components/Image.tsx";
import Title from  "../components/ui/Title.tsx";
import Tag from  "../components/ui/Tag.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  details?: NewsProps;
  backToNews?: {
    label?: string;
    url?: string;
  }
}

export default function Noticia({
  sidebarNav,
  details = {
    image: {
      src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
      alt: "Projeto",
    },
    label: "Programa Miriam Leitão: Como enfrentar a violência policial e o crime organizado, na opinião de dois especialistas",
    description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
    date: "2024-10-12",
    body: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
    url: "/",
  },
  backToNews = {
    label: "Ver mais notícias",
    url: "/midia/noticias",
  },
}: Props) {
  const formattedDate = details.date ? new Date(details.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : null;

  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex flex-auto flex-col gap-9">
        <div className="flex flex-col gap-7">
          <Title label={details.label} serif titleSize="4xl" noClamp />
            {details?.date ? (
              <div class="flex flex-wrap gap-3">
                <Tag type="date" label={formattedDate} color="secondary"/>
              </div>
            ) : ''}
        </div>
        <div className="flex flex-col gap-5">
          {
            details.image ? (
              <Image className="w-full" src={details.image?.src || ""} alt={details.image?.alt} />
            ) : ''
          }
          <div className="leading-normal text-neutral-950" dangerouslySetInnerHTML={{__html: details.body}}></div>
        </div>

        <div className="flex ">
          <FancyLink label={backToNews.label} url={backToNews.url} iconLeft/>
        </div>
      </div>
    </div>
  );
}
