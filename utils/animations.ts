/**
 * HTMX-inspired fade-in animation utility functions
 */

export interface FadeInOptions {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
  delay?: number;
  easing?: string;
}

/**
 * HTMX-style fade-in animation using data attributes
 * Usage: <div data-htmx-fade-in="true" data-fade-duration="1000" data-fade-delay="200">
 */
export function initHtmxFadeIn(): void {
  function initFadeIn() {
    const elements = document.querySelectorAll('[data-htmx-fade-in="true"]');
    if (elements.length === 0) {
      setTimeout(initFadeIn, 100);
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
        element.style.transform = `translateY(${translateY})`;
        element.style.transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;
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
          threshold,
          rootMargin
        });

        observer.observe(element);
      }
    });
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFadeIn);
  } else {
    initFadeIn();
  }
}

/**
 * HTMX-style staggered fade-in for multiple elements
 * Usage: <div data-htmx-stagger-fade="true" data-stagger-delay="200">
 */
export function initHtmxStaggerFade(): void {
  function initStaggerFade() {
    const containers = document.querySelectorAll('[data-htmx-stagger-fade="true"]');
    if (containers.length === 0) {
      setTimeout(initStaggerFade, 100);
      return;
    }

    containers.forEach((container) => {
      if (container instanceof HTMLElement) {
        const staggerDelay = parseInt(container.getAttribute('data-stagger-delay') || '200');
        const duration = parseInt(container.getAttribute('data-fade-duration') || '1000');
        const threshold = parseFloat(container.getAttribute('data-fade-threshold') || '0.1');
        const rootMargin = container.getAttribute('data-fade-root-margin') || '0px 0px -50px 0px';
        const easing = container.getAttribute('data-fade-easing') || 'ease-out';
        const translateY = container.getAttribute('data-fade-translate-y') || '30px';

        // Get all direct children
        const children = Array.from(container.children);

        // Set initial styles for each child
        children.forEach((child, index) => {
          if (child instanceof HTMLElement) {
            child.style.opacity = '0';
            child.style.transform = `translateY(${translateY})`;
            child.style.transition = `opacity ${duration}ms ${easing} ${index * staggerDelay}ms, transform ${duration}ms ${easing} ${index * staggerDelay}ms`;
            child.style.willChange = 'opacity, transform';
          }
        });

        // Create observer for the container
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
              // Trigger fade-in for all children
              children.forEach((child) => {
                if (child instanceof HTMLElement) {
                  child.style.opacity = '1';
                  child.style.transform = 'translateY(0)';
                  child.classList.add('htmx-stagger-fade-active');
                }
              });
              
              // Stop observing after animation
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold,
          rootMargin
        });

        observer.observe(container);
      }
    });
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStaggerFade);
  } else {
    initStaggerFade();
  }
}

/**
 * Initialize all HTMX fade-in animations
 */
export function initAllHtmxFadeIn(): void {
  initHtmxFadeIn();
  initHtmxStaggerFade();
} 