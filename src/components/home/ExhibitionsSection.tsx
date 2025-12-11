import { Link } from 'react-router-dom';
import { Container } from '../layout';
import { buildImageUrl } from '../../utils';

// TODO [STRAPI]: Replace with API call for exhibitions
const exhibitions = [
  {
    id: 1,
    title: 'Art Déco en la Península Ibérica',
    image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
    label: 'Exposición destacada',
    link: '/exposiciones',
  },
  {
    id: 2,
    title: 'Streamline Moderne: La era de la velocidad',
    image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80',
    label: 'Exposición temporal',
    link: '/exposiciones',
  },
  {
    id: 3,
    title: 'Vivienda social en estilo Art Déco: desde la creación del Ministerio de la Vivienda en 1957 hasta el final del régimen franquista',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
    label: 'Próximamente · Exposición temporal',
    link: '/exposiciones',
    hasIcon: true,
  },
];

export function ExhibitionsSection() {
  // Featured exhibition data - hero banner
  // TODO [STRAPI]: Replace with API call for featured exhibition
  const featuredExhibition = {
    title: 'Arquitectura Art Déco frente al mar',
    subtitle: 'Un recorrido por obras que evocan la modernidad marítima desde la edad dorada de la arquitectura Art Déco en todo el mundo.',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80',
    link: '/exposiciones',
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        {/* Section Label */}
        <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-6">
          Exposiciones
        </p>

        {/* Featured Exhibition Banner */}
        <Link
          to={featuredExhibition.link}
          className="group relative block w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-brand-black"
        >
          <img
            src={featuredExhibition.image}
            alt={featuredExhibition.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {featuredExhibition.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/70 line-clamp-2">
              {featuredExhibition.subtitle}
            </p>
          </div>
          {/* Vertical label on the right */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
            <p className="text-xs text-white/60 uppercase tracking-widest transform -rotate-90 origin-center whitespace-nowrap">
              Exposición actual
            </p>
          </div>
        </Link>

        {/* Destacados Section - Separated from featured banner */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-6">
            Destacados
          </p>

          {/* Exhibition Grid - 3 columns with dark color bars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exhibitions.map((exhibition) => (
              <Link
                key={exhibition.id}
                to={exhibition.link}
                className="group flex flex-col overflow-hidden h-full"
              >
                {/* Top - Title bar (dark) - Larger */}
                <div className="bg-brand-black p-5 md:p-6 min-h-[120px] md:min-h-[140px] flex items-start">
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight line-clamp-4 group-hover:text-brand-primary transition-colors">
                    {exhibition.title}
                  </h3>
                </div>

                {/* Middle - Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray flex-grow">
                  <img
                    src={buildImageUrl(exhibition.image)}
                    alt={exhibition.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom - Label bar (dark) - Larger */}
                <div className="bg-brand-black px-5 md:px-6 py-5 md:py-6 flex items-center justify-between">
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    {exhibition.label}
                  </p>
                  {exhibition.hasIcon && (
                    <div className="w-6 h-6 bg-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
