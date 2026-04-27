import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import garden from "@/assets/venue-garden.jpg";
import corporate from "@/assets/venue-corporate.jpg";
import intimate from "@/assets/venue-intimate.jpg";
import hero from "@/assets/hero-ballroom.jpg";

const items = [
  { src: g2, alt: "First dance under chandelier", tag: "Wedding", span: "md:col-span-2 md:row-span-2" },
  { src: g1, alt: "White rose centerpiece", tag: "Florals" },
  { src: garden, alt: "Garden ceremony arch", tag: "Ceremony" },
  { src: g3, alt: "Cocktail hour", tag: "Reception", span: "md:col-span-2" },
  { src: g4, alt: "Plated dining course", tag: "Cuisine" },
  { src: hero, alt: "Ballroom at twilight", tag: "Ballroom", span: "md:row-span-2" },
  { src: intimate, alt: "Candlelit private dinner", tag: "Atelier" },
  { src: corporate, alt: "Gala stage", tag: "Gala" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-gradient-radial">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">Gallery</p>
          <div className="gold-divider mx-auto mt-6" />
          <h1 className="font-serif text-5xl md:text-7xl mt-8 leading-tight">
            A visual <em className="text-gradient-gold not-italic">journal</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Moments captured across our spaces — vows traded, glasses raised, and
            quiet details that linger long after night ends.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3">
          {items.map((it, i) => (
            <figure key={i} className={`relative overflow-hidden group ${it.span ?? ""}`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                {it.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
