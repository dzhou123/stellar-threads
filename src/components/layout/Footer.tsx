import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-width py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-navy font-montserrat font-bold text-lg">ST</span>
              </div>
              <div>
                <span className="font-montserrat font-bold text-xl text-white">
                  Stellar
                </span>
                <span className="font-montserrat font-bold text-xl text-crimson">
                  Threads
                </span>
              </div>
            </div>
            <p className="text-silver-300 text-sm leading-relaxed">
              Premium American flag merchandise for those who wear their patriotism with pride. Quality products, American craftsmanship.
            </p>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/products", label: "Shop All" },
                { href: "/products?category=flags", label: "Flags" },
                { href: "/products?category=apparel", label: "Apparel" },
                { href: "/products?category=accessories", label: "Accessories" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                { href: "#", label: "Shipping Info" },
                { href: "#", label: "Returns & Exchanges" },
                { href: "#", label: "Size Guide" },
                { href: "#", label: "FAQ" },
                { href: "#", label: "Track Order" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-silver-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-silver-300">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>123 Freedom Avenue<br />Patriot City, USA 10001</span>
              </li>
              <li className="flex items-center gap-3 text-silver-300">
                <Phone size={20} className="flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-silver-300">
                <Mail size={20} className="flex-shrink-0" />
                <span>support@stellarthreads.com</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-silver-800 rounded-full flex items-center justify-center hover:bg-crimson transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-silver-800 rounded-full flex items-center justify-center hover:bg-crimson transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-silver-800 rounded-full flex items-center justify-center hover:bg-crimson transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-silver-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-silver-400 text-sm">
              &copy; {new Date().getFullYear()} Stellar Threads. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-silver-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-silver-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-silver-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
