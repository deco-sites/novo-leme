import { BlogPost } from "apps/blog/types.ts";
import SideNav, { Props as SideNavProps } from  "../components/ui/SideNav.tsx";
import Card from  "../components/ui/Card.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  posts?: BlogPost[] | null;
  config?: {
    showPostDate?: boolean;
    categorySlug?: string;
  },
}

export default function MidiaNaMidia({
  sidebarNav,
  posts,
  config = { showPostDate: false, categorySlug: '' },
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12 text-neutral-950">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {posts?.slice(0, 30).map((post) =>  {
            const url = post.extraProps?.find(item => item.key === "url");

            return (
              <Card
                borderColor="primary"
                image={{src: post.image, alt: ''}}
                label={post.title}
                description={post.excerpt}
                date={post.date}
                url={url?.value || `${config.categorySlug}/${post.slug}`}
                newTab={url?.value ? true : false}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
