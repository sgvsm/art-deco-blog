import { Link } from 'react-router-dom';
import { Location } from '../../types';
import { buildImageUrl } from '../../utils';

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Link
      to={`/ubicacion/${location.slug}`}
      className="group block bg-white border border-border-gray overflow-hidden hover:border-brand-black transition-colors"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-light-gray">
        <img
          src={buildImageUrl(location.cover_image?.url)}
          alt={location.cover_image?.alternativeText || location.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-brand-black group-hover:text-brand-black transition-colors line-clamp-2">
          {location.title}
        </h3>

        {/* Architect */}
        <p className="mt-1 text-sm text-brand-gray">{location.architect}</p>

        {/* City, Year */}
        <p className="mt-2 text-xs text-meta-gray">
          {location.city}, {location.country} · {location.year}
        </p>
      </div>
    </Link>
  );
}
