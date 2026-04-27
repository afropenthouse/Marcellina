import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-ballroom.jpg";
import gardenImg from "@/assets/venue-garden.jpg";
import corporateImg from "@/assets/venue-corporate.jpg";
import intimateImg from "@/assets/venue-intimate.jpg";
import { Calendar, Sparkles, Users, Award } from "lucide-react";

const venues = [
  { img: gardenImg, name: "The Rose Garden", capacity: "Up to 220 guests", desc: "An open-air sanctuary framed by heirloom roses and golden light." },
  { img: corporateImg, name: "The Grand Hall", capacity: "Up to 600 guests", desc: "Soaring ceilings, immersive lighting, and stage built for spectacle." },
  { img: intimateImg, name: "The Atelier", capacity: "Up to 40 guests", desc: "An intimate, candlelit dining room for milestone moments." },
];

const stats = [
  { icon: Calendar, value: "1,400+", label: "Events hosted" },
  { icon: Users, value: "98%", label: "Couple satisfaction" },
  { icon: Award, value: "15", label: "Years of craft" },
  { icon: Sparkles, value: "3", label: "Signature spaces" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Marcellina ballroom at twilight" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Est. 2010 · Lagos</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05]">
              Where moments<br />
              become <em className="text-gradient-gold not-italic">memorable</em>
            </h1>
            <p className="mt-8 text-lg text-ivory/80 max-w-xl leading-relaxed">
              Marcellina is a private event center for weddings, galas, and
              once-in-a-lifetime celebrations — a stage set with quiet luxury.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gradient-gold text-background px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium shadow-elegant hover:opacity-90 transition-opacity">
                Plan your event
              </Link>
              <Link to="/venues" className="border border-ivory/30 text-ivory px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors">
                Discover venues
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/50 text-xs tracking-[0.3em] uppercase">
          Scroll
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">Our Philosophy</p>
          <div className="gold-divider mx-auto mt-6" />
          <h2 className="font-serif text-4xl md:text-6xl mt-8 leading-tight">
            A venue should disappear,<br />
            so the moment can <em className="text-gradient-gold not-italic">shine</em>.
          </h2>
          <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            For fifteen years, we have hosted weddings, anniversaries, corporate
            galas, and celebrations of every shape. Behind every event is a quiet
            team of planners, chefs, and stylists devoted to one outcome — that
            you remember the people, not the logistics.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto text-gold mb-4" size={28} strokeWidth={1.2} />
              <div className="font-serif text-4xl md:text-5xl text-ivory">{s.value}</div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Venues preview */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold">Our Spaces</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-4">Three signature venues</h2>
            </div>
            <Link to="/venues" className="text-sm tracking-[0.2em] uppercase text-gold hover:text-ivory transition-colors">
              View all venues →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {venues.map((v) => (
              <article key={v.name} className="group">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img src={v.img} alt={v.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="pt-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold">{v.capacity}</p>
                  <h3 className="font-serif text-2xl mt-2 text-ivory">{v.name}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 bg-gradient-radial">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-gold font-serif text-6xl leading-none">"</div>
          <blockquote className="font-serif text-3xl md:text-4xl italic text-ivory mt-4 leading-relaxed">
            Marcellina hosted the night of our lives. Every detail — the light,
            the food, the silence between toasts — was considered.
          </blockquote>
          <div className="mt-10">
            <div className="text-gold tracking-[0.2em] uppercase text-xs">Adaeze & Tomi</div>
            <div className="text-muted-foreground text-sm mt-2">Wedding · The Grand Hall</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl text-center border border-gold/30 px-8 py-20 bg-card/40">
          <h2 className="font-serif text-4xl md:text-5xl">Reserve your date</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Dates for the upcoming season are filling quickly. Schedule a private
            tour to walk the spaces and meet the team.
          </p>
          <Link to="/contact" className="inline-block mt-10 bg-gradient-gold text-background px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity">
            Book a private tour
          </Link>
        </div>
      </section>
    </>
  );
}
