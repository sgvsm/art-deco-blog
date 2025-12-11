import { Link } from 'react-router-dom';
import { BlogPost, BLOG_CATEGORIES } from '../../types';
import { buildImageUrl, formatDateShort } from '../../utils';
import { Badge } from '../ui';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.value === post.category)?.label || post.category;

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white border border-border-gray overflow-hidden"
    >
      {/* Image Container - Aspect 16:9 */}
      <div className="relative aspect-16/9 overflow-hidden">
        <img
          src={buildImageUrl(post.featured_image?.url)}
          alt={post.featured_image?.alternativeText || post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge */}
        <Badge variant="dark" className="absolute top-3 left-3">
          {categoryLabel}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Date */}
        <p className="text-xs text-meta-gray uppercase tracking-wide">
          {formatDateShort(post.published_date)}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-base md:text-lg font-bold text-brand-black group-hover:text-brand-gray transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-sm text-brand-gray line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}
