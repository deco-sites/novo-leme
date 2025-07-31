import Cycle, { Props as CycleProps } from  "../components/ui/Cycle.tsx";
import { RichText } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import SideNav from  "../components/ui/SideNav.tsx";
import type {Props as SideNavProps} from  "../components/ui/SideNav.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  title?: string;
  text?: RichText;
  cycleImage?: CycleProps;
}

export default function SobreLeme({
  sidebarNav,
  title = "O Leme",
  text = "Text",
  cycleImage,
}: Props) {
  return (
    <div className="container px-0 md:px-12 flex flex-col md:flex-row gap-12 md:gap-44 my-6 md:my-12 text-neutral-950">
      <div className="mx-6 md:mx-0">          
        <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      </div>
      <div className="flex-auto md:mx-12">
        <div className="mx-6 md:mx-0">          
          <div className="text-primary mb-3">
            <Title label={title} titleSize="4xl" serif />
          </div>
          <div
            className="mb-12 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </div>
        <div className="text-primary mx-3 md:mx-0">
          <Cycle
            title={cycleImage?.title}
            step1={cycleImage?.step1}
            step2={cycleImage?.step2}
            step3={cycleImage?.step3}
            step4={cycleImage?.step4}
            step5={cycleImage?.step5}
            step6={cycleImage?.step6}
          />
        </div>
      </div>
    </div>
  );
}
