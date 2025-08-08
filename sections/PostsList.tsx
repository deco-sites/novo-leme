import Placeholder from  "../components/ui/SectionPlaceholder.tsx";
import { BlogPost } from "apps/blog/types.ts";
import Card from  "../components/ui/Card.tsx";
import { type Section } from "@deco/deco/blocks";

export interface Props {
  sidebarNav?: Section;
  posts?: BlogPost[] | null;
  config?: {
    showPostDate?: boolean;
    /** @title Prefix URL */
    categorySlug?: string;
  },
}

export default function PostsList({
  sidebarNav,
  posts,
  config = { showPostDate: false, categorySlug: '' },
}: Props) {
  const Nav = sidebarNav?.Component;
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12 text-neutral-950">
      {Nav && <div className="flex-none"><Nav {...(sidebarNav?.props ?? {})} /></div>}
      <div className="flex-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {posts?.slice(0, 30).map((post) =>  {
            const url = post.extraProps?.find(item => item.key === "url");

            let lang = "pt-BR";
            if (config?.categorySlug?.includes("en/")) lang = "en-US";
            if (config?.categorySlug?.includes("es/")) lang = "es-ES";
    
            const formattedDate = post.date ? new Date(post.date).toLocaleDateString(lang, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) : null;

            return (
              <Card
                borderColor="primary"
                image={{src: post.image, alt: ''}}
                label={post.title}
                description={post.excerpt}
                date={formattedDate}
                url={url?.value || `/${config.categorySlug}/${post.slug}`}
                newTab={url?.value ? true : false}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export const LoadingFallback = () => <Placeholder height="50vh" />;
