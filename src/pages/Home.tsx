import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

const Home = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-automotive-blue" />,
      title: "Premium Quality",
      description: "OEM-grade brake pads and rotors manufactured to the highest industry standards."
    },
    {
      icon: <Truck className="w-8 h-8 text-automotive-blue" />,
      title: "Fast Shipping",
      description: "Quick delivery nationwide with same-day processing on most orders."
    },
    {
      icon: <Award className="w-8 h-8 text-automotive-blue" />,
      title: "Trusted Brands",
      description: "Specialized in premium automotive brands like Audi, BMW, Mercedes, and more."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Welcome to Vehix Auto Parts"
        subtitle="Premium brake pads & rotors for luxury automotive brands. Quality parts you can trust for your vehicle's performance and safety."
      >
        <Link to="/shop">
          <Button size="lg" className="bg-gradient-button hover:bg-gradient-button-hover text-white shadow-premium hover:shadow-hover transition-all duration-300 transform hover:scale-105">
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        <Link to="/compare">
          <Button variant="outline" size="lg" className="bg-gradient-button hover:bg-gradient-button-hover text-white shadow-premium hover:shadow-hover transition-all duration-300 transform hover:scale-105">
            Compare Parts
          </Button>
        </Link>
      </Hero>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal mb-4">
              Why Choose Vehix Auto Parts?
            </h2>
            <p className="text-xl text-automotive-silver max-w-2xl mx-auto">
              Experience premium quality and exceptional service for your luxury vehicle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-xl bg-gradient-card shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-xl mb-6 group-hover:bg-automotive-blue group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-automotive-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-automotive-silver leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal mb-6">
            Ready to Upgrade Your Brakes?
          </h2>
          <p className="text-xl text-automotive-silver mb-8 leading-relaxed">
            Browse our premium selection of brake pads and rotors, or compare parts to find the perfect fit for your luxury vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-automotive-blue hover:bg-automotive-blue-light transition-all duration-300 shadow-premium">
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/brands">
              <Button variant="outline" size="lg" className="border-automotive-blue text-automotive-blue hover:bg-automotive-blue hover:text-white transition-all duration-300">
                Browse Brands
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;