import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/layout';
import { Input, Button } from '../components/ui';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO [PHASE2]: Connect to Strapi contact form submission
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center py-20">
            <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-6" />
            <h1 className="text-3xl font-bold uppercase tracking-wider text-brand-black mb-4">
              {t('contact.successTitle')}
            </h1>
            <p className="text-brand-gray mb-8">
              {t('contact.successMessage')}
            </p>
            <Button variant="primary" onClick={() => setIsSubmitted(false)}>
              Enviar otro mensaje
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-light-gray border-b border-border-gray">
        <Container>
          <div className="py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-brand-black">
              {t('contact.title')}
            </h1>
            <p className="mt-2 text-brand-gray">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-brand-black border-l-4 border-brand-red pl-4 mb-8">
              Envíanos un mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label={t('contact.name')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />

              <Input
                label={t('contact.email')}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />

              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold uppercase tracking-wide text-brand-black mb-2"
                >
                  {t('contact.subject')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-gray bg-white text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="general">{t('contact.subjects.general')}</option>
                  <option value="research">{t('contact.subjects.research')}</option>
                  <option value="membership">{t('contact.subjects.membership')}</option>
                  <option value="press">{t('contact.subjects.press')}</option>
                  <option value="other">{t('contact.subjects.other')}</option>
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold uppercase tracking-wide text-brand-black mb-2"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-border-gray bg-white text-brand-black placeholder-meta-gray focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                icon={<Send className="w-4 h-4" />}
              >
                {t('contact.submit')}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-brand-black border-l-4 border-brand-red pl-4 mb-8">
              Información de Contacto
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Dirección</h3>
                  <p className="mt-1 text-brand-gray">
                    Calle del Ejemplo, 123
                    <br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Email</h3>
                  <a
                    href="mailto:info@artdecoiberico.org"
                    className="mt-1 text-brand-gray hover:text-brand-red"
                  >
                    info@artdecoiberico.org
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Teléfono</h3>
                  <a
                    href="tel:+34912001234"
                    className="mt-1 text-brand-gray hover:text-brand-red"
                  >
                    +34 912 00 12 34
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black">Horario de Atención</h3>
                  <p className="mt-1 text-brand-gray">
                    Lunes - Viernes: 9:00 - 18:00
                    <br />
                    Sábado - Domingo: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 aspect-video bg-light-gray border border-border-gray flex items-center justify-center">
              <p className="text-meta-gray text-sm uppercase tracking-wide">
                Mapa de Google (Próximamente)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
