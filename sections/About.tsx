import FancyLink from  "../components/ui/FancyLink.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Nav {
  text?: string;
  image?: {
    src?: ImageWidget;
  };
  links?: {
    label?: string;
    url?: string;
  }[];
}

export default function About({
  text = "O Leme é uma organização sem fins lucrativos que atua em parceria com instituições de Segurança Pública e Justiça e com Organizações.",
  image = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
  },
  links = [
    { label: "Mais sobre o Leme", url: "/'" },
    { label: "Missão de Valores", url: "/" },
    { label: "Nossa Equipe", url: "/" },
  ],
}: Nav) {
  return (
    <div className="container mx-auto px-32 flex flex-col space-y-16 mb-16">
      <div className="text-5xl leading-tight font-serif">
        {text}
      </div>
      <div className="flex justify-center">
        <Image src={image.src || ""} />
      </div>
      <div className="flex space-x-5 justify-center">
        {links?.map((link) => (
          <FancyLink label={link?.label} url={link?.url} iconRight={true}/>
        ))}
      </div>
    </div>
  );
}
