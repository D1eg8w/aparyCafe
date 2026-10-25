import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Instagram, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { navItems } from "@/data/navigation";
import logoApary from "@/assets/logo-apary.png";
import whatsappIcon from "@/assets/whatsapp.svg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Keep the navigation over each page's hero, then give it a readable glass
  // surface once the visitor scrolls into the content.
  const headerActive = isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerActive
          ? "border-b border-white/30 bg-white/25 backdrop-blur-xl backdrop-saturate-150 shadow-elevated py-2"
          : "border-b border-transparent bg-transparent py-4 sm:py-6"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${headerActive ? "h-12 sm:h-14" : "h-16 sm:h-20"
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoApary}
              alt="APARY - Café Sostenible"
              className={`transition-all duration-500 object-contain h-auto ${headerActive ? "w-32 sm:w-40" : "w-40 sm:w-56"
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-4 py-2 font-normal text-lg transition-colors duration-300 flex items-center gap-1 after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-300 ${isActive(item.href)
                    ? "text-primary after:scale-x-100"
                    : "text-black after:scale-x-0 hover:text-primary hover:after:scale-x-100 focus-visible:text-primary focus-visible:after:scale-x-100"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu (Sheet) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 rounded-lg transition-colors text-black bg-white/20 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] sm:w-[380px] p-5 sm:p-6 pb-[calc(1.25rem+env(safe-area-inset-bottom))] bg-white flex flex-col overflow-y-auto">
              <SheetHeader className="mb-8 pr-12">
                <SheetTitle className="text-left">
                  <Link to="/" onClick={() => setIsOpen(false)} aria-label="APARY, ir al inicio">
                    <img src={logoApary} alt="APARY - Café Sostenible" className="h-10 w-auto object-contain" />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Navegación principal" className="flex flex-col gap-1 flex-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`min-h-14 px-2 flex items-center justify-between gap-4 text-lg font-medium transition-colors rounded-lg ${isActive(item.href) ? "text-primary bg-primary/5" : "text-foreground hover:text-primary hover:bg-muted/60"
                      }`}
                  >
                    {item.label}
                    <ArrowRight aria-hidden="true" className={`h-4 w-4 transition-transform ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`} />
                  </Link>
                ))}
              </nav>
              <div className="mt-8 border-t border-border/60 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Conversemos</p>
                <div className="mb-5 flex items-center gap-2">
                  <a href="https://instagram.com/asfepa" target="_blank" rel="noopener noreferrer" aria-label="Instagram de ASFEPA" className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:border-primary hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://wa.me/51930572244" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp al +51 930 572 244" className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 transition-colors hover:border-primary">
                    <img src={whatsappIcon} alt="" className="h-5 w-5" />
                  </a>
                  <a href="tel:+51930572244" aria-label="Llamar al +51 930 572 244" className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:border-primary hover:text-primary">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="mailto:ventas@aparycafe.com" className="ml-1 text-sm text-muted-foreground transition-colors hover:text-primary">ventas@aparycafe.com</a>
                </div>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full min-h-14 text-base sm:text-lg"
                  asChild
                >
                  <Link to="/contacto" onClick={() => setIsOpen(false)}>
                    Contáctanos Ahora
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
