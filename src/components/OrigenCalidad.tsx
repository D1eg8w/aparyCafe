import { CheckCircle2, Leaf, MapPin } from "lucide-react";

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

      <div className="mx-auto max-w-6xl">
        <div className="reveal-stagger grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {proofPoints.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group relative flex min-h-56 flex-col items-center rounded-2xl border border-[#1E3A2B]/10 bg-white p-6 text-center shadow-[0_8px_24px_rgba(48,35,22,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E3A2B]/20 hover:shadow-[0_18px_36px_rgba(48,35,22,0.12)] motion-reduce:transition-none sm:min-h-64 sm:p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E3A2B]/[0.07] text-[#1E3A2B] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#1E3A2B]/[0.12] motion-reduce:transition-none">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold leading-tight text-[#221711] sm:text-xl">{title}</h3>
              <p className="max-w-sm text-sm leading-relaxed text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
