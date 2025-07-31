import { BlogPost } from "apps/blog/types.ts";
import SideNav from  "../components/ui/SideNav.tsx";
import type {Props as SideNavProps} from  "../components/ui/SideNav.tsx";
import Card from  "../components/ui/Card.tsx";

export interface Props {
  sidebarNav?: SideNavProps;
  posts?: BlogPost[] | null;
  config?: {
    /** @title Prefix URL */
    categorySlug?: string;
    removeCategoryFromTags?: string;
  },
}

export default function Projetos({
  sidebarNav,
  posts,
  config = { categorySlug: '', removeCategoryFromTags: 'projetos' },
}: Props) {
  return (
    <div className="container px-6 md:px-44 flex flex-col md:flex-row gap-12 md:gap-44 my-6 md:my-12 text-neutral-950">
      <div className="hidden">
        <SideNav links={sidebarNav?.links} button={sidebarNav?.button}/>
      </div>
      <div className="flex-auto flex flex-col gap-10">
        {posts?.slice(0, 30).map((post) =>  {
          const pDate = post.extraProps?.find(item => item.key === "date");
          const pPlace = post.extraProps?.find(item => item.key === "place");
          const pStatus = post.extraProps?.find(item => item.key === "status");
          const categories = []
          post.categories.map((cat) =>  {
            config.removeCategoryFromTags !== cat.slug ? categories.push(cat.name) : '';
          })

          return (
            <Card
              orientation="horizontal"
              borderColor="primary"
              image={{src: post.image, alt: ''}}
              label={post.title}
              description={post.excerpt}
              descriptionColor="neutral-950"
              url={`/${config.categorySlug}/${post.slug}`}
              tags={categories}
              details={{date: pDate?.value, place: pPlace?.value, status: pStatus?.value}}
            />
          )
        })}
      </div>
    </div>
  );
}
