import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Hero from "@/components/Hero";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-automotive-blue" />,
      title: "Visit Our Store",
      details: ["45 W John Street Unit B", "Hicksville, NY 11801"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6 text-automotive-blue" />,
      title: "Call Us",
      details: ["(516) 470-1788"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-automotive-blue" />,
      title: "Email Us",
      details: ["info@vehixautoparts.com"],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6 text-automotive-blue" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      action: "View Schedule"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Get in Touch"
        subtitle="Have questions about our brake parts? Need expert advice? We're here to help you find the perfect components for your vehicle."
        variant="minimal"
      />

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-automotive-charcoal mb-6">
                  Contact Information
                </h2>
                <p className="text-xl text-automotive-silver leading-relaxed">
                  Reach out to our brake parts specialists for expert guidance 
                  and personalized recommendations for your luxury vehicle.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-card rounded-xl p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-automotive-platinum/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-automotive-blue/10 rounded-xl flex items-center justify-center group-hover:bg-automotive-blue group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-automotive-charcoal mb-2">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-automotive-silver">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-sm border border-automotive-platinum/20">
              <h2 className="text-2xl font-bold text-automotive-charcoal mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-automotive-charcoal font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-automotive-platinum focus:border-automotive-blue"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-automotive-charcoal font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-automotive-platinum focus:border-automotive-blue"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-automotive-charcoal font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="h-12 border-automotive-platinum focus:border-automotive-blue"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-automotive-charcoal font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-automotive-platinum focus:border-automotive-blue resize-none"
                    placeholder="Tell us about your brake part needs or ask any questions..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-automotive-blue hover:bg-automotive-blue-light transition-all duration-300 shadow-premium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-automotive-charcoal mb-4">
              Visit Our Location
            </h2>
            <p className="text-automotive-silver">
              Stop by our showroom to see our brake parts in person and speak with our experts.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-2xl overflow-hidden shadow-sm border border-automotive-platinum/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.52541368459279!3d40.768061979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c280f0b749982d%3A0x8b5c9b2462de77f6!2s45%20W%20John%20St%20Unit%20B%2C%20Hicksville%2C%20NY%2011801%2C%20USA!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Vehix Auto Parts Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-automotive-silver">
              Quick answers to common questions about our brake parts and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-automotive-charcoal mb-3">
                What's your warranty policy?
              </h3>
              <p className="text-automotive-silver text-sm">
                All brake pads come with 18 months to 2.5 years warranty, and rotors 
                include 3 years coverage depending on the brand and model.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-automotive-charcoal mb-3">
                Do you offer installation services?
              </h3>
              <p className="text-automotive-silver text-sm">
                While we specialize in parts sales, we can recommend certified 
                mechanics and service centers in your area for professional installation.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-automotive-charcoal mb-3">
                How do I know which parts fit my car?
              </h3>
              <p className="text-automotive-silver text-sm">
                Contact us with your vehicle's year, make, model, and VIN. Our experts 
                will ensure you get the exact parts that fit your specific vehicle.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-automotive-charcoal mb-3">
                What are your shipping options?
              </h3>
              <p className="text-automotive-silver text-sm">
                We offer standard and expedited shipping nationwide. Most orders 
                are processed same-day with 24-48 hour delivery options available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;