import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductModal } from "./ProductModal";
import { ProductImageCarousel } from "./ProductImageCarousel";
import { products } from "@/data/productos";
import { useLocation } from "react-router-dom";

export const Productos = () => {
  const productsGridRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const grid = productsGridRef.current;
    if (!grid) return;

    if (!("IntersectionObserver" in window)) {
      grid.classList.add("active");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      grid.classList.toggle("active", entry.isIntersecting);
    }, { threshold: 0.01, rootMargin: "0px 0px 260px 0px" });

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const productName = new URLSearchParams(location.search).get("producto");
    if (!productName) return;

    const product = products.find(({ name }) => name === productName);
    if (!product) return;

    setSelectedProduct(product);
    setIsModalOpen(true);

    const timeout = window.setTimeout(() => {
      const productCard = Array.from(productsGridRef.current?.children ?? []).find(
        (card) => card.getAttribute("data-product-name") === product.name,
      );
      productCard?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [location.search]);

  const handleOpenModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="productos" className="bg-card px-0 pb-16 pt-10 overflow-hidden sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14 reveal">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Del origen a tu taza <span aria-hidden="true">·</span> APARY Café
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Café de especialidad, hecho en Huánuco
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Conoce cada presentación y elige la que mejor acompaña tu forma de disfrutar o trabajar el café.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={productsGridRef} className="products-grid grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              data-product-name={product.name}
              className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-border/70 bg-background shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-gradient-to-br from-muted/30 via-background to-primary/5 p-3 sm:h-72 sm:p-4">
                <ProductImageCarousel
                  key={product.name}
                  productName={product.name}
                  presentations={product.presentations ?? [{ label: "", image: product.image }]}
                  onImageClick={() => handleOpenModal(product)}
                />

              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 font-heading text-xl font-bold leading-tight text-foreground sm:text-2xl">
                  {product.name}
                </h3>
                <p className="mb-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {product.description}
                </p>

                <ul className="mb-6 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="rounded-full bg-muted/70 px-3 py-1.5 text-[11px] font-medium text-foreground/80">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-4 border-t border-border/70 pt-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Pedidos</p>
                    <p className="font-heading text-lg font-bold text-foreground">Solicita información</p>
                    <p className="text-[11px] text-muted-foreground">Presentaciones y disponibilidad</p>
                  </div>

                  <Button
                    variant="default"
                    className="gsap-button w-full gap-2 rounded-full px-4 md:w-auto md:shrink-0"
                    onClick={() => handleOpenModal(product)}
                    aria-label={`Ver detalles y adquirir ${product.name}`}
                  >
                    Consultar <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-background/70 px-5 py-7 text-center sm:mt-14 sm:px-8">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            ¿Interesado en compras al por mayor o exportación?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/51930572244?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20al%20por%20mayor" target="_blank" rel="noopener noreferrer">
              Solicitar Cotización
            </a>
          </Button>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};
