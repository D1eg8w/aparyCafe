import whatsappIcon from "@/assets/whatsapp.svg";

export const WhatsAppButton = () => {
  const whatsappNumber = "51930572244";
  const defaultMessage = encodeURIComponent("¡Hola APARY! ☕ Me gustaría obtener más información sobre sus productos y servicios.");
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(1rem_+_env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-elevated transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-green group sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-8 h-8 sm:w-10 sm:h-10 brightness-0 invert" 
      />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-foreground text-sm font-medium rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        ¡Hablemos por WhatsApp! 👋
      </span>
    </a>
  );
};
