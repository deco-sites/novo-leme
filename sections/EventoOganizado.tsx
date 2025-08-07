import { RichText } from "apps/admin/widgets.ts";
import { type BlogPost, BlogPostPage } from "apps/blog/types.ts";
import SideNav, { Props as SideNavProps } from  "../components/ui/SideNav.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";
import { type Section } from "@deco/deco/blocks";

export interface Props {
  sidebarNav?: SideNavProps;
  page?: BlogPostPage | null;
  description?: RichText;
  date?: {
    /** @format date-time */
    start?: string;
    /** @format date-time */
    end?: string;
  }
  location?: {
    name?: string;
    /** @format textarea */
    address?: string;
  }
  registrationUrl?: string;
  organization?: {
    label?: string;
    image?: ImageWidget;
  }[];
  partners?: {
    label?: string;
    image?: ImageWidget;
  }[];
  sponsors?: {
    label?: string;
    image?: ImageWidget;
  }[];
  gallery?: {
    label?: string;
    image?: ImageWidget;
  }[];
  texts?: Section;
  backToEvents?: {
    label?: string;
    url?: string;
  }
}

const DEFAULT_PROPS: BlogPost = {
  title: "Title",
  categories: [],
  slug: "blog-post",
};

export default function PostDetail({
  sidebarNav,
  page,
  description,
  location,
  registrationUrl,
  organization,
  partners,
  sponsors,
  gallery,
  date,
  texts,
  backToEvents = {
    label: "Ver outros eventos",
    url: "/eventos",
  },
}: Props) {
  const { title, categories } = page?.post || DEFAULT_PROPS;
  const newTexts = texts?.props || {
    description: "Descrição",
    date: "Data",
    dateStart: "Início",
    dateEnd: "Fim",
    location: "Local",
    register: "Inscreva-se",
    gallery: "Galeria",
    organization: "Organização",
    partners: "Parceiros",
    sponsors: "Financiadores",
  }

  let lang = "pt-BR";
  if (categories.some(item => item.slug.includes("en-"))) lang = "en-US";
  if (categories.some(item => item.slug.includes("es-"))) lang = "es-ES";

  const formattedDate = date && date.start ? new Date(date.start).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }) : '';

  const formattedDateEnd = date && date.end ? new Date(date.end).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }) : '';

  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex flex-auto flex-col gap-10">
        <Title label={title} serif titleSize="4xl" noClamp />
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="flex flex-col gap-3">
            <div className="text-primary">
              <Title label={newTexts?.description} titleSize="2xl" serif />
            </div>
            <div className="leading-relaxed text-neutral-950 space-y-6" dangerouslySetInnerHTML={{__html: description}}></div>
          </div>
          <div className="flex flex-col flex-none w-80 gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-primary">
                <Title label={newTexts?.date} titleSize="2xl" serif />
              </div>
              <div className="flex flex-col gap-1">
                {formattedDate && formattedDate !== '' ? (
                  <div class="">
                    {formattedDateEnd && <span>{newTexts?.dateStart}:{` `}</span>}
                    <span className="font-semibold text-neutral-950">{formattedDate}</span>
                  </div>
                ) : ''}
                {formattedDateEnd && formattedDateEnd !== '' ? (
                  <div class="">
                    <span>{newTexts?.dateEnd}:{` `}</span>
                    <span className="font-semibold text-neutral-950">{formattedDateEnd}</span>
                  </div>
                ) : ''}
              </div>
            </div>
            <div className="flex flex-col gap-3 text-neutral-950">
              <div className="text-primary">
                <Title label={newTexts?.location} titleSize="2xl" serif />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">{location?.name}</div>
                <div className="" dangerouslySetInnerHTML={{__html: location?.address}}></div>
              </div>
            </div>
            {registrationUrl && (
              <div className="flex gap-1 mt-2">
                <a href={registrationUrl} target="_blank" className="flex gap-4 align-middle bg-base-100 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-semibold py-2 px-4 border-2 border-secondary rounded-md shadow-[2px_2px_0_rgba(234,115,66,1)]">
                  {newTexts?.register}
                </a>
              </div>
            )}
          </div>
        </div>

        {
          organization && organization?.length > 0 && (
            <div className="flex flex-col gap-5">
              <div className="text-primary">
                <Title label={newTexts?.organization} titleSize="2xl" serif />
              </div>
              <div className="flex flex-col md:flex-row gap-7 max-h-[70px] flex-wrap">
                {organization?.map((item) => (
                  <Image
                    src={item.image || ""}
                    alt={item.label || ""}
                  />
                ))}
              </div>
            </div>
          )
        }

        {
          partners && partners?.length > 0 && (
            <div className="flex flex-col gap-5">
              <div className="text-primary">
                <Title label={newTexts?.partners} titleSize="2xl" serif />
              </div>
              <div className="flex flex-col md:flex-row gap-7 max-h-[70px] flex-wrap">
                {partners?.map((item) => (
                  <Image
                    src={item.image || ""}
                    alt={item.label || ""}
                  />
                ))}
              </div>
            </div>
          )
        }

        {
          sponsors && sponsors?.length > 0 && (
            <div className="flex flex-col gap-5">
              <div className="text-primary">
                <Title label={newTexts?.sponsors} titleSize="2xl" serif />
              </div>
              <div className="flex flex-col md:flex-row gap-7 max-h-[70px] flex-wrap">
                {sponsors?.map((item) => (
                  <Image
                    src={item.image || ""}
                    alt={item.label || ""}
                  />
                ))}
              </div>
            </div>
          )
        }

        {
          gallery && gallery?.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="text-primary">
                <Title label={newTexts?.gallery} titleSize="2xl" serif />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Mobile */}
                {gallery?.map((item, index) => (
                  <div className="md:hidden">
                    <Image
                      className="w-full object-cover aspect-video max-h-[600px] md:hover:scale-105 transition-all duration-200"
                      width={500}
                      src={item.image || ""}
                      alt={item.label || ""}
                    />
                  </div>
                ))}

                {/* Desktop */}
                <a id="images" className="hidden" />
                {gallery?.map((item, index) => (
                  <div className="hidden md:block">
                    <a href={`#modal-${index}`} className="cursor-zoom-in">
                      <Image
                        className="w-full object-cover aspect-video max-h-[600px] md:hover:scale-105 transition-all duration-200"
                        width={500}
                        src={item.image || ""}
                        alt={item.label || ""}
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
                          src={item.image || ""}
                          alt={item.label || ""}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        <div className="flex ">
          <FancyLink label={backToEvents?.label} url={backToEvents?.url} iconLeft/>
        </div>
      </div>
    </div>
  );
}
