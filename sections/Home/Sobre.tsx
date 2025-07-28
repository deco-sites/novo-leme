import Placeholder from  "../../components/ui/SectionPlaceholder.tsx";
import Cicle, { Props as CicleProps } from  "../../components/ui/Cicle.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";

export interface Nav {
  /** @format textarea */
  text?: string;
  cicleImage?: CicleProps;
  links?: {
    label?: string;
    url?: string;
  }[];
}

export default function About({
  text,
  cicleImage,
  links,
}: Nav) {
  return (
    <div className="container mx-auto md:px-32 flex flex-col space-y-6 md:space-y-16 mb-16">
      <div className="text-2xl md:text-5xl leading-tight font-serif">
        {text}
      </div>
      <Cicle
        title={cicleImage?.title}
        step1={cicleImage?.step1}
        step2={cicleImage?.step2}
        step3={cicleImage?.step3}
        step4={cicleImage?.step4}
        step5={cicleImage?.step5}
        step6={cicleImage?.step6}
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