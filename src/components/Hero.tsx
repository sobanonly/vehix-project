import { ReactNode } from "react";
import heroTexture from "@/assets/hero-texture.jpg";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: "default" | "minimal";
}

const Hero = ({ title, subtitle, children, variant = "default" }: HeroProps) => {
  return (
    <section className={`relative overflow-hidden ${
      variant === "default" 
        ? "bg-gradient-hero text-white py-16 lg:py-20" 
        : "bg-muted py-12 lg:py-16"
    }`} style={variant === "default" ? { backgroundImage: `linear-gradient(135deg, hsl(215 85% 15% / 0.9), hsl(215 75% 25% / 0.8)), url(${heroTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
      {variant === "default" && (
        <>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-automotive-blue/70 to-automotive-blue-light/50"></div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            variant === "default" ? "text-white" : "text-automotive-charcoal"
          }`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed ${
              variant === "default" 
                ? "text-white/90" 
                : "text-automotive-silver"
            }`}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;