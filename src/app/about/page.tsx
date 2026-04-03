import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, Heart, Flag } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy text-white py-20 md:py-32">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mt-4 mb-6">
              Born from Patriotism,<br />
              <span className="text-crimson">Built for Americans</span>
            </h1>
            <p className="text-xl text-silver-300 leading-relaxed">
              Stellar Threads was founded on a simple belief: Americans deserve 
              high-quality merchandise that honors their love for the red, white, and blue.
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
                  src="https://picsum.photos/seed/about1/800/600"
                  alt="American manufacturing"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-crimson text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-montserrat font-bold text-2xl">Est. 2020</p>
                <p className="text-silver-200">Serving patriots nationwide</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">
                Our Mission
              </h2>
              <p className="text-silver-600 mb-6 leading-relaxed">
                We believe that wearing your patriotism shouldn&apos;t mean sacrificing quality. 
                Every Stellar Threads product is crafted with care, using premium materials 
                that are built to last. From the flags that fly over homes to the apparel 
                that tells your story, we&apos;re here to help you show your colors.
              </p>
              <p className="text-silver-600 mb-6 leading-relaxed">
                Our commitment goes beyond commerce. We&apos;re dedicated to supporting American 
                workers and manufacturers, ensuring that when you buy from Stellar Threads, 
                you&apos;re investing in our nation&apos;s economic strength.
              </p>
              <p className="text-silver-600 leading-relaxed">
                When you wear Stellar Threads, you&apos;re not just wearing a product — you&apos;re 
                wearing a statement. A statement that says you believe in something bigger 
                than yourself. That you&apos;re proud of where you come from. That you stand for 
                freedom, opportunity, and the American dream.
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
              The Stellar Threads Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Flag,
                title: "Premium Quality",
                desc: "Every product is crafted from the finest materials for lasting durability"
              },
              {
                icon: Users,
                title: "American Made",
                desc: "Supporting domestic manufacturing and American workers"
              },
              {
                icon: Heart,
                title: "Customer First",
                desc: "30-day satisfaction guarantee with hassle-free returns"
              },
              {
                icon: Award,
                title: "Fast Shipping",
                desc: "Quick delivery on all orders, free on purchases over $50"
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
                Our Values
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Quality Over Quantity",
                    desc: "We&apos;d rather make one exceptional product than ten mediocre ones. Every item in our store meets our exacting standards."
                  },
                  {
                    title: "Integrity in Business",
                    desc: "Honest pricing, transparent policies, and treating every customer like family. That&apos;s the Stellar Threads way."
                  },
                  {
                    title: "Community Connection",
                    desc: "We actively give back to veteran organizations, first responder groups, and community charities across America."
                  },
                  {
                    title: "Continuous Improvement",
                    desc: "We&apos;re always listening to our customers and evolving our products to serve you better."
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
                  src="https://picsum.photos/seed/about2/800/800"
                  alt="Our team"
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
            Ready to Show Your Colors?
          </h2>
          <p className="text-silver-300 max-w-2xl mx-auto mb-8">
            Browse our collection of premium American flag merchandise and find the 
            perfect way to display your patriotism.
          </p>
          <Link href="/products" className="btn-secondary inline-flex items-center gap-2">
            Shop Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
