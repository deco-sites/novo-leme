import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
}

export default function NewHeader({
  logo = {
    src: "https://assets.decocache.com/novo-leme/f2158298-142d-4585-8f72-5b77b71ca9b5/Logo.svg",
    alt: "Logo do Leme",
  },
  navigation = {
    links: [
      { label: "Sobre", url: "/sobre'" },
      { label: "Atuação", url: "/atuacao" },
      { label: "Projetos", url: "/projetos" },
      { label: "Mídia", url: "/midia" },
      { label: "Eventos", url: "/eventos" },
      { label: "Transparência", url: "/transparencia" },
      { label: "Contato", url: "/contato" },
    ],
  },
}: Nav) {
  return (
    <header className="container mx-auto px-4 mt-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <Image src={logo.src || ""} width={320} height={72} alt={logo.alt} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            {navigation?.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="block"
              >
                {
                  true ? (
                      <span class="block text-primary hover:text-secondary hover:underline transition-colors duration-100 font-semibold py-2 px-3 border border-transparent">
                        {link.label}
                      </span>
                  ) :
                  (
                    <span class="block text-secondary hover:text-secondary transition-colors duration-100 font-semibold py-2 px-3 border border-secondary rounded-md shadow-[2px_2px_0] --tw-shadow-[--secondary]">
                      {link.label}
                    </span>
                  )
                }
              </a>
            ))}
          </nav>
        </div>
    </header>
  );
}
