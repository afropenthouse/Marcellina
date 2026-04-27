import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/venues", label: "Venues" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-wide text-ivory">Marcellina</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold mt-1">Event Center</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                isActive(l.to) ? "text-gold" : "text-ivory/80 hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center text-sm tracking-[0.15em] uppercase border border-gold/60 text-gold px-5 py-2.5 hover:bg-gold hover:text-background transition-all"
        >
          Book a Tour
        </Link>

        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-ivory/80"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
