import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  image: {
    src: ImageWidget;
    alt?: string;
  };
  caption?: {
    /** @format textarea */
    text?: string;
    position?: 'Left' | 'Right' | 'Bottom'
  }
  size?: 'Medium' | 'Large',
}

export default function ImageSection({
  image = {
    src: "https://assets.decocache.com/novo-leme/099cd8f5-d203-4a49-96e0-7fb6123c15ba/project-img-example.png",
    alt: "Image descriptiopn"
  },
  caption = {
    text: "Texto auxiliar da midia texto auxiliar da midia texto auxiliar da midia",
    position: "Left",
  },
  size = "Medium",
}: Props) {
  return (
    <div className={`${size === 'Large' ? '' : 'container'} flex gap-16 mb-9 text-sm`}>
      {size === 'Large' ? '' : (
        <div className="hidden md:block flex-none w-44">
          {caption?.text && caption?.position === 'Left' ? caption.text : ''}
        </div>
      )}
      <div className="flex-auto flex flex-col gap-4">
        <Image className="w-full" src={image?.src || ""} alt={image?.alt} />
        <div className={`${size === 'Large' ? 'container' : ''} ${!caption?.text ? 'hidden' : ''} ${caption?.text && caption?.position !== 'Bottom' ? 'md:hidden' : ''}`}>
          {caption.text}
        </div>
      </div>
      {size === 'Large' ? '' : (
        <div className="hidden md:block flex-none w-44">
          {caption?.text && caption?.position === 'Right' ? caption.text : ''}
        </div>
      )}
    </div>
  );
}
