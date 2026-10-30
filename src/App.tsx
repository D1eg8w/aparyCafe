import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import ProductosPage from "./pages/ProductosPage";
import ContactoPage from "./pages/ContactoPage";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Preloader } from "@/components/Preloader";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(motionPreference.matches);

    motionPreference.addEventListener("change", updatePreference);
    return () => motionPreference.removeEventListener("change", updatePreference);
  }, []);

  if (reducedMotion) return null;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        anchors: true,
      }}
    />
  );
};

const queryClient = new QueryClient();

const ScrollReveal = ({ isPageVisible }: { isPageVisible: boolean }) => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    if (!isPageVisible) return;

    const page = document.querySelector(".page-appearance");
    if (!page) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      const revealElements = gsap.utils.toArray<HTMLElement>(".reveal");
      const staggerElements = gsap.utils.toArray<HTMLElement>(".reveal-stagger");
      const heroIntro = document.querySelector<HTMLElement>(".hero-intro");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([...revealElements, ...staggerElements], { clearProps: "all" });
        [...revealElements, ...staggerElements].forEach((element) => element.classList.add("active"));
        if (heroIntro) gsap.set(heroIntro.children, { clearProps: "all" });
        return;
      }

      if (heroIntro) {
        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroIntro,
            start: "top 88%",
            toggleActions: "play reverse play reverse",
          },
        });
        introTimeline.fromTo(heroIntro.children,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.14,
            ease: "power3.out",
            clearProps: "transform",
          }
        );
      }

      revealElements.forEach((element) => {
        gsap.fromTo(element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      staggerElements.forEach((element) => {
        const isValuesSequence = element.classList.contains("values-stagger");
        gsap.fromTo(element.children,
          {
            autoAlpha: 0,
            y: isValuesSequence ? 30 : 18,
            rotationZ: isValuesSequence ? (index) => (index % 2 === 0 ? -5 : 5) : 0,
            transformOrigin: "50% 100%",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotationZ: 0,
            duration: isValuesSequence ? 0.8 : 0.65,
            stagger: isValuesSequence ? 0.16 : 0.1,
            ease: isValuesSequence ? "back.out(1.4)" : "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      media.add("(hover: hover) and (prefers-reduced-motion: no-preference)", () => {
        const buttons = gsap.utils.toArray<HTMLElement>(".gsap-button");
        const cleanups: Array<() => void> = [];

        buttons.forEach((button) => {
          const animateIn = () => {
            if (!button.matches(":disabled")) {
              gsap.to(button, { scale: 1.025, duration: 0.18, ease: "power2.out", overwrite: "auto" });
            }
          };
          const animateOut = () => gsap.to(button, { scale: 1, duration: 0.18, ease: "power2.out", overwrite: "auto" });

          button.addEventListener("mouseenter", animateIn);
          button.addEventListener("mouseleave", animateOut);
          button.addEventListener("focusin", animateIn);
          button.addEventListener("focusout", animateOut);
          cleanups.push(() => {
            button.removeEventListener("mouseenter", animateIn);
            button.removeEventListener("mouseleave", animateOut);
            button.removeEventListener("focusin", animateIn);
            button.removeEventListener("focusout", animateOut);
          });
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      });
    }, page);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => {
      window.clearTimeout(refreshTimer);
      media.revert();
      context.revert();
    };
  }, [pathname, lenis, isPageVisible]);

  return null;
};

const App = () => {
  const [isPageVisible, setIsPageVisible] = useState(false);

  return (
    <HelmetProvider>
      <Preloader onFadeOut={() => setIsPageVisible(true)} />
      <div className={`page-appearance ${isPageVisible ? "is-visible" : ""}`}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename="/">
              <SmoothScroll />
              <ScrollReveal isPageVisible={isPageVisible} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/productos" element={<ProductosPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/privacidad" element={<Privacidad />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <WhatsAppButton />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </div>
    </HelmetProvider>
  );
};

export default App;
