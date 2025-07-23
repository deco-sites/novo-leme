import { RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import SideNav from  "../components/ui/SideNav.tsx";
import type {Props as SideNavProps} from  "../components/ui/SideNav.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  title?: string;
  text?: RichText;
  image?: {
    src?: ImageWidget;
    alt?: string;
  }
}

export default function SobreLeme({
  sidebarNav,
  title = "O Leme",
  text = "Text",
  image,
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
        { image?.src ? <Image class="w-full object-cover" src={image.src || ""} alt={image.alt || ""} /> : ''  }
      </div>
    </div>
  );
}
