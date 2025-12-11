import { Container } from '../layout';

export function PartnersSection() {
  // TODO [STRAPI]: Replace with API call for partner logos
  const partners = [
    { id: 1, name: 'Sociedad Art Déco', logo: null },
    { id: 2, name: 'Fundación Patrimonio Arquitectónico', logo: null },
    { id: 3, name: 'Consejo Internacional de Diseño', logo: null },
    { id: 4, name: 'Sociedad de Preservación Histórica', logo: null },
    { id: 5, name: 'Fundación Arquitectura Moderna', logo: null },
    { id: 6, name: 'Instituto del Patrimonio Cultural', logo: null },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-border-gray">
      <Container>
        {/* Section Label */}
        <p className="text-xs font-medium uppercase tracking-wider text-meta-gray mb-8 text-center">
          Patrocinadores y miembros institucionales
        </p>

        {/* Partner Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center h-12 px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              {/* Placeholder for partner logos - using text as placeholders */}
              <span className="text-sm font-medium text-meta-gray whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
