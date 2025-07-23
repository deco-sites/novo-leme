import type { ImageWidget } from "apps/admin/widgets.ts";
import SideNav from  "../components/ui/SideNav.tsx";
import type {Props as SideNavProps} from  "../components/ui/SideNav.tsx";
import Card from  "../components/ui/Card.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  projects?: {
    image?: {
      src?: ImageWidget;
      alt?: string;
    };
    label?: string;
    description?: string;
    url?: string;
    tags?: string[];
    details?: {
      date?: string;
      place?: string;
      status?: string;
    }
  }[];
}

export default function Projetos({
  sidebarNav,
  projects = [
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/projetos/projeto",
      tags: ["Crime Organizado e Polícia"],
      details: {
        date: "2025-atual",
        place: "Estado do Rio de Janeiro",
        status: "Em andamento",
      }
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Mapeamento e análise de áreas de tratamento especial na região de concessão da Light",
      description: "Utilizando técnicas de pesquisa quantitativas e qualitativas, este projeto tem como objetivo desenvolver e validar estratégias metodológicas para mapear, monitorar e mitigar os impactos da atuação de organizações criminosas violentas em Áreas com Severas Restrições Operativas (ASRO) na área de concessão da Light. A iniciativa integra dados internos da empresa a outras fontes públicas e privadas de informação, focando na identificação da extensão e evolução das ASRO, bem como na análise das dinâmicas territoriais específicas de cada grupo criminoso, especialmente mensurando o impacto que tais grupos exercem sobre o controle territorial e sua relação com o serviço de distribuição de energia elétrica.",
      url: "/projetos/projeto",
      tags: ["Crime Organizado e Polícia"],
    },
    {
      image: {
        src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
        alt: "Projeto",
      },
      label: "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
      description: "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
      url: "/projetos/projeto",
      tags: ["Crime Organizado e Polícia"],
    },
  ],
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-44 my-6 md:my-12 text-neutral-950">
      <div className="hidden">
        <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      </div>
      <div className="flex-auto flex flex-col gap-10 md:mx-12">
        {projects?.map((project) => (
          <Card
            orientation="horizontal"
            borderColor="primary"
            image={project.image}
            label={project.label}
            description={project.description}
            descriptionColor="neutral-950"
            url={project.url}
            tags={project.tags}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
}
