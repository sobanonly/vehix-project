import Hero from "@/components/Hero";
import brandLogos from "@/assets/brand-logos.png";

const Brands = () => {
  const brands = [
    { name: "Audi", description: "Premium German engineering", color: "from-red-500 to-red-600" },
    { name: "BMW", description: "Ultimate driving machine", color: "from-blue-500 to-blue-600" },
    { name: "Mercedes", description: "The best or nothing", color: "from-gray-600 to-gray-700" },
    { name: "Lexus", description: "Pursuit of perfection", color: "from-slate-500 to-slate-600" },
    { name: "Porsche", description: "There is no substitute", color: "from-yellow-500 to-yellow-600" },
    { name: "Acura", description: "Precision crafted performance", color: "from-blue-600 to-blue-700" },
    { name: "Range Rover", description: "Above and beyond", color: "from-green-600 to-green-700" },
    { name: "Toyota", description: "Built to last", color: "from-red-600 to-red-700" },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Premium Automotive Brands"
        subtitle="We specialize in high-quality brake parts for luxury and performance vehicles from the world's most prestigious manufacturers."
        variant="minimal"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Logos Display */}
          <div className="mb-16 text-center">
            <div className="relative inline-block">
              <img 
                src={brandLogos} 
                alt="Luxury Automotive Brand Logos" 
                className="w-full max-w-4xl mx-auto opacity-60 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-20"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group bg-gradient-card rounded-xl p-6 text-center shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-automotive-platinum/20 hover:border-automotive-blue/30"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${brand.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-automotive-charcoal mb-2 group-hover:text-automotive-blue transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-automotive-silver text-sm leading-relaxed">
                  {brand.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-automotive-blue to-automotive-blue-light mx-auto rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal mb-6">
            Specialized in Luxury Vehicles
          </h2>
          <p className="text-xl text-automotive-silver leading-relaxed mb-8">
            Our expertise lies in providing premium brake components specifically designed 
            for luxury and performance vehicles. Each brand requires unique specifications 
            and we ensure every part meets OEM standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-automotive-charcoal mb-3">
                German Engineering
              </h3>
              <p className="text-automotive-silver">
                Specialized brake systems for Audi, BMW, Mercedes-Benz, and Porsche 
                with precision-engineered components.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-automotive-charcoal mb-3">
                Japanese Precision
              </h3>
              <p className="text-automotive-silver">
                High-performance brake parts for Lexus, Acura, and premium Toyota 
                models with superior stopping power.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;