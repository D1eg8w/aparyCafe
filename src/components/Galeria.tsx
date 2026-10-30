import { Facebook } from "lucide-react";

// Import CAMPO images
import g1 from "@/assets/CAMPO/GALERIA1.webp";
import g2 from "@/assets/CAMPO/GALERIA2.webp";
import g3 from "@/assets/CAMPO/GALERIA3.webp";
import g4 from "@/assets/CAMPO/GALERIA4.webp";
import g5 from "@/assets/CAMPO/GALERIA5.webp";
import g6 from "@/assets/CAMPO/GALERIA6.webp";
import g7 from "@/assets/CAMPO/GALERIA7.webp";
import g8 from "@/assets/CAMPO/GALERIA8.webp";
import g9 from "@/assets/CAMPO/GALERIA9.webp";
import g10 from "@/assets/CAMPO/GALERIA10.webp";

// Import EXI images
import g11 from "@/assets/EXI/GALERIA11.webp";
import g12 from "@/assets/EXI/GALERIA12.webp";
import g13 from "@/assets/EXI/GALERIA13.webp";
import g14 from "@/assets/EXI/GALERIA14.webp";
import g15 from "@/assets/EXI/GALERIA15.webp";
import g16 from "@/assets/EXI/GALERIA16.webp";
import g17 from "@/assets/EXI/GALERIA17.webp";
import g18 from "@/assets/EXI/GALERIA18.webp";
import g19 from "@/assets/EXI/GALERIA19.webp";
import g20 from "@/assets/EXI/GALERIA20.webp";

type GalleryImage = { src: string; alt: string; category: string };

const facebookPageUrl = "https://www.facebook.com/share/1csBoBsyEW/";

const galleryImages: GalleryImage[] = [
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
            {galleryImages.slice(0, 4).map((image) => (
              <GalleryItem key={image.src} image={image} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 reveal-stagger">
            {galleryImages.slice(4, 7).map((image) => (
              <GalleryItem key={image.src} image={image} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 reveal-stagger">
            {galleryImages.slice(7, 12).map((image) => (
              <GalleryItem key={image.src} image={image} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 reveal-stagger">
            {galleryImages.slice(12).map((image) => (
              <GalleryItem key={image.src} image={image} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

const GalleryItem = ({ image }: { image: GalleryImage }) => (
  <a
    href={facebookPageUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Ver ${image.alt} en Facebook`}
    className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-border/50 bg-muted/50 shadow-soft transition-all duration-700 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 md:aspect-[3/4]"
  >
    <img
      src={image.src}
      alt={image.alt}
      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      loading="lazy"
    />
    
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-black/25 shadow-lg backdrop-blur-sm">
        <Facebook className="h-7 w-7 text-white" aria-hidden="true" />
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-14 text-left text-white">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">{image.category} · Facebook</span>
        <span className="block text-sm font-semibold leading-snug">{image.alt}</span>
      </span>
    </div>
  </a>
);
