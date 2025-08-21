import Title from  "../../components/ui/Title.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import ImageGallery from "../../components/ui/Gallery.tsx";

export interface Props {
  title?: string;
  images?: {
    label?: string;
    image: ImageWidget;
  }[]
}

export default function Gallery({
  title = "Galeria",
  images = []
}: Props) {
  return (
    <div className="container flex gap-8 md:gap-16 mb-6 md:mb-9">
      <div className="hidden md:block flex-none w-44"/>
      <div className="flex-auto flex flex-col gap-6 md:gap-9">
      {
          images && images?.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="text-primary">
                <Title label={title} titleSize="2xl" serif />
              </div>
              <ImageGallery images={images} />
            </div>
          )
        }
      </div>
      <div className="hidden md:block flex-none w-44"/>
    </div>
  );
}
