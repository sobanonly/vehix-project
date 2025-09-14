import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import { ShoppingCart, Star, Filter } from "lucide-react";

const Shop = () => {
  const [filter, setFilter] = useState("all");
  
  const products = [
    {
      id: 1,
      name: "Audi A4 Premium Brake Pad Set",
      brand: "Audi",
      price: "$120",
      rating: 4.8,
      category: "brake-pad",
      image: "brake-pad",
      description: "Ceramic compound brake pads with superior stopping power and minimal dust.",
      features: ["2 Year Warranty", "Ceramic Material", "Ultra Quiet"]
    },
    {
      id: 2,
      name: "BMW 3 Series Performance Rotor",
      brand: "BMW", 
      price: "$180",
      rating: 4.9,
      category: "rotor",
      image: "brake-rotor",
      description: "Ventilated cast iron rotors engineered for optimal heat dissipation.",
      features: ["3 Year Warranty", "Cast Iron", "High Performance"]
    },
    {
      id: 3,
      name: "Toyota Camry Reliable Brake Pad Set",
      brand: "Toyota",
      price: "$80", 
      rating: 4.6,
      category: "brake-pad",
      image: "brake-pad",
      description: "Semi-metallic brake pads offering excellent value and dependability.",
      features: ["18 Month Warranty", "Semi-Metallic", "Cost Effective"]
    },
    {
      id: 4,
      name: "Mercedes C-Class Luxury Rotor",
      brand: "Mercedes",
      price: "$220",
      rating: 4.9,
      category: "rotor", 
      image: "brake-rotor",
      description: "Premium ventilated rotors with advanced cooling channels.",
      features: ["3 Year Warranty", "Ventilated Design", "Ultra Quiet"]
    },
    {
      id: 5,
      name: "Lexus ES Premium Brake Pad Set",
      brand: "Lexus",
      price: "$140",
      rating: 4.7,
      category: "brake-pad",
      image: "brake-pad", 
      description: "Premium ceramic brake pads designed for luxury performance.",
      features: ["2.5 Year Warranty", "Ceramic Premium", "Smooth Operation"]
    },
    {
      id: 6,
      name: "Porsche 911 Sport Rotor",
      brand: "Porsche",
      price: "$350",
      rating: 5.0,
      category: "rotor",
      image: "brake-rotor",
      description: "High-performance rotors engineered for sports car demands.",
      features: ["3 Year Warranty", "Sport Tuned", "Maximum Performance"]
    }
  ];

  const filters = [
    { value: "all", label: "All Products" },
    { value: "brake-pad", label: "Brake Pads" },
    { value: "rotor", label: "Rotors" }
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="min-h-screen">
      <Hero
        title="Premium Brake Parts Shop"
        subtitle="Discover our extensive collection of high-quality brake pads and rotors for luxury vehicles."
        variant="minimal"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <div className="mb-12">
            <div className="flex items-center gap-4 justify-center">
              <Filter className="w-5 h-5 text-automotive-silver" />
              <div className="flex gap-2">
                {filters.map((filterOption) => (
                  <button
                    key={filterOption.value}
                    onClick={() => setFilter(filterOption.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      filter === filterOption.value
                        ? "bg-automotive-blue text-white shadow-premium"
                        : "bg-muted text-automotive-silver hover:bg-automotive-platinum"
                    }`}
                  >
                    {filterOption.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-gradient-card rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-automotive-platinum/30 flex items-center justify-center relative overflow-hidden">
                  <div className="w-24 h-24 bg-automotive-blue/10 rounded-xl flex items-center justify-center group-hover:bg-automotive-blue/20 transition-colors duration-300">
                    <span className="text-2xl font-bold text-automotive-blue">
                      {product.brand.charAt(0)}
                    </span>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-automotive-blue">
                    {product.category === "brake-pad" ? "Brake Pad" : "Rotor"}
                  </Badge>
                </div>

                <div className="p-6">
                  {/* Product Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-automotive-charcoal mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-automotive-blue">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-automotive-silver">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Description */}
                  <p className="text-automotive-silver text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-muted text-automotive-silver"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-automotive-blue hover:bg-automotive-blue-light transition-all duration-300 group">
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal mb-6">
            Shop with Confidence
          </h2>
          <p className="text-xl text-automotive-silver mb-8 leading-relaxed">
            Every brake component comes with comprehensive warranty coverage and 
            is backed by our commitment to quality and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-automotive-blue mb-2">2-3</div>
              <div className="text-sm text-automotive-charcoal font-semibold mb-1">Years Warranty</div>
              <div className="text-xs text-automotive-silver">On all products</div>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-automotive-blue mb-2">24h</div>
              <div className="text-sm text-automotive-charcoal font-semibold mb-1">Fast Shipping</div>
              <div className="text-xs text-automotive-silver">Same day processing</div>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-automotive-blue mb-2">100%</div>
              <div className="text-sm text-automotive-charcoal font-semibold mb-1">OEM Quality</div>
              <div className="text-xs text-automotive-silver">Guaranteed performance</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;