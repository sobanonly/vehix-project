import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Hero from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import { Star, Check } from "lucide-react";

const Compare = () => {
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  const products = [
    { 
      id: "audi-brake-pad", 
      name: "Audi A4 Premium Brake Pad", 
      brand: "Audi", 
      type: "Brake Pad",
      price: "$120",
      material: "Ceramic",
      warranty: "2 Years",
      rating: 4.8,
      features: ["Ultra Quiet", "Low Dust", "Premium Ceramic"]
    },
    { 
      id: "bmw-brake-pad", 
      name: "BMW 3 Series Brake Pad", 
      brand: "BMW", 
      type: "Brake Pad",
      price: "$140",
      material: "Semi-Metallic",
      warranty: "2.5 Years",
      rating: 4.7,
      features: ["High Performance", "Sport Tuned", "Durable"]
    },
    { 
      id: "bmw-rotor", 
      name: "BMW 3 Series Performance Rotor", 
      brand: "BMW", 
      type: "Rotor",
      price: "$180",
      material: "Cast Iron",
      warranty: "3 Years",
      rating: 4.9,
      features: ["Ventilated", "High Performance", "Heat Resistant"]
    },
    { 
      id: "mercedes-rotor", 
      name: "Mercedes C-Class Luxury Rotor", 
      brand: "Mercedes", 
      type: "Rotor",
      price: "$220",
      material: "Cast Iron",
      warranty: "3 Years",
      rating: 4.9,
      features: ["Premium Grade", "Ultra Quiet", "Advanced Cooling"]
    },
    { 
      id: "lexus-brake-pad", 
      name: "Lexus ES Premium Brake Pad", 
      brand: "Lexus", 
      type: "Brake Pad",
      price: "$140",
      material: "Ceramic Premium",
      warranty: "2.5 Years",
      rating: 4.7,
      features: ["Luxury Grade", "Smooth Operation", "Long Lasting"]
    }
  ];

  const handleCompare = () => {
    if (product1 && product2) {
      setShowComparison(true);
    }
  };

  const getProduct = (id: string) => products.find(p => p.id === id);
  const product1Data = getProduct(product1);
  const product2Data = getProduct(product2);

  return (
    <div className="min-h-screen">
      <Hero
        title="Compare Brake Parts"
        subtitle="Compare specifications, features, and pricing to find the perfect brake components for your vehicle."
        variant="minimal"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Selection */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-sm mb-12 border border-automotive-platinum/20">
            <h2 className="text-2xl font-bold text-automotive-charcoal mb-6 text-center">
              Select Products to Compare
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-automotive-charcoal mb-2">
                  First Product
                </label>
                <Select value={product1} onValueChange={setProduct1}>
                  <SelectTrigger className="h-12 border-automotive-platinum">
                    <SelectValue placeholder="Select a brake part" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-automotive-charcoal mb-2">
                  Second Product
                </label>
                <Select value={product2} onValueChange={setProduct2}>
                  <SelectTrigger className="h-12 border-automotive-platinum">
                    <SelectValue placeholder="Select a brake part" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleCompare}
                disabled={!product1 || !product2}
                size="lg"
                className="bg-automotive-blue hover:bg-automotive-blue-light transition-all duration-300 shadow-premium"
              >
                Compare Products
              </Button>
            </div>
          </div>

          {/* Comparison Results */}
          {showComparison && product1Data && product2Data && (
            <div className="bg-gradient-card rounded-2xl overflow-hidden shadow-sm border border-automotive-platinum/20">
              <div className="p-6 bg-automotive-blue text-white">
                <h3 className="text-2xl font-bold text-center">Comparison Results</h3>
              </div>

              <div className="p-8">
                {/* Product Headers */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-sm font-medium text-automotive-silver">Feature</div>
                  <div className="text-center">
                    <div className="bg-muted rounded-xl p-4 border border-automotive-platinum/30">
                      <h4 className="font-semibold text-automotive-charcoal mb-2">
                        {product1Data.name}
                      </h4>
                      <Badge className="bg-automotive-blue">
                        {product1Data.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-muted rounded-xl p-4 border border-automotive-platinum/30">
                      <h4 className="font-semibold text-automotive-charcoal mb-2">
                        {product2Data.name}
                      </h4>
                      <Badge className="bg-automotive-blue">
                        {product2Data.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="space-y-4">
                  {[
                    { label: "Price", key: "price" },
                    { label: "Material", key: "material" },
                    { label: "Warranty", key: "warranty" },
                    { label: "Rating", key: "rating" }
                  ].map((row) => (
                    <div key={row.key} className="grid grid-cols-3 gap-6 py-4 border-b border-automotive-platinum/30">
                      <div className="font-medium text-automotive-charcoal">
                        {row.label}
                      </div>
                      <div className="text-center">
                        {row.key === "rating" ? (
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{product1Data[row.key as keyof typeof product1Data]}</span>
                          </div>
                        ) : (
                          <span className="font-semibold">
                            {product1Data[row.key as keyof typeof product1Data]}
                          </span>
                        )}
                      </div>
                      <div className="text-center">
                        {row.key === "rating" ? (
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{product2Data[row.key as keyof typeof product2Data]}</span>
                          </div>
                        ) : (
                          <span className="font-semibold">
                            {product2Data[row.key as keyof typeof product2Data]}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features Comparison */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-automotive-charcoal mb-4">Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted rounded-xl p-4 border border-automotive-platinum/30">
                      <h5 className="font-semibold text-automotive-charcoal mb-3">{product1Data.name}</h5>
                      <div className="space-y-2">
                        {product1Data.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-automotive-silver">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-muted rounded-xl p-4 border border-automotive-platinum/30">
                      <h5 className="font-semibold text-automotive-charcoal mb-3">{product2Data.name}</h5>
                      <div className="space-y-2">
                        {product2Data.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-automotive-silver">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-automotive-silver mb-8 leading-relaxed">
            Our brake parts specialists can help you select the perfect components 
            based on your vehicle, driving style, and performance requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-automotive-platinum/20">
              <div className="text-2xl font-bold text-automotive-blue mb-2">📞</div>
              <div className="text-sm font-semibold text-automotive-charcoal mb-1">Call Us</div>
              <div className="text-xs text-automotive-silver">(516) 470-1788</div>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm border border-automotive-platinum/20">
              <div className="text-2xl font-bold text-automotive-blue mb-2">💬</div>
              <div className="text-sm font-semibold text-automotive-charcoal mb-1">Expert Advice</div>
              <div className="text-xs text-automotive-silver">Free consultation</div>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm border border-automotive-platinum/20">
              <div className="text-2xl font-bold text-automotive-blue mb-2">🎯</div>
              <div className="text-sm font-semibold text-automotive-charcoal mb-1">Perfect Match</div>
              <div className="text-xs text-automotive-silver">Guaranteed compatibility</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compare;