import { BlogPost } from "apps/blog/types.ts";
import SideNav, { Props as SideNavProps } from  "../components/ui/SideNav.tsx";
import CardEvent from  "../components/ui/CardEvent.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  posts?: BlogPost[] | null;
  config?: {
    /** @title Prefix URL */
    categorySlug?: string;
  },
  labels?: {
    online?: string,
    presencial?: string,
  }
}

export default function Eventos({
  sidebarNav,
  posts,
  config = { categorySlug: 'eventos' },
  labels = {
    online: "Online",
    presencial: "Presencial",
  },
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-44 my-6 md:my-12 text-neutral-950">
      <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      <div className="flex-auto"> 
        <div className="flex flex-col space-y-6 md:space-y-2">
          {posts?.slice(0, 30).map((post, index) => (
            <CardEvent
              label={post.title}
              description={post.excerpt}
              date={post.date}
              url={`/${config.categorySlug}/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
