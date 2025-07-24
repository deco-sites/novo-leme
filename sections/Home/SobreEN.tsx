import FancyLink from  "../../components/ui/FancyLink.tsx";
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

export default function AboutEN({
  text = "Leme is a non-profit organization that works in partnership with Public Security and Justice institutions and Organizations.",
  image = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
  },
  links = [
    { label: "More about Leme", url: "/''" },
    { label: "Mission & Values", url: "/" },
    { label: "Our Team", url: "/" },
  ],
}: Nav) {
  return (
    <div className="container mx-auto md:px-32 flex flex-col space-y-8 md:space-y-16 mb-16">
      <div className="text-2xl md:text-5xl leading-tight font-serif">
        {text}
      </div>
      <div className="flex justify-center">
        <Image src={image.src || ""} />
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
        {links?.map((link) => (
          <FancyLink label={link?.label} url={link?.url} iconRight={true}/>
        ))}
      </div>
    </div>
  );
}