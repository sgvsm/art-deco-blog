import { Link } from 'react-router-dom';
import { Location } from '../../types';
import { buildImageUrl } from '../../utils';
import { ArrowRight } from 'lucide-react';

interface MapPopupProps {
  location: Location;
}

export function MapPopup({ location }: MapPopupProps) {
  return (
    <div className="w-64">
      {/* Thumbnail */}
      <div className="w-full h-32 overflow-hidden">
        <img
          src={buildImageUrl(location.cover_image?.url)}
          alt={location.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-bold text-sm text-brand-black uppercase tracking-wide">
          {location.title}
        </h3>
        <p className="text-xs text-meta-gray mt-1">
          {location.city}, {location.country}
        </p>
        <p className="text-xs text-brand-gray mt-1">
          {location.architect} · {location.year}
        </p>

        <Link
          to={`/locations/${location.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-red hover:text-red-700"
        >
          Ver detalles
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
