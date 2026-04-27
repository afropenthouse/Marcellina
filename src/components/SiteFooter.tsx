import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl text-ivory">Marcellina</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mt-1">Event Center</div>
          <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
            Where milestones become memories. A timeless venue for weddings, galas,
            and celebrations crafted with quiet luxury.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-gold transition-colors"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-gold transition-colors"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.2em] uppercase text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li><Link to="/" className="hover:text-ivory transition-colors">Home</Link></li>
            <li><Link to="/venues" className="hover:text-ivory transition-colors">Venues</Link></li>
            <li><Link to="/gallery" className="hover:text-ivory transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.2em] uppercase text-gold mb-5">Visit</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex gap-2"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /> 248 Heritage Lane, Lagos</li>
            <li className="flex gap-2"><Phone size={16} className="text-gold mt-0.5 shrink-0" /> +234 800 123 4567</li>
            <li className="flex gap-2"><Mail size={16} className="text-gold mt-0.5 shrink-0" /> hello@marcellina.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Marcellina Event Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
