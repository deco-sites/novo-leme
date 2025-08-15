import Placeholder from  "../../components/ui/SectionPlaceholder.tsx";
import Cycle, { Props as CycleProps } from  "../../components/ui/Cycle.tsx";
import FancyLink from  "../../components/ui/FancyLink.tsx";

export interface Nav {
  /** @format textarea */
  text?: string;
  /** @format textarea */
  text2?: string;
  cycleImage?: CycleProps;
  links?: {
    label?: string;
    url?: string;
  }[];
}

export default function About({
  text,
  text2,
  cycleImage,
  links,
}: Nav) {
  return (
    <div className="container mx-auto xl:px-44 flex flex-col space-y-8 md:space-y-16 mb-16">
      <div 
        className="flex flex-col gap-3 md:gap-6"
        data-htmx-fade-in="true"
        data-fade-duration="1200"
        data-fade-delay="200"
        data-fade-threshold="0.3"
        data-fade-easing="ease-out"
        data-fade-translate-y="40px"
      >
        <div className="text-2xl md:text-5xl leading-tight font-serif">
          {text}
        </div>
        <div className="md:text-xl">
          {text2}
        </div>
      </div>
      <Cycle
        title={cycleImage?.title}
        step1={cycleImage?.step1}
        step2={cycleImage?.step2}
        step3={cycleImage?.step3}
        step4={cycleImage?.step4}
        step5={cycleImage?.step5}
        step6={cycleImage?.step6}
      />
      {
        links && links.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
            {links?.map((link) => (
              <FancyLink label={link?.label} url={link?.url} iconRight={true}/>
            ))}
          </div>
        ) : ''
      }

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