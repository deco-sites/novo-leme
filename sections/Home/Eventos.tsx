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
    <div 
      className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row space-y-8 md:space-x-12 mb-16"
      data-htmx-fade-in="true"
      data-fade-duration="1000"
      data-fade-delay="100"
      data-fade-threshold="0.2"
      data-fade-easing="ease-out"
      data-fade-translate-y="30px"
    >
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

      {/* HTMX Fade-in Animation Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function initHtmxFadeIn() {
                const elements = document.querySelectorAll('[data-htmx-fade-in="true"]');
                if (elements.length === 0) {
                  setTimeout(initHtmxFadeIn, 100);
                  return;
                }

                elements.forEach((element) => {
                  if (element instanceof HTMLElement) {
                    // Get configuration from data attributes
                    const duration = parseInt(element.getAttribute('data-fade-duration') || '1000');
                    const delay = parseInt(element.getAttribute('data-fade-delay') || '0');
                    const threshold = parseFloat(element.getAttribute('data-fade-threshold') || '0.1');
                    const rootMargin = element.getAttribute('data-fade-root-margin') || '0px 0px -50px 0px';
                    const easing = element.getAttribute('data-fade-easing') || 'ease-out';
                    const translateY = element.getAttribute('data-fade-translate-y') || '30px';

                    // Set initial styles
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(' + translateY + ')';
                    element.style.transition = 'opacity ' + duration + 'ms ' + easing + ' ' + delay + 'ms, transform ' + duration + 'ms ' + easing + ' ' + delay + 'ms';
                    element.style.willChange = 'opacity, transform';

                    // Create observer for this element
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                          // Trigger fade-in animation
                          entry.target.style.opacity = '1';
                          entry.target.style.transform = 'translateY(0)';
                          
                          // Add a class for additional styling if needed
                          entry.target.classList.add('htmx-fade-in-active');
                          
                          // Stop observing after animation
                          observer.unobserve(entry.target);
                        }
                      });
                    }, {
                      threshold: threshold,
                      rootMargin: rootMargin
                    });

                    observer.observe(element);
                  }
                });
              }

              // Start when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initHtmxFadeIn);
              } else {
                initHtmxFadeIn();
              }
            })();
          `
        }}
      />
    </div>
  );
}

export const LoadingFallback = () => <Placeholder height="50vh" />;
