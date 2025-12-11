import { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Container } from '../layout';
import { heroGalleryImages } from '../../data/mock';

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);

  // Set initial scroll position to show 2nd/3rd image on the left
  useEffect(() => {
    if (scrollRef.current) {
      // Scroll to approximately the width of 1.5 images to start from 2nd/3rd
      const initialOffset = window.innerWidth * 0.25; // About 1 image width
      scrollRef.current.scrollLeft = initialOffset;
    }
  }, []);

  // Auto-scroll animation on hover
  const startScrolling = useCallback(() => {
    const scroll = () => {
      if (scrollRef.current && isHoveringRef.current) {
        scrollRef.current.scrollLeft += 1;

        // Loop back to start when reaching the end
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        }

        animationRef.current = requestAnimationFrame(scroll);
      }
    };
    animationRef.current = requestAnimationFrame(scroll);
  }, []);

  const stopScrolling = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
    startScrolling();
  }, [startScrolling]);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    stopScrolling();
  }, [stopScrolling]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white">
      {/* Top Bar: Search only */}
      <Container>
        <div className="py-3 md:py-4 flex justify-end">
          {/* Search Bar */}
          <div className="w-full md:w-auto md:min-w-80">
            <Link
              to="/registro"
              className="flex items-center gap-3 px-4 py-3 border border-border-gray hover:border-brand-black transition-colors bg-white"
            >
              <span className="text-meta-gray flex-1">Buscar edificios...</span>
              <Search className="w-5 h-5 text-meta-gray" />
            </Link>
          </div>
        </div>
      </Container>

      {/* Scrolling Image Gallery - scrolls on hover */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto py-4 px-4 md:px-8 scrollbar-hide"
        >
          {/* TODO [STRAPI]: Replace with dynamic gallery images */}
          {heroGalleryImages.map((image, index) => (
            <Link
              key={image.id}
              to="/registro"
              className={`flex-shrink-0 overflow-hidden bg-light-gray group ${
                image.aspectRatio === 'horizontal'
                  ? 'w-[calc(25vw-16px)] md:w-[calc(25vw-24px)] aspect-[16/9]'
                  : 'w-[calc(16vw-16px)] md:w-[calc(16vw-24px)] aspect-[9/16]'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Stats below gallery */}
      <Container>
        <div className="py-6 md:py-8">
          <div className="flex items-baseline gap-3">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black">
              2.476
            </p>
            <div>
              <p className="text-sm md:text-base text-brand-gray">
                Edificios Art Déco
              </p>
              <p className="text-xs text-meta-gray">
                registro mundial de arquitectura
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
