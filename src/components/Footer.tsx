import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automotive-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold">Vehix Auto Parts</span>
            </div>
            <p className="text-automotive-platinum leading-relaxed">
              Premium brake pads & rotors for luxury automotive brands. 
              Quality parts you can trust for your vehicle's performance and safety.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-automotive-blue-light flex-shrink-0" />
                <span className="text-automotive-platinum">
                  45 W John Street Unit B<br />
                  Hicksville, NY 11801
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-automotive-blue-light flex-shrink-0" />
                <a 
                  href="tel:+15164701788" 
                  className="text-automotive-platinum hover:text-white transition-colors duration-200"
                >
                  (516) 470-1788
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-automotive-blue-light flex-shrink-0" />
                <a 
                  href="mailto:info@vehixautoparts.com" 
                  className="text-automotive-platinum hover:text-white transition-colors duration-200"
                >
                  info@vehixautoparts.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/brands" className="text-automotive-platinum hover:text-white transition-colors duration-200">
                Our Brands
              </a>
              <a href="/shop" className="text-automotive-platinum hover:text-white transition-colors duration-200">
                Shop Parts
              </a>
              <a href="/compare" className="text-automotive-platinum hover:text-white transition-colors duration-200">
                Compare Parts
              </a>
              <a href="/contact" className="text-automotive-platinum hover:text-white transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-automotive-silver/20 mt-8 pt-8 text-center">
          <p className="text-automotive-platinum text-sm">
            &copy; 2025 Vehix Auto Parts. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;