import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Map, Grid3X3, RotateCcw } from 'lucide-react';
import { Container } from '../components/layout';
import { WorldMap } from '../components/map';
import { Button } from '../components/ui';
import { mockLocations } from '../data/mock';
import { cn } from '../utils';

export function MapExplorer() {
  const [searchParams] = useSearchParams();

  // Get filters from URL params (shared with Registry)
  const filters = {
    search: searchParams.get('search') || '',
    country: searchParams.get('country') || '',
    city: searchParams.get('city') || '',
    type: searchParams.get('type') || '',
    period: searchParams.get('period') || '',
  };

  // Filter locations based on current filters
  // TODO [STRAPI]: Replace with API call
  const filteredLocations = useMemo(() => {
    return mockLocations.filter((loc) => {
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matches =
          loc.title.toLowerCase().includes(searchLower) ||
          loc.architect.toLowerCase().includes(searchLower) ||
          loc.city.toLowerCase().includes(searchLower);
        if (!matches) return false;
      }
      if (filters.country && loc.country !== filters.country) return false;
      if (filters.city && loc.city !== filters.city) return false;
      if (filters.type && !loc.type.includes(filters.type)) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-light-gray border-b border-border-gray">
        <Container>
          <div className="py-4 md:py-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-brand-black">
                Mapa Mundial
              </h1>
              <p className="text-sm text-meta-gray">
                {filteredLocations.length} ubicaciones Art Déco
              </p>
            </div>

            {/* View Toggle & Controls */}
            <div className="flex items-center gap-4">
              <div className="flex border border-border-gray">
                <Link
                  to={`/registry?${searchParams.toString()}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-light-gray transition-colors"
                >
                  <Grid3X3 className="w-4 h-4" />
                  Cuadrícula
                </Link>
                <button
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wide',
                    'bg-brand-black text-white'
                  )}
                >
                  <Map className="w-4 h-4" />
                  Mapa
                </button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                icon={<RotateCcw className="w-4 h-4" />}
                onClick={() => window.location.reload()}
              >
                Restablecer
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        <WorldMap
          locations={filteredLocations}
          height="calc(100vh - 180px)"
        />

        {/* Legend / Info Panel */}
        <div className="absolute bottom-4 left-4 bg-white p-4 shadow-lg max-w-xs z-[1000]">
          <h3 className="font-bold text-sm uppercase tracking-wide text-brand-black mb-2">
            Leyenda
          </h3>
          <div className="flex items-center gap-2 text-sm text-brand-gray">
            <div className="w-4 h-4 bg-brand-red rounded-full" />
            <span>Ubicación Art Déco</span>
          </div>
          <p className="mt-3 text-xs text-meta-gray">
            Haz clic en un marcador para ver los detalles del edificio.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="absolute top-4 right-4 bg-white p-4 shadow-lg z-[1000]">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-brand-red">
                {filteredLocations.length}
              </p>
              <p className="text-xs text-meta-gray uppercase">Edificios</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-red">
                {new Set(filteredLocations.map((l) => l.country)).size}
              </p>
              <p className="text-xs text-meta-gray uppercase">Países</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
