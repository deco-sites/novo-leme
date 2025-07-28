import Placeholder from  "../../components/ui/SectionPlaceholder.tsx";
import { BlogPost } from "apps/blog/types.ts";
import Title from  "../../components/ui/Title.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";
import CardEvent from  "../../components/ui/CardEvent.tsx";

export interface Nav {
  title?: string;
  description?: string;
  posts?: BlogPost[] | null;
  config?: {
    categorySlug?: string;
  },
  labels?: {
    online?: string,
    presencial?: string,
  }
  button?: {
    label: string;
    url: string;
  }
}

export default function HomeEventos({
  title = "Eventos",
  description = "Acompanhe a participação do Leme em eventos",
  posts,
  config = { categorySlug: 'eventos/participacao' },
  labels = {
    online: "Online",
    presencial: "Presencial",
  },
  button = { label: "Ver todos os eventos", url: "/" },
}: Nav) {
  return (
    <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row space-y-8 md:space-x-12 mb-16">
      <div className="flex-none md:w-60">
        <Title label={title} description={description} serif />
      </div>
      <div className="flex flex-col flex-auto space-y-5">
        <div className="flex flex-col space-y-7 md:space-y-2 md:mr-40">
          {posts?.slice(0, 6).map((post, index) => (
            <CardEvent
              label={post.title}
              description={post.excerpt}
              date={post.date}
              url={`${config.categorySlug}/${post.slug}`}
            />
          ))}
        </div>
        <div class="flex md:px-6">
          <FancyLink label={button?.label} url={button?.url} iconRight/>
        </div>
      </div>
    </div>
  );
}

export const LoadingFallback = () => <Placeholder height="50vh" />;
