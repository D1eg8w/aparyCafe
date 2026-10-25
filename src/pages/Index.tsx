import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductosSummary } from "@/components/ProductosSummary";
import { NosotrosSummary } from "@/components/NosotrosSummary";
import { OrigenCalidad } from "@/components/OrigenCalidad";
import { CTAModerno } from "@/components/CTAModerno";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>APARY | Café de Especialidad Sostenible del Perú</title>
        <meta name="description" content="Descubre APARY, café de especialidad cultivado en las alturas de Huánuco. Asociación Agrosostenible dedicada a la calidad y el comercio justo." />
      </Helmet>
      <Header />
      <main className="min-h-screen page-enter">
        <Hero />
        <ProductosSummary />
        <NosotrosSummary />
        <OrigenCalidad />
        <CTAModerno />
      </main>
      <Footer />
    </>
  );
};

export default Index;
