import Title from  "../components/ui/Title.tsx";
import { type Section } from "@deco/deco/blocks";
export interface Value {
  label?: string;
  /** @format textarea */
  text?: string;
}

export interface Props {
  sidebarNav?: Section;
  title1?: string;
  /** @format textarea */
  text?: string;
  title2?: string;
  values?: Value[]
}

export default function SobreMissaoValores({
  sidebarNav,
  title1 = "Nossa Missão",
  text = "Text",
  title2 = "Nossos Valores",
  values = [
    { label: "Valor", text: "Descrição" },
    { label: "Valor", text: "Descrição" },
    { label: "Valor", text: "Descrição" },
    { label: "Valor", text: "Descrição" },
  ]
}: Props) {
  const Nav = sidebarNav?.Component;
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-44 my-6 md:my-12 text-neutral-950">
      {Nav && <div className="flex-none"><Nav {...(sidebarNav?.props ?? {})} /></div>}
      <div className="flex-auto md:mx-12"> 
        <div className="mb-6 md:mb-12 md:mr-10">
          <div className="text-primary mb-4 md:mb-7 md:ml-8">
            <Title label={title1} titleSize="4xl" serif />
          </div>
          <div className="text-secondary font-serif text-xl md:text-[28px] leading-snug px-6 md:px-12 py-4 md:py-9 border-base-300 border-[3px] rounded-xl">{text}</div>
        </div>
        
        <div>
          <div className="text-primary mb-4 md:mb-7 md:ml-8">
            <Title label={title2} titleSize="4xl" serif />
          </div>
          <div className="grid grid-cold-1 md:grid-cols-2 gap-4 md:gap-8">
            {values?.map((item) => (
              <div className="bg-secondary rounded-xl text-white flex flex-col py-3 md:py-6 px-3 md:px-6 gap-3 justify-center text-center bg-[url(https://assets.decocache.com/novo-leme/266b017b-07fe-4314-8842-c55f8e154275/bg-abstract.svg)]">
                <h3 className="font-serif text-2xl md:text-3xl text-base-100">{item.label}</h3>
                <div className="md:text-lg">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
