import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useEffect } from "react";

const Privacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen page-enter bg-background">
      <Header />
      <PageHero 
        title="Política de Privacidad" 
        subtitle="Cómo protegemos y manejamos tu información personal."
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed reveal-stagger">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Recolección de Información</h2>
              <p>
                Recopilamos información que usted nos proporciona directamente cuando completa nuestro 
                formulario de contacto, incluyendo su nombre, correo electrónico y número de teléfono.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso de la Información</h2>
              <p>
                Utilizamos la información recopilada para responder a sus consultas, procesar pedidos 
                y mejorar la calidad de nuestros servicios. Nunca venderemos su información a terceros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Protección de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos 
                personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <p>
                Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Usted 
                puede configurar su navegador para rechazar todas las cookies, aunque esto podría afectar 
                algunas funcionalidades del sitio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre nuestra política de privacidad o el manejo de sus datos, 
                puede contactarnos a través de los medios proporcionados en nuestra página de contacto.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Privacidad;
