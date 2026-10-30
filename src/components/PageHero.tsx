import homeApary from "@/assets/homeapary.webp";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  compact?: boolean;
}

export const PageHero = ({ title, subtitle, backgroundImage, compact = false }: PageHeroProps) => {
  return (
    <section className={`relative flex items-end justify-start overflow-hidden ${compact ? "h-[42vh] min-h-[320px] max-h-[520px] sm:h-[48vh]" : "min-h-[60vh] sm:min-h-[80vh]"}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage || homeApary} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${compact ? "pb-7 sm:pb-10" : "pb-8 sm:pb-16 lg:pb-24"}`}>
        <div className="reveal max-w-4xl">
          <h1 className={`font-heading font-bold text-cream tracking-tight drop-shadow-lg leading-[1.1] ${compact ? "text-3xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" : "text-3xl sm:text-5xl md:text-6xl lg:text-8xl mb-3 sm:mb-6"}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-cream font-body drop-shadow-md leading-relaxed max-w-2xl ${compact ? "text-sm sm:text-lg md:text-xl" : "text-base sm:text-lg md:text-xl lg:text-2xl"}`}>
              {subtitle}
            </p>
          )}
          <div className="mt-4 sm:mt-8 w-16 sm:w-24 h-1 sm:h-1.5 bg-primary rounded-full shadow-lg" />
        </div>
      </div>
    </section>
  );
};
