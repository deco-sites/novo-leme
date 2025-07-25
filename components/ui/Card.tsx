import Title from  "./Title.tsx";
import Tag from  "./Tag.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  orientation?: "vertical" | "horizontal";
  borderColor?: string;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
  label?: string;
  description?: string;
  descriptionColor?: string;
  date?: string;
  url?: string;
  tags?: string[];
  details?: {
    date?: string;
    place?: string;
    status?: string;
  }
}

export default function Card({
  orientation = "vertical",
  borderColor = "secondary",
  image = {
    src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
    alt: "Projeto",
  },
  label = "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
  description = "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
  descriptionColor,
  date,
  url = "/",
  tags,
  details,
}: Props) {
  let rgb;
  let rgbHover;
  
  if (borderColor == 'primary') {
    rgb = '0,82,112,1';
    rgbHover = '234,115,66,1';
  } else {
    rgb = '234,115,66,1';
    rgbHover = '0,82,112,1';
  }

  const formattedDate = date ? new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }) : null;

  return (
    <a
      key={label}
      href={url}
      className={`flex flex-col ${orientation === "vertical" ? 'space-y-4' : 'space-y-6'} p-6 rounded-xl bg-white text-primary border-[3px] border-${borderColor} shadow-[4px_4px_0_rgba(${rgb})] hover:scale-105 transition-all`}
    >
      <div className={`flex ${orientation === "vertical" ? 'flex-col gap-4' : 'flex-col md:flex-row gap-4 md:gap-8'}`}>
        <div className="relative">
          <Image class="w-full rounded-md" src={image?.src || ""} alt={image?.alt} />
          {
            date ? (
              <div className="absolute left-3 bottom-3 bg-base-100 rounded-md text-xs px-1 py-[2px]">{formattedDate}</div>
            ) : ''
          }
        </div>
        <div className="flex flex-col justify-center">
          {orientation === "vertical" ? (
            <Title label={label} description={description} descriptionColor={descriptionColor} titleSize="xl" descriptionSize="sm" gap={2} />
          ) : (
            <Title label={label} description={description} descriptionColor={descriptionColor} titleSize="2xl" gap={2} />
          )
          }
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        {tags?.map((tag) => (
          <Tag label={tag}/>
        ))}
        {details?.date ? <Tag type="date" label={details?.date} color="secondary"/> : ''}
        {details?.place ? <Tag type="place" label={details?.place} color="secondary"/> : ''}
        {details?.status ? <Tag type="status" label={details?.status} color="secondary"/> : ''}
      </div>
      <span class="hidden shadow-[4px_4px_0_rgba(234,115,66,1)] hover:shadow-[4px_4px_0_rgba(234,115,66,1)] hover:border-primary"></span>
      <span class="hidden shadow-[4px_4px_0_rgba(0,82,112,1)] hover:shadow-[4px_4px_0_rgba(0,82,112,1)]"></span>
    </a>
  );
}
