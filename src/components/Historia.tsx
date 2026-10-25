import { Users, Award, Handshake, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import coffeeBeans from "@/assets/nosotros.png";

const timelineItems = [
  {
    year: "2024",
    title: "Fundación de ASFEPA",
    description: "El 25 de marzo del 2024, pequeños productores de Felipe Pinglo Alva se unieron para crear la Asociación Agrosostenible, motivados por mejorar sus condiciones de vida y fortalecer la producción agrícola.",
    icon: Users,
  },
  {
    year: "2024",
    title: "Visión Colectiva",
    description: "Profesionales visitaron la zona reconociendo el potencial productivo y la calidad de los productos, inspirando a los productores a organizarse formalmente.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Alianzas Estratégicas",
    description: "ASFEPA estableció convenios de cooperación con DEVIDA, AGROBANCO y la ONG ECOSELVA, accediendo a asistencia técnica, financiamiento y capacitaciones.",
    icon: Handshake,
  },
  {
    year: "2024",
    title: "Articulación Institucional",
    description: "Trabajo coordinado con gobiernos locales y regional, participando en espacios de diálogo y planificación para impulsar el desarrollo productivo y social.",
    icon: Building2,
  },
];

export const Historia = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [milestoneThresholds, setMilestoneThresholds] = useState<number[]>([]);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const timeline = timelineRef.current;
        if (!timeline) return;

        const markers = Array.from(timeline.querySelectorAll<HTMLElement>("[data-timeline-marker]"));
        if (markers.length < 2) return;

        const centers = markers.map((marker) => {
          const item = marker.closest<HTMLElement>("[data-timeline-item]");
          return (item?.offsetTop ?? 0) + marker.offsetTop + marker.offsetHeight / 2;
        });
        const distance = centers[centers.length - 1] - centers[0];
        if (distance <= 0) return;

        // The line and each milestone use the same viewport trigger so the
        // content appears exactly as the progress reaches its marker.
        const trigger = window.innerHeight * 0.68;
        const timelineBounds = timeline.getBoundingClientRect();
        const firstCenter = timelineBounds.top + centers[0];
        const progress = Math.max(0, Math.min(1, (trigger - firstCenter) / distance));
        setTimelineProgress(progress);
        setTimelineHeight(distance);
        const thresholds = centers.map((center) => (center - centers[0]) / distance);
        setMilestoneThresholds((current) =>
          current.length === thresholds.length && current.every((value, index) => Math.abs(value - thresholds[index]) < 0.001)
            ? current
            : thresholds,
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section id="historia" className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestra Historia
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Desde las alturas de Huánuco al Mundo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ASFEPA nació como una iniciativa colectiva impulsada por pequeños productores del 
            centro poblado de Felipe Pinglo Alva - Luyando, motivados por el deseo de mejorar 
            las condiciones de vida, fortalecer la producción agrícola y promover un modelo de 
            desarrollo sostenible y responsable.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Story Content */}
          <div className="order-2 lg:order-1 space-y-6 relative reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={coffeeBeans}
                alt="Granos de café artesanal ASFEPA"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent" />
            </div>
            
            {/* Story Text */}
            <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft relative z-10">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Nuestra Motivación
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Durante años, las familias agricultoras trabajaron de forma independiente, enfrentando 
                dificultades como la falta de asistencia técnica especializada, la limitada articulación 
                al mercado, bajos precios en la venta de sus productos y escasa capacidad para acceder 
                a proyectos o programas de financiamiento.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Con la necesidad de tener mejores y mayores accesos a comercializar de manera colectiva, 
                donde pudieran trabajar como grupo de socios y apuntar como conjunto colectivo, los 
                productores tomaron la decisión de formar una asociación basada en la unidad, solidaridad, 
                sostenibilidad y calidad productiva.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desde su creación, ASFEPA ha centrado su labor en fortalecer las capacidades técnicas 
                y organizativas de sus socios, promoviendo una producción responsable y sostenible, 
                orientada al mercado y enfocada principalmente en el cultivo de café de calidad y 
                especialidad bajo la marca <strong className="text-primary">APARY</strong>.
              </p>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-leaf-light/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl z-0" />
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative order-1 lg:order-2 space-y-14 sm:space-y-20 lg:space-y-24 reveal">
            <div aria-hidden="true" className="absolute left-[23px] top-6 w-0.5 rounded-full bg-border" style={{ height: timelineHeight }} />
            <div
              aria-hidden="true"
              className="absolute left-[23px] top-6 w-0.5 origin-top rounded-full bg-gradient-to-b from-leaf-light to-primary transition-transform duration-150 ease-out"
              style={{ height: timelineHeight, transform: `scaleY(${timelineProgress})` }}
            />
            {timelineItems.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                data-timeline-item
                className={`relative flex min-h-[220px] gap-4 transition-[opacity,transform,filter] duration-700 ease-out sm:min-h-[240px] ${timelineProgress >= (milestoneThresholds[index] ?? 1) && timelineProgress > 0 ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"}`}
              >
                {/* Icon */}
                <div
                  data-timeline-marker
                  className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-500 ${timelineProgress >= (milestoneThresholds[index] ?? 1) && timelineProgress > 0 ? "bg-gradient-to-br from-leaf-dark to-leaf-light text-cream shadow-glow scale-100" : "scale-90 border border-border bg-muted text-muted-foreground shadow-none"}`}
                >
                  <item.icon className={`w-5 h-5 ${timelineProgress >= (milestoneThresholds[index] ?? 1) && timelineProgress > 0 ? "text-cream" : "text-muted-foreground"}`} />
                </div>

                {/* Content */}
                <div className={`mb-2 flex-1 rounded-2xl border p-5 shadow-soft transition-all duration-500 sm:p-6 ${timelineProgress >= (milestoneThresholds[index] ?? 1) && timelineProgress > 0 ? "border-primary/20 bg-background shadow-elevated" : "border-border/50 bg-background/70 shadow-none"}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading text-2xl font-bold text-primary">
                      {item.year}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
