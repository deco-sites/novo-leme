import Placeholder from  "../components/ui/SectionPlaceholder.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Nav {
  image?: {
    src?: ImageWidget;
  };
  text?: string;
  marginTop?: boolean;
}

export default function LargeHero({
  image = {
    src: "https://assets.decocache.com/novo-leme/3b11ecb6-2bdd-4af6-86e9-ee57b4599c6c/hero-home.svg",
  },
  text,
  marginTop,
}: Nav) {
  return (
    <div className={`relative w-full max-h-[890px] mb-8 md:mb-16 overflow-hidden mt-6 ${marginTop ? 'md:mt-10' : 'mt-0'}`}>
      <div className="w-full opacity-60 md:h-auto">
        <Image class="md:w-full max-w-prose sm:max-w-full" src={image.src || ""} />
      </div>
      {
        text ? (
          <div 
            id="parallax-text"
            data-parallax-speed="0.5"
            className="absolute w-64 md:w-[500px] right-16 md:right-[310px] top-20 md:top-[190px] px-4 md:px-14 py-3 md:py-10 bg-white border-secondary border-2 md:border-4 rounded-lg md:rounded-xl shadow-[3px_3px_0] md:shadow-[5px_5px_0] --tw-shadow-[--secondary] text-secondary text-2xl md:text-[40px] font-serif leading-tight"
          >
            {text}
          </div>
        ) : ''
      }
      
      {/* Parallax Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function initParallax() {
                const element = document.getElementById('parallax-text');
                if (!element) {
                  // If element doesn't exist yet, try again in a bit
                  setTimeout(initParallax, 100);
                  return;
                }
                
                const speed = parseFloat(element.getAttribute('data-parallax-speed') || '0.3');
                
                function updateParallax() {
                  const scrolled = window.pageYOffset;
                  const offset = scrolled * -speed;
                  element.style.transform = 'translateY(' + offset + 'px)';
                }
                
                // Initial update
                updateParallax();
                
                // Update on scroll
                window.addEventListener('scroll', updateParallax, { passive: true });
                window.addEventListener('resize', updateParallax, { passive: true });
              }
              
              // Start when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initParallax);
              } else {
                initParallax();
              }
            })();
          `
        }}
      />
      
      {/* CSS for smooth transitions */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #parallax-text {
              transition: transform 0.1s ease-out;
              will-change: transform;
            }
            
            @media (prefers-reduced-motion: reduce) {
              #parallax-text {
                transition: none;
              }
            }
          `
        }}
      />
    </div>
  );
}
export const LoadingFallback = () => <Placeholder height="50vh" />;
