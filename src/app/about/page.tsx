import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Trophy, Heart, Flag } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy text-white py-20 md:py-32">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mt-4 mb-6">
              Houston Meets the World.<br />
              <span className="text-crimson">We Bring the Flags.</span>
            </h1>
            <p className="text-xl text-silver-300 leading-relaxed">
              The Flag Authority outfits Houston for the 2026 FIFA World Cup —
              every qualifying nation, every fan group, every venue. One job,
              done right: getting flags into the hands and onto the walls of
              the people celebrating the world&apos;s biggest tournament.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/houston-skyline/800/600"
                  alt="Houston during the World Cup"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-crimson text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-montserrat font-bold text-2xl">Houston, TX</p>
                <p className="text-silver-200">2026 World Cup Host City</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">
                Our Mission
              </h2>
              <p className="text-silver-600 mb-6 leading-relaxed">
                Houston is one of the most international cities in America — and
                in 2026 it becomes one of 16 host cities for the most international
                event on the planet. Fans from every corner of the world will fly
                in for the FIFA World Cup, and the city is going to look the part.
              </p>
              <p className="text-silver-600 mb-6 leading-relaxed">
                We exist to outfit it. The Flag Authority stocks every qualifying
                nation in 3×5 ft format and offers full 25-nation bunting strings
                for venues that want every team represented at once. Storm-grade
                110g polyester. Vivid digital prints. Built to last from first
                whistle through the final.
              </p>
              <p className="text-silver-600 leading-relaxed">
                We&apos;re neutral. We&apos;re not picking a side — we&apos;re
                here for every fan flying in to support their team. Whether
                you&apos;re a sports bar going all-in on group stage, a hotel
                welcoming international guests, or a fan kitting out a watch
                party, we&apos;ve got the colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-silver-50 py-16 md:py-24">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mt-2">
              The Flag Authority Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe2,
                title: "Every Nation",
                desc: "All 25 World Cup 2026 qualifying nations stocked and ready to ship",
              },
              {
                icon: Trophy,
                title: "Tournament Focus",
                desc: "One job done well — flags for the world’s biggest sporting event",
              },
              {
                icon: Flag,
                title: "Storm-Grade Build",
                desc: "110g polyester with vivid digital prints, made to handle outdoor display",
              },
              {
                icon: Heart,
                title: "Neutral Ground",
                desc: "Every team, every fan — we’re here for the whole tournament",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-navy" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-silver-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">
                What We Stand For
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "The Tournament Belongs to Everyone",
                    desc: "Every qualifying nation. Every fan community. We don’t pick favorites — we stock the world.",
                  },
                  {
                    title: "Quality You Can Hang Up",
                    desc: "Storm-grade 110g polyester, sharp digital prints, reinforced bunting lines. Built for sun, wind, and a long tournament.",
                  },
                  {
                    title: "Houston First",
                    desc: "We’re a Houston-focused operation. Local restaurants, venues, and fan groups get the speed and service they need before kickoff.",
                  },
                  {
                    title: "Real Volume Pricing",
                    desc: "Outfitting a hotel, restaurant, or event space? Talk to us — we work with venues at scale.",
                  },
                ].map((value, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-crimson rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-navy mb-1">
                        {value.title}
                      </h3>
                      <p className="text-silver-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/world-flags/800/800"
                  alt="International flags"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready for the World Cup?
          </h2>
          <p className="text-silver-300 max-w-2xl mx-auto mb-8">
            Browse the collection — every qualifying nation in stock, plus full
            25-nation bunting strings for venues going all in.
          </p>
          <Link href="/products" className="btn-secondary inline-flex items-center gap-2">
            Shop the Collection
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
