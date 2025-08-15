import { RichText } from "apps/admin/widgets.ts";
import FancyLink from "../components/ui/FancyLink.tsx";

export interface Props {
  content?: RichText;
  areas?: {
    /** @title Name */
    label?: string;
    description?: RichText;
    challenges?: {
      title?: string;
      list?: {
        /** @title Title */
        /** @format textarea */
        label?: string;
      }[]
    };
    button?: {
      label?: string;
      url?: string;
    }
  }[];
}

export default function Atuacao({
  content,
  areas = [
    {
      label: "Controle do Crime Organizado Violento",
      description: "O crime organizado violento é um dos principais problemas públicos de segurança enfrentados pelos países latino-americanos. No Brasil, sua atuação se expressa principalmente pelo controle armado de territórios, explorando negócios e limitando a presença do Estado nesses espaços.",
      url: "/",
      challenges: {
        title: "Desafios",
        list: [
          { label: "Conceituar e dimensionar o controle territorial de grupos armados, desenvolvendo métricas para mensurar sua presença e atuação." },
          { label: "Identificar e qualificar futuras lideranças da área de segurança pública, através da formação de uma rede ativa e comprometida." },
          { label: "Identificar estratégias bem-sucedidas e propor novas abordagens de enfrentamento, produzindo e disseminando evidências." },
        ],
      },
      button: {
        label: "Ver projetos",
        url: "/projetos",
      },
    },
  ],
}: Props) {
  return (
    <div className="container px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-20 my-2 md:my-2">
      <div
        className="flex-none md:w-72"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div className="flex-auto flex flex-col gap-3 md:gap-4">
        {areas?.map((item, i) => (
          <details className="flex flex-col group border-2 border-base-300 rounded-lg md:hover:border-secondary open:border-secondary" open={i === 0}>
            <summary className="flex items-start md:items-center gap-2 md:gap-3 py-2 md:py-3 px-3 md:px-4 cursor-pointer text-primary text-xl md:text-3xl font-serif group-open:text-white group-open:bg-secondary md:hover:text-secondary list-none appearance-none">
              <div className="flex-none transition-all group-open:rotate-90 mt-[2px] md:mt-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29289 6.70686C7.90237 6.31634 7.90237 5.68332 8.29289 5.2928C8.68342 4.90228 9.31643 4.90228 9.70696 5.2928L15.707 11.2928C16.0975 11.6833 16.0975 12.3163 15.707 12.7069L9.70696 18.7069C9.31643 19.0974 8.68342 19.0974 8.29289 18.7069C7.90237 18.3163 7.90237 17.6833 8.29289 17.2928L13.5859 11.9998L8.29289 6.70686Z"/>
                </svg>
              </div>
              <div className="flex-auto">{item.label}</div>
            </summary>
            <div className="details-content flex flex-col group-open:bg-white rounded-lg pt-6 pb-8 pl-12 md:pl-[52px] pr-6 gap-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-serif">{item.challenges?.title}</h3>
                <ul className="flex flex-col gap-4">
                  {item.challenges?.list?.map((item) => (
                    <li className="px-5 py-4 border-2 border-base-300 rounded-lg shadow-[3px_3px_0_rgba(255,203,143,1)]">{item.label}</li>
                  ))}
                </ul>
              </div>
              {item.button && item.button.label && (
                <div className="flex justify-end mt-2">
                  <FancyLink label={item.button?.label} url={item.button?.url} iconRight />
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
      
      {/* Smooth Accordion Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function initSmoothAccordion() {
                const detailsElements = document.querySelectorAll('details');
                if (detailsElements.length === 0) {
                  setTimeout(initSmoothAccordion, 100);
                  return;
                }

                detailsElements.forEach((details) => {
                  if (details instanceof HTMLDetailsElement) {
                    const content = details.querySelector('.details-content');
                    
                    if (content) {
                      // Set initial state for closed details
                      if (!details.open) {
                        content.style.maxHeight = '0px';
                        content.style.opacity = '0';
                        content.style.overflow = 'hidden';
                      }
                      
                      // Add smooth transitions
                      content.style.transition = 'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out';
                    }

                    // Add click handler to summary instead of toggle event
                    const summary = details.querySelector('summary');
                    if (summary) {
                      summary.addEventListener('click', function(e) {
                        const details = this.closest('details');
                        const content = details.querySelector('.details-content');
                        if (!content || details.dataset.animating) return;

                        e.preventDefault();
                        e.stopPropagation();
                        
                        if (!details.open) {
                          // Opening animation
                          details.dataset.animating = 'true';
                          
                          // Close all other details first
                          detailsElements.forEach((otherDetails) => {
                            if (otherDetails !== details && otherDetails instanceof HTMLDetailsElement && otherDetails.open) {
                              const otherContent = otherDetails.querySelector('.details-content');
                              if (otherContent) {
                                otherDetails.dataset.animating = 'true';
                                
                                // Animate closing other details
                                otherContent.style.maxHeight = otherContent.scrollHeight + 'px';
                                otherContent.style.opacity = '1';
                                
                                // Force reflow
                                otherContent.offsetHeight;
                                
                                // Animate to closed
                                otherContent.style.maxHeight = '0px';
                                otherContent.style.opacity = '0';
                                otherContent.style.overflow = 'hidden';
                                
                                // Close the details element after animation
                                setTimeout(() => {
                                  otherDetails.open = false;
                                  delete otherDetails.dataset.animating;
                                }, 400);
                              } else {
                                otherDetails.open = false;
                              }
                            }
                          });
                          
                          // Now open this details
                          setTimeout(() => {
                            details.open = true;
                            
                            content.style.maxHeight = '0px';
                            content.style.opacity = '0';
                            content.style.overflow = 'hidden';
                            
                            // Small delay to ensure the collapsed state is applied
                            requestAnimationFrame(() => {
                              // Force reflow
                              content.offsetHeight;
                              
                              // Animate to full height
                              content.style.maxHeight = content.scrollHeight + 'px';
                              content.style.opacity = '1';
                              
                              // Set final height after animation
                              setTimeout(() => {
                                content.style.maxHeight = 'none';
                                content.style.overflow = 'visible';
                                delete details.dataset.animating;
                              }, 400);
                            });
                          }, 50); // Small delay to ensure other details are closed first
                          
                        } else {
                          // Closing animation
                          details.dataset.animating = 'true';
                          
                          // Closing animation
                          content.style.maxHeight = content.scrollHeight + 'px';
                          content.style.opacity = '1';
                          
                          // Force reflow
                          content.offsetHeight;
                          
                          // Animate to closed
                          content.style.maxHeight = '0px';
                          content.style.opacity = '0';
                          content.style.overflow = 'hidden';
                          
                          setTimeout(() => {
                            details.open = false;
                            delete details.dataset.animating;
                          }, 400);
                        }
                      });
                    }
                  }
                });
              }

              // Start when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initSmoothAccordion);
              } else {
                initSmoothAccordion();
              }
            })();
          `
        }}
      />
      
      {/* Smooth Animation Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            details summary {
              transition: all 0.3s ease-in-out;
            }
            
            details summary svg {
              transition: transform 0.3s ease-in-out;
            }
            
            .details-content {
              transition: all 0.4s ease-in-out;
              overflow: hidden;
              max-height: 0;
              opacity: 0;
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
            
            details[open] .details-content {
              max-height: 1000px;
              opacity: 1;
              padding-top: 1.5rem !important;
              padding-bottom: 2rem !important;
            }
            
            @media (prefers-reduced-motion: reduce) {
              details summary,
              details summary svg,
              .details-content {
                transition: none;
              }
            }
          `
        }}
      />
    </div>
  );
}
