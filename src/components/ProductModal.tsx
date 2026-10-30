import { useState } from "react";
import { MapPin, Minus, Plus, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductImageCarousel } from "./ProductImageCarousel";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    presentations?: { label: string; image: string }[] | null;
    technicalDetails?: { label: string; value: string }[];
  } | null;
}

export const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleWhatsAppOrder = () => {
    if (!product) return;
    
    const message = encodeURIComponent(
      `¡Hola APARY! ☕\n\n` +
      `Me interesa adquirir el siguiente producto:\n` +
      `--------------------------------\n` +
      `📦 *Producto:* ${product.name}\n` +
      `🔢 *Cantidad:* ${quantity}\n` +
      `--------------------------------\n` +
      `Por favor, quisiera coordinar los detalles del pedido y el envío.\n\n` +
      `¡Muchas gracias! 🙌`
    );
    
    window.open(`https://wa.me/51930572244?text=${message}`, "_blank");
    onClose();
    setQuantity(1);
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent data-lenis-prevent className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-5xl overflow-y-auto overscroll-contain rounded-[1.25rem] border-border/60 bg-background p-0 shadow-elevated sm:max-h-[92vh] sm:w-[calc(100%-2rem)] sm:rounded-[1.75rem]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          {/* Image Side */}
          <div className="relative h-64 bg-gradient-to-br from-muted/30 via-background to-primary/5 p-5 sm:h-80 lg:sticky lg:top-0 lg:h-full lg:min-h-[620px]">
            <ProductImageCarousel
              key={product.name}
              productName={product.name}
              presentations={product.presentations ?? [{ label: "", image: product.image }]}
              imageFit="contain"
              imageScale={1}
            />
          </div>

          {/* Content Side */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex-1 space-y-6">
              <div className="pr-8">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> APARY Café
                </span>
                <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                  {product.name}
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {product.description}
                </p>
                <p className="flex items-center gap-2 text-xs font-medium text-foreground/75">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Felipe Pinglo Alva, Luyando · Huánuco, Perú
                </p>
              </div>

              {product.technicalDetails && product.technicalDetails.length > 0 && (
                <div className="space-y-3.5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Lo esencial</h3>
                  <div className="grid grid-cols-1 gap-3 rounded-2xl border border-border/70 bg-muted/25 p-4 sm:grid-cols-2">
                    {product.technicalDetails.map((detail, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{detail.label}</span>
                        <span className="block text-xs font-medium leading-5 text-foreground sm:text-sm">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-primary/5 px-4 py-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Pedido</p>
                <p className="mt-0.5 text-sm font-medium leading-6 text-foreground">Consulta las presentaciones disponibles y coordina el envío por WhatsApp.</p>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                  Cantidad a solicitar
                </label>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center rounded-2xl border border-border bg-muted/50 p-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-sm"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-heading text-xl font-bold text-foreground w-12 text-center">
                      {quantity}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={handleIncrement}
                      className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-3 border-t border-border/70 pt-5">
              <Button 
                onClick={handleWhatsAppOrder} 
                size="lg"
                className="w-full gap-3 shadow-glow h-14"
              >
                <ShoppingBag className="w-5 h-5" />
                Consultar y pedir por WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onClose} 
                className="w-full h-14 border-2"
              >
                Seguir viendo productos
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
