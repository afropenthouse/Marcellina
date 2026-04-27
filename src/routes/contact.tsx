import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import intimate from "@/assets/venue-intimate.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Tour — Marcellina Event Center" },
      { name: "description", content: "Schedule a private tour of Marcellina Event Center, or reach our planning team to begin designing your event." },
      { property: "og:title", content: "Contact — Marcellina Event Center" },
      { property: "og:description", content: "Schedule a private tour or begin planning your event with our team." },
      { property: "og:image", content: intimate },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-gradient-radial">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">Get in Touch</p>
          <div className="gold-divider mx-auto mt-6" />
          <h1 className="font-serif text-5xl md:text-7xl mt-8 leading-tight">
            Let's design something <em className="text-gradient-gold not-italic">unforgettable</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us about your event. A planner will respond within one business day to
            schedule your private tour and walk you through availability.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3 bg-card/40 border border-border p-8 md:p-12">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="text-gold font-serif text-5xl">✦</div>
                <h2 className="font-serif text-3xl mt-6">Thank you</h2>
                <p className="mt-4 text-muted-foreground">
                  Your inquiry has been received. A member of our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl">Inquire</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Event date" name="date" type="date" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Event type</label>
                  <select className="w-full bg-background border border-border px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors">
                    <option>Wedding</option>
                    <option>Corporate gala</option>
                    <option>Private celebration</option>
                    <option>Conference</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Tell us about your event</label>
                  <textarea
                    rows={5}
                    className="w-full bg-background border border-border px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Guest count, vision, any preferred venues..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-background px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity"
                >
                  Submit inquiry
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <aside className="lg:col-span-2 space-y-10">
            <InfoBlock icon={MapPin} label="Visit us">
              248 Heritage Lane<br />Ikoyi, Lagos
            </InfoBlock>
            <InfoBlock icon={Phone} label="Call">
              +234 800 123 4567
            </InfoBlock>
            <InfoBlock icon={Mail} label="Email">
              hello@marcellina.com<br />press@marcellina.com
            </InfoBlock>
            <InfoBlock icon={Clock} label="Tour hours">
              Tuesday – Saturday<br />By appointment, 10am – 6pm
            </InfoBlock>

            <div className="aspect-square overflow-hidden">
              <img src={intimate} alt="Atelier dining room" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}

function InfoBlock({ icon: Icon, label, children }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center">
        <Icon size={16} className="text-gold" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{label}</div>
        <div className="mt-2 text-ivory leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
