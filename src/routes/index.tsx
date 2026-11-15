import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:url", content: "https://bgreen.gr/" },
    ],
    links: [
      { rel: "canonical", href: "https://bgreen.gr/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://bgreen.gr/#localbusiness",
              "name": "B Green Intelligent Construction",
              "image": "https://bgreen.gr/favicon.ico",
              "url": "https://bgreen.gr/",
              "telephone": "+30 698 190 2330",
              "email": "bgreen.constructionss@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Αγίου Γεωργίου 25",
                "addressLocality": "Πόρτο Ράφτη",
                "postalCode": "190 03",
                "addressCountry": "GR",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.8833",
                "longitude": "24.0167",
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "07:00",
                  "closes": "16:00",
                },
              ],
              "priceRange": "€€",
              "areaServed": "Πόρτο Ράφτη, Αττική",
              "sameAs": [],
            },
            {
              "@type": "Service",
              "serviceType": "Στέγη και Σιδηροκατασκευή",
              "provider": { "@id": "https://bgreen.gr/#localbusiness" },
              "description": "Επαγγελματικές υπηρεσίες στέγης, σιδηροκατασκευής και μεταλλικών προκάτ.",
              "areaServed": "Πόρτο Ράφτη, Αττική",
            },
            {
              "@type": "Service",
              "serviceType": "Ανακαίνιση και Μονώσεις",
              "provider": { "@id": "https://bgreen.gr/#localbusiness" },
              "description": "Ολικές και μερικές ανακαινίσεις, υγρομόνωση, θερμομόνωση και θερμοπρόσοψη.",
              "areaServed": "Πόρτο Ράφτη, Αττική",
            },
            {
              "@type": "WebSite",
              "name": "B Green Intelligent Construction",
              "url": "https://bgreen.gr/",
              "inLanguage": "el",
            },
          ],
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "Αρχική", href: "#hero" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Έργα", href: "#gallery" },
  { label: "Επικοινωνία", href: "#contact" },
];

const SERVICES = [
  { icon: "⚡", title: "Ηλεκτρολογικά", desc: "Πλήρεις ηλεκτρολογικές εγκαταστάσεις και αποκαταστάσεις." },
  { icon: "🛠️", title: "Ανακαίνιση", desc: "Ολικές και μερικές ανακαινίσεις χώρων με σύγχρονη αισθητική." },
  { icon: "🚿", title: "Υδραυλικά", desc: "Εγκαταστάσεις και επισκευές υδραυλικών με εγγύηση." },
  { icon: "🎨", title: "Βάψιμο", desc: "Επαγγελματικά χρωματισμοί εσωτερικών και εξωτερικών χώρων." },
  { icon: "🧱", title: "Πλακάκια", desc: "Τοποθέτηση πλακιδίων δαπέδου και τοίχου κάθε τύπου." },
  { icon: "🏗️", title: "Σιδηροκατασκευή – Μεταλλικά Προκάτ", desc: "Κατασκευή μεταλλικών προκάτ κτιρίων και σιδηροκατασκευές." },
  { icon: "💧", title: "Υγρομόνωση", desc: "Πλήρης προστασία από υγρασία και νερό." },
  { icon: "🌡️", title: "Θερμομόνωση", desc: "Μόνωση για εξοικονόμηση ενέργειας και άνεση." },
  { icon: "🧰", title: "Γυψοσανίδες", desc: "Κατασκευές γυψοσανίδας για διαχωριστικά και ψευδοροφές." },
  { icon: "🏠", title: "Θερμοπρόσοψη", desc: "Εξωτερική θερμομόνωση κτιρίων υψηλής απόδοσης." },
];

const STATS = [
  { value: 5, suffix: "★", label: "Μέση Βαθμολογία" },
  { value: 500, suffix: "+", label: "Ολοκληρωμένα Έργα" },
  { value: 15, suffix: "+", label: "Χρόνια Εμπειρίας" },
];

const WHY = [
  { icon: "⚡", title: "Άμεση Ανταπόκριση", desc: "Απαντάμε σε κάθε αίτημα εντός 2 ωρών." },
  { icon: "✅", title: "Εγγύηση Εργασίας", desc: "Κάθε εργασία συνοδεύεται από γραπτή εγγύηση αποτελέσματος." },
];

const REVIEWS = [
  { text: "Άψογη συνεργασία!", name: "Αλεξάνδρος Ζύρουκου", when: "4 μήνες πριν" },
  { text: "Επαγγελματική δουλειά, άμεση εξυπηρέτηση. Συστήνω ανεπιφύλακτα!", name: "Alex Methasani", when: "3 μήνες πριν" },
  { text: "Εξαιρετική ποιότητα εργασίας και σεβασμός στον χώρο μας.", name: "Perlat Lamaj", when: "4 μήνες πριν" },
];

const GALLERY = [
  { src: "/images/bgreen-p1.png", title: "Σύγχρονη μεταλλική κατοικία με σχεδιασμό B Green" },
  { src: "/images/bgreen-p2.png", title: "Μοντέρνο σπίτι με επένδυση ξύλου και φωτισμό B Green" },
  { src: "/images/bgreen-p3.png", title: "Αρχιτεκτονικό έργο B Green με πράσινη κάθετη όψη" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
      {children}
    </div>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1600;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function Home() {
  useReveal();

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <div className="min-h-screen bg-[color:var(--surface)] text-[color:var(--ink)]">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[color:var(--brand)] bg-[color:var(--ink)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/images/bgreen-logo.png"
              alt="B Green Intelligent Construction"
              className="h-12 w-auto object-contain sm:h-14"
            />
            <span className="text-xl font-black tracking-tight text-white">
              B <span className="text-[color:var(--brand-light)]">GREEN</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-white/80 transition hover:text-[color:var(--brand-light)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            onClick={scrollToBooking}
            className="btn-glow inline-flex items-center rounded-md bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white"
          >
            Κλείστε Ραντεβού
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden bg-[color:var(--ink)] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url(/images/bgreen-hero.png)" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(600px circle at 20% 20%, rgba(27,77,46,0.25), transparent 60%), radial-gradient(500px circle at 80% 60%, rgba(10,10,10,0.65), rgba(10,10,10,0.35) 60%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/50 via-[color:var(--ink)]/30 to-[color:var(--ink)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
              Μεταλλικα Προκατ και το Σπίτι σας στα<br />
              <span className="text-[color:var(--brand-light)]">Καλύτερα Χέρια</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
              Επαγγελματικές υπηρεσίες στέγης και Μεταλλικών Προκάτ. Ποιότητα που διαρκεί, τιμές που σας σέβονται.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-[color:var(--brand-light)] sm:text-lg">
              Το σπίτι των ονείρων σας σε 6 μήνες από την ημέρα της υπογραφής!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#booking"
                onClick={scrollToBooking}
                className="btn-glow inline-flex w-full items-center justify-center rounded-md bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white sm:w-auto"
              >
                Κλείστε Ραντεβού →
              </a>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--brand-light)] hover:text-[color:var(--brand-light)] sm:w-auto"
              >
                Δείτε τις Υπηρεσίες μας ↓
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10" data-reveal>
            {[
              { n: "5★", l: "Google" },
              { n: "500+", l: "Έργα" },
              { n: "15+", l: "Χρόνια" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black text-[color:var(--brand-light)] sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[color:var(--surface-alt)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <SectionLabel>Για την εταιρεία</SectionLabel>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Εμπιστοσύνη που Χτίζεται<br />Χρόνο με τον Χρόνο
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--ink-soft)]">
                Η B Green είναι επαγγελματική εταιρεία στέγης και σιδεροκατασκευής προκάτ με έδρα το Πόρτο Ράφτη. Αναλαμβάνουμε κάθε είδους εργασία με εγγύηση ποιότητας, επαγγελματισμό και σεβασμό στον χώρο σας.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-1" data-reveal>
              {[
                { t: "Εγγύηση Εργασίας", d: "Γραπτή εγγύηση σε κάθε έργο." },
                { t: "Εκτίμηση", d: "Επί τόπου." },
                { t: "Άμεση Ανταπόκριση", d: "Απάντηση εντός 2 ωρών." },
              ].map((f) => (
                <div
                  key={f.t}
                  className="flex items-start gap-4 rounded-lg border-l-4 border-[color:var(--brand)] bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-bold">{f.t}</div>
                    <div className="text-sm text-[color:var(--ink-soft)]">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-reveal>
            <SectionLabel>Υπηρεσίες</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Τι Αναλαμβάνουμε</h2>
            <p className="mt-4 text-[color:var(--ink-soft)]">
              Ολοκληρωμένες υπηρεσίες από έμπειρους επαγγελματίες.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                style={{ animationDelay: `${i * 60}ms` }}
                className="group rounded-xl border border-[color:var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[0_20px_40px_-20px_rgba(27,77,46,0.35)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[color:var(--brand)]/10 text-2xl transition group-hover:bg-[color:var(--brand)] group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[color:var(--brand-dark)] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center" data-reveal>
                <div className="text-5xl font-black tracking-tight sm:text-6xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[color:var(--surface-alt)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-reveal>
            <SectionLabel>Γιατί B Green</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Γιατί να μας Επιλέξετε</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {WHY.map((w) => (
              <div
                key={w.title}
                data-reveal
                className="rounded-lg border-l-4 border-[color:var(--brand)] bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-center gap-3 text-lg font-bold">
                  <span className="text-2xl">{w.icon}</span>
                  {w.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[color:var(--surface-alt)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-reveal>
            <SectionLabel>Τα έργα μας</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Μερικά από τα Έργα μας</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                data-reveal
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[color:var(--ink)] shadow-lg"
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <div className="text-sm font-semibold text-white">{g.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-reveal>
            <SectionLabel>Κριτικές Google</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Τι Λένε οι Πελάτες μας</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                data-reveal
                className="rounded-xl border border-[color:var(--border)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-[color:var(--brand)]">★★★★★</div>
                <blockquote className="mt-4 text-base leading-relaxed text-[color:var(--ink)]">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-[color:var(--border)] pt-4 text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-[color:var(--ink-soft)]">{r.when}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[color:var(--ink)] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-reveal>
            <SectionLabel>Επικοινωνία</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Ζητήστε Εκτίμηση Σήμερα
            </h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div data-reveal className="space-y-5 text-white/85">
              {[
                { icon: "📍", text: "Αγίου Γεωργίου 25, Πόρτο Ράφτη 190 03" },
                { icon: "📞", text: "+30 698 190 2330", href: "tel:+306981902330" },
                { icon: "✉️", text: "bgreen.constructionss@gmail.com", href: "mailto:bgreen.constructionss@gmail.com" },
                { icon: "🕐", text: "Δευτέρα – Σάββατο: 07:00 – 16:00" },
              ].map((c) => (
                <div key={c.text} className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5">
                  <span className="text-xl">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="break-all text-base font-medium hover:text-[color:var(--brand-light)]">
                      {c.text}
                    </a>
                  ) : (
                    <span className="text-base">{c.text}</span>
                  )}
                </div>
              ))}
            </div>

            <div data-reveal id="booking" className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--ink)] px-5 py-3 text-white">
                <div className="text-sm font-semibold tracking-wide">
                  Κλείστε Ραντεβού — B Green
                </div>
                <span className="text-xs text-white/60">Powered by Setmore</span>
              </div>
              <iframe
                src="https://b-green.setmore.com/"
                title="B Green — Κράτηση Ραντεβού"
                className="block h-[720px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-14 text-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-2xl font-black text-white">
            B <span className="text-[color:var(--brand-light)]">GREEN</span>
          </div>
          <div className="my-6 h-0.5 w-full bg-[color:var(--brand)]" />
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-light)]">
                Υπηρεσίες
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Ανακαίνιση</li>
                <li>Ηλεκτρολογικά & Υδραυλικά</li>
                <li>Σιδηροκατασκευή – Μεταλλικά Προκάτ</li>
                <li>Υγρομόνωση & Θερμομόνωση</li>
                <li>Θερμοπρόσοψη</li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-light)]">
                Επικοινωνία
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="tel:+306981902330" className="hover:text-[color:var(--brand-light)]">
                    +30 698 190 2330
                  </a>
                </li>
                <li>
                  <a href="mailto:bgreen.constructionss@gmail.com" className="break-all hover:text-[color:var(--brand-light)]">
                    bgreen.constructionss@gmail.com
                  </a>
                </li>
                <li>Αγίου Γεωργίου 25, Πόρτο Ράφτη</li>
                <li>Δευτέρα–Σάββατο: 07:00–16:00</li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[color:var(--brand-light)]">
                Αξιολογήσεις
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="text-[color:var(--brand-light)]">★★★★★ 5/5 Google</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            © 2026 B Green. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
