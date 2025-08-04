import { RichText } from "apps/admin/widgets.ts";

export interface Props {
  title?: string;
  step1?: RichText;
  step2?: RichText;
  step3?: RichText;
  step4?: RichText;
  step5?: RichText;
  step6?: RichText;
}

export default function Cycle({
  title,
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
}: Props) {
  const stepClasses = "transition-all absolute w-[240px] px-3 py-2 border-2 border-primary rounded-md duration-1000"
  const stepClassesMobile = "absolute px-2 py-1 border border-primary rounded-md text-xs"
  return (
    <div 
      className="flex flex-col gap-6"
      data-cycle-intersect="true"
      data-intersect-threshold="1.0"
      data-intersect-root-margin="0px 0px -50px 0px"
    >
      <div className="hidden md:block group relative w-[745px] h-[435px] mx-auto">
        <div className="cycle-svg absolute w-[238px] h-[231px] -mt-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-300">
          <svg className="transition-all absolute duration-500" width="238" height="231" viewBox="0 0 238 231" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M116.853 2.2873C137.303 2.34251 158.214 7.68779 175.782 18.0151C181.037 21.1042 187.523 25.3372 190.502 30.7729M192.99 17.2688C193.52 20.236 194.006 23.1938 194.353 26.1901C194.66 28.8361 195.482 32.1321 194.376 34.7264C194.035 35.5263 192.287 34.7433 191.712 34.6274C186.606 33.5969 181.714 32.2662 176.661 30.9706M229.427 139.109C233.951 128.812 232.747 122.146 230.898 110.894C228.202 94.4912 221.454 71.1856 211.976 57.3321M222.129 135.324C221.126 136.947 224.25 150.421 224.811 150.353C226.796 150.11 235.769 143.328 236.358 141.355M144.767 222.735C149.036 221.624 156.884 221.27 161.048 219.829C175.184 214.939 212.324 191.921 215.264 174.097M153.435 229.21C148.13 229.178 143.314 223.948 138.366 222.189C138.055 222.079 137.983 221.862 138.321 221.734C142.786 220.048 147.401 216.817 151.383 214.067M118.496 226.466C106.172 228.665 85.8371 218.259 75.3029 212.799C67.7552 208.886 48.976 198.249 48.976 198.249M43.5945 206.556C42.2415 202.792 41.2284 197.172 39.741 193.465C38.9215 191.422 37.6663 191.012 40.7398 190.56C44.1672 190.056 51.5967 191.349 54.983 190.744M22.9586 166.787C11.8197 152.671 4.11619 133.611 1.73424 116.008C1.38618 113.436 1.97915 110.484 2.11207 107.884C4.52123 97.8665 10.4752 92.2866 10.4752 92.2866M1.87393 89.8285C6.39392 89.0219 10.9225 88.0151 15.4772 87.4008C16.5414 87.2573 16.432 98.2219 16.5956 99.1385M89.0803 11.325C85.4714 12.8413 80.8936 14.3178 77.203 15.7146C57.5039 23.1704 32.2237 36.9575 23.9549 58.0467M82.7006 5.3069C85.7042 5.32769 90.6588 7.62211 93.6597 7.19323C95.9225 6.86983 94.5769 8.13168 93.9489 9.3403C91.9585 13.1711 90.2001 17.6558 87.5724 21.1708" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
        <div className="transition-all absolute -mt-4 text-lg font-semibold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-2">{title}</div>
        <div className={`${stepClasses} right-[466px] bottom-[330px]`} dangerouslySetInnerHTML={{__html: step1 || ""}}></div>
        <div className={`${stepClasses} left-[422px] bottom-[360px]`} dangerouslySetInnerHTML={{__html: step2 || ""}}></div>
        <div className={`${stepClasses} left-[512px] bottom-[233px]`} dangerouslySetInnerHTML={{__html: step3 || ""}}></div>
        <div className={`${stepClasses} left-[473px] top-[305px]`} dangerouslySetInnerHTML={{__html: step4 || ""}}></div>
        <div className={`${stepClasses} right-[412px] top-[322px]`} dangerouslySetInnerHTML={{__html: step5 || ""}}></div>
        <div className={`${stepClasses} right-[515px] bottom-[180px]`} dangerouslySetInnerHTML={{__html: step6 || ""}}></div>
      </div>
      <div class="md:hidden font-semibold text-center">{title}</div>

      {/* Mobile */}
      <div className="md:hidden group relative w-full h-[290px] mx-auto">
        <svg className="absolute -mt-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base-300" width="56" height="56" viewBox="0 0 238 231" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M116.853 2.2873C137.303 2.34251 158.214 7.68779 175.782 18.0151C181.037 21.1042 187.523 25.3372 190.502 30.7729M192.99 17.2688C193.52 20.236 194.006 23.1938 194.353 26.1901C194.66 28.8361 195.482 32.1321 194.376 34.7264C194.035 35.5263 192.287 34.7433 191.712 34.6274C186.606 33.5969 181.714 32.2662 176.661 30.9706M229.427 139.109C233.951 128.812 232.747 122.146 230.898 110.894C228.202 94.4912 221.454 71.1856 211.976 57.3321M222.129 135.324C221.126 136.947 224.25 150.421 224.811 150.353C226.796 150.11 235.769 143.328 236.358 141.355M144.767 222.735C149.036 221.624 156.884 221.27 161.048 219.829C175.184 214.939 212.324 191.921 215.264 174.097M153.435 229.21C148.13 229.178 143.314 223.948 138.366 222.189C138.055 222.079 137.983 221.862 138.321 221.734C142.786 220.048 147.401 216.817 151.383 214.067M118.496 226.466C106.172 228.665 85.8371 218.259 75.3029 212.799C67.7552 208.886 48.976 198.249 48.976 198.249M43.5945 206.556C42.2415 202.792 41.2284 197.172 39.741 193.465C38.9215 191.422 37.6663 191.012 40.7398 190.56C44.1672 190.056 51.5967 191.349 54.983 190.744M22.9586 166.787C11.8197 152.671 4.11619 133.611 1.73424 116.008C1.38618 113.436 1.97915 110.484 2.11207 107.884C4.52123 97.8665 10.4752 92.2866 10.4752 92.2866M1.87393 89.8285C6.39392 89.0219 10.9225 88.0151 15.4772 87.4008C16.5414 87.2573 16.432 98.2219 16.5956 99.1385M89.0803 11.325C85.4714 12.8413 80.8936 14.3178 77.203 15.7146C57.5039 23.1704 32.2237 36.9575 23.9549 58.0467M82.7006 5.3069C85.7042 5.32769 90.6588 7.62211 93.6597 7.19323C95.9225 6.86983 94.5769 8.13168 93.9489 9.3403C91.9585 13.1711 90.2001 17.6558 87.5724 21.1708" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
        </svg>
        <div className={`${stepClassesMobile} w-[150px] left-[12px] top-0`} dangerouslySetInnerHTML={{__html: step1}}></div>
        <div className={`${stepClassesMobile} w-[140px] left-[200px] top-[12px]`} dangerouslySetInnerHTML={{__html: step2}}></div>
        <div className={`${stepClassesMobile} w-[140px] right-0 top-[90px]`} dangerouslySetInnerHTML={{__html: step3}}></div>
        <div className={`${stepClassesMobile} w-[150px] left-[200px] top-[172px]`} dangerouslySetInnerHTML={{__html: step4}}></div>
        <div className={`${stepClassesMobile} w-[150px] left-[22px] bottom-[32px]`} dangerouslySetInnerHTML={{__html: step5}}></div>
        <div className={`${stepClassesMobile} w-[140px] left-0 top-[110px]`} dangerouslySetInnerHTML={{__html: step6}}></div>
      </div>

      {/* Intersection Observer Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function initCycleIntersection() {
                const elements = document.querySelectorAll('[data-cycle-intersect="true"]');
                if (elements.length === 0) {
                  setTimeout(initCycleIntersection, 100);
                  return;
                }

                elements.forEach(element => {
                  const threshold = parseFloat(element.getAttribute('data-intersect-threshold') || '1.0');
                  const rootMargin = element.getAttribute('data-intersect-root-margin') || '0px 0px -50px 0px';
                  
                  const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        // Add cycle-active class when element is completely visible
                        element.classList.add('cycle-active');
                      } else {
                        // Remove cycle-active class when element is not visible
                        element.classList.remove('cycle-active');
                      }
                    });
                  }, {
                    threshold: threshold,
                    rootMargin: rootMargin
                  });

                  observer.observe(element);
                });
              }

              // Start when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initCycleIntersection);
              } else {
                initCycleIntersection();
              }
            })();
          `
        }}
      />

      {/* CSS for cycle-active class */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Desktop cycle animations */
            .cycle-active .cycle-svsg {
              transform: scale(1.1) rotate(6deg);
              color: #EA7342;
            }

            .cycle-active .group svg {
              transform: scale(1.1) rotate(6deg);
              color: var(--secondary);
            }
            
            .cycle-active .group > div:nth-child(3) {
              border-color: #EA7342;
              transform: translateY(-1rem);
            }
            
            .cycle-active .group > div:nth-child(4) {
              border-color: #EA7342;
              transform: translateX(1rem) translateY(-0.5rem);
            }
            
            .cycle-active .group > div:nth-child(5) {
              border-color: #EA7342;
              transform: translateX(0.5rem) translateY(0.5rem);
            }
            
            .cycle-active .group > div:nth-child(6) {
              border-color: #EA7342;
              transform: translateX(-1rem) translateY(1rem);
            }
            
            .cycle-active .group > div:nth-child(7) {
              border-color: #EA7342;
              transform: translateX(-1.5rem) translateY(0.5rem);
            }
            
            .cycle-active .group > div:nth-child(8) {
              border-color: #EA7342;
              transform: translateX(-1rem) translateY(-0.5rem);
            }
          `
        }}
      />
    </div>
  );
}
