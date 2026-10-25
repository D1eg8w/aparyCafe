import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useEffect } from "react";

const Terminos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen page-enter bg-background">
      <Header />
      <PageHero 
        title="Términos y Condiciones" 
        subtitle="Reglas y lineamientos para el uso de nuestro sitio web y servicios."
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed reveal-stagger">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de Términos</h2>
              <p>
                Al acceder y utilizar este sitio web, usted acepta estar sujeto a los presentes términos 
                y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, 
                le recomendamos no utilizar nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso de los Servicios</h2>
              <p>
                Nuestros servicios están destinados a proporcionar información sobre los productos 
                y actividades de ASFEPA. Usted se compromete a utilizar el sitio de manera lícita 
                y respetuosa, sin interferir con su funcionamiento.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido presente en este sitio, incluyendo textos, gráficos, logos, imágenes 
                y software, es propiedad de ASFEPA o de sus proveedores de contenido y está protegido 
                por las leyes internacionales de derechos de autor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitación de Responsabilidad</h2>
              <p>
                ASFEPA no será responsable de ningún daño directo, indirecto, incidental o consecuente 
                que surja del uso o la imposibilidad de usar este sitio web o la información contenida en él.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
                entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Terminos;
