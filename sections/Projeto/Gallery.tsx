import Title from  "../../components/ui/Title.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  images?: {
    label?: string;
    image: ImageWidget;
  }[]
}

export default function Gallery({
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
                <Title label="Galeria" titleSize="2xl" serif />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mobile */}
                {images?.map((image) => (
                  <div className="md:hidden">
                    <Image
                      className="w-full object-cover aspect-video max-h-[600px] md:hover:scale-105 transition-all duration-200"
                      width={500}
                      src={image.image || ""}
                      alt={image.label || ""}
                    />
                  </div>
                ))}

                {/* Desktop */}
                <a id="images" className="hidden" />
                {images?.map((image, index) => (
                  <div className="hidden md:block">
                    <a href={`#modal-${index}`} className="cursor-zoom-in">
                      <Image
                        className="w-full object-cover aspect-video max-h-[600px] md:hover:scale-105 transition-all duration-200"
                        width={500}
                        src={image.image || ""}
                        alt={image.label || ""}
                      />
                    </a>
                    {/* Modal */}
                    <div
                      id={`modal-${index}`}
                      className="items-center justify-center fixed top-0 left-0 w-full h-full z-50 hidden target:flex px-12"
                    >
                      <a href="#images" className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-1 cursor-default"></a>
                      <div className="flex gap-5 relative max-w-[780px] border-2 border-primary bg-white rounded-lg p-3 shadow-xl">
                        <a href="#list" className="absolute -right-12 -top-12">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        </a>
                        <Image
                          className=""
                          width={800}
                          src={image.image || ""}
                          alt={image.label || ""}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div>
      <div className="hidden md:block flex-none w-44"/>
    </div>
  );
}
