import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from './Container';
import { DecoSteppedFacadeLeft, DecoSteppedFacadeRight, DecoSunlightBar } from '../ui/ArtDecoPatterns';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-black text-white">
      {/* Art Deco Sunlight decoration at top of footer */}
      <DecoSunlightBar className="opacity-50" />

      {/* Main footer content with side facades */}
      <div className="flex items-stretch">
        {/* Left Art Deco Facade */}
        <div className="hidden md:flex items-center">
          <DecoSteppedFacadeLeft className="h-32 opacity-40" color="#C9A227" />
        </div>

        <Container className="flex-1">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Logo & Description */}
            <div>
              <Link to="/" className="text-xl font-bold uppercase tracking-wider">
                Art Déco
              </Link>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/registro"
                    className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    {t('nav.registry')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mapa"
                    className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    {t('nav.map')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    {t('nav.blog')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                {t('footer.contact')}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">
                    Calle del Ejemplo, 123
                    <br />
                    28001 Madrid, España
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <a
                    href="mailto:info@artdeco.org"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    info@artdeco.org
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <a
                    href="tel:+34912001234"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +34 912 00 12 34
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                {t('footer.followUs')}
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-brand-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-brand-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-brand-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>

              {/* Newsletter Signup Placeholder */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">{t('footer.newsletter')}</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 px-3 py-2 bg-gray-800 text-sm text-white placeholder-gray-500 border-0 focus:outline-none focus:ring-1 focus:ring-brand-primary"
                  />
                  <button className="px-4 py-2 bg-brand-primary text-white text-sm font-bold uppercase hover:bg-deco-gold/80 transition-colors">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Container>

        {/* Right Art Deco Facade */}
        <div className="hidden md:flex items-center">
          <DecoSteppedFacadeRight className="h-32 opacity-40" color="#C9A227" />
        </div>
      </div>

      {/* Bottom Bar - full width */}
      <div className="border-t border-gray-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} Art Déco. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacidad"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terminos"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {t('footer.terms')}
              </Link>
              <Link
                to="/cookies"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
