import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Lightbulb, Wine, Trophy, PartyPopper, Building2, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "What is Bunting? | The Flag Authority",
  description: "Bunting is a string of flags hung in a row — like Christmas lights, but flags. Here’s where you’ve seen it, how it works, and how to hang it in five minutes.",
};

export default function BuntingInfoPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Field Guide</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mt-4 mb-6">
              What is <span className="text-crimson">Bunting?</span>
            </h1>
            <p className="text-xl text-silver-300 leading-relaxed">
              The fastest, cheapest, most universally festive way to dress a
              space — and the one decoration you’ve seen at every major
              tournament without knowing what to call it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-4xl">
          <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">
            The short version
          </h2>
          <p className="text-lg text-silver-700 leading-relaxed mb-4">
            Bunting is a string of small flags hung in a row.
          </p>
          <p className="text-lg text-silver-700 leading-relaxed mb-4">
            Think <span className="font-semibold text-navy">Christmas lights, but with flags instead of bulbs.</span> One
            long line, decorations attached, you tie each end to something and
            you’re done.
          </p>
          <p className="text-lg text-silver-700 leading-relaxed">
            You’ve seen bunting your whole life. You probably just never had a
            word for it.
          </p>
        </div>
      </section>

      <section className="bg-silver-50 py-16 md:py-20">
        <div className="container-width max-w-4xl">
          <div className="mb-8">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">Also Known As</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mt-2 mb-4">
              Same thing, lots of names
            </h2>
            <p className="text-silver-600 leading-relaxed">
              Depending on style, region, and who you’re asking, the same
              product goes by a bunch of different names. If any of these are
              what you came searching for, you’re in the right place.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-silver-200 overflow-hidden">
            <dl className="divide-y divide-silver-200">
              {[
                ["Pennant banners / pennant strings", "Emphasizes the triangular flag shape"],
                ["Flag garlands", "A more general decorative term"],
                ["Party bunting", "Common in the UK and event industry"],
                ["Banner flags", "Casual, interchangeable use"],
                ["String flags", "Descriptive — often used in retail and wholesale"],
                ["Festival flags", "Used for outdoor or cultural events"],
                ["Triangle banners", "Very literal — describes the shape"],
                ["Swag bunting", "When draped in curves rather than straight lines"],
                ["Patriotic bunting", "In the U.S., this can also refer to the semi-circular pleated fabric (not just strings — note: that pleated style is not what we sell)"],
              ].map(([name, desc]) => (
                <div key={name} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-4">
                  <dt className="font-semibold text-navy">{name}</dt>
                  <dd className="sm:col-span-2 text-silver-700">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-crimson font-medium uppercase tracking-wider text-sm">You’ve Seen This</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mt-2 mb-4">
              Where bunting shows up
            </h2>
            <p className="text-silver-600">
              Same idea, different settings. If any of these ring a bell,
              you’ve seen bunting in the wild.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Trophy,
                title: "Stadiums and fan zones",
                desc: "Every World Cup, every Euros, every international match. The rows of flags strung along stadium perimeters and fan villages? Bunting.",
              },
              {
                icon: Wine,
                title: "Restaurants and bars",
                desc: "Italian patios with flags running across the dining room. UK pubs draped in St. George’s crosses during international weekends. Houston taquerías repping Mexico in June.",
              },
              {
                icon: Lightbulb,
                title: "Grand openings and lots",
                desc: "Those colorful triangle pennants strung across used-car lots and gas stations? Same idea — solid-color pennants instead of flags, but the format is identical.",
              },
              {
                icon: PartyPopper,
                title: "Parties and weddings",
                desc: "Strung across patios, ceilings, and pergolas. The festive backdrop in your friend’s engagement photos was almost certainly bunting.",
              },
              {
                icon: Building2,
                title: "Hotels and event spaces",
                desc: "Atriums, lobbies, hospitality tents, conference floors. Anywhere a venue wants to show ‘international guests welcome.’",
              },
              {
                icon: Ruler,
                title: "Balconies and storefronts",
                desc: "Apartment balconies during tournament season. Storefronts dressing up for game day. Bunting goes up in five minutes and reads from across the street.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-navy" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-silver-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-4xl">
          <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">
            How ours works
          </h2>
          <p className="text-lg text-silver-700 leading-relaxed mb-4">
            Each of our bunting strings is a single continuous line — exactly
            like a string of Christmas lights. Sewn along that line, end-to-end,
            are <span className="font-semibold text-navy">25 flags</span>: one
            for every nation that qualified for the 2026 FIFA World Cup.
          </p>
          <p className="text-lg text-silver-700 leading-relaxed mb-4">
            You unspool it, tie off two ends, and you’ve covered an entire wall
            or a whole patio in a few minutes. No flagpoles. No per-flag
            hardware. No assembly. One product, one decision.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-navy text-white rounded-xl p-6">
              <p className="text-crimson font-medium uppercase tracking-wider text-xs mb-2">Small</p>
              <h3 className="text-2xl font-montserrat font-bold mb-2">8×12 in flags</h3>
              <p className="text-silver-300 mb-4">9.5 meters of bunting (about 31 ft)</p>
              <p className="text-silver-300 text-sm leading-relaxed">
                Best for sports bars, restaurant dining rooms, balconies, watch
                parties, and smaller fan zones. Reads well at indoor distances.
              </p>
            </div>
            <div className="bg-navy text-white rounded-xl p-6">
              <p className="text-crimson font-medium uppercase tracking-wider text-xs mb-2">Large</p>
              <h3 className="text-2xl font-montserrat font-bold mb-2">12×18 in flags</h3>
              <p className="text-silver-300 mb-4">13 meters of bunting (about 43 ft)</p>
              <p className="text-silver-300 text-sm leading-relaxed">
                Best for stadiums, hotel atriums, hospitality tents, large
                outdoor venues — anywhere flags need to read from across a
                room or across a street.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-silver-50 py-16 md:py-20">
        <div className="container-width max-w-4xl">
          <h2 className="text-3xl font-montserrat font-bold text-navy mb-8 text-center">
            Hanging it: five minutes, two knots
          </h2>
          <ol className="space-y-6">
            {[
              {
                title: "Pick two anchor points",
                desc: "Eaves, light poles, fence posts, ceiling hooks, beams, second-story railings — anything you can tie off to. Aim for similar heights so the swag is even.",
              },
              {
                title: "Tie one end",
                desc: "The bunting line has built-in slack at each end for tying. A double overhand knot works fine.",
              },
              {
                title: "Walk the line and tie the other end",
                desc: "Pull tight for a flat run, or leave slack for a classic swag/drape look. Both look great — pick by venue.",
              },
              {
                title: "(Optional) Add a center support",
                desc: "For runs longer than ~6 m, a third anchor in the middle keeps the line from sagging too low. Not required, but cleaner for restaurants and venues.",
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-silver-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-4xl">
          <h2 className="text-3xl font-montserrat font-bold text-navy mb-6">
            Specs
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-silver-200 overflow-hidden">
            <dl className="divide-y divide-silver-200">
              {[
                ["Material", "110 g storm-flag polyester"],
                ["Print", "Digital print, vivid colors, both sides visible"],
                ["Construction", "Flags sewn end-to-end on a reinforced bunting line"],
                ["Flags per string", "25 (one per World Cup 2026 qualifying nation)"],
                ["Small size", "8×12 in flags, 9.5 m line, 0.2 kg"],
                ["Large size", "12×18 in flags, 13 m line, 0.5 kg"],
                ["Indoor or outdoor", "Both — built to handle Texas sun and wind"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-4">
                  <dt className="font-semibold text-navy">{k}</dt>
                  <dd className="sm:col-span-2 text-silver-700">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="text-silver-600 text-sm mt-6">
            Outfitting a venue, restaurant, or hotel? We work with venues at
            scale — <Link href="/contact" className="text-crimson hover:underline font-medium">talk to us about volume pricing</Link>.
          </p>
        </div>
      </section>

      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to hang the world?
          </h2>
          <p className="text-silver-300 max-w-2xl mx-auto mb-8">
            Two sizes, 25 nations on every string, in stock and ready to ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products?category=buntings" className="btn-secondary inline-flex items-center justify-center gap-2">
              Shop Buntings
              <ArrowRight size={20} />
            </Link>
            <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy inline-flex items-center justify-center gap-2">
              Browse All Flags
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
