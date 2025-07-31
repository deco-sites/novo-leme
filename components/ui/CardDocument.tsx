import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  name?: string;
  url?: string;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
  description?: string;
}

export default function CardDocument({
  name = "Relatório Final da Execução do Projeto",
  url = "/",
  image = {
    src: "https://assets.decocache.com/novo-leme/13cd6a48-e0fc-4941-839d-d87c4f37b3d8/img-1.png",
    alt: "Relatório anual",
  },
  description = "Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base de dados consolidada e validada sobre as ASRO, o desenvolvimento de métricas. Ainda em fase inicial de execução, os principais resultados esperados incluem a criação de uma base.",
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="border-2 border-[#72C8ED] md:hover:bg-white md:hover:border-secondary md:hover:scale-105 transition-all rounded-lg flex flex-col gap-3 p-4"
    >
      <div className="flex gap-2">
        <div className="flex-none">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.1875V2.8125C3 1.88079 3.75579 1.125 4.6875 1.125H8.75C10.938 1.125 13.0368 1.99384 14.584 3.54102C16.1312 5.08819 17 7.18696 17 9.375V17.1875C17 18.1192 16.2442 18.875 15.3125 18.875H4.6875C3.75579 18.875 3 18.1192 3 17.1875ZM12 5.9375C12 5.98723 12.0195 6.03515 12.0547 6.07031C12.0899 6.10548 12.1378 6.125 12.1875 6.125H13.4375C13.9117 6.125 14.3761 6.21976 14.8057 6.39844C14.4818 5.73961 14.0523 5.13047 13.5234 4.60156C12.9942 4.07234 12.3849 3.64224 11.7256 3.31836C11.9046 3.74822 12 4.21283 12 4.6875V5.9375ZM4.5 17.1875C4.5 17.2908 4.58421 17.375 4.6875 17.375H15.3125C15.4158 17.375 15.5 17.2908 15.5 17.1875V9.6875L15.4902 9.4834C15.4433 9.01132 15.2339 8.56789 14.8955 8.22949C14.5087 7.8427 13.9845 7.625 13.4375 7.625H12.1875C11.7399 7.625 11.3106 7.44733 10.9941 7.13086C10.6777 6.81439 10.5 6.38505 10.5 5.9375V4.6875C10.5 4.14049 10.2823 3.61629 9.89551 3.22949C9.55711 2.8911 9.11368 2.68169 8.6416 2.63477L8.4375 2.625H4.6875C4.58421 2.625 4.5 2.70921 4.5 2.8125V17.1875Z" fill="#005270"/>
          </svg>
        </div>
        <div className="flex-auto text-sm font-semibold">{name}</div>
      </div>
      <div className="flex gap-3">
        <Image class="flex-none w-24" src={image?.src || ""} alt={image?.alt} />
        <div className="flex-auto text-xs line-clamp-6 leading-normal">
          {description}
        </div>
      </div>
    </a>
  );
}
