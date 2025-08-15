export interface Props {
  highlights?: {
    number: string;
    /** @title Text */
    label?: string;
    style?: "Neutral" | "Blue" | "Orange"
  }[];
}

export default function HighlightNumbers({
  highlights = [
    {
      number: "12%",
      label: "Menos violência",
      style: "Neutral",
    },
    {
      number: "5mi",
      label: "Famílias atendidas",
      style: "Blue",
    },
    {
      number: "-7,2%",
      label: "Pessoas em situação de rua",
      style: "Orange",
    },
  ],
}: Props) {
  return (
    <div className="container flex gap-16 mb-9">
      <div className="hidden md:block flex-none w-44"/>
      <div className={`w-full grid grid-cols-1 gap-6 justify-stretch ${highlights?.length === 1 ? 'md:px-60' : ''} ${highlights?.length % 2 === 0 ? 'md:grid-cols-2 md:px-24' : ''} ${highlights?.length % 3 === 0 ? 'md:grid-cols-3' : ''}`}>
        {highlights?.map((item) => (
          <div className={`
            flex-auto justify-center flex flex-col text-center px-4 py-3 gap-2 border-[3px] rounded-lg bg-[url(https://assets.decocache.com/novo-leme/266b017b-07fe-4314-8842-c55f8e154275/bg-abstract.svg)]
            ${!item.style || item.style === 'Neutral' ? 'text-secondary border-base-300' : ''}
            ${item.style === 'Blue' ? 'bg-primary text-base-100 border-primary' : ''}
            ${item.style === 'Orange' ? 'bg-secondary text-base-100 border-secondary' : ''}
          `}>
            <span class="font-serif text-7xl">{item.number}</span>
            <span class={!item.style || item.style === 'Neutral' ? 'text-primary' : ''}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="hidden md:block flex-none w-44"/>
    </div>
  );
}
