import { Target, Eye, Star, Leaf, Shield, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Calidad",
    description: "Productos de estándares de alta calidad, competitivos y orientados a mercados diferenciados.",
  },
  {
    icon: Heart,
    title: "Tradición",
    description: "Promovemos el relevo generacional y el valor cultural de nuestra tierra, reconociendo el café como parte de nuestra identidad local.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Protegemos el suelo, el agua y la biodiversidad con prácticas agrícolas que garantizan un futuro saludable.",
  },
  {
    icon: Shield,
    title: "Compromiso",
    description: "Asumimos los retos con dedicación y esfuerzo, manteniendo la convicción de que el trabajo constante es la clave del progreso.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Buscamos nuevas técnicas, herramientas y oportunidades que permiten mejorar la productividad y adaptarnos al mercado.",
  },
];

export const MisionVision = () => {
  return (
    <section id="mision" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-leaf-light/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Nuestro Propósito
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Misión, Visión y Valores
          </h2>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-20">
          {/* Mission Card */}
          <div className="group relative bg-card rounded-2xl p-8 lg:p-10 shadow-soft hover:shadow-elevated transition-all duration-300 card-hover overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-leaf-dark/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-leaf-dark to-leaf-light flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Target className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Contribuir al desarrollo sostenible de las familias cafetaleras y productoras del 
                centro poblado de Felipe Pinglo Alva - Luyando, promoviendo la agricultura responsable, 
                la capacitación técnica, la asociatividad y la comercialización justa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Todos los socios de ASFEPA trabajan comprometidos con la calidad del café, aplicando 
                procesos adecuados y sostenibles para la producción de café de especialidad, que reflejan 
                el esfuerzo, la identidad y respeto por la naturaleza. A través de la marca 
                <strong className="text-primary"> APARY</strong>, buscamos generar valor agregado, 
                fortalecer la economía local y mejorar la calidad de vida de nuestros socios, siempre 
                en armonía con el medio ambiente.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-card rounded-2xl p-8 lg:p-10 shadow-soft hover:shadow-elevated transition-all duration-300 card-hover overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-coffee-dark flex items-center justify-center mb-6 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                <Eye className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nuestra Visión
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Ser una asociación líder en el desarrollo agrosostenible de la región Huánuco, reconocida 
                por la excelencia de su café de especialidad, compromiso social y ambiental, y su capacidad 
                para transformar el trabajo de los pequeños productores en un modelo de orgullo, progreso 
                y sostenibilidad para las futuras generaciones.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aspiramos a llegar a más clientes potenciales que valoren y consuman café de especialidad, 
                posicionando nuestra marca comercial <strong className="text-primary">APARY</strong> en 
                los mercados locales, nacionales e internacionales.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12 reveal">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Nuestros Valores
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 reveal-stagger">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group text-center p-6 rounded-2xl bg-card hover:bg-muted transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
