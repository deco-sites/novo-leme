import { RichText } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import SideNav from  "../components/ui/SideNav.tsx";
import type {Props as SideNavProps} from  "../components/ui/SideNav.tsx";

export interface Value {
  label?: string;
  /** @format textarea */
  text?: string;
}

export interface Props {
  sidebarNav?: SideNavProps;
  title1?: string;
  /** @format textarea */
  text?: string;
  title2?: string;
  values?: Value[]
}

export default function SobreLeme({
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
  return (
    <div className="container px-12 flex gap-44 my-12 text-neutral-950">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex-auto mx-12"> 
        <div className="mb-12 mr-10">
          <div className="text-primary mb-7 ml-8">
            <Title label={title1} titleSize="4xl" serif />
          </div>
          <div className="text-secondary font-serif text-[28px] px-12 py-9 border-base-300 border-[3px] rounded-xl">{text}</div>
        </div>
        
        <div>
          <div className="text-primary mb-7 ml-8">
            <Title label={title2} titleSize="4xl" serif />
          </div>
          <div className="grid grid-cols-2 gap-8">
            {values?.map((item) => (
              <div className="bg-secondary rounded-xl text-white flex flex-col py-6 px-6 gap-3 justify-center text-center bg-[url(https://assets.decocache.com/novo-leme/266b017b-07fe-4314-8842-c55f8e154275/bg-abstract.svg)]">
                <h3 className="font-serif text-3xl text-base-100">{item.label}</h3>
                <div className="text-lg">
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
