import Placeholder from  "../components/ui/SectionPlaceholder.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Footer {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  bgImage?: ImageWidget;
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
  copyrightText?: string;
  copyrightText2?: string;
}

export default function NewFooter({
  logo = {
    src: "https://assets.decocache.com/novo-leme/00a02b7c-f2a2-4743-ba24-cfa10364f2a1/LogoFooter.svg",
    alt: "Logo",
  },
  bgImage = "https://assets.decocache.com/novo-leme/ef2d8814-5ed2-44a6-983f-c829fe2407ff/Vector.svg",
  navigation = {
    links: [
      { label: "Sobre", url: "/'" },
      { label: "Atuação", url: "/" },
      { label: "Projetos", url: "/" },
      { label: "Mídia", url: "/" },
      { label: "Eventos", url: "/" },
      { label: "Transparência", url: "/" },
      { label: "Contato", url: "/" },
    ],
  },
  copyrightText =  "© 2025 Leme",
  copyrightText2 =  "Todos os direitos reservados",
}: Footer) {
  return (
    <footer className="mt-16 lg:mt-28">
        {/* Logo */}
        <div className="relative flex items-center justify-center w-full h-48 lg:h-[328px] bg-primary overflow-hidden">
            <Image className="absolute 2xl:w-full object-cover object-center max-w-fit 2xl:max-w-full" src={bgImage || ""} />
            <Image className="relative z-10" src={logo.src || ""} width={122} height={71} alt={logo.alt} />
        </div>
        <div className="container mx-auto flex flex-row lg:flex-col xl:flex-row items-end lg:items-center lg:space-x-3 py-8 xl:py-0">
          <nav className="flex flex-col lg:flex-row flex-auto">
            {navigation?.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="block"
              >
                <span class="block text-primary hover:underline py-2 px-3 text-sm">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 flex-none text-sm px-3 lg:px-12 py-2 lg:py-8">
            <div className="flex-none flex justify-end items-center gap-3">
              <a href="/" target="_blank">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_448_3868)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.22222 20.7925H17.7778C19.0051 20.7925 20 19.7976 20 18.5703V3.0147C20 1.7874 19.0051 0.79248 17.7778 0.79248H2.22222C0.994923 0.79248 0 1.7874 0 3.0147V18.5703C0 19.7976 0.994923 20.7925 2.22222 20.7925Z" fill="#005270"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2218 18.0148H14.2539V12.9598C14.2539 11.5739 13.7273 10.7993 12.6303 10.7993C11.437 10.7993 10.8135 11.6053 10.8135 12.9598V18.0148H7.95327V8.38513H10.8135V9.68224C10.8135 9.68224 11.6735 8.09093 13.7169 8.09093C15.7595 8.09093 17.2218 9.33822 17.2218 11.9179V18.0148ZM4.54105 7.1242C3.5668 7.1242 2.77734 6.32855 2.77734 5.34726C2.77734 4.36597 3.5668 3.57031 4.54105 3.57031C5.5153 3.57031 6.30429 4.36597 6.30429 5.34726C6.30429 6.32855 5.5153 7.1242 4.54105 7.1242ZM3.06416 18.0148H6.04662V8.38513H3.06416V18.0148Z" fill="#F9F7F1"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_448_3868">
                  <rect width="20" height="20" fill="white" transform="translate(0 0.79248)"/>
                  </clipPath>
                  </defs>
                  </svg>
              </a>
              <div>
                  contato@lemelab.org
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-1 items-end">
                <span>{copyrightText}</span> <span class="hidden lg:block">-</span> <span>{copyrightText2}</span>
            </div>
          </div>
        </div>
    </footer>
  );
}

export const LoadingFallback = () => <Placeholder height="50vh" />;
