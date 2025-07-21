import { RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";

export interface Props {
  title?: string;
  text?: RichText;
  image?: {
    src?: ImageWidget;
    alt?: string;
  }
}

export default function SobreLeme({
  title = "O Leme",
  text = "Text",
  image,
}: Props) {
  return (
    <div className="mx-52 flex gap-40 my-12 text-neutral-950">
      <ul className="flex-none flex flex-col gap-2">
        <li><a className="font-semibold text-secondary" href="/">O Leme</a></li>
        <li><a className="font-medisemiboldum text-primary hover:underline" href="/">Missão e Valores</a></li>
        <li><a href="/">Equipe</a></li>
      </ul>
      <div className="flex-auto"> 
        <div className="text-primary mb-3">
          <Title label={title} titleSize="4xl" serif />
        </div>
        <div
          className="mb-12 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        { image?.src ? <Image class="w-full object-cover" src={image.src || ""} alt={image.alt || ""} /> : ''  }
      </div>
    </div>
  );
}
