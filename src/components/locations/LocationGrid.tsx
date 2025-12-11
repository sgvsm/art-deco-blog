import { Location } from '../../types';
import { LocationCard } from './LocationCard';

interface LocationGridProps {
  locations: Location[];
  emptyMessage?: string;
}

export function LocationGrid({
  locations,
  emptyMessage = 'No se han encontrado resultados.',
}: LocationGridProps) {
  if (locations.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-meta-gray">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
