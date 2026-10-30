import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ProductPresentation {
  label: string;
  image: string;
  fit?: "cover" | "contain";
  scale?: number;
}

interface ProductImageCarouselProps {
  productName: string;
  presentations: ProductPresentation[];
  onImageClick?: () => void;
  imageFit?: "cover" | "contain";
  imageScale?: number;
}

export const ProductImageCarousel = ({ productName, presentations, onImageClick, imageFit, imageScale }: ProductImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePresentation = presentations[activeIndex];
  const resolvedImageFit = imageFit ?? activePresentation?.fit ?? "contain";
  const resolvedImageScale = imageScale ?? activePresentation?.scale ?? 1;
  const hasMultiple = presentations.length > 1;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + presentations.length) % presentations.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % presentations.length);
  };

  if (!activePresentation) return null;

  return (
    <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden rounded-xl bg-background/50">
      {onImageClick ? (
        <button
          type="button"
          onClick={onImageClick}
          aria-label={`Ver información de ${productName}`}
          className="absolute inset-0 z-0 flex h-full w-full cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        >
          <img
            key={activePresentation.image}
            src={activePresentation.image}
            alt={`${productName} — ${activePresentation.label || "presentación"}`}
            className={`h-full w-full ${resolvedImageFit === "cover" ? "object-cover" : "object-contain p-3 drop-shadow-xl sm:p-5"}`}
            style={{ transform: resolvedImageScale === 1 ? undefined : `scale(${resolvedImageScale})` }}
          />
        </button>
      ) : (
        <img
        key={activePresentation.image}
        src={activePresentation.image}
        alt={`${productName} — ${activePresentation.label || "presentación"}`}
        className={`h-full w-full ${resolvedImageFit === "cover" ? "object-cover" : "object-contain p-3 drop-shadow-xl sm:p-5"}`}
        style={{ transform: resolvedImageScale === 1 ? undefined : `scale(${resolvedImageScale})` }}
        />
      )}

      {activePresentation.label && (
        <span className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-lg bg-primary/90 px-2.5 py-1.5 text-[9px] font-semibold text-primary-foreground shadow-md backdrop-blur sm:text-[10px]">
          {activePresentation.label}
        </span>
      )}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label={`Ver presentación anterior de ${productName}`}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-background/90 text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-9 sm:w-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label={`Ver siguiente presentación de ${productName}`}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-background/90 text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-9 sm:w-9"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5" aria-label="Presentaciones del producto">
            {presentations.map((presentation, index) => (
              <button
                key={presentation.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver ${presentation.label || `presentación ${index + 1}`}`}
                aria-current={index === activeIndex}
                className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-5 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-primary/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
