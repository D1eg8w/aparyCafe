import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import contactoHero from "@/assets/CONTACTANOS.jpg";

const ContactoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contacto | APARY Café de Especialidad</title>
        <meta name="description" content="¿Tienes dudas o quieres realizar un pedido? Contáctanos. Estamos en Luyando, Huánuco, listos para atenderte." />
      </Helmet>
      <Header />
      <main className="min-h-screen page-enter bg-background">
        <PageHero 
          title="Contáctanos" 
          subtitle="¿Tienes dudas o quieres realizar un pedido? Nuestro equipo está listo para ayudarte."
          backgroundImage={contactoHero}
        />
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default ContactoPage;
