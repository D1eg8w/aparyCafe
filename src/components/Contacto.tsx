import { useState, type FormEvent } from "react";
import { Building2, Clock3, Facebook, Handshake, Instagram, Mail, MapPin, MapPinned, MessageCircle, Phone, Send, ShoppingBag, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import whatsappIcon from "@/assets/whatsapp.svg";

const inquiryTypes = [
  { label: "Compra particular / tienda", icon: ShoppingBag },
  { label: "Cafeterías / mayorista", icon: Building2 },
  { label: "Visitas / alianzas", icon: Sprout },
];

const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Centro+Poblado+Felipe+Pinglo+Alva%2C+Luyando%2C+Hu%C3%A1nuco%2C+Per%C3%BA";
const whatsappUrl = "https://wa.me/51930572244";
const whatsappMessage = "Hola, quisiera consultar por los cafés APARY.";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1csBoBsyEW/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/apary_cafe86?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==", label: "Instagram" },
];

export const Contacto = () => {
  const { toast } = useToast();
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0].label);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("nombre"),
      phone: formData.get("telefono"),
      email: formData.get("email"),
      subject: formData.get("asunto"),
      message: formData.get("mensaje"),
    };
    const message = encodeURIComponent(
      `*CONSULTA DESDE LA WEB APARY* ☕\n\n` +
      `*Tipo de consulta:* ${inquiryType}\n` +
      `*Nombre:* ${data.name}\n` +
      `*Teléfono:* ${data.phone}\n` +
      `*Correo:* ${data.email}\n` +
      `*Asunto:* ${data.subject}\n\n` +
      `*Mensaje:*\n${data.message}`
    );

    window.open(`${whatsappUrl}?text=${message}`, "_blank", "noopener,noreferrer");
    toast({
      title: "Tu mensaje está preparado",
      description: "Se abrió WhatsApp con los datos del formulario. Revisa y envía el mensaje desde allí.",
    });
  };

  return (
    <section id="contacto" className="bg-[#FBF9F5] py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Hablemos de café
          </span>
          <h2 className="font-heading text-3xl font-bold text-[#221711] sm:text-4xl lg:text-5xl">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Elige el canal que prefieras para consultar por nuestros cafés, pedidos o formas de colaboración.
          </p>
        </div>

        <div className="reveal mb-8 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#1E3A2B] p-5 text-white shadow-elevated sm:flex-row sm:p-7 lg:px-9">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
              <img src={whatsappIcon} alt="" className="h-6 w-6 brightness-0 invert" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-xl font-semibold sm:text-2xl">Atención directa por WhatsApp</h3>
              <p className="mt-1 text-sm text-white/75">Lunes a sábado · 8:00 a. m. – 6:00 p. m.</p>
            </div>
          </div>
          <Button asChild size="lg" className="gsap-button min-h-12 w-full rounded-full bg-white px-6 font-semibold text-[#1E3A2B] hover:bg-[#F1EBDD] sm:w-auto">
            <a href={`${whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp <Send className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="reveal rounded-3xl border border-border/70 bg-white p-5 shadow-soft sm:p-7 lg:p-8">
            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Formulario de consulta</p>
              <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Cuéntanos qué necesitas</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Al enviarlo, se abrirá WhatsApp con tu mensaje listo para revisar y enviar.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-foreground">¿Sobre qué quieres consultar?</legend>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map(({ label, icon: Icon }) => {
                    const isSelected = inquiryType === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setInquiryType(label)}
                        className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3 py-2 text-left text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-sm ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-[#FBF9F5] text-foreground hover:border-primary/50"}`}
                      >
                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> {label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-foreground">Nombre</label>
                  <input type="text" id="nombre" name="nombre" autoComplete="name" required className="w-full rounded-xl border border-border bg-[#FBF9F5] px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-foreground">Teléfono / WhatsApp</label>
                  <input type="tel" id="telefono" name="telefono" autoComplete="tel" required className="w-full rounded-xl border border-border bg-[#FBF9F5] px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" placeholder="+51 900 000 000" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Correo electrónico</label>
                <input type="email" id="email" name="email" autoComplete="email" required className="w-full rounded-xl border border-border bg-[#FBF9F5] px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" placeholder="tu@email.com" />
              </div>

              <div>
                <label htmlFor="asunto" className="mb-2 block text-sm font-medium text-foreground">Asunto</label>
                <input type="text" id="asunto" name="asunto" required className="w-full rounded-xl border border-border bg-[#FBF9F5] px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" placeholder="Ej.: presentaciones, precios o disponibilidad" />
              </div>

              <div>
                <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-foreground">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={4} required className="w-full resize-y rounded-xl border border-border bg-[#FBF9F5] px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" placeholder="Escribe aquí los detalles de tu consulta..." />
              </div>

              <Button type="submit" size="lg" className="gsap-button min-h-12 w-full rounded-full shadow-glow">
                Preparar mensaje en WhatsApp
                <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <p className="text-center text-xs leading-relaxed text-muted-foreground">El mensaje no se envía automáticamente: podrás revisarlo y enviarlo desde WhatsApp.</p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="reveal grid gap-3 sm:grid-cols-2">
              <a href="tel:+51930572244" className="group rounded-2xl border border-border/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><Phone className="h-5 w-5" aria-hidden="true" /></span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Llámanos</span>
                <span className="mt-1 block font-semibold text-foreground">+51 930 572 244</span>
              </a>
              <a href="mailto:asfepa@gmail.com" className="group rounded-2xl border border-border/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><Mail className="h-5 w-5" aria-hidden="true" /></span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Correo</span>
                <span className="mt-1 block break-all font-semibold text-foreground">asfepa@gmail.com</span>
              </a>
            </div>

            <div className="reveal grid gap-3 sm:grid-cols-2">
              <a href={mapSearchUrl} target="_blank" rel="noopener noreferrer" className="group flex gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nuestro origen</span><span className="mt-1 block text-sm font-medium leading-relaxed text-foreground">Centro Poblado Felipe Pinglo Alva, Luyando, Huánuco</span><span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">Abrir mapa <MapPinned className="h-3.5 w-3.5" aria-hidden="true" /></span></span>
              </a>
              <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-soft">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Clock3 className="h-5 w-5" aria-hidden="true" /></span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Atención y envíos</span>
                <span className="mt-1 block text-sm font-semibold text-foreground">Lunes a sábado · 8:00 a. m. – 6:00 p. m.</span>
                <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">Consulta por WhatsApp la disponibilidad y cobertura de envío para tu pedido.</span>
              </div>
            </div>

            <div className="reveal overflow-hidden rounded-3xl border border-[#1E5B2B]/20 bg-[#1E3A2B] p-2 shadow-elevated">
              <div className="relative h-64 overflow-hidden rounded-[1.25rem] bg-[#E7E2D8] sm:h-72">
                <iframe
                  src="https://maps.google.com/maps?q=Felipe%20Pinglo%20Alva%2C%20Luyando%2C%20Huanuco%2C%20Peru&z=13&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa del Centro Poblado Felipe Pinglo Alva, Luyando, Huánuco"
                  className="h-full w-full"
                />
                <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#1E3A2B] shadow-md">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> Origen APARY · Luyando
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-8 rounded-3xl border border-border/70 bg-white px-5 py-7 shadow-soft sm:mt-10 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <div className="max-w-xl">
              <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"><Handshake className="h-4 w-4" aria-hidden="true" /> Alianzas de confianza</span>
              <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">Trabajo conjunto por el desarrollo local</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">ASFEPA mantiene convenios de cooperación para fortalecer la asistencia técnica, el financiamiento y la capacitación de sus socios.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3" aria-label="Instituciones aliadas">
              {["DEVIDA", "AGROBANCO", "ECOSELVA"].map((partner) => (
                <span key={partner} className="inline-flex min-h-12 items-center rounded-xl border border-primary/15 bg-[#FBF9F5] px-5 py-3 text-sm font-bold tracking-wide text-[#1E3A2B]">{partner}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-8 flex items-center justify-between gap-4 rounded-2xl bg-[#1E3A2B]/[0.04] px-5 py-5 sm:px-7">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Síguenos y conoce más de APARY</h3>
            <p className="mt-1 text-sm text-muted-foreground">Historias, café y vida en Luyando.</p>
          </div>
          <div className="flex shrink-0 gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
