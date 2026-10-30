import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductImageCarousel } from "./ProductImageCarousel";
import type { ProductPresentation } from "./ProductImageCarousel";

import imgPergamino from "@/assets/PRODUCTOS/CAFEPERGAMINOSECO.webp";
import imgPergaminoSaco from "@/assets/PRODUCTOS/cafepergaminosinfondo.webp";
import imgOroVerde from "@/assets/PRODUCTOS/CAFEOROVERDE.webp";
import imgOroSaco from "@/assets/PRODUCTOS/cafeorosinfondo.webp";
import imgTostadoMolido250g from "@/assets/PRODUCTOS/cafe-tostado-molido-apary-250g.webp";
import imgPergaminoSacosReal from "@/assets/PRODUCTOS/pergamino-sacos-asfepa.webp";
import imgPergaminoSecado from "@/assets/PRODUCTOS/pergamino-secado-solar-asfepa.webp";
import imgOroVerdeSeleccion from "@/assets/PRODUCTOS/oro-verde-seleccion-asfepa.webp";

interface FeaturedProduct {
  id: number;
  name: string;
  productName: string;
  description: string;
  highlight: string;
  image: string;
  presentations: ProductPresentation[];
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "Café Tostado y Molido",
    productName: "Café Tostado y Molido",
    description: "Recién molido bajo pedido, con dulzor natural y notas de jazmín, frutas tropicales y chocolate suave.",
    highlight: "Molienda a elección",
    image: imgTostadoMolido250g,
    presentations: [
      { label: "Empaque APARY de 250 g", image: imgTostadoMolido250g, scale: 1.25 },
    ],
  },
  {
    id: 2,
    name: "Café Oro Verde",
    productName: "Café Oro Verde",
    description: "Grano verde seleccionado por tamaño y densidad, preparado para que cada tostador desarrolle su perfil.",
    highlight: "Para tostadores",
    image: imgOroVerde,
    presentations: [
      { label: "Selección del café oro verde", image: imgOroVerdeSeleccion, fit: "cover" },
      { label: "Presentación en saco", image: imgOroSaco, scale: 1.28 },
    ],
  },
  {
    id: 3,
    name: "Café Pergamino Seco",
    productName: "Café Pergamino",
    description: "Cosecha selectiva de nuestras familias productoras, fermentada cuidadosamente y secada al sol.",
    highlight: "Cosecha selectiva",
    image: imgPergamino,
    presentations: [
      { label: "Secado solar del café", image: imgPergaminoSecado, fit: "cover" },
      { label: "Café pergamino en sacos", image: imgPergaminoSacosReal, fit: "cover" },
      { label: "Presentación en saco", image: imgPergaminoSaco },
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
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Café cultivado por nuestras familias en Luyando, Huánuco, con calidad y cuidado en cada etapa.
            </p>
          </div>
          <Button asChild variant="ghost" className="group text-primary font-semibold reveal">
            <Link to="/productos" className="flex items-center gap-2">
              Ver todos los productos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 reveal-stagger">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-border/70 bg-background shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[1.15/1] overflow-hidden bg-gradient-to-br from-muted/30 via-background to-primary/5 p-4 sm:p-6">
                <ProductImageCarousel
                  productName={product.name}
                  presentations={product.presentations ?? [{ label: "", image: product.image }]}
                  onImageClick={() => navigate(`/productos?producto=${encodeURIComponent(product.productName)}`)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-background/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary shadow-sm backdrop-blur">
                  {product.highlight}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {product.description}
                </p>
                <Button
                  size="sm"
                  variant="default"
                  className="gsap-button mt-auto w-full gap-2 rounded-full"
                  onClick={() => navigate(`/productos?producto=${encodeURIComponent(product.productName)}`)}
                >
                  Ver producto y consultar <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
