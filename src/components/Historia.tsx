import { Users, Award, Handshake, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import coffeeBeans from "@/assets/CAMPO/GALERIA4.webp";

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
  const [timelineStart, setTimelineStart] = useState(0);
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
        setTimelineStart(centers[0]);
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

        <div className="space-y-16 lg:space-y-24">
          {/* Motivation: image and story side by side */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <figure className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-3xl border border-border/60 bg-muted/20 shadow-elevated reveal">
              <img
                src={coffeeBeans}
                alt="Niños en el campo con cerezas de café y un empaque APARY"
                className="block h-auto w-full object-contain object-center"
              />
            </figure>

            <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-soft sm:p-8 lg:p-10 reveal">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-primary">Quiénes somos</span>
              <h3 className="mb-5 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Nuestra Motivación
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Durante años, las familias agricultoras trabajaron de forma independiente, enfrentando 
                dificultades como la falta de asistencia técnica especializada, la limitada articulación 
                al mercado, bajos precios en la venta de sus productos y escasa capacidad para acceder 
                a proyectos o programas de financiamiento.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Con la necesidad de tener mejores y mayores accesos a comercializar de manera colectiva, 
                donde pudieran trabajar como grupo de socios y apuntar como conjunto colectivo, los 
                productores tomaron la decisión de formar una asociación basada en la unidad, solidaridad, 
                sostenibilidad y calidad productiva.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Desde su creación, ASFEPA ha centrado su labor en fortalecer las capacidades técnicas 
                y organizativas de sus socios, promoviendo una producción responsable y sostenible, 
                orientada al mercado y enfocada principalmente en el cultivo de café de calidad y 
                especialidad bajo la marca <strong className="text-primary">APARY</strong>.
              </p>
            </div>
          </div>

          {/* Alternating timeline */}
          <div>
            <div className="mb-8 text-center sm:mb-10 reveal">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-primary">Nuestro recorrido</span>
              <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Una historia construida en comunidad</h3>
            </div>
            <div ref={timelineRef} className="relative grid gap-y-8 sm:gap-y-10 lg:gap-y-12">
            <div aria-hidden="true" className="absolute left-[19px] top-0 w-0.5 rounded-full bg-border sm:left-[23px] lg:left-1/2 lg:-ml-px" style={{ top: timelineStart, height: timelineHeight }} />
            <div
              aria-hidden="true"
              className="absolute left-[19px] w-0.5 origin-top rounded-full bg-gradient-to-b from-leaf-light to-primary transition-transform duration-150 ease-out sm:left-[23px] lg:left-1/2 lg:-ml-px"
              style={{ top: timelineStart, height: timelineHeight, transform: `scaleY(${timelineProgress})` }}
            />
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = timelineProgress >= (milestoneThresholds[index] ?? 1) && timelineProgress > 0;
              return (
              <article
                key={`${item.year}-${item.title}`}
                data-timeline-item
                className={`relative grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3 transition-[opacity,transform,filter] duration-700 ease-out sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-x-4 lg:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] lg:gap-x-7 ${isVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"}`}
              >
                <div
                  data-timeline-marker
                  className={`relative z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center justify-self-center rounded-full transition-all duration-500 sm:h-12 sm:w-12 lg:col-start-2 ${isVisible ? "scale-100 bg-gradient-to-br from-leaf-dark to-leaf-light text-cream shadow-glow" : "scale-90 border border-border bg-muted text-muted-foreground shadow-none"}`}
                >
                  <item.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${isVisible ? "text-cream" : "text-muted-foreground"}`} />
                </div>

                <div className={`col-start-2 row-start-1 rounded-2xl border p-4 shadow-soft transition-all duration-500 sm:p-5 ${isLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-3 lg:text-left"} ${isVisible ? "border-primary/20 bg-background shadow-elevated" : "border-border/50 bg-background/70 shadow-none"}`}>
                  <div className={`mb-2 flex items-center gap-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
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
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
