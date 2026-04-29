import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2, Truck, Trophy, Sparkles } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
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
              <span className="text-sm font-medium">2026 FIFA World Cup — Houston Host City</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
              The World&apos;s Coming to Houston.<br />
              <span className="text-crimson">Fly Your Colors.</span>
            </h1>

            <p className="text-lg md:text-xl text-silver-300 mb-8 max-w-2xl">
              Premium nation flags and 25-flag bunting strings for fans, venues, restaurants, and event spaces gearing up for the world&apos;s biggest tournament.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-secondary inline-flex items-center justify-center gap-2">
                Shop the Collection
                <ArrowRight size={20} />
              </Link>
              <Link href="/products?category=buntings" className="btn-outline border-white text-white hover:bg-white hover:text-navy inline-flex items-center justify-center gap-2">
                See the Buntings
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
              { icon: Globe2, label: "25 Nations Stocked", desc: "Every qualifier, ready to ship" },
              { icon: Trophy, label: "World Cup Ready", desc: "Built for the 2026 tournament" },
              { icon: Truck, label: "Fast Houston Shipping", desc: "Free over $50" },
              { icon: Sparkles, label: "Storm-Grade Quality", desc: "110g polyester, vivid prints" },
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
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Featured</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mt-2">
              Tournament Favorites
            </h2>
            <p className="text-silver-600 mt-4 max-w-2xl mx-auto">
              The flags Houston is asking for — host nations, fan favorites, and our complete bunting strings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              View All Flags
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-crimson font-medium uppercase tracking-wider text-sm">Built for Houston</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mt-2 mb-6">
                Stocking Every Nation in the Tournament
              </h2>
              <p className="text-silver-300 mb-6 leading-relaxed">
                Houston is one of the most international cities in America — and one of 16 host cities for the 2026 FIFA World Cup. The Flag Authority is here to outfit it. Every qualifying nation, every fan group, every restaurant, sports bar, hotel, and venue.
              </p>
              <p className="text-silver-300 mb-8 leading-relaxed">
                One product line, dialed in: 3×5 ft national flags and 25-nation bunting strings, all printed on 110g storm-flag polyester. Ready for stadium tailgates, watch parties, and the city&apos;s biggest sporting event in a generation.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <p className="text-4xl font-montserrat font-bold text-crimson">25</p>
                  <p className="text-silver-400">Nations Stocked</p>
                </div>
                <div>
                  <p className="text-4xl font-montserrat font-bold text-crimson">2026</p>
                  <p className="text-silver-400">World Cup Year</p>
                </div>
                <div>
                  <p className="text-4xl font-montserrat font-bold text-crimson">110g</p>
                  <p className="text-silver-400">Storm-Grade Fabric</p>
                </div>
              </div>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-navy inline-flex items-center gap-2">
                Our Story
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-silver-200 rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/flags-of-the-world/800/800"
                  alt="International flags"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-crimson text-white p-6 rounded-xl shadow-xl">
                <p className="font-montserrat font-bold text-2xl">Houston, TX</p>
                <p className="text-silver-200">2026 World Cup Host City</p>
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
              Two Ways to Fly
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Nation Flags",
                desc: "3×5 ft individual flags — every World Cup 2026 qualifier",
                image: "https://picsum.photos/seed/nation-flags/800/600",
                href: "/products?category=flags",
              },
              {
                title: "Bunting Strings",
                desc: "25 nations on one string — small (8×12 in) or large (12×18 in)",
                image: "https://picsum.photos/seed/buntings/800/600",
                href: "/products?category=buntings",
              },
            ].map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative aspect-[16/9] rounded-xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-1">
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
              Outfitting a Venue?
            </h2>
            <p className="text-silver-200 max-w-2xl mx-auto mb-8">
              Restaurants, sports bars, hotels, and event spaces — talk to us about volume pricing on bunting and flag bundles for the 2026 World Cup.
            </p>
            <Link href="/contact" className="bg-navy hover:bg-navy-600 px-6 py-3 rounded-lg font-montserrat font-semibold transition-colors inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
