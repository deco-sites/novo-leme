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
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
  },
  text = "Usamos dados e evidências científicas para fazer do Brasil um país seguro.",
}: Nav) {
  return (
    <div className="relative w-full max-h-[890px] mb-16 overflow-hidden">
      <div className="w-full opacity-60">
        <Image class="w-full object-cover" src={image.src || ""} />
      </div>
      <div className="absolute w-[500px] right-[310px] top-[190px] px-14 py-10 bg-white border border-secondary border-4 rounded-xl shadow-[5px_5px_0] --tw-shadow-[--secondary] text-secondary text-[40px] font-serif leading-tight">
        {text}
      </div>
    </div>
  );
}
