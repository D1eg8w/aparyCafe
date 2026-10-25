import { CheckCircle2, Leaf, MapPin } from "lucide-react";
import campoImage from "@/assets/CAMPO/GALERIA1.png";

const proofPoints = [
  {
    icon: MapPin,
    title: "Origen Huánuco",
    description: "Café cultivado en Felipe Pinglo Alva, distrito de Luyando, en la región Huánuco.",
  },
  {
    icon: Leaf,
    title: "Cuidado en cada etapa",
    description: "Cosecha selectiva, fermentación controlada y secado solar para el café pergamino.",
  },
  {
    icon: CheckCircle2,
    title: "Selección cuidadosa",
    description: "Granos clasificados y preparados para conservar la calidad en cada presentación.",
  },
];

export const OrigenCalidad = () => (
  <section className="relative isolate overflow-hidden bg-[#FBF9F5] py-16 sm:py-20 lg:py-24">
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="reveal mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <span className="mb-4 inline-block rounded-full border border-[#1E3A2B]/10 bg-[#1E3A2B]/[0.05] px-4 py-1.5 text-sm font-medium text-[#1E3A2B]">
          Del origen a tu taza
        </span>
        <h2 className="font-heading text-3xl font-bold text-[#221711] sm:text-4xl lg:text-5xl">
          Un café con origen y cuidado
        </h2>
      </div>

      <div className="relative mx-auto h-[560px] max-w-6xl overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(48,35,22,0.12)] sm:h-[540px] sm:rounded-3xl lg:h-[560px]">
        <img
          src={campoImage}
          alt="Productores seleccionando café en el campo"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden="true" />

        <div className="reveal-stagger absolute inset-x-3 bottom-3 grid gap-2.5 sm:inset-x-6 sm:bottom-6 sm:grid-cols-3 sm:gap-4 lg:inset-x-8 lg:bottom-8">
          {proofPoints.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group flex items-center gap-3 rounded-xl border border-white/75 bg-white/[0.86] p-3 text-left text-stone-800 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/[0.97] hover:shadow-[0_14px_32px_rgba(0,0,0,0.18)] motion-reduce:transition-none sm:flex-col sm:gap-0 sm:rounded-2xl sm:p-4 sm:text-center lg:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E3A2B]/[0.08] text-[#1E3A2B] transition-colors duration-300 group-hover:bg-[#1E3A2B]/[0.12] sm:mb-3 sm:h-11 sm:w-11">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="mb-1 font-heading text-base font-semibold leading-tight text-[#221711] sm:mb-2 sm:text-lg lg:text-xl">{title}</h3>
              <p className="text-xs leading-snug text-stone-700 sm:text-sm sm:leading-relaxed">{description}</p>
            </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
