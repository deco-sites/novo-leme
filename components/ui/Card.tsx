import Title from  "./Title.tsx";
import Tag from  "./Tag.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  borderColor?: string;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
  label?: string;
  description?: string;
  url?: string;
  tags?: string[];
}

export default function Card({
  borderColor = "secondary",
  image = {
    src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
    alt: "Projeto",
  },
  label = "Algoritmo preditivo do risco de revitimização de vítimas de violência doméstica",
  description = "Este projeto, iniciado em 2024 e realizado em parceria com a Secretaria de Segurança Pública do Paraná (SESP-PR) e o Banco Interamericano de Desenvolvimento (BID), objetiva desenvolver um modelo preditivo e um algoritmo de predição para avaliar o risco de revitimização de mulheres em casos de violência doméstica ocorridos no Paraná. Essa ferramenta tem o potencial de classificar os casos conforme a probabilidade de ocorrerem novas vitimizações, fornecendo insumos para a focalização de políticas públicas destinadas a combater a revitimização e o feminicídio. O modelo e o algoritmo propostos visam contribuir para uma abordagem mais célere na identificação das vítimas de alto risco e no manejo dos casos de violência doméstica, que superam numericamente a capacidade atual de atendimento dos órgãos de proteção do estado.",
  url = "/",
  tags = ["Crime Organizado e Polícia"],
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

  return (
    <a
      key={label}
      href={url}
      className={`flex flex-col space-y-4 p-6 rounded-xl bg-white text-primary border-[3px] border-${borderColor} hover:border-${borderColor == 'primary' ? 'secondary' : 'primary'} shadow-[4px_4px_0_rgba(${rgb})] hover:shadow-[4px_4px_0_rgba(${rgbHover})] hover:scale-105 transition-all`}
    >
      <Image class="w-full" src={image?.src || ""} alt={image?.alt} />
      <div className="flex flex-col space-y-3 justify-center">
        <Title label={label} description={description} titleSize="xl" decriptionSize="sm"  gap={3} />
      </div>
      <div>
        {tags?.map((tag) => (
          <Tag label={tag}/>
        ))}
      </div>
      <span class="hidden shadow-[4px_4px_0_rgba(234,115,66,1)] hover:shadow-[4px_4px_0_rgba(234,115,66,1)] hover:border-primary"></span>
      <span class="hidden shadow-[4px_4px_0_rgba(0,82,112,1)] hover:shadow-[4px_4px_0_rgba(0,82,112,1)]"></span>
    </a>
  );
}
