import { Container } from '../components/layout';
import { Building2, Users, Globe, Award } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
          alt="Art Deco Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white text-center">
            La Fundación
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <Container>
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-brand-black border-b-4 border-brand-red pb-4 inline-block">
              Nuestra Misión
            </h2>
            <p className="mt-8 text-lg text-brand-gray leading-relaxed">
              Art Déco Ibérico es una organización sin ánimo de lucro dedicada a la
              documentación, preservación y difusión del patrimonio arquitectónico y artístico
              Art Déco en todo el mundo, con especial atención a la herencia ibérica.
            </p>
            <p className="mt-4 text-lg text-brand-gray leading-relaxed">
              Nuestro objetivo es crear el registro más completo de arquitectura Art Déco,
              conectando investigadores, entusiastas e instituciones para proteger este
              legado cultural único.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-light-gray -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Building2 className="w-12 h-12 mx-auto text-brand-red mb-4" />
                <p className="text-4xl font-bold text-brand-black">2.476</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-meta-gray">
                  Edificios Registrados
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto text-brand-red mb-4" />
                <p className="text-4xl font-bold text-brand-black">24</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-meta-gray">
                  Países
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto text-brand-red mb-4" />
                <p className="text-4xl font-bold text-brand-black">1.200+</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-meta-gray">
                  Miembros
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto text-brand-red mb-4" />
                <p className="text-4xl font-bold text-brand-black">15</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-meta-gray">
                  Años de Historia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-brand-black border-l-4 border-brand-red pl-4">
                Nuestra Historia
              </h2>
              <div className="mt-8 space-y-4 text-brand-gray">
                <p>
                  Fundada en 2009 por un grupo de historiadores del arte y arquitectos
                  españoles, Art Déco Ibérico nació de la pasión por preservar
                  la arquitectura del período de entreguerras.
                </p>
                <p>
                  Lo que comenzó como un proyecto local para documentar los edificios
                  Art Déco de Madrid se ha convertido en una iniciativa global con
                  colaboradores en más de 20 países.
                </p>
                <p>
                  Hoy, nuestro registro incluye miles de edificios, desde los rascacielos
                  de Nueva York hasta los cines de Buenos Aires, pasando por los hoteles
                  de Miami Beach y los mercados de Lisboa.
                </p>
              </div>
            </div>
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80"
                alt="Chrysler Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Team Section Placeholder */}
        <section className="py-16 md:py-20 border-t border-border-gray">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-brand-black border-l-4 border-brand-red pl-4 mb-12">
            El Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'María García', role: 'Directora', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
              { name: 'Juan Puig', role: 'Jefe de Investigación', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
              { name: 'Ana López', role: 'Coordinadora Editorial', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-brand-black">{member.name}</h3>
                <p className="text-sm text-meta-gray uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
