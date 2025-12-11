import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/layout';
import { BlogGrid } from '../components/blog';
import { mockBlogPosts, filterBlogPosts } from '../data/mock';
import { BLOG_CATEGORIES, BlogCategory } from '../types';
import { cn } from '../utils';

export function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useTranslation();

  // TODO [STRAPI]: Replace with useFetchBlogPosts hook
  const filteredPosts = useMemo(() => {
    return filterBlogPosts(activeCategory === 'all' ? undefined : activeCategory);
  }, [activeCategory]);

  const allCategories = [{ value: 'all', label: t('blog.categories.all') }, ...BLOG_CATEGORIES];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-light-gray border-b border-border-gray">
        <Container>
          <div className="py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-brand-black">
              {t('sections.newsEvents')}
            </h1>
            <p className="mt-2 text-brand-gray">
              Descubre las últimas novedades del mundo del Art Déco.
            </p>
          </div>
        </Container>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-border-gray">
        <Container>
          <div className="flex overflow-x-auto -mb-px">
            {allCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  'px-6 py-4 text-sm font-bold uppercase tracking-wide whitespace-nowrap',
                  'border-b-2 transition-colors',
                  activeCategory === category.value
                    ? 'border-brand-red text-brand-red'
                    : 'border-transparent text-brand-gray hover:text-brand-black'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Blog Grid */}
      <Container>
        <div className="py-12 md:py-16">
          <BlogGrid
            posts={filteredPosts}
            emptyMessage="No se han encontrado publicaciones en esta categoría."
          />
        </div>
      </Container>
    </div>
  );
}
