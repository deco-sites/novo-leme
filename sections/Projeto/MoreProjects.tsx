import FancyLink from  "../../components/ui/FancyLink.tsx";

export interface Props {
  label?: string;
  url?: string;
}

export default function Links({
  label = "Ver mais projetos",
  url = "/projetos"
}: Props) {
  return (
    <div className="container flex gap-16 pt-6 mb-24">
      <div className="hidden md:block flex-none w-44"/>
      <div className="">
        <FancyLink label={label} url={url} iconLeft/>
      </div>
      <div className="hidden md:block flex-none w-44"/>
    </div>
  );
}
