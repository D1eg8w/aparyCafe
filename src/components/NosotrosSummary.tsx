import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Shield } from "lucide-react";
import nosotrosImg from "@/assets/EXI/GALERIA17.webp";

export const NosotrosSummary = () => {
  return (
    <section className="section-padding bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Unidos por la pasión del <br />
              <span className="text-primary">Café de Especialidad</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              ASFEPA es una asociación de familias productoras que cultivan café de especialidad en las alturas de Huánuco, con prácticas agrosostenibles que respetan nuestra tierra y nuestra gente.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4 reveal-stagger">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-leaf-light/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-leaf-light" />
                </div>
                <span className="font-medium">Sostenibilidad</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Comunidad</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">Calidad cuidada</span>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/nosotros" className="flex items-center gap-2">
                  Nuestra Historia
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative group reveal">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-leaf-light/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70" />
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-elevated">
              <img 
                src={nosotrosImg} 
                alt="Sobre Nosotros - ASFEPA" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
