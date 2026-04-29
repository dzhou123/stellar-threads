"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, ChevronDown, Loader2 } from "lucide-react";
import { ProductCard } from "@/components/product";
import { getAllProducts } from "@/lib/products";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", label: "All Products" },
  { value: "flags", label: "Nation Flags" },
  { value: "buntings", label: "Bunting Strings" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name: A-Z" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  useEffect(() => {
    setProducts(getAllProducts());
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const currentSortLabel = sortOptions.find((o) => o.value === sortBy)?.label;

  return (
    <div className="min-h-screen bg-silver-50">
      <div className="bg-navy text-white py-12">
        <div className="container-width">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-2">
            Shop Flags
          </h1>
          <p className="text-silver-300">
            Every nation, ready to fly — World Cup 2026 collection
          </p>
        </div>
      </div>

      <div className="container-width py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="mb-6">
                  <h3 className="font-montserrat font-semibold text-navy mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg transition-colors",
                          selectedCategory === cat.value
                            ? "bg-navy text-white"
                            : "text-navy hover:bg-silver-100"
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-silver-200 pt-6">
                  <h3 className="font-montserrat font-semibold text-navy mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {[
                      { label: "Under $25", max: 25 },
                      { label: "$25 - $50", min: 25, max: 50 },
                      { label: "Over $50", min: 50 },
                    ].map((range) => (
                      <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-silver-400 text-navy focus:ring-navy"
                        />
                        <span className="text-navy">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field pl-10"
                  />
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <span className="text-silver-600 text-sm whitespace-nowrap">
                    {filteredProducts.length} products
                  </span>

                  <div className="relative">
                    <button
                      onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2 border border-silver-300 rounded-lg hover:bg-silver-50 transition-colors"
                    >
                      <span className="text-navy">{currentSortLabel}</span>
                      <ChevronDown size={16} className="text-silver-500" />
                    </button>
                    {sortDropdownOpen && (
                      <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-silver-200 py-2 min-w-[180px] z-10">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value);
                              setSortDropdownOpen(false);
                            }}
                            className={cn(
                              "w-full text-left px-4 py-2 hover:bg-silver-50 transition-colors",
                              sortBy === option.value
                                ? "text-crimson font-medium"
                                : "text-navy"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden p-2 border border-silver-300 rounded-lg hover:bg-silver-50 transition-colors"
                  >
                    <SlidersHorizontal size={20} className="text-navy" />
                  </button>
                </div>
              </div>

              {selectedCategory !== "all" && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-silver-600">Active filters:</span>
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-navy/10 text-navy rounded-full text-sm hover:bg-navy/20 transition-colors"
                  >
                    {categories.find((c) => c.value === selectedCategory)?.label}
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="w-16 h-16 bg-silver-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-silver-400" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-navy mb-2">
                  No products found
                </h3>
                <p className="text-silver-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-silver-50 flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-navy animate-spin" />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ProductsContent />
    </Suspense>
  );
}
