import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Container } from '../components/layout';
import { Badge } from '../components/ui';
import { BlogGrid } from '../components/blog';
import { getBlogPostBySlug, mockBlogPosts } from '../data/mock';
import { buildImageUrl, formatDate } from '../utils';
import { BLOG_CATEGORIES } from '../types';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // TODO [STRAPI]: Replace with useFetchBlogPost hook
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // Get related posts (same category)
  const relatedPosts = mockBlogPosts
    .filter((p) => p.id !== post?.id && p.category === post?.category)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-black mb-4">
            Publicación no encontrada
          </h1>
          <Link to="/blog" className="text-meta-gray hover:text-brand-black">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.value === post.category)?.label || post.category;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <img
          src={buildImageUrl(post.featured_image?.url)}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge variant="dark" className="text-sm px-4 py-2">
            {categoryLabel}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <Container>
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center gap-2 text-sm text-meta-gray">
          <Link to="/" className="hover:text-brand-black">
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/blog" className="hover:text-brand-black">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-black line-clamp-1">{post.title}</span>
        </nav>

        <article className="py-8 md:py-12 max-w-3xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap gap-6 text-meta-gray">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-meta-gray" />
              <span>{formatDate(post.published_date)}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-meta-gray" />
                <span>{post.author}</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          <p className="mt-8 text-xl text-brand-gray leading-relaxed">
            {post.excerpt}
          </p>

          {/* Content */}
          {post.content && (
            <div
              className="mt-8 prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-wide
                prose-headings:text-brand-black
                prose-p:text-brand-gray prose-p:leading-relaxed
                prose-a:text-brand-black prose-a:no-underline hover:prose-a:underline
                prose-strong:text-brand-black
                prose-blockquote:border-l-brand-black prose-blockquote:text-brand-gray"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border-gray">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-meta-gray" />
                <span className="text-sm font-bold uppercase tracking-wide text-brand-black">
                  Etiquetas
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-light-gray text-sm text-brand-gray hover:text-brand-black transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 border-t border-border-gray">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-brand-black mb-8">
              Publicaciones Relacionadas
            </h2>
            <BlogGrid posts={relatedPosts} />
          </section>
        )}
      </Container>
    </div>
  );
}
