import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Productos } from "@/components/Productos";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import productosHero from "@/assets/hero-coffee-mountains.jpg";

const ProductosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nuestros Productos | Café de Especialidad APARY</title>
        <meta name="description" content="Explora nuestro catálogo de café: pergamino, oro y tostado. Café de especialidad con perfiles de taza únicos y procesos sostenibles." />
      </Helmet>
      <Header />
      <main className="min-h-screen page-enter bg-background">
        <PageHero 
          title="Nuestros Productos" 
          subtitle="Selección premium de café cultivado con prácticas sostenibles y pasión tradicional."
          backgroundImage={productosHero}
          compact
        />
        <Productos />
      </main>
      <Footer />
    </>
  );
};

export default ProductosPage;
