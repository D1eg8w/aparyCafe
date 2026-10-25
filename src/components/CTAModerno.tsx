import { Button } from "@/components/ui/button";
import { Check, Coffee } from "lucide-react";
import coffeeBeansImage from "@/assets/coffee-beans.jpg";
import whatsappIcon from "@/assets/whatsapp.svg";

const businessBenefits = [
  "Opciones para compras por volumen",
  "Presentaciones para tu negocio",
  "Atención directa y personalizada",
];

export const CTAModerno = () => {
  return (
    <section className="relative bg-[#FBF9F5] px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
      <div className="reveal relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#1E3A2B]/15 bg-[#EFE8DE] p-6 shadow-[0_18px_55px_rgba(48,35,22,0.09)] transition-shadow duration-500 hover:shadow-[0_24px_65px_rgba(48,35,22,0.14)] sm:p-10 lg:p-14">
        <img
          src={coffeeBeansImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-[0.09] [mask-image:linear-gradient(to_right,transparent_0%,black_75%)] sm:w-3/5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EFE8DE] via-[#EFE8DE]/95 to-[#EFE8DE]/70" aria-hidden="true" />

        <div className="reveal-stagger relative z-10 grid items-center gap-9 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A2B]/15 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1E3A2B]">
              <Coffee className="h-4 w-4" aria-hidden="true" />
              <span>Atención directa de APARY</span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#221711] sm:text-4xl md:text-5xl">
              ¿Buscas café para <span className="text-[#1E3A2B]">tu negocio?</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#50453B] sm:text-lg">
              Cuéntanos sobre tu negocio y te ayudaremos a encontrar la presentación adecuada de nuestro café.
            </p>
            <ul className="grid gap-3 pt-1 sm:grid-cols-2">
              {businessBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3F382F] sm:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1E3A2B]" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:pl-2">
            <Button size="xl" className="group min-h-[56px] w-full gap-3 bg-[#1E7042] text-white shadow-lg hover:bg-[#185B36]" asChild>
              <a href="https://wa.me/51930572244?text=Hola%2C%20quisiera%20consultar%20por%20compras%20de%20caf%C3%A9%20por%20volumen" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <img src={whatsappIcon} alt="" className="h-5 w-5 brightness-0 invert" aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </Button>
            <p className="mt-3 text-center text-sm text-[#50453B]">Atención personalizada para negocios</p>
          </div>
        </div>
      </div>
    </section>
  );
};
