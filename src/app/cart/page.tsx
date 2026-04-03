"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();
  const shipping = subtotal >= 50 ? 0 : 7.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-silver-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-silver-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={48} className="text-silver-400" />
          </div>
          <h1 className="text-3xl font-montserrat font-bold text-navy mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-silver-600 mb-8">
            Looks like you haven&apos;t added any patriotic merchandise to your cart yet. 
            Start shopping to show your American pride!
          </p>
          <Link href="/products" className="btn-primary inline-flex items-center gap-2">
            Start Shopping
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-silver-50">
      <div className="bg-navy text-white py-12">
        <div className="container-width">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-2">
            Shopping Cart
          </h1>
          <p className="text-silver-300">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </div>

      <div className="container-width py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedVariant}`}
                className="bg-white rounded-xl shadow-sm p-4 md:p-6"
              >
                <div className="flex gap-4 md:gap-6">
                  <Link
                    href={`/products/${item.product.slug}`}
                    className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-silver-100"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-montserrat font-semibold text-navy hover:text-crimson transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-silver-600 mt-1">
                          {item.product.category}
                          {item.selectedSize && ` / Size: ${item.selectedSize}`}
                          {item.selectedVariant && ` / ${item.selectedVariant}`}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          removeItem(
                            item.product.id,
                            item.selectedSize,
                            item.selectedVariant
                          )
                        }
                        className="p-2 text-silver-400 hover:text-crimson transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center border border-silver-300 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedSize,
                              item.selectedVariant
                            )
                          }
                          className="p-2 hover:bg-silver-50 transition-colors"
                        >
                          <Minus size={16} className="text-navy" />
                        </button>
                        <span className="w-10 text-center font-semibold text-navy">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedSize,
                              item.selectedVariant
                            )
                          }
                          className="p-2 hover:bg-silver-50 transition-colors"
                        >
                          <Plus size={16} className="text-navy" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-montserrat font-bold text-lg text-navy">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-silver-500">
                            {formatPrice(item.product.price)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-navy hover:text-crimson font-medium transition-colors"
            >
              <ArrowRight size={20} className="rotate-180" />
              Continue Shopping
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="font-montserrat font-bold text-xl text-navy mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-silver-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-silver-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-silver-600">
                  <span>Tax (8%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="border-t border-silver-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-montserrat font-semibold text-navy">
                      Total
                    </span>
                    <span className="font-montserrat font-bold text-xl text-navy">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
              </div>

              {subtotal < 50 && (
                <div className="bg-navy/5 rounded-lg p-4 mb-6">
                  <p className="text-sm text-navy">
                    Add <span className="font-semibold">{formatPrice(50 - subtotal)}</span> more 
                    to qualify for free shipping!
                  </p>
                  <div className="mt-2 h-2 bg-silver-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-navy rounded-full transition-all"
                      style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <Link
                href="/checkout"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight size={20} />
              </Link>

              <div className="mt-6 pt-6 border-t border-silver-200">
                <p className="text-sm text-silver-600 mb-3">We accept:</p>
                <div className="flex gap-2">
                  {["Visa", "MC", "Amex", "PayPal"].map((card) => (
                    <div
                      key={card}
                      className="px-3 py-1 bg-silver-100 rounded text-xs font-medium text-silver-600"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
