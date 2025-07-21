import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Nav {
  image?: {
    src?: ImageWidget;
  };
  text?: string;
}

export default function LargeHero({
  image = {
    src: "https://assets.decocache.com/novo-leme/3b11ecb6-2bdd-4af6-86e9-ee57b4599c6c/hero-home.svg",
  },
  text = "Usamos dados e evidências científicas para fazer do Brasil um país seguro.",
}: Nav) {
  return (
    <div className="relative w-full max-h-[890px] mb-16 overflow-hidden">
      <div className="w-full opacity-60">
        <Image class="w-full object-cover" src={image.src || ""} />
      </div>
      <div className="absolute w-[500px] right-[310px] top-[190px] px-14 py-10 bg-white border-secondary border-4 rounded-xl shadow-[5px_5px_0] --tw-shadow-[--secondary] text-secondary text-[40px] font-serif leading-tight">
        {text}
      </div>
    </div>
  );
}
