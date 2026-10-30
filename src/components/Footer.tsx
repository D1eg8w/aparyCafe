import { ArrowUp, Facebook, Instagram, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoApary from "@/assets/logo-apary.webp";
import whatsappIcon from "@/assets/whatsapp.svg";

const footerLinks = {
  navegacion: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Productos", href: "/productos" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "/terminos" },
    { label: "Política de Privacidad", href: "/privacidad" },
  ],
};

const contactLinks = [
  { label: "+51 930 572 244", href: "tel:+51930572244", icon: Phone },
  { label: "ventas@aparycafe.com", href: "mailto:ventas@aparycafe.com", icon: Mail },
  { label: "Luyando, Huánuco, Perú", href: "/contacto", icon: MapPin },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1csBoBsyEW/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/apary_cafe86?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: whatsappIcon, href: "https://wa.me/51930572244", label: "WhatsApp", isImage: true },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative -mt-px overflow-hidden border-t border-white/10 bg-[#120D0A] pb-[env(safe-area-inset-bottom)] text-[#EFEBE4]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(77,124,93,0.08),transparent_45%)]" aria-hidden="true" />
      
      <div className="container relative z-10 mx-auto px-4 pb-6 pt-14 sm:px-6 sm:pb-8 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:pb-14">
          
          {/* Column 1: Brand & Purpose */}
          <div className="space-y-5 md:pr-6">
            <Link to="/" className="inline-block group">
              <img 
                src={logoApary} 
                alt="APARY - Café Sostenible" 
                className="w-40 sm:w-48 group-hover:scale-105 transition-all duration-500 object-contain brightness-110"
              />
            </Link>
            <div className="space-y-4">
              <h4 className="font-heading text-xl font-semibold tracking-wide text-[#EFEBE4]">
                APARY <span className="ml-1 text-xs font-medium uppercase tracking-[0.2em] text-[#CDBB9F]">Café Sostenible</span>
              </h4>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#A89F91]">
                Impulsamos el desarrollo agrosostenible en las alturas de Huánuco, cultivando cafés de especialidad que transforman vidas y protegen nuestro ecosistema.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-2" aria-label="Redes sociales">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#C9C1B6] transition-colors hover:border-[#78927B]/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7B69D]"
                  aria-label={social.label}
                >
                  {social.isImage ? (
                    <img 
                      src={social.icon as string} 
                      alt="" 
                      aria-hidden="true"
                      className="h-5 w-5 brightness-0 invert opacity-80" 
                    />
                  ) : (
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navegación Rápida */}
          <nav aria-label="Navegación del pie de página" className="md:pl-6 lg:pl-12">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7C8B5] sm:mb-6">
              Navegación
            </h4>
            <ul className="space-y-1">
              {footerLinks.navegacion.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex min-h-11 items-center text-sm text-[#A89F91] transition-colors hover:text-[#EFEBE4] focus-visible:text-[#EFEBE4]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contacto & Legal */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7C8B5] sm:mb-6">
              Contacto
            </h4>
            <ul className="space-y-1">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex min-h-11 items-center gap-3 text-sm text-[#A89F91] transition-colors hover:text-[#EFEBE4] focus-visible:text-[#EFEBE4]"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#8FA08A]" aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col gap-5 pt-6 sm:pt-7">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#8FA08A]/20 bg-[#8FA08A]/[0.06] px-3 py-2 text-xs text-[#C9C1B6]">
              <Leaf className="h-4 w-4 text-[#9DAF96]" aria-hidden="true" />
              Cultivado con amor en Huánuco, Perú
            </p>
            <button
              onClick={scrollToTop}
              className="group inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A89F91] transition-colors hover:text-[#EFEBE4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7B69D]"
            >
              Volver arriba
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-[#8F877D] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ASFEPA - Marca APARY. Todos los derechos reservados.</p>
            <nav aria-label="Enlaces legales" className="flex flex-col gap-1 sm:flex-row sm:gap-5">
              {footerLinks.legal.map((link) => (
                <Link key={link.label} to={link.href} className="flex min-h-9 items-center transition-colors hover:text-[#EFEBE4]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
