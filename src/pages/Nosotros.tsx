import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Historia } from "@/components/Historia";
import { MisionVision } from "@/components/MisionVision";
import { Galeria } from "@/components/Galeria";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import nosotrosHero from "@/assets/NOSOTROS.jpg";

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | APARY Café Sostenible</title>
        <meta name="description" content="Conoce la historia de ASFEPA y nuestra marca APARY. Familias cafetaleras unidas por la sostenibilidad y la calidad en Huánuco." />
      </Helmet>
      <Header />
      <main className="min-h-screen page-enter bg-background">
        <PageHero 
          title="Nosotros" 
          subtitle="Conoce el origen, la pasión y el compromiso de las familias cafetaleras de ASFEPA."
          backgroundImage={nosotrosHero}
        />
        <Historia />
        <MisionVision />
        <Galeria />
      </main>
      <Footer />
    </>
  );
};

export default Nosotros;
