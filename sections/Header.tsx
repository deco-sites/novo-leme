import { FnContext } from "deco/types.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import NavItem from "../components/NavItem.tsx";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
      sublinks?: {
        label?: string;
        url?: string;
      }[];
    }[];
  };
  pathname?: string;
}

export const loader = (props: Nav, req: Request, _ctx: FnContext) => {
  console.log(req.url);
  const pathname = new URL(req.url).pathname;

  return {
    ...props,
    pathname,
  };
};

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
      { label: "Eventos", url: "/eventos", sublinks:
        [
          { label: "Organização", url: "/eventos/organizacao" },
          { label: "Participação", url: "/eventos/participacao" },
        ],
      },
      { label: "Transparência", url: "/transparencia" },
      { label: "Contato", url: "/contato" },
    ],
  },
  pathname,
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
            <NavItem label={link?.label} url={link?.url} sublinks={link?.sublinks} selected={pathname?.indexOf(link?.url || '') !== -1} />
          ))}
        </nav>
      </div>
    </header>
  );
}
