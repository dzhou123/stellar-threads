"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw, Check } from "lucide-react";
import { getProductBySlug, formatPrice } from "@/lib/products";
import { useCartStore } from "@/lib/cart";
import { ProductCard } from "@/components/product";
import { getAllProducts } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  const params = useParams();
  const slug = params.id as string;
  const product = getProductBySlug(slug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(undefined);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const addItem = useCartStore((state) => state.addItem);
  
  useEffect(() => {
    if (product?.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product?.sizes]);

  if (!product) {
    notFound();
  }

  const relatedProducts = getAllProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedVariant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-silver-50">
      <div className="container-width py-8">
        <nav className="flex items-center gap-2 text-sm text-silver-600 mb-6">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-navy transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-navy transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-navy">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-sm">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
              {product.compareAtPrice && (
                <div className="absolute top-4 left-4 bg-crimson text-white text-sm font-bold px-3 py-1 rounded">
                  SALE
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square rounded-lg overflow-hidden border-2 transition-all",
                    selectedImage === index
                      ? "border-navy ring-2 ring-navy/20"
                      : "border-transparent hover:border-silver-400"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 h-fit">
            <div className="mb-4">
              <span className="text-sm text-silver-500 uppercase tracking-wider">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-montserrat font-bold text-navy">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-xl text-silver-500 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <span className="bg-crimson/10 text-crimson text-sm font-semibold px-2 py-1 rounded">
                    Save {formatPrice(product.compareAtPrice - product.price)}
                  </span>
                </>
              )}
            </div>

            <p className="text-silver-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block font-montserrat font-semibold text-navy mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-4 py-2 border rounded-lg font-medium transition-all",
                        selectedSize === size
                          ? "border-navy bg-navy text-white"
                          : "border-silver-300 text-navy hover:border-navy"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <label className="block font-montserrat font-semibold text-navy mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-silver-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-silver-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus size={18} className={quantity <= 1 ? "text-silver-300" : "text-navy"} />
                  </button>
                  <span className="w-12 text-center font-semibold text-navy">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-silver-50 transition-colors"
                  >
                    <Plus size={18} className="text-navy" />
                  </button>
                </div>
                <span className="text-silver-600 text-sm">
                  {product.inStock ? (
                    <span className="text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-crimson font-medium">Out of Stock</span>
                  )}
                </span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-4 rounded-lg font-montserrat font-semibold transition-all",
                  addedToCart
                    ? "bg-green-600 text-white"
                    : product.inStock
                    ? "bg-navy text-white hover:bg-navy-600"
                    : "bg-silver-300 text-silver-500 cursor-not-allowed"
                )}
              >
                {addedToCart ? (
                  <>
                    <Check size={20} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </>
                )}
              </button>
              <button className="p-4 border border-silver-300 rounded-lg hover:border-crimson hover:text-crimson transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-4 border border-silver-300 rounded-lg hover:border-navy transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            <div className="border-t border-silver-200 pt-6 space-y-4">
              <div className="flex items-center gap-3 text-silver-600">
                <Truck size={20} />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-silver-600">
                <Shield size={20} />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-silver-600">
                <RotateCcw size={20} />
                <span>Easy returns within 30 days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-montserrat font-bold text-navy mb-6">
            Product Details
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <p className="text-silver-600 leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </p>
            <div className="mt-6 pt-6 border-t border-silver-200">
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-silver-100 text-silver-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-montserrat font-bold text-navy mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
