import { useEffect, useRef, useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
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
    <section id="productos" className="bg-card px-0 pb-12 pt-8 overflow-hidden sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Productos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Café de Especialidad APARY
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Ofrecemos diferentes presentaciones de nuestro café, desde el grano pergamino
            hasta el café tostado y molido listo para disfrutar.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={productsGridRef} className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              data-product-name={product.name}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted/20 p-3 sm:h-56 sm:p-4">
                <ProductImageCarousel
                  key={product.name}
                  productName={product.name}
                  presentations={product.presentations ?? [{ label: "", image: product.image }]}
                  onImageClick={() => handleOpenModal(product)}
                />

                {/* Badge */}
                <div className="pointer-events-none absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2 py-1 sm:px-3 rounded-full bg-leaf-light text-cream text-xs font-semibold shadow-soft">
                    {product.badge}
                  </span>
                </div>

                {/* Removed Price Section */}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-leaf-light flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="default"
                  className="w-full gap-2"
                  onClick={() => handleOpenModal(product)}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adquirir
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 lg:mt-12">
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
