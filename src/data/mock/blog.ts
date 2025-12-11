import { BlogPost } from '../../types';

// TODO [STRAPI]: Replace with API call to /api/blog-posts?populate=*
export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Nueva Exposición: Art Déco en Barcelona',
    slug: 'nueva-exposicion-art-deco-barcelona',
    excerpt:
      'Descubre el patrimonio arquitectónico Art Déco de Barcelona en esta nueva exposición en el MUHBA.',
    content: `
      <p>El Museo de Historia de Barcelona (MUHBA) inaugura una nueva exposición dedicada a la arquitectura Art Déco de la ciudad.</p>
      <p>La exposición recoge fotografías, planos y maquetas de más de 50 edificios construidos entre 1920 y 1940, mostrando la riqueza de este estilo en la capital catalana.</p>
      <h2>Horarios</h2>
      <p>De martes a sábado: 10:00 - 19:00</p>
      <p>Domingos y festivos: 10:00 - 14:30</p>
    `,
    category: 'news',
    published_date: '2024-01-15',
    author: 'María García',
    featured_image: {
      id: 1,
      url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80',
      alternativeText: 'Exposición Art Déco Barcelona',
      width: 800,
      height: 450,
    },
    tags: ['exposición', 'barcelona', 'muhba'],
  },
  {
    id: 2,
    title: 'Nuevo Libro: "Art Déco Ibérico"',
    slug: 'nuevo-libro-art-deco-iberico',
    excerpt:
      'Una guía completa de la arquitectura Art Déco en España y Portugal, con más de 200 edificios documentados.',
    content: `
      <p>Acabamos de publicar "Art Déco Ibérico", una guía exhaustiva que documenta la arquitectura Art Déco en la Península Ibérica.</p>
      <p>El libro incluye fotografías en color de más de 200 edificios, con descripciones detalladas y mapas para facilitar las visitas.</p>
    `,
    category: 'books',
    published_date: '2024-01-10',
    author: 'Juan Puig',
    featured_image: {
      id: 2,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80',
      alternativeText: 'Libro Art Déco Ibérico',
      width: 800,
      height: 450,
    },
    tags: ['libro', 'publicación', 'guía'],
  },
  {
    id: 3,
    title: 'Ruta Art Déco por Madrid',
    slug: 'ruta-art-deco-madrid',
    excerpt:
      'Únete a nuestra ruta guiada por los edificios Art Déco más emblemáticos de Madrid.',
    content: `
      <p>Organizamos una ruta guiada por los edificios Art Déco más representativos de Madrid.</p>
      <p>La ruta incluye visitas al Edificio Carrión, el Edificio de la Telefónica y otras joyas arquitectónicas.</p>
    `,
    category: 'travel',
    published_date: '2024-01-05',
    author: 'Ana López',
    featured_image: {
      id: 3,
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
      alternativeText: 'Ruta Art Déco Madrid',
      width: 800,
      height: 450,
    },
    tags: ['ruta', 'madrid', 'viaje'],
  },
  {
    id: 4,
    title: 'Conferencia Internacional de Art Déco 2024',
    slug: 'conferencia-internacional-art-deco-2024',
    excerpt:
      'Barcelona acogerá la Conferencia Internacional de Art Déco el próximo mes de mayo.',
    content: `
      <p>La Conferencia Internacional de Art Déco 2024 se celebrará en Barcelona del 15 al 18 de mayo.</p>
      <p>Expertos de todo el mundo se reunirán para discutir la preservación y promoción del patrimonio Art Déco.</p>
    `,
    category: 'news',
    published_date: '2023-12-20',
    author: 'Pedro Martí',
    featured_image: {
      id: 4,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      alternativeText: 'Conferencia Art Déco',
      width: 800,
      height: 450,
    },
    tags: ['conferencia', 'barcelona', 'internacional'],
  },
  {
    id: 5,
    title: 'Oferta: Suscripción Anual con Descuento',
    slug: 'oferta-suscripcion-anual',
    excerpt:
      'Aprovecha el 20% de descuento en la suscripción anual hasta el 31 de enero.',
    content: `
      <p>Hazte miembro de Art Déco Ibérico con un 20% de descuento en la suscripción anual.</p>
      <p>Incluye acceso a todas las publicaciones, descuentos en rutas y entradas preferentes a exposiciones.</p>
    `,
    category: 'offer',
    published_date: '2024-01-01',
    author: 'Equipo Editorial',
    featured_image: {
      id: 5,
      url: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80',
      alternativeText: 'Oferta Suscripción',
      width: 800,
      height: 450,
    },
    tags: ['oferta', 'suscripción', 'descuento'],
  },
  {
    id: 6,
    title: 'Publicación: Revista Trimestral Núm. 45',
    slug: 'revista-trimestral-num-45',
    excerpt:
      'El nuevo número de nuestra revista trimestral ya está disponible, con un especial sobre el Art Déco en Lisboa.',
    content: `
      <p>Ya podéis descargar el número 45 de nuestra revista trimestral.</p>
      <p>Este número incluye un especial dedicado a la arquitectura Art Déco de Lisboa.</p>
    `,
    category: 'publication',
    published_date: '2023-12-15',
    author: 'Equipo Editorial',
    featured_image: {
      id: 6,
      url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80',
      alternativeText: 'Revista Trimestral',
      width: 800,
      height: 450,
    },
    tags: ['revista', 'publicación', 'lisboa'],
  },
];

// Helper to get latest blog posts
export const getLatestBlogPosts = (count: number = 6): BlogPost[] => {
  return mockBlogPosts.slice(0, count);
};

// Helper to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return mockBlogPosts.find((post) => post.slug === slug);
};

// Helper to filter blog posts by category
export const filterBlogPosts = (category?: string): BlogPost[] => {
  if (!category || category === 'all') return mockBlogPosts;
  return mockBlogPosts.filter((post) => post.category === category);
};
