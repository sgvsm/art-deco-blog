import { Link } from 'react-router-dom';
import { Download, Search } from 'lucide-react';
import { Container } from '../layout';

export function PublicationsThesis() {
  // TODO [STRAPI]: Replace with API call for latest publication
  const latestPublication = {
    title: 'Art Déco Marítimo. Arquitecturas del paisaje costero, 1925-1975. XIII Congreso Internacional Art Déco',
    image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=600&q=80',
    isFree: true,
    link: '/blog',
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publications */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-6">
              Publicaciones
            </p>
            <Link to={latestPublication.link} className="group flex gap-4">
              {/* Publication Cover */}
              <div className="flex-shrink-0 w-32 md:w-40 aspect-[3/4] overflow-hidden bg-light-gray">
                <img
                  src={latestPublication.image}
                  alt={latestPublication.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-bold text-brand-black group-hover:text-brand-primary transition-colors line-clamp-4">
                  {latestPublication.title}
                </h3>
                {latestPublication.isFree && (
                  <div className="mt-3 flex items-center gap-2 text-meta-gray">
                    <Download className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wide">Gratis</span>
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Thesis Database */}
          <div className="bg-light-gray p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-4">
              Tesis
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-2">
              Base de datos de investigación Art Déco de tesis doctorales
            </h3>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-brand-black">Busca entre</p>
                <p className="text-lg font-bold text-brand-black">más de 400</p>
                <p className="text-lg font-bold text-brand-black">tesis doctorales</p>
              </div>
              <Link
                to="/registro"
                className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-black hover:bg-brand-black hover:text-white transition-colors"
              >
                <Search className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
