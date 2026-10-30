import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/FONDOPAGINA-HERO.webp";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ target, suffix = "", isActive }: { target: number; suffix?: string; isActive: boolean }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    if (!isActive) {
      setValue(0);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * easedProgress));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isActive, target]);

  return <span aria-label={`${target.toLocaleString("en-US")}${suffix}`}>{value.toLocaleString("en-US")}{suffix}</span>;
};

export const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [areStatsVisible, setAreStatsVisible] = useState(false);

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setAreStatsVisible(entry.isIntersecting);
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

    observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="inicio"
        className="cinematic-hero relative w-full overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Plantaciones de café en las alturas de Huánuco - Perú"
          width={1920}
          height={1158}
          fetchPriority="high"
          className="cinematic-hero-image block h-auto w-full"
        />
      </section>

      {/* Unified introduction and stats */}
      <section className="border-b border-border bg-background py-10 sm:py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-intro mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2">
              <Leaf className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary sm:text-sm">
                Café de origen · Huánuco
              </span>
            </div>
            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:mt-6 sm:text-4xl lg:text-5xl">
              Café de especialidad de las alturas de Huánuco
            </h1>
            <p className="mx-auto mt-4 max-w-4xl text-base font-light leading-relaxed text-muted-foreground sm:text-xl">
              Cultivado por familias productoras de Felipe Pinglo Alva, Luyando, con cuidado desde el origen hasta cada presentación.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <Button size="xl" className="gsap-button w-full py-6 text-base shadow-glow sm:w-auto sm:py-7" asChild>
                <Link to="/productos">Explorar cafés</Link>
              </Button>
              <Button variant="outline" size="xl" className="gsap-button w-full border-2 py-6 text-base sm:w-auto sm:py-7" asChild>
                <Link to="/nosotros">Conocer a ASFEPA</Link>
              </Button>
            </div>
          </div>

          <div ref={statsRef} className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 border-t border-border pt-8 reveal-stagger sm:mt-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:pt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground sm:text-4xl">2024</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">Fundación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl"><AnimatedNumber target={85} suffix="+" isActive={areStatsVisible} /></div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-foreground sm:text-sm">Puntos SCA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl" aria-label="1,500–1,800 msnm">
                <AnimatedNumber target={1500} isActive={areStatsVisible} />–<AnimatedNumber target={1800} isActive={areStatsVisible} />
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">msnm de cultivo</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
