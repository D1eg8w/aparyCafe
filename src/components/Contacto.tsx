import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import whatsappIcon from "@/assets/whatsapp.svg";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 930 572 244",
    href: "tel:+51930572244",
  },
  {
    icon: whatsappIcon,
    label: "WhatsApp",
    value: "+51 930 572 244",
    href: "https://wa.me/51930572244",
    isImage: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "asfepa@gmail.com",
    href: "mailto:asfepa@gmail.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Centro Poblado de Felipe Pinglo Alva - Luyando, Huánuco, Perú",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Sáb: 8:00 AM - 6:00 PM",
    href: "#",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/asfepa", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/asfepa", label: "Instagram" },
  { icon: whatsappIcon, href: "https://wa.me/51930572244", label: "WhatsApp", isImage: true },
];

export const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get("nombre"),
      telefono: formData.get("telefono"),
      email: formData.get("email"),
      asunto: formData.get("asunto"),
      mensaje: formData.get("mensaje"),
    };

    const whatsappMessage = encodeURIComponent(
      `*¡NUEVA CONSULTA DESDE LA WEB APARY!* ☕\n\n` +
      `👤 *Nombre:* ${data.nombre}\n` +
      `📞 *WhatsApp:* ${data.telefono}\n` +
      `📧 *Email:* ${data.email}\n` +
      `📝 *Asunto:* ${data.asunto}\n\n` +
      `💬 *Mensaje:* \n${data.mensaje}\n\n` +
      `--------------------------------\n` +
      `_Enviado desde el formulario de contacto._`
    );

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    window.open(`https://wa.me/51930572244?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Solicitud procesada",
      description: "Redirigiendo a WhatsApp para enviar tu mensaje.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Listo para Probar Nuestro Café APARY?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estamos aquí para responder tus preguntas, atender pedidos o explorar 
            oportunidades de colaboración. ¡Contáctanos hoy!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 lg:p-10 shadow-soft reveal">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Ej: +51 987 654 321"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-foreground mb-2">
                  Asunto de la Consulta
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje Detallado
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground"
                  placeholder="Escribe aquí tu consulta..."
                />
              </div>
              
              <Button type="submit" variant="default" size="lg" className="w-full shadow-glow" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Redirigiendo...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
                    Enviar a WhatsApp
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {(item as any).isImage ? (
                      <img src={item.icon as string} alt={item.label} className="w-6 h-6 text-primary" />
                    ) : (
                      <item.icon className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-background rounded-2xl p-6">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                Síguenos en Redes
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    {(social as any).isImage ? (
                      <img src={social.icon as string} alt={social.label} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Alianzas */}
            <div className="bg-background rounded-2xl p-6">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                Nuestras Alianzas
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  DEVIDA
                </span>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  AGROBANCO
                </span>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  ONG ECOSELVA
                </span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d-76.5!3d-9.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzAnMDAuMCJTIDc2wrAzMCcwMC4wIlc!5e0!3m2!1ses!2spe!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de ASFEPA en Centro Poblado Felipe Pinglo Alva - Luyando, Huánuco"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
