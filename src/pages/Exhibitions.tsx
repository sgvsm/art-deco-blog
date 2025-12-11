import { Link } from 'react-router-dom';
import { Container } from '../components/layout';
import { buildImageUrl } from '../utils';

// Exhibition card type
type ExhibitionCard = {
  id: number;
  title: string;
  slug: string;
  image?: string;
  label: string;
  hasIcon?: boolean;
};

// TODO [STRAPI]: Replace with API call for exhibitions
const allExhibitions: ExhibitionCard[] = [
  {
    id: 1,
    title: 'Casas Art Déco en Sudamérica: Paisajes-Arquitecturas',
    slug: 'art-deco-houses-south-america',
    label: 'Exposición destacada',
  },
  {
    id: 2,
    title: 'Arquitectura Streamline Moderne en España',
    slug: 'streamline-moderne-spain',
    image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80',
    label: 'Exposición temporal',
  },
  {
    id: 3,
    title: 'Vivienda social en estilo Art Déco III: desde la creación del Ministerio de la Vivienda en 1957 hasta el final del régimen franquista',
    slug: 'social-housing-art-deco-iii',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
    label: 'Próximamente · Exposición temporal',
    hasIcon: true,
  },
  {
    id: 4,
    title: 'Vivienda social en estilo Art Déco II: desde el final de la Guerra Civil hasta la creación del Ministerio de la Vivienda en 1957',
    slug: 'social-housing-art-deco-ii',
    label: 'Exposición temporal',
  },
  {
    id: 5,
    title: 'Vivienda social en estilo Art Déco I: desde los inicios de la intervención pública hasta la Guerra Civil',
    slug: 'social-housing-art-deco-i',
    label: 'Exposición temporal',
  },
  {
    id: 6,
    title: 'Luces, cámara, acción: El cine en el movimiento Art Déco',
    slug: 'filming-art-deco-movement',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 7,
    title: 'Vida comunitaria',
    slug: 'community-living',
    image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
    label: 'Exposición temporal',
  },
  {
    id: 8,
    title: 'Arquitectura hotelera en la Costa del Sol',
    slug: 'hotel-architecture-costa-del-sol',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 9,
    title: 'Miguel López González: El movimiento Art Déco como principio',
    slug: 'miguel-lopez-gonzalez',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 10,
    title: 'Cines Art Déco: Los espacios que nos hicieron soñar',
    slug: 'art-deco-cinemas',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 11,
    title: 'Pueblos nuevos bajo el régimen franquista',
    slug: 'new-towns-franco-regime',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 12,
    title: 'Arquitectura de montaña',
    slug: 'mountain-architecture',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    label: 'Exposición temporal',
  },
  {
    id: 13,
    title: 'España motorizada: De los pioneros del vehículo privado al Seat 600',
    slug: 'motorized-spain',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 14,
    title: 'La Escuela de Barcelona',
    slug: 'barcelona-school',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 15,
    title: 'Oteiza: Una reflexión sobre el espacio',
    slug: 'oteiza-reflection-space',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 16,
    title: 'Industria y energía en la costa atlántica norte de España',
    slug: 'industry-energy-atlantic-coast',
    label: 'Exposición temporal',
    hasIcon: true,
  },
  {
    id: 17,
    title: 'Los inicios del turismo en la Costa Brava',
    slug: 'tourism-costa-brava',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
    label: 'Exposición temporal',
  },
];

// Featured exhibition for hero banner
const featuredExhibition = {
  title: 'Arquitectura Art Déco frente al mar',
  subtitle: 'Un recorrido por obras que evocan la modernidad marítima desde la edad dorada de la arquitectura Art Déco en todo el mundo.',
  image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80',
  slug: 'art-deco-facing-the-sea',
};

function ExhibitionCard({ exhibition }: { exhibition: ExhibitionCard }) {
  const hasImage = !!exhibition.image;

  return (
    <Link
      to={`/exposiciones/${exhibition.slug}`}
      className="group flex flex-col overflow-hidden h-full"
    >
      {/* Top - Title bar (dark) - Larger */}
      <div className="bg-brand-black p-5 md:p-6 min-h-[120px] md:min-h-[140px] flex items-start">
        <h3 className="text-white text-sm md:text-base font-bold leading-tight line-clamp-4 group-hover:text-brand-primary transition-colors">
          {exhibition.title}
          {exhibition.hasIcon && (
            <span className="inline-block ml-1 align-text-top">
              <svg className="w-3 h-3 inline text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              </svg>
            </span>
          )}
        </h3>
      </div>

      {/* Middle - Image or dark gray space */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray flex-grow">
        {hasImage && (
          <img
            src={buildImageUrl(exhibition.image)}
            alt={exhibition.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Bottom - Label bar (dark gray) - Larger */}
      <div className="bg-brand-gray px-5 md:px-6 py-4 md:py-5">
        <p className="text-white/60 text-xs uppercase tracking-wider">
          {exhibition.label}
        </p>
      </div>
    </Link>
  );
}

export function Exhibitions() {
  return (
    <div className="bg-light-gray min-h-screen">
      <Container>
        {/* Section Label */}
        <div className="pt-8 pb-6">
          <p className="text-xs font-medium uppercase tracking-wider text-meta-gray">
            Exposiciones
          </p>
        </div>

        {/* Featured Exhibition Banner */}
        <Link
          to={`/exposiciones/${featuredExhibition.slug}`}
          className="group relative block w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-brand-black mb-6"
        >
          <img
            src={featuredExhibition.image}
            alt={featuredExhibition.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 max-w-2xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {featuredExhibition.title}
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/70 line-clamp-2">
              {featuredExhibition.subtitle}
            </p>
          </div>
          {/* Vertical label on the right */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
            <p className="text-xs text-white/60 uppercase tracking-widest transform -rotate-90 origin-center whitespace-nowrap">
              Exposición actual · Exposición temporal
            </p>
          </div>
        </Link>

        {/* Exhibition Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
          {allExhibitions.map((exhibition) => (
            <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
          ))}
        </div>
      </Container>
    </div>
  );
}
