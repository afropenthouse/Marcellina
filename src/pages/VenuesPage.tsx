import { Link } from "react-router-dom";
import gardenImg from "@/assets/venue-garden.jpg";
import corporateImg from "@/assets/venue-corporate.jpg";
import intimateImg from "@/assets/venue-intimate.jpg";
import heroImg from "@/assets/hero-ballroom.jpg";
import { Check } from "lucide-react";

const venues = [
  {
    img: gardenImg,
    name: "The Rose Garden",
    tagline: "Open-air ceremonies",
    capacity: "Up to 220",
    sqft: "8,000 sq ft",
    desc: "An open-air sanctuary framed by heirloom roses, mature oaks, and golden hour light. Our signature ceremony space, perfect for vows beneath the open sky.",
    features: ["Floral arch & aisle setup", "Tented backup option", "Dedicated bridal suite", "Sunset ceremony slot"],
  },
  {
    img: heroImg,
    name: "The Marcellina Ballroom",
    tagline: "Grand receptions",
    capacity: "Up to 400",
    sqft: "12,000 sq ft",
    desc: "Twin Italian crystal chandeliers and Calacatta marble floors set the stage for receptions of true scale. A timeless backdrop for first dances and toasts.",
    features: ["Crystal chandeliers", "Marble dance floor", "Full A/V & uplighting", "On-site catering kitchen"],
  },
  {
    img: corporateImg,
    name: "The Grand Hall",
    tagline: "Galas & conferences",
    capacity: "Up to 600",
    sqft: "15,000 sq ft",
    desc: "A column-free hall built for spectacle — corporate galas, product launches, and large-scale productions. Soaring ceilings, professional rigging, and a built-in stage.",
    features: ["LED stage backdrop", "Theater-style seating", "Green room & loading dock", "Dedicated event manager"],
  },
  {
    img: intimateImg,
    name: "The Atelier",
    tagline: "Intimate dinners",
    capacity: "Up to 40",
    sqft: "1,200 sq ft",
    desc: "A candlelit, dark-paneled dining room for rehearsal dinners, milestone birthdays, and private board gatherings. Quiet, warm, and impeccably served.",
    features: ["Single 40-seat table", "Sommelier service", "Private entrance", "Custom tasting menus"],
  },
];

export default function VenuesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 bg-gradient-radial">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">Our Venues</p>
          <div className="gold-divider mx-auto mt-6" />
          <h1 className="font-serif text-5xl md:text-7xl mt-8 leading-tight">
            Four spaces.<br />One unforgettable <em className="text-gradient-gold not-italic">address</em>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each of our venues was designed around a single moment — the vow, the
            toast, the standing ovation. Discover the space made for yours.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl space-y-32">
          {venues.map((v, i) => (
            <article key={v.name} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`relative overflow-hidden aspect-[4/5] ${i % 2 ? "md:order-2" : ""}`}>
                <img src={v.img} alt={v.name} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-gold">{v.tagline}</p>
                <h2 className="font-serif text-4xl md:text-5xl mt-4">{v.name}</h2>
                <div className="flex gap-8 mt-6 pb-6 border-b border-border text-sm">
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Capacity</div>
                    <div className="text-ivory mt-1">{v.capacity} guests</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Size</div>
                    <div className="text-ivory mt-1">{v.sqft}</div>
                  </div>
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">{v.desc}</p>
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {v.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-ivory/80">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block mt-10 border border-gold/60 text-gold px-7 py-3 text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-background transition-all">
                  Inquire about this space
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
