import { Link } from 'react-router-dom';
import { Container } from '../layout';

export function EncyclopediaNewsletter() {
  return (
    <section className="py-12 md:py-16 bg-light-gray">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Encyclopedia Box */}
          <div className="bg-white p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-4">
              Enciclopedia
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-3">
              ¿Qué es la arquitectura Art Déco?: visita la nueva sección de la web
            </h3>
            <Link
              to="/about"
              className="inline-block text-sm font-medium text-brand-black hover:text-brand-primary transition-colors underline underline-offset-4"
            >
              Saber más
            </Link>
          </div>

          {/* Newsletter Box */}
          <div className="bg-white p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-4">
              Suscríbete a nuestro boletín
            </h3>
            {/* TODO [STRAPI]: Connect to newsletter subscription API */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-border-gray focus:border-brand-black outline-none transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 border border-border-gray focus:border-brand-black outline-none transition-colors text-sm"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 border-border-gray"
                />
                <label htmlFor="privacy" className="text-xs text-meta-gray">
                  Acepto la política de privacidad
                </label>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-brand-black text-white font-medium uppercase tracking-wide text-sm hover:bg-brand-primary transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
