import Cicle, { Props as CicleProps } from  "../components/ui/Cicle.tsx";
import { RichText } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import SideNav from  "../components/ui/SideNav.tsx";
import type {Props as SideNavProps} from  "../components/ui/SideNav.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  title?: string;
  text?: RichText;
  cicleImage?: CicleProps;
}

export default function SobreLeme({
  sidebarNav,
  title = "O Leme",
  text = "Text",
  cicleImage,
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-44 my-6 md:my-12 text-neutral-950">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex-auto md:mx-12"> 
        <div className="text-primary mb-3">
          <Title label={title} titleSize="4xl" serif />
        </div>
        <div
          className="mb-12 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <div className="text-primary">
          <Cicle
            title={cicleImage?.title}
            step1={cicleImage?.step1}
            step2={cicleImage?.step2}
            step3={cicleImage?.step3}
            step4={cicleImage?.step4}
            step5={cicleImage?.step5}
            step6={cicleImage?.step6}
          />
        </div>
      </div>
    </div>
  );
}
