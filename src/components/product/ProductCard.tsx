"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/products";
import { useCartStore } from "@/lib/cart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="card">
        <div className="relative aspect-square overflow-hidden bg-silver-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.compareAtPrice && (
            <div className="absolute top-3 left-3 bg-crimson text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}
          {product.sizes && (
            <div className="absolute top-3 right-3 bg-navy text-white text-xs font-medium px-2 py-1 rounded">
              {product.sizes.length} Sizes
            </div>
          )}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 bg-navy text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-navy-600"
            aria-label="Add to cart"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
        <div className="p-4">
          <span className="text-xs text-silver-500 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="font-montserrat font-semibold text-navy mt-1 mb-2 group-hover:text-crimson transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-silver-600 line-clamp-2 mb-3">
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-montserrat font-bold text-lg text-navy">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-silver-500 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
