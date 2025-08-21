import { RichText } from "apps/admin/widgets.ts";
import { type BlogPost, BlogPostPage } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { VideoWidget as Video } from "apps/admin/widgets.ts";
import Title from  "../components/ui/Title.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";
import { type Section } from "@deco/deco/blocks";
import ImageGallery from "../components/ui/Gallery.tsx";
export interface Props {
  sidebarNav?: Section;
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
  media?: {
    image?: ImageWidget;
    video?: Video;
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
  media,
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
    timeZone: "America/Sao_Paulo"
  }) : '';

  const formattedDateEnd = date && date.end ? new Date(date.end).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo"
  }) : '';

  const Nav = sidebarNav?.Component;
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12">
      {Nav && <div className="flex-none"><Nav {...(sidebarNav?.props ?? {})} /></div>}
      <div className="flex flex-auto flex-col gap-10">
        <Title label={title} serif titleSize="4xl" noClamp />
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="flex flex-col gap-3">
            {media?.image && (
              <div className="mb-4">
                <Image
                  className="w-full h-full object-cover rounded-md shadow-sm"
                  width={500}
                  src={media?.image || ""}
                  alt={title}
                />
              </div>
            )}
            {media?.video && (
              <div className="mb-4">
                <video
                  className="w-full h-full object-cover rounded-md shadow-sm"
                  width={500}
                  src={media?.video}
                  controls
                ></video>
              </div>
            )}
            <div className="text-primary">
              <Title label={newTexts?.description} titleSize="2xl" serif />
            </div>
            <div className="leading-relaxed text-neutral-950 space-y-6 post-content" dangerouslySetInnerHTML={{__html: description}}></div>
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
              <div className="flex flex-col md:flex-row gap-7 flex-wrap">
                {organization?.map((item) => (
                  <Image
                    src={item.image || ""}
                    alt={item.label || ""}
                    className="max-h-[80px] max-w-[250px] object-scale-down"
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
              <div className="flex flex-col md:flex-row gap-7 flex-wrap">
                {partners?.map((item) => (
                  <Image
                    src={item.image || ""}
                    alt={item.label || ""}
                    className="max-h-[80px] max-w-[250px] object-scale-down"
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
              <div className="flex flex-col md:flex-row gap-7 flex-wrap">
                {sponsors?.map((item) => (
                  <Image
                    src={item.image || ""}
                    alt={item.label || ""}
                    className="max-h-[80px] max-w-[250px] object-scale-down"
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
              <ImageGallery images={gallery} />
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
