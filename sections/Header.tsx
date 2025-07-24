import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import NavItem from "../components/NavItem.tsx";
import { type FnContext } from "@deco/deco";
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
    currentLanguage?: string;
    languages?: {
        label: string;
        url: string;
    }[];
    pathname?: string;
}
export const loader = (props: Nav, req: Request, _ctx: FnContext) => {
    const pathname = new URL(req.url).pathname;
    return {
        ...props,
        pathname,
    };
};
export default function NewHeader({ logo = {
    src: "https://assets.decocache.com/novo-leme/f2158298-142d-4585-8f72-5b77b71ca9b5/Logo.svg",
    alt: "Logo do Leme",
}, navigation = {
    links: [
        { label: "Sobre", url: "/sobre'" },
        { label: "Atuação", url: "/atuacao" },
        { label: "Projetos", url: "/projetos" },
        { label: "Mídia", url: "/midia" },
        { label: "Eventos", url: "/eventos", sublinks: [
                { label: "Organização", url: "/eventos/organizacao" },
                { label: "Participação", url: "/eventos/participacao" },
            ],
        },
        { label: "Transparência", url: "/transparencia" },
        { label: "Contato", url: "/contato" },
    ],
}, currentLanguage = "PT", languages = [
    { label: "PT", url: "/" },
    { label: "EN", url: "/en" },
    { label: "ES", url: "/es" },
], pathname, }: Nav) {
    let langFlags = {
        "PT": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0h512v512H0z"/><path fill="#ffda44" d="M256 100.2 467.5 256 256 411.8 44.5 256z"/><path fill="#eee" d="M174.2 221a87 87 0 0 0-7.2 36.3l162 49.8a88.5 88.5 0 0 0 14.4-34c-40.6-65.3-119.7-80.3-169.1-52z"/><path fill="#0052b4" d="M255.7 167a89 89 0 0 0-41.9 10.6 89 89 0 0 0-39.6 43.4 181.7 181.7 0 0 1 169.1 52.2 89 89 0 0 0-9-59.4 89 89 0 0 0-78.6-46.8zM212 250.5a149 149 0 0 0-45 6.8 89 89 0 0 0 10.5 40.9 89 89 0 0 0 120.6 36.2 89 89 0 0 0 30.7-27.3A151 151 0 0 0 212 250.5z"/></g></svg>',
        "EN": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z"/><path fill="#d80027" d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"/><path fill="#0052b4" d="M0 0h256v256H0Z"/><path fill="#eee" d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z"/></g></svg>',
        "ES": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 128 256-32 256 32v256l-256 32L0 384Z"/><path fill="#d80027" d="M0 0h512v128H0zm0 384h512v128H0z"/><g fill="#eee"><path d="M144 304h-16v-80h16zm128 0h16v-80h-16z"/><ellipse cx="208" cy="296" rx="48" ry="32"/></g><g fill="#d80027"><rect width="16" height="24" x="128" y="192" rx="8"/><rect width="16" height="24" x="272" y="192" rx="8"/><path d="M208 272v24a24 24 0 0 0 24 24 24 24 0 0 0 24-24v-24h-24z"/></g><rect width="32" height="16" x="120" y="208" fill="#ff9811" ry="8"/><rect width="32" height="16" x="264" y="208" fill="#ff9811" ry="8"/><rect width="32" height="16" x="120" y="304" fill="#ff9811" rx="8"/><rect width="32" height="16" x="264" y="304" fill="#ff9811" rx="8"/><path fill="#ff9811" d="M160 272v24c0 8 4 14 9 19l5-6 5 10a21 21 0 0 0 10 0l5-10 5 6c6-5 9-11 9-19v-24h-9l-5 8-5-8h-10l-5 8-5-8z"/><path d="M122 252h172m-172 24h28m116 0h28"/><path fill="#d80027" d="M122 248a4 4 0 0 0-4 4 4 4 0 0 0 4 4h172a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 24a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm144 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4z"/><path fill="#eee" d="M196 168c-7 0-13 5-15 11l-5-1c-9 0-16 7-16 16s7 16 16 16c7 0 13-4 15-11a16 16 0 0 0 17-4 16 16 0 0 0 17 4 16 16 0 1 0 10-20 16 16 0 0 0-27-5c-3-4-7-6-12-6zm0 8c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-8 0-4 4-8 8-8zm24 0c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-8 0-4 4-8 8-8zm-44 10 4 1 4 8c0 4-4 7-8 7s-8-3-8-8c0-4 4-8 8-8zm64 0c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-7l4-8z"/><path fill="none" d="M220 284v12c0 7 5 12 12 12s12-5 12-12v-12z"/><path fill="#ff9811" d="M200 160h16v32h-16z"/><path fill="#eee" d="M208 224h48v48h-48z"/><path fill="#d80027" d="m248 208-8 8h-64l-8-8c0-13 18-24 40-24s40 11 40 24zm-88 16h48v48h-48z"/><rect width="20" height="32" x="222" y="232" fill="#d80027" rx="10" ry="10"/><path fill="#ff9811" d="M168 232v8h8v16h-8v8h32v-8h-8v-16h8v-8zm8-16h64v8h-64z"/><g fill="#ffda44"><circle cx="186" cy="202" r="6"/><circle cx="208" cy="202" r="6"/><circle cx="230" cy="202" r="6"/></g><path fill="#d80027" d="M169 272v43a24 24 0 0 0 10 4v-47h-10zm20 0v47a24 24 0 0 0 10-4v-43h-10z"/><g fill="#338af3"><circle cx="208" cy="272" r="16"/><rect width="32" height="16" x="264" y="320" ry="8"/><rect width="32" height="16" x="120" y="320" ry="8"/></g></g></svg>',
    };
    return (<header className="container mx-auto">
      <input type="checkbox" id="menu-toggle" class="peer hidden"/>
      <label for="menu-toggle" class="z-40 fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto"></label>

      {/* Mobile Navigation */}
      <div className="flex md:hidden px-2 pt-6 justify-between z-30">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="block w-44 sm:w-auto">
            <Image src={logo.src || ""} width={320} height={72} alt={logo.alt}/>
          </a>
        </div>

        <label for="menu-toggle" class="z-50 absolute mt-0 right-4 cursor-pointer p-1 peer-checked:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>
        </label>
      </div>
      
      <div class="fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 z-50">
        <div class="px-4 py-6 space-y-4">
          <div className="text-secondary px-3">
            <svg width="32" height="39" viewBox="0 0 32 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.7909 33.9419C24.3727 29.0197 18.542 26.1751 13.4498 25.4796C13.5302 24.7931 13.5946 24.0915 13.6409 23.3799C14.1348 15.8979 12.7144 7.38629 9.74774 0C8.26492 0.135889 6.82436 0.417731 5.43711 0.828417L5.68759 1.44646C8.46813 8.29222 9.80005 16.1818 9.34636 23.098C9.29405 23.8952 9.21658 24.6844 9.11498 25.4413C6.57789 25.7846 4.38082 26.7922 2.73403 28.3816C0.0148558 31.0017 -0.807033 34.9032 0.863906 37.2657C1.2321 37.7851 2.30347 39 4.29028 39C5.20171 39 6.18153 38.7373 7.21065 38.2209C9.11397 37.2657 10.6531 35.3391 11.7839 32.5015C12.1209 31.654 12.4206 30.7209 12.6741 29.7223C12.7053 29.7284 12.7355 29.7314 12.7667 29.7344C17.1266 30.3001 22.3085 32.8669 28.1733 37.3623L28.6492 37.7267C29.6099 36.6627 30.472 35.5072 31.2205 34.2731L30.7909 33.9419ZM5.27715 34.3717C4.85665 34.5821 4.50758 34.6747 4.33757 34.6838C4.19874 34.2479 4.34058 32.8166 5.71878 31.4869C6.36462 30.8688 7.15231 30.3988 8.07982 30.0827C7.3354 32.3022 6.34048 33.8362 5.27715 34.3707V34.3717Z"/>
            </svg>
          </div>
          <nav className="flex flex-col md:flex-row flex-auto">
            {navigation?.links.map((link) => (<a key={link.label} href={link.url} className="block">
                <span class="block text-primary hover:underline py-2 px-3">
                  {link.label}
                </span>
              </a>))}
          </nav>
          <div className="flex gap-2 bg-base-100 py-2 justify-center">
            {languages?.map((lang) => (<a href={lang.url} className="flex gap-2 items-center px-2">
                <span dangerouslySetInnerHTML={{
                __html: langFlags[lang.label],
            }}>
                </span>
                <span className="w-4">{lang.label}</span>
              </a>))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-4 mt-12">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="block w-44 sm:w-auto">
            <Image src={logo.src || ""} width={320} height={72} alt={logo.alt}/>
          </a>
        </div>
        {/* Nav */}
        <nav className="flex items-center">
          {navigation?.links.map((link) => (<NavItem label={link?.label} url={link?.url} sublinks={link?.sublinks} selected={pathname?.indexOf(link?.url || '') !== -1}/>))}
          <div className="group ml-5 group text-sm ">
            <div className="flex gap-1 items-center px-2 py-1 cursor-pointer group-hover:text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-language"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5h7"/><path d="M9 3v2c0 4.418 -2.239 8 -5 8"/><path d="M5 9c0 2.144 2.952 3.908 6.7 4"/><path d="M12 20l4 -9l4 9"/><path d="M19.1 18h-6.2"/></svg>
              <div dangerouslySetInnerHTML={{
            __html: langFlags[currentLanguage],
        }}>
              </div>
              <svg className="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6"/></svg>
            </div>

            <div className="flex absolute flex-col gap-1 z-10 bg-base-100 rounded-md transition-all max-h-0 overflow-hidden duration-300 group-hover:max-h-96 py-1">
              {languages?.map((lang) => (<a href={lang.url} className="flex gap-2 items-center px-2 py-1 hover:bg-base-300 rounded-md">
                  <span className="w-4">{lang.label}</span>
                  <span dangerouslySetInnerHTML={{
                __html: langFlags[lang.label],
            }}>
                  </span>
                </a>))}
            </div>
          </div>
        </nav>
      </div>
    </header>);
}
