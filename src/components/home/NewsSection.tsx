import { Link } from 'react-router-dom';
import { Container } from '../layout';
import { getLatestBlogPosts } from '../../data/mock';
import { buildImageUrl, formatDateShort } from '../../utils';

export function NewsSection() {
  // TODO [STRAPI]: Replace with API call using useFetchBlogPosts hook
  const posts = getLatestBlogPosts(4);

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        {/* Section Label */}
        <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-6">
          Noticias
        </p>

        {/* 2x2 News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex gap-4 items-start"
            >
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden bg-light-gray">
                <img
                  src={buildImageUrl(post.featured_image?.url)}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-bold text-brand-black group-hover:text-brand-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-meta-gray uppercase tracking-wide">
                  {formatDateShort(post.published_date)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
