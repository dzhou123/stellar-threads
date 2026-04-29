"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCartStore } from "@/lib/cart";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products?category=flags", label: "Nation Flags" },
  { href: "/products?category=buntings", label: "Bunting Strings" },
  { href: "/bunting", label: "What is Bunting?" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-width">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">FA</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="font-montserrat font-bold text-xl text-navy">
                  The Flag
                </span>
                <span className="font-montserrat font-bold text-xl text-crimson ml-1">
                  Authority
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy hover:text-crimson font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-navy hover:text-crimson transition-colors"
              aria-label="Search"
            >
              <Search size={22} />
            </button>

            <Link
              href="/cart"
              className="relative p-2 text-navy hover:text-crimson transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-crimson text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-navy hover:text-crimson transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 lg:hidden">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-400"
                autoFocus
              />
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-silver-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-navy hover:bg-navy hover:text-white rounded-lg transition-colors",
                    "font-medium"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
