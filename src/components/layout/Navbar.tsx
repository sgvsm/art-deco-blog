import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from './Container';
import { cn } from '../../utils';
import { DecoSteppedFacadeLeft, DecoSteppedFacadeRight } from '../ui/ArtDecoPatterns';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { to: '/registro', label: t('nav.registry') },
    { to: '/mapa', label: t('nav.map') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/sobre', label: t('nav.about') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-gray">
      <div className="flex items-stretch">
        {/* Left Art Deco Facade */}
        <div className="hidden md:flex items-center h-16 md:h-20">
          <DecoSteppedFacadeLeft className="h-full opacity-60" />
        </div>

        <Container className="flex-1">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Art Deco Typography */}
            <Link
              to="/"
              className="text-xl md:text-2xl text-brand-black uppercase tracking-widest hover:text-brand-black font-deco"
            >
              Art Déco
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium uppercase tracking-wider transition-colors',
                      isActive
                        ? 'text-brand-black'
                        : 'text-meta-gray hover:text-brand-black'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Button */}
              <Link
                to="/registro"
                className="p-2 text-meta-gray hover:text-brand-black transition-colors"
                aria-label={t('nav.search')}
              >
                <Search className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand-black"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>

        {/* Right Art Deco Facade */}
        <div className="hidden md:flex items-center h-16 md:h-20">
          <DecoSteppedFacadeRight className="h-full opacity-60" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-gray">
          <Container>
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block py-2 text-lg font-medium uppercase tracking-wider',
                      isActive ? 'text-brand-black' : 'text-meta-gray'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
