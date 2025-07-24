import SideNav, { Props as SideNavProps } from  "../components/ui/SideNav.tsx";
import NewsProps from  "../components/NewsProps.tsx";
import Card from  "../components/ui/Card.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  news?: NewsProps[];
}

export default function MidiaNaMidia({
  sidebarNav,
  news = [
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Mapeamento e análise de áreas de tratamento especial na região de concessão da Light",
      description: "Utilizando técnicas de pesquisa quantitativas e qualitativas, este projeto tem como objetivo desenvolver e validar estratégias metodológicas para mapear, monitorar e mitigar os impactos da atuação de organizações criminosas violentas em Áreas com Severas Restrições Operativas (ASRO) na área de concessão da Light. A iniciativa integra dados internos da empresa a outras fontes públicas e privadas de informação, focando na identificação da extensão e evolução das ASRO, bem como na análise das dinâmicas territoriais específicas de cada grupo criminoso, especialmente mensurando o impacto que tais grupos exercem sobre o controle territorial e sua relação com o serviço de distribuição de energia elétrica.",
      url: "/",
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/",
    },
  ],
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12 text-neutral-950">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {news?.map((item) => (
            <Card
              borderColor="primary"
              image={item.image}
              label={item.label}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
