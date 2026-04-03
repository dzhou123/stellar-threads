import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Truck, HeartHandshake, Award } from "lucide-react";
import { getFeaturedProducts, formatPrice } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-crimson via-transparent to-crimson" />
        </div>
        
        <div className="container-width relative py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-crimson/20 border border-crimson/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
              <span className="text-sm font-medium">American Made Products</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
              Wear Your <span className="text-crimson">Patriotism</span> With Pride
            </h1>
            
            <p className="text-lg md:text-xl text-silver-300 mb-8 max-w-2xl">
              Premium American flag merchandise crafted with quality and designed for those who believe in the red, white, and blue. From flags to apparel, show your colors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-secondary inline-flex items-center justify-center gap-2">
                Shop Collection
                <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-navy inline-flex items-center justify-center gap-2">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-crimson/20 rounded-full blur-3xl" />
        <div className="absolute -right-10 top-1/4 w-64 h-64 bg-navy-400/20 rounded-full blur-2xl" />
      </section>

      <section className="bg-silver-100 py-8 border-y border-silver-200">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Premium Quality", desc: "Built to last" },
              { icon: Truck, label: "Free Shipping", desc: "Orders over $50" },
              { icon: HeartHandshake, label: "Satisfaction Guaranteed", desc: "30-day returns" },
              { icon: Award, label: "American Made", desc: "Supporting USA" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-navy">{feature.label}</p>
                  <p className="text-sm text-silver-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Our Collection</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mt-2">
              Featured Products
            </h2>
            <p className="text-silver-600 mt-4 max-w-2xl mx-auto">
              Discover our handpicked selection of premium patriotic merchandise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-crimson font-medium uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mt-2 mb-6">
                Built on American Values
              </h2>
              <p className="text-silver-300 mb-6 leading-relaxed">
                Stellar Threads was born from a simple belief: Americans deserve high-quality merchandise that honors their patriotism. We&apos;re not just selling products — we&apos;re celebrating a way of life.
              </p>
              <p className="text-silver-300 mb-8 leading-relaxed">
                Every product in our collection is thoughtfully designed and crafted with attention to detail. From the flags that fly proudly over homes and businesses to the apparel that lets you wear your pride, we believe in quality that stands the test of time.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <p className="text-4xl font-montserrat font-bold text-crimson">10K+</p>
                  <p className="text-silver-400">Happy Customers</p>
                </div>
                <div>
                  <p className="text-4xl font-montserrat font-bold text-crimson">500+</p>
                  <p className="text-silver-400">Products</p>
                </div>
                <div>
                  <p className="text-4xl font-montserrat font-bold text-crimson">100%</p>
                  <p className="text-silver-400">American Made</p>
                </div>
              </div>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-navy inline-flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-silver-200 rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/patriotic/800/800"
                  alt="American flag waving"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-crimson text-white p-6 rounded-xl shadow-xl">
                <p className="font-montserrat font-bold text-2xl">Since 2020</p>
                <p className="text-silver-200">Serving Patriots Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-silver-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Shop By Category</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mt-2">
              Find Your Style
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Flags",
                desc: "From classic stars & stripes to heritage designs",
                image: "https://picsum.photos/seed/flags/600/400",
                href: "/products?category=flags",
              },
              {
                title: "Apparel",
                desc: "T-shirts, hoodies, and more to show your pride",
                image: "https://picsum.photos/seed/apparel/600/400",
                href: "/products?category=apparel",
              },
              {
                title: "Accessories",
                desc: "Hats, bags, and gear for everyday use",
                image: "https://picsum.photos/seed/accessories/600/400",
                href: "/products?category=accessories",
              },
            ].map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-montserrat font-bold text-xl text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-silver-300 text-sm mb-3">{category.desc}</p>
                  <span className="inline-flex items-center gap-2 text-crimson font-medium text-sm group-hover:gap-3 transition-all">
                    Shop Now <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="bg-crimson rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Join the Stellar Threads Family
            </h2>
            <p className="text-silver-200 max-w-2xl mx-auto mb-8">
              Sign up for exclusive offers, early access to new products, and patriotic content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-navy placeholder:text-silver-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="bg-navy hover:bg-navy-600 px-6 py-3 rounded-lg font-montserrat font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
