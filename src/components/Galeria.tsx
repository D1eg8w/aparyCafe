import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Import CAMPO images
import g1 from "@/assets/CAMPO/GALERIA1.png";
import g2 from "@/assets/CAMPO/GALERIA2.png";
import g3 from "@/assets/CAMPO/GALERIA3.png";
import g4 from "@/assets/CAMPO/GALERIA4.png";
import g5 from "@/assets/CAMPO/GALERIA5.png";
import g6 from "@/assets/CAMPO/GALERIA6.png";
import g7 from "@/assets/CAMPO/GALERIA7.png";
import g8 from "@/assets/CAMPO/GALERIA8.png";
import g9 from "@/assets/CAMPO/GALERIA9.png";
import g10 from "@/assets/CAMPO/GALERIA10.png";

// Import EXI images
import g11 from "@/assets/EXI/GALERIA11.png";
import g12 from "@/assets/EXI/GALERIA12.png";
import g13 from "@/assets/EXI/GALERIA13.png";
import g14 from "@/assets/EXI/GALERIA14.png";
import g15 from "@/assets/EXI/GALERIA15.png";
import g16 from "@/assets/EXI/GALERIA16.png";
import g17 from "@/assets/EXI/GALERIA17.png";
import g18 from "@/assets/EXI/GALERIA18.png";
import g19 from "@/assets/EXI/GALERIA19.png";
import g20 from "@/assets/EXI/GALERIA20.png";

const galleryImages = [
  { src: g1, alt: "Cosecha de café en las montañas", category: "Campo" },
  { src: g2, alt: "Productores de ASFEPA trabajando", category: "Comunidad" },
  { src: g3, alt: "Plantaciones sostenibles", category: "Campo" },
  { src: g4, alt: "Selección de granos", category: "Proceso" },
  { src: g11, alt: "Café tostado premium", category: "Producto Final" },
  { src: g12, alt: "Degustación de café especialidad", category: "Experiencia" },
  { src: g13, alt: "Empaque APARY", category: "Producto Final" },
  { src: g5, alt: "Viveros de café", category: "Campo" },
  { src: g6, alt: "Secado al sol", category: "Proceso" },
  { src: g7, alt: "Control de calidad", category: "Calidad" },
  { src: g8, alt: "Nuestras raíces", category: "Comunidad" },
  { src: g9, alt: "Cafetal en flor", category: "Campo" },
  { src: g10, alt: "Molienda artesanal", category: "Proceso" },
  { src: g14, alt: "Barismo APARY", category: "Experiencia" },
  { src: g15, alt: "Taza perfecta", category: "Experiencia" },
  { src: g16, alt: "Café de exportación", category: "Producto Final" },
  { src: g17, alt: "Feria de café", category: "Comunidad" },
  { src: g18, alt: "Aroma intenso", category: "Experiencia" },
  { src: g19, alt: "Grano oro", category: "Calidad" },
  { src: g20, alt: "Legado cafetero", category: "Historia" },
];

export const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="galeria" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 uppercase tracking-widest">
            Galería Fotográfica
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nuestra Historia en Imágenes
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Desde nuestras plantaciones en las montañas hasta la taza perfecta, 
            cada imagen cuenta la historia de pasión y dedicación de ASFEPA.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 reveal-stagger">
            {galleryImages.slice(0, 4).map((image, index) => (
              <GalleryItem key={index} image={image} index={index} onClick={() => openLightbox(index)} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 reveal-stagger">
            {galleryImages.slice(4, 7).map((image, index) => (
              <GalleryItem key={index + 4} image={image} index={index + 4} onClick={() => openLightbox(index + 4)} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 reveal-stagger">
            {galleryImages.slice(7, 12).map((image, index) => (
              <GalleryItem key={index + 7} image={image} index={index + 7} onClick={() => openLightbox(index + 7)} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 reveal-stagger">
            {galleryImages.slice(12).map((image, index) => (
              <GalleryItem key={index + 12} image={image} index={index + 12} onClick={() => openLightbox(index + 12)} />
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/98 flex items-center justify-center p-2 sm:p-10 animate-fade-in cursor-zoom-out"
          onClick={closeLightbox}
        >
          {/* Main Image */}
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

const GalleryItem = ({ image, index, onClick }: { image: any, index: number, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-elevated transition-all duration-700 card-hover bg-muted/50 border border-border/50 aspect-[4/5] md:aspect-[3/4]"
  >
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
      loading="lazy"
    />
    
    {/* Professional Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 self-end">
        <Maximize2 className="w-5 h-5 text-white" />
      </div>
      <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">
        {image.category}
      </span>
      <p className="text-white text-lg font-bold leading-tight">
        {image.alt}
      </p>
    </div>
  </button>
);
