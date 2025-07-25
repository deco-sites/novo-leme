import { BlogPost } from "apps/blog/types.ts";
import Card from  "../components/ui/Card.tsx";
import Slider from  "../components/ui/Slider.tsx";
import FancyLink from  "../components/ui/FancyLink.tsx";
import Title from  "../components/ui/Title.tsx";

export interface Props {
  title?: string;
  description?: string;
  posts?: BlogPost[] | null;
  config?: {
    showPostDate: boolean;
  },
  style?: {
    orientation?: "Vertical" | "Horizontal";
    background?: "Neutral" | "Blue" | "Orange";
    slider?: boolean;
  };
  button?: {
    label: string;
    url: string;
  }
}

export default function PostsList(
  {
    title,
    description,
    posts,
    button,
    config = { showPostDate: false },
    style = { orientation: "Vertical", background: "Blue", slider: false },
  }: Props,
) {
  const id = crypto.randomUUID();

  let containerClasses = "";
  switch (style?.orientation) {
    case "Horizontal":
      containerClasses += "container mx-auto px-6 md:px-16 flex flex-col md:flex-row space-y-8 md:space-x-12 ";
    break;
    case "Vertical":
    default:
      containerClasses += "md:mx-16 py-8 md:py-16 flex-col space-y-6 md:space-y-10 ";
    break;
  }
  switch (style?.background) {
    case "Blue":
      containerClasses += "text-white rounded-se-3xl rounded-es-3xl bg-[#0D6687] bg-[url(https://assets.decocache.com/novo-leme/d3eb5637-73f5-450d-90d6-9036a36595c2/bg2.svg)] bg-repeat-x ";
    break;
    case "Orange":
      containerClasses += " text-white rounded-se-3xl rounded-es-3xl bg-[#EA9642] bg-[url(https://assets.decocache.com/novo-leme/aa01eb61-8e76-4691-85bd-da34db62d246/bg1.svg)] bg-repeat-x ";
    break;
    case "Neutral":
    default:
      containerClasses += "";
    break;
  }

  return (
    <div className={`flex mb-16 ${containerClasses}`}>
      <div className={`${style?.orientation === 'Vertical' ? "px-6 md:px-32" : "flex-none md:w-60"}`}>
        <Title label={title} description={description} serif />
      </div>
        {
          style.slider ? (
            <div className="flex flex-col flex-auto space-y-8 md:space-y-16 items-center px-6 md:px-24">
              <div
              id={id}
              class="relative grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-[min-content_1fr]"
            >
              {/* Image Slider */}
              <div class="col-start-1 col-span-1 sm:col-start-2">
                <div class="h-min flex-grow">
                  <Slider class="carousel carousel-center gap-6 w-full p-4 md:p-8">
                    {posts?.slice(0, 6).map((post, index) => (
                      <Slider.Item
                        index={index}
                        class="carousel-item w-full md:w-[calc(32.5%)]"
                      >
                        <Card
                          borderColor={style?.background === "Orange" ? "primary" : "secondary"}
                          image={{src: post.image, alt: ''}}
                          label={post.title}
                          description={post.excerpt}
                          date={config.showPostDate ? post.date : ''}
                          url={`/midia/noticias/${post.slug}`}
                        />
                      </Slider.Item>
                    ))}
                  </Slider>

                  <Slider.PrevButton
                    class={`text-white no-animation absolute -left-6 md:-left-16 top-1/2 disabled:opacity-50 rounded-full ${style?.background === "Blue" ? "md:hover:bg-secondary" : "md:hover:bg-primary"}`}
                    disabled
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.75 27.5L16.25 20L23.75 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </Slider.PrevButton>

                  <Slider.NextButton
                    class={`text-white no-animation absolute -right-6 md:-right-16 top-1/2 disabled:opacity-50 rounded-full ${style?.background === "Blue" ? "md:hover:bg-secondary" : "md:hover:bg-primary"}`}
                    disabled={posts && posts?.length < 2 ? true : false}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.25 12.5L23.75 20L16.25 27.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </Slider.NextButton>
                </div>
              </div>

              <Slider.JS rootId={id} />
            </div>
              <div class="flex px-6">
                <FancyLink label={button?.label} url={button?.url} iconRight/>
              </div>
            </div>
          ) : (
            <div className="flex flex-col flex-auto space-y-6 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {posts?.slice(0, 6).map((post) => (
                  <Card
                    borderColor="primary"
                    image={{src: post.image, alt: ''}}
                    label={post.title}
                    description={post.excerpt}
                    date={post.date}
                    url={`/midia/noticias/${post.slug}`}
                  />
                ))}
              </div>
              <div className="flex">
                <FancyLink label={button?.label} url={button?.url} iconRight/>
              </div>
            </div>
          )
        }
    </div>
  );
}
