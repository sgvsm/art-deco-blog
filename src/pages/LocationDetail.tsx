import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MapPin, Calendar, User, ArrowLeft, ChevronLeft, X } from 'lucide-react';
import { Container } from '../components/layout';
import { Badge, Button } from '../components/ui';
import { LocationGrid } from '../components/locations';
import { getLocationBySlug, mockLocations } from '../data/mock';
import { buildImageUrl } from '../utils';

export function LocationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // TODO [STRAPI]: Replace with useFetchLocation hook
  const location = slug ? getLocationBySlug(slug) : undefined;

  // Get related locations (same city or type)
  const relatedLocations = mockLocations
    .filter(
      (loc) =>
        loc.id !== location?.id &&
        (loc.city === location?.city || loc.type.some((t) => location?.type.includes(t)))
    )
    .slice(0, 4);

  // Combine cover image and gallery for full gallery
  const allImages = location
    ? [location.cover_image, ...(location.gallery || [])].filter(Boolean)
    : [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const goToNextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-gray">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-black mb-4">
            Ubicación no encontrada
          </h1>
          <Link to="/registro" className="text-meta-gray hover:text-brand-black">
            Volver al registro
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Large Image */}
      <div className="relative h-[60vh] md:h-[70vh] bg-brand-black">
        <img
          src={buildImageUrl(location.cover_image?.url)}
          alt={location.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => openLightbox(0)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            to="/registro"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-sm font-medium uppercase tracking-wide text-brand-black hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Container>
            <div className="pb-8">
              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white">
                {location.title}
              </h1>

              {/* Location & Year */}
              <p className="mt-3 text-lg text-white/70">
                {location.city}, {location.country} · {location.year}
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-light-gray border-b border-border-gray">
        <Container>
          <nav className="py-4 flex items-center gap-2 text-sm text-meta-gray">
            <Link to="/" className="hover:text-brand-black">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/registro" className="hover:text-brand-black">
              Registro
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-black">{location.title}</span>
          </nav>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Architect & Meta */}
            <div className="flex flex-wrap gap-8 pb-8 border-b border-border-gray">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-meta-gray" />
                <div>
                  <p className="text-xs text-meta-gray uppercase tracking-wide">Arquitecto</p>
                  <p className="text-lg font-medium text-brand-black">{location.architect}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-meta-gray" />
                <div>
                  <p className="text-xs text-meta-gray uppercase tracking-wide">Año</p>
                  <p className="text-lg font-medium text-brand-black">{location.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-meta-gray" />
                <div>
                  <p className="text-xs text-meta-gray uppercase tracking-wide">Ubicación</p>
                  <p className="text-lg font-medium text-brand-black">
                    {location.city}, {location.region}
                  </p>
                </div>
              </div>
            </div>

            {/* Type Badges */}
            <div className="flex flex-wrap gap-2">
              {location.type.map((type) => (
                <Badge key={type} variant="dark">
                  {type}
                </Badge>
              ))}
              {location.art_deco_style && (
                <Badge variant="outline">{location.art_deco_style}</Badge>
              )}
            </div>

            {/* Description */}
            {location.description && (
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wide text-brand-black mb-4">
                  Descripción
                </h2>
                <p className="text-brand-gray leading-relaxed">{location.description}</p>
              </div>
            )}

            {/* Decorative Motifs */}
            {location.decorative_motifs && location.decorative_motifs.length > 0 && (
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wide text-brand-black mb-4">
                  Motivos Decorativos
                </h2>
                <div className="flex flex-wrap gap-2">
                  {location.decorative_motifs.map((motif) => (
                    <Badge key={motif} variant="outline">
                      {motif}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {allImages.length > 1 && (
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wide text-brand-black mb-4">
                  Galería
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="aspect-4/3 overflow-hidden group bg-light-gray"
                    >
                      <img
                        src={buildImageUrl(image?.url)}
                        alt={image?.alternativeText || `${location.title} - ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Details Card */}
              <div className="bg-light-gray p-6">
                <h3 className="text-lg font-bold uppercase tracking-wide text-brand-black mb-6">
                  Ficha Técnica
                </h3>

                <dl className="space-y-4">
                  <div className="pb-4 border-b border-border-gray">
                    <dt className="text-xs font-medium uppercase tracking-wide text-meta-gray">
                      Tipología
                    </dt>
                    <dd className="mt-1 text-brand-black">{location.anatomy}</dd>
                  </div>

                  {location.period && (
                    <div className="pb-4 border-b border-border-gray">
                      <dt className="text-xs font-medium uppercase tracking-wide text-meta-gray">
                        Período
                      </dt>
                      <dd className="mt-1 text-brand-black">{location.period}</dd>
                    </div>
                  )}

                  {location.materials && location.materials.length > 0 && (
                    <div className="pb-4 border-b border-border-gray">
                      <dt className="text-xs font-medium uppercase tracking-wide text-meta-gray">
                        Materiales
                      </dt>
                      <dd className="mt-1 text-brand-black">
                        {location.materials.join(', ')}
                      </dd>
                    </div>
                  )}

                  {location.address && (
                    <div className="pb-4 border-b border-border-gray">
                      <dt className="text-xs font-medium uppercase tracking-wide text-meta-gray">
                        Dirección
                      </dt>
                      <dd className="mt-1 text-brand-black">{location.address}</dd>
                    </div>
                  )}

                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-meta-gray">
                      País
                    </dt>
                    <dd className="mt-1 text-brand-black">{location.country}</dd>
                  </div>
                </dl>

                {/* View on Map Button */}
                <Link
                  to={`/mapa?lat=${location.coordinates?.lat}&lng=${location.coordinates?.lng}`}
                  className="mt-6 block"
                >
                  <Button variant="secondary" fullWidth icon={<MapPin className="w-4 h-4" />}>
                    Ver en el mapa
                  </Button>
                </Link>
              </div>

              {/* Tags */}
              {location.tags && location.tags.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-brand-black mb-3">
                    Etiquetas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {location.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/registro?search=${encodeURIComponent(tag)}`}
                        className="text-sm text-meta-gray hover:text-brand-black transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Locations */}
        {relatedLocations.length > 0 && (
          <section className="py-12 border-t border-border-gray">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-brand-black mb-8">
              Ubicaciones Relacionadas
            </h2>
            <LocationGrid locations={relatedLocations} />
          </section>
        )}
      </Container>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white hover:text-white/70 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={goToPrevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={goToNextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Image */}
          <img
            src={buildImageUrl(allImages[lightboxIndex]?.url)}
            alt={allImages[lightboxIndex]?.alternativeText || `Image ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
