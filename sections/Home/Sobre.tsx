import Placeholder from  "../../components/ui/SectionPlaceholder.tsx";
import Cycle, { Props as CycleProps } from  "../../components/ui/Cycle.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";

export interface Nav {
  /** @format textarea */
  text?: string;
  cycleImage?: CycleProps;
  links?: {
    label?: string;
    url?: string;
  }[];
}

export default function About({
  text,
  cycleImage,
  links,
}: Nav) {
  return (
    <div className="container mx-auto md:px-32 flex flex-col space-y-6 md:space-y-16 mb-16">
      <div className="text-2xl md:text-5xl leading-tight font-serif">
        {text}
      </div>
      <Cycle
        title={cycleImage?.title}
        step1={cycleImage?.step1}
        step2={cycleImage?.step2}
        step3={cycleImage?.step3}
        step4={cycleImage?.step4}
        step5={cycleImage?.step5}
        step6={cycleImage?.step6}
      />
      {
        links && links.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
            {links?.map((link) => (
              <FancyLink label={link?.label} url={link?.url} iconRight={true}/>
            ))}
          </div>
        ) : ''
      }
    </div>
  );
}

export const LoadingFallback = () => <Placeholder height="50vh" />;