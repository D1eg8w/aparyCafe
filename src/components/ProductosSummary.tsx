import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductImageCarousel } from "./ProductImageCarousel";

import imgPergamino from "@/assets/PRODUCTOS/CAFEPERGAMINOSECO.png";
import imgOroVerde from "@/assets/PRODUCTOS/CAFEOROVERDE.png";
import imgTostadoMolido from "@/assets/PRODUCTOS/CAFETOSTADOYMOLIDO.png";
import imgPergaminoSaco from "@/assets/PRODUCTOS/cafepergaminosinfondo.png";
import imgOroSaco from "@/assets/PRODUCTOS/cafeorosinfondo.png";

const featuredProducts = [
  {
    id: 1,
    name: "Café Tostado y Molido",
    productName: "Café Tostado y Molido 1KG",
    description: "Presentación lista para venta directa al consumidor, ideal para ferias y puntos de comercio local.",
    image: imgTostadoMolido,
    presentations: [{ label: "", image: imgTostadoMolido }],
  },
  {
    id: 2,
    name: "Café Oro Verde",
    productName: "Café Oro Verde",
    description: "Grano de alta calidad listo para el proceso de tostado, es el resultado del trabajo cuidadoso de nuestros productores.",
    image: imgOroVerde,
    presentations: [
      { label: "Presentación en saco", image: imgOroSaco },
      { label: "", image: imgOroVerde },
    ],
  },
  {
    id: 3,
    name: "Café Pergamino Seco",
    productName: "Café Pergamino",
    description: "Café producido con buenas prácticas agrícolas y procesos de calidad en cosecha y postcosecha.",
    image: imgPergamino,
    presentations: [
      { label: "Presentación en saco", image: imgPergaminoSaco },
      { label: "", image: imgPergamino },
    ],
  }
];

export const ProductosSummary = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nuestra Selección
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Productos Destacados
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Descubre la esencia de nuestra tierra en cada grano. Procesos artesanales para un sabor inigualable.
            </p>
          </div>
          <Button asChild variant="ghost" className="group text-primary font-semibold reveal">
            <Link to="/productos" className="flex items-center gap-2">
              Ver todos los productos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted/20 p-4 sm:p-6">
                <ProductImageCarousel
                  productName={product.name}
                  presentations={product.presentations ?? [{ label: "", image: product.image }]}
                  onImageClick={() => navigate(`/productos?producto=${encodeURIComponent(product.productName)}`)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-center mt-auto pt-4">
                  <Button size="sm" variant="default" className="w-full shadow-glow" asChild>
                    <a href={`https://wa.me/51930572244?text=¡Hola APARY!%20Me%20interesa%20adquirir%20el%20producto:%20${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer">
                      Adquirir por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
