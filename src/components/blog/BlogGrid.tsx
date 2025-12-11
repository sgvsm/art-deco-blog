import { BlogPost } from '../../types';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  emptyMessage?: string;
}

export function BlogGrid({
  posts,
  emptyMessage = 'No se han encontrado publicaciones.',
}: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-meta-gray">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
