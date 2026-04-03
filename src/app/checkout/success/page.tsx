"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/cart";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-silver-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-green-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
          Thank You for Your Order!
        </h1>

        <p className="text-silver-600 mb-8">
          Your order has been confirmed and will be shipped shortly. 
          We&apos;ve sent a confirmation email with your order details.
        </p>

        {sessionId && (
          <div className="bg-silver-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-silver-600">Order Reference</p>
            <p className="font-mono text-navy font-medium">
              {sessionId.slice(-12).toUpperCase()}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-navy/5 rounded-lg p-4">
            <Mail size={24} className="mx-auto text-navy mb-2" />
            <p className="text-sm font-medium text-navy">Check Email</p>
            <p className="text-xs text-silver-600">Order confirmation sent</p>
          </div>
          <div className="bg-navy/5 rounded-lg p-4">
            <Package size={24} className="mx-auto text-navy mb-2" />
            <p className="text-sm font-medium text-navy">Shipping Soon</p>
            <p className="text-xs text-silver-600">Tracking info provided</p>
          </div>
          <div className="bg-navy/5 rounded-lg p-4">
            <CheckCircle size={24} className="mx-auto text-navy mb-2" />
            <p className="text-sm font-medium text-navy">Delivered</p>
            <p className="text-xs text-silver-600">5-7 business days</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-primary inline-flex items-center justify-center gap-2">
            Continue Shopping
            <ArrowRight size={20} />
          </Link>
          <Link href="/" className="btn-outline inline-flex items-center justify-center gap-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-silver-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-navy border-t-transparent rounded-full" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
