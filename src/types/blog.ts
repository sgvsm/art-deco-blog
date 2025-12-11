import { StrapiMedia } from './strapi';

export type BlogCategory = 'news' | 'books' | 'publication' | 'offer' | 'travel';

export interface BlogPost {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;

  // Taxonomy
  category: BlogCategory;
  tags?: string[];

  // Media
  featured_image: StrapiMedia;

  // Meta
  published_date: string;
  author?: string;
  locale?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const BLOG_CATEGORIES: { value: BlogCategory; label: string }[] = [
  { value: 'news', label: 'Notícies' },
  { value: 'books', label: 'Llibres' },
  { value: 'publication', label: 'Publicacions' },
  { value: 'offer', label: 'Ofertes' },
  { value: 'travel', label: 'Viatges' },
];
