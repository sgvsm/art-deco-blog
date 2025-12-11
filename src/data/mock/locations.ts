import { Location } from '../../types';

// TODO [STRAPI]: Replace with API call to /api/locations?populate=*
export const mockLocations: Location[] = [
  {
    id: 1,
    title: 'Chrysler Building',
    slug: 'chrysler-building',
    architect: 'William Van Alen',
    year: '1930',
    city: 'New York',
    region: 'New York',
    country: 'USA',
    type: ['Comercial'],
    anatomy: 'building',
    decorative_motifs: ['sunburst', 'eagles', 'hubcaps', 'chevrons'],
    art_deco_style: 'Zigzag Moderne',
    period: '1920-1930',
    coordinates: { lat: 40.7516, lng: -73.9755 },
    cover_image: {
      id: 1,
      url: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80',
      alternativeText: 'Chrysler Building New York Art Deco spire',
      width: 800,
      height: 600,
    },
    description: 'The Chrysler Building is an Art Deco masterpiece and one of the most recognizable skyscrapers in the world.',
  },
  {
    id: 2,
    title: 'Miami Beach Art Deco District',
    slug: 'miami-beach-art-deco-district',
    architect: 'Various',
    year: '1923-1943',
    city: 'Miami Beach',
    region: 'Florida',
    country: 'USA',
    type: ['Residencial', 'Comercial'],
    anatomy: 'district',
    art_deco_style: 'Tropical Deco',
    period: '1920-1940',
    coordinates: { lat: 25.7825, lng: -80.134 },
    cover_image: {
      id: 2,
      url: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
      alternativeText: 'Miami Beach Art Deco District colorful buildings',
      width: 800,
      height: 600,
    },
    description: 'The Miami Beach Architectural District is the largest collection of Art Deco architecture in the world.',
  },
  {
    id: 3,
    title: 'Empire State Building',
    slug: 'empire-state-building',
    architect: 'Shreve, Lamb & Harmon',
    year: '1931',
    city: 'New York',
    region: 'New York',
    country: 'USA',
    type: ['Comercial'],
    anatomy: 'building',
    decorative_motifs: ['geometric', 'setbacks', 'aluminum spandrels'],
    art_deco_style: 'Zigzag Moderne',
    period: '1930-1940',
    coordinates: { lat: 40.7484, lng: -73.9857 },
    cover_image: {
      id: 3,
      url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&q=80',
      alternativeText: 'Empire State Building Art Deco skyscraper',
      width: 800,
      height: 600,
    },
    description: 'The Empire State Building exemplifies Art Deco architecture with its distinctive setbacks and geometric patterns.',
  },
  {
    id: 4,
    title: 'Edificio Carrión (Capitol)',
    slug: 'edificio-carrion-capitol',
    architect: 'Luis Martínez-Feduchi',
    year: '1933',
    city: 'Madrid',
    region: 'Comunidad de Madrid',
    country: 'España',
    type: ['Comercial', 'Cultural'],
    anatomy: 'building',
    art_deco_style: 'Streamline Moderne',
    period: '1930-1940',
    coordinates: { lat: 40.4203, lng: -3.7059 },
    cover_image: {
      id: 4,
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
      alternativeText: 'Edificio Carrión Capitol Madrid',
      width: 800,
      height: 600,
    },
    description: 'El Edificio Carrión es un icónico edificio Art Déco en la Gran Vía de Madrid.',
  },
  {
    id: 5,
    title: 'Palacio Barolo',
    slug: 'palacio-barolo',
    architect: 'Mario Palanti',
    year: '1923',
    city: 'Buenos Aires',
    region: 'Buenos Aires',
    country: 'Argentina',
    type: ['Comercial'],
    anatomy: 'building',
    decorative_motifs: ['Dante-inspired', 'condors', 'dragons'],
    period: '1920-1930',
    coordinates: { lat: -34.6095, lng: -58.3861 },
    cover_image: {
      id: 5,
      url: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
      alternativeText: 'Palacio Barolo Buenos Aires',
      width: 800,
      height: 600,
    },
    description: 'El Palacio Barolo es un edificio único inspirado en la Divina Comedia de Dante.',
  },
  {
    id: 6,
    title: 'Guardian Building',
    slug: 'guardian-building',
    architect: 'Wirt C. Rowland',
    year: '1929',
    city: 'Detroit',
    region: 'Michigan',
    country: 'USA',
    type: ['Comercial'],
    anatomy: 'building',
    decorative_motifs: ['Aztec motifs', 'colorful tiles', 'geometric patterns'],
    art_deco_style: 'Zigzag Moderne',
    period: '1920-1930',
    coordinates: { lat: 42.3314, lng: -83.0458 },
    cover_image: {
      id: 6,
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      alternativeText: 'Guardian Building Detroit Art Deco',
      width: 800,
      height: 600,
    },
    description: 'The Guardian Building is known as the "Cathedral of Finance" for its elaborate Art Deco interior.',
  },
  {
    id: 7,
    title: 'Palais de Chaillot',
    slug: 'palais-de-chaillot',
    architect: 'Jacques Carlu, Louis-Hippolyte Boileau, Léon Azéma',
    year: '1937',
    city: 'Paris',
    region: 'Île-de-France',
    country: 'France',
    type: ['Cultural'],
    anatomy: 'building',
    decorative_motifs: ['classical moderne', 'sculptures', 'gilded inscriptions'],
    period: '1930-1940',
    coordinates: { lat: 48.8626, lng: 2.2887 },
    cover_image: {
      id: 7,
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      alternativeText: 'Palais de Chaillot Paris',
      width: 800,
      height: 600,
    },
    description: 'El Palacio de Chaillot representa el estilo Art Déco tardío con sus líneas depuradas.',
  },
  {
    id: 8,
    title: 'Eastern Columbia Building',
    slug: 'eastern-columbia-building',
    architect: 'Claud Beelman',
    year: '1929',
    city: 'Los Angeles',
    region: 'California',
    country: 'USA',
    type: ['Comercial', 'Residencial'],
    anatomy: 'building',
    decorative_motifs: ['turquoise terracotta', 'clock tower', 'zigzag patterns'],
    art_deco_style: 'Zigzag Moderne',
    period: '1920-1930',
    coordinates: { lat: 34.0442, lng: -118.2551 },
    cover_image: {
      id: 8,
      url: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80',
      alternativeText: 'Eastern Columbia Building Los Angeles turquoise',
      width: 800,
      height: 600,
    },
    description: 'The Eastern Columbia Building features a distinctive turquoise terracotta facade.',
  },
  {
    id: 9,
    title: 'Hoover Building',
    slug: 'hoover-building',
    architect: 'Wallis, Gilbert and Partners',
    year: '1933',
    city: 'London',
    region: 'Greater London',
    country: 'United Kingdom',
    type: ['Industrial'],
    anatomy: 'building',
    art_deco_style: 'Streamline Moderne',
    decorative_motifs: ['Egyptian influences', 'colorful facades', 'geometric windows'],
    period: '1930-1940',
    coordinates: { lat: 51.5308, lng: -0.3818 },
    cover_image: {
      id: 9,
      url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      alternativeText: 'Hoover Building London Art Deco factory',
      width: 800,
      height: 600,
    },
    description: 'El Hoover Building es una antigua fábrica Art Déco al oeste de Londres.',
  },
  {
    id: 10,
    title: 'Rockefeller Center',
    slug: 'rockefeller-center',
    architect: 'Raymond Hood',
    year: '1939',
    city: 'New York',
    region: 'New York',
    country: 'USA',
    type: ['Comercial', 'Cultural'],
    anatomy: 'complex',
    decorative_motifs: ['Atlas sculpture', 'gilded reliefs', 'limestone facades'],
    art_deco_style: 'Streamline Moderne',
    period: '1930-1940',
    coordinates: { lat: 40.7587, lng: -73.9787 },
    cover_image: {
      id: 10,
      url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
      alternativeText: 'Rockefeller Center New York',
      width: 800,
      height: 600,
    },
    description: 'Rockefeller Center is a National Historic Landmark known for its Art Deco design.',
  },
  {
    id: 11,
    title: 'The Niagara Mohawk Building',
    slug: 'niagara-mohawk-building',
    architect: 'Bley & Lyman',
    year: '1932',
    city: 'Syracuse',
    region: 'New York',
    country: 'USA',
    type: ['Comercial'],
    anatomy: 'building',
    decorative_motifs: ['stainless steel', 'illuminated tower', 'Spirit of Light statue'],
    art_deco_style: 'Zigzag Moderne',
    period: '1930-1940',
    coordinates: { lat: 43.0481, lng: -76.1474 },
    cover_image: {
      id: 11,
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alternativeText: 'Niagara Mohawk Building Syracuse',
      width: 800,
      height: 600,
    },
    description: 'The Niagara Mohawk Building features a distinctive stainless steel tower.',
  },
  {
    id: 12,
    title: 'Cine Barceló',
    slug: 'cine-barcelo',
    architect: 'Luis Gutiérrez Soto',
    year: '1931',
    city: 'Madrid',
    region: 'Comunidad de Madrid',
    country: 'España',
    type: ['Cultural', 'Comercial'],
    anatomy: 'building',
    art_deco_style: 'Streamline Moderne',
    decorative_motifs: ['curved facades', 'porthole windows', 'neon lighting'],
    period: '1930-1940',
    coordinates: { lat: 40.4284, lng: -3.7028 },
    cover_image: {
      id: 12,
      url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
      alternativeText: 'Cine Barceló Madrid Streamline',
      width: 800,
      height: 600,
    },
    description: 'El Cine Barceló es uno de los mejores ejemplos de arquitectura Streamline Moderne en España.',
  },
];

// Helper to get latest locations
export const getLatestLocations = (count: number = 8): Location[] => {
  return mockLocations.slice(0, count);
};

// Helper to get location by slug
export const getLocationBySlug = (slug: string): Location | undefined => {
  return mockLocations.find((loc) => loc.slug === slug);
};

// Helper to filter locations
export const filterLocations = (filters: {
  country?: string;
  city?: string;
  type?: string;
  search?: string;
}): Location[] => {
  return mockLocations.filter((loc) => {
    if (filters.country && loc.country !== filters.country) return false;
    if (filters.city && loc.city !== filters.city) return false;
    if (filters.type && !loc.type.includes(filters.type)) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        loc.title.toLowerCase().includes(searchLower) ||
        loc.architect.toLowerCase().includes(searchLower) ||
        loc.city.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });
};

// Helper to get featured/exhibition locations (3 items for destacados)
export const getFeaturedLocations = (count: number = 3): Location[] => {
  const featuredIds = [1, 2, 3];
  const featured = featuredIds
    .map((id) => mockLocations.find((loc) => loc.id === id))
    .filter((loc): loc is Location => loc !== undefined);
  return featured.slice(0, count);
};

// Hero gallery images - mix of vertical (9:16) and horizontal (16:9) for scrolling gallery
// Majority are horizontal, some vertical for visual variety
// TODO [STRAPI]: Replace with API call for hero gallery images
export const heroGalleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
    alt: 'Miami Art Deco buildings',
    aspectRatio: 'horizontal' as const,
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&q=80',
    alt: 'Chrysler Building spire detail',
    aspectRatio: 'vertical' as const,
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    alt: 'Art Deco skyscraper looking up',
    aspectRatio: 'horizontal' as const,
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    alt: 'Paris Art Deco architecture',
    aspectRatio: 'horizontal' as const,
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1546436836-07a91091f160?w=600&q=80',
    alt: 'Empire State Building facade',
    aspectRatio: 'vertical' as const,
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
    alt: 'Rockefeller Center detail',
    aspectRatio: 'horizontal' as const,
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80',
    alt: 'Art Deco building facade',
    aspectRatio: 'horizontal' as const,
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80',
    alt: 'Madrid Gran Via architecture',
    aspectRatio: 'vertical' as const,
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    alt: 'Cinema Art Deco interior',
    aspectRatio: 'horizontal' as const,
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Art Deco tower detail',
    aspectRatio: 'horizontal' as const,
  },
];
