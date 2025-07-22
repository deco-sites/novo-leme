import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  highlights: {
    number: string;
    text?: string;
    style?: "Neutral" | "Blue" | "Orange"
  }[];
}

export default function HighlightNumbers({
  highlights = [
    {
      number: "12%",
      text: "Menos violência",
      style: "Neutral",
    },
    {
      number: "5mi",
      text: "Famílias atendidas",
      style: "Blue",
    },
    {
      number: "-7,2%",
      text: "Pessoas em situação de rua",
      style: "Orange",
    },
  ],
}: Props) {
  return (
    <div className="container flex gap-16 mb-9">
      <div className="flex-none w-44 text-sm"/>
      <div className="flex-auto flex flex-col gap-9">
        <div className="flex gap-6 justify-stretch">
          {highlights?.map((item) => (
            <div className={`
              flex-auto flex flex-col text-center px-4 py-3 gap-2 border-[3px] rounded-lg bg-[url(https://assets.decocache.com/novo-leme/266b017b-07fe-4314-8842-c55f8e154275/bg-abstract.svg)]
              ${!item.style || item.style === 'Neutral' ? 'text-secondary border-base-300' : ''}
              ${item.style === 'Blue' ? 'bg-primary text-base-100 border-primary' : ''}
              ${item.style === 'Orange' ? 'bg-secondary text-base-100 border-secondary' : ''}
            `}>
              <span class="font-serif text-7xl">{item.number}</span>
              <span class={!item.style || item.style === 'Neutral' ? 'text-primary' : ''}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-none w-44"/>
    </div>
  );
}
