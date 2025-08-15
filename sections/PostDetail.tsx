import { type BlogPost, BlogPostPage } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import Title from  "../components/ui/Title.tsx";
import Tag from  "../components/ui/Tag.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";
import { type Section } from "@deco/deco/blocks";

export interface Props {
  sidebarNav?: Section;
  page?: BlogPostPage | null;
  backToNews?: {
    label?: string;
    url?: string;
  }
}

const DEFAULT_PROPS: BlogPost = {
  title: "Title",
  excerpt: "Excerpt goes here",
  authors: [
    {
      name: "Full name",
      email: "author@lemelab.org",
      avatar: '',
    },
  ],
  categories: [],
  date: "2022-01-01",
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content:
    '<h1>Heading 1</h1><p>This is a paragraph under <strong>Heading 1</strong>. It can contain <em>italic</em> text, <strong>bold</strong> text, and even <code>code snippets</code>.</p><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p><h2>Heading 2</h2><p>More text can be placed here. This section is under <strong>Heading 2</strong>.</p><h3>Heading 3 with Code Block</h3><p>This is an example of a code block:</p><pre><code>// This is a code block console.log("Hello, World!");</code></pre><h4>Heading 4 with Image</h4><p>Below is an image:</p><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9" alt="Description of Image"><p><strong>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</strong></p><p>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p><blockquote>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</blockquote><p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>',
};

export default function PostDetail({
  sidebarNav,
  page,
  backToNews,
}: Props) {
  const { title, image, date, categories, content, imageCarousel } = page?.post || DEFAULT_PROPS;
  const Nav = sidebarNav?.Component;
  let lang = "pt-BR";
  if (categories.some(item => item.slug.includes("en-"))) lang = "en-US";
  if (categories.some(item => item.slug.includes("es-"))) lang = "es-ES";

  const formattedDate = date ? new Date(date).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Sao_Paulo"
  }) : null;

  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12">
      {Nav && <div className="flex-none"><Nav {...(sidebarNav?.props ?? {})} /></div>}
      <div className="flex flex-auto flex-col gap-9">
        <div className="flex flex-col gap-3">
          <Title label={title} serif titleSize="4xl" noClamp />
            {date ? (
              <div class="flex flex-wrap gap-3">
                <Tag type="date" label={formattedDate} color="secondary"/>
              </div>
            ) : ''}
        </div>
        <div className="flex flex-col gap-9">
          {
            image ? (
              <Image
                className="w-full object-cover aspect-video max-h-[600px]"
                width={600}
                src={image || ""}
              />
            ) : ''
          }
          <div className="leading-normal text-neutral-950 space-y-6" dangerouslySetInnerHTML={{__html: content}}></div>
        </div>

        {
          imageCarousel && imageCarousel?.banners && imageCarousel?.banners?.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="text-primary">
                <Title label="Galeria" titleSize="2xl" serif />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mobile */}
                {imageCarousel?.banners?.map((image, index) => (
                  <div className="md:hidden">
                    <Image
                      className="w-full object-cover aspect-video max-h-[600px] md:hover:scale-105 transition-all duration-200"
                      width={500}
                      src={image.desktop.image || ""}
                      alt={image.alt || ""}
                    />
                  </div>
                ))}

                {/* Desktop */}
                <a id="images" className="hidden" />
                {imageCarousel?.banners?.map((image, index) => (
                  <div className="hidden md:block">
                    <a href={`#modal-${index}`} className="cursor-zoom-in">
                      <Image
                        className="w-full object-cover aspect-video max-h-[600px] md:hover:scale-105 transition-all duration-200"
                        width={500}
                        src={image.desktop.image || ""}
                        alt={image.alt || ""}
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
                          src={image.desktop.image || ""}
                          alt={image.alt || ""}
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
          <FancyLink label={backToNews?.label} url={backToNews?.url} iconLeft/>
        </div>
      </div>
    </div>
  );
}
