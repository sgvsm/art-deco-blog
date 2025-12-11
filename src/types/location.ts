import { StrapiMedia } from './strapi';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  description?: string;

  // Taxonomy - Art Deco Specific
  architect: string;
  year: string;
  period?: string;
  type: string[];
  materials?: string[];
  decorative_motifs?: string[];
  anatomy: string;
  art_deco_style?: string;

  // Geography (WORLDWIDE - Spain primary focus)
  country: string;
  region: string;
  subregion?: string;
  city: string;
  address?: string;
  coordinates: Coordinates;

  // Media
  cover_image: StrapiMedia;
  gallery?: StrapiMedia[];

  // Meta
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  locale?: string;
}

export interface LocationFilters {
  search?: string;
  country?: string;
  region?: string;
  subregion?: string;
  city?: string;
  type?: string[];
  period?: string;
  materials?: string[];
  architect?: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface CityCloudItem {
  city: string;
  count: number;
  region: string;
  country: string;
}
