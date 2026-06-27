import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Globe, Search, Share2, ShieldCheck, Zap, MapPin, Star, Quote } from "lucide-react";
import SEOHead from "@/components/site/SEOHead";
import Reveal from "@/components/site/Reveal";
import Counter from "@/components/site/Counter";
import PhoneCTABand from "@/components/site/PhoneCTABand";
import { SITE, PORTFOLIO_ITEMS } from "@/lib/site";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    blurb: "Custom-designed, conversion-focused websites. We work iteratively with you, providing as many concepts as needed until you are extremely happy with the result.",
    to: "/web-design/",
    testId: "home-services-web-design-card",
  },
  {
    icon: Search,
    title: "SEO",
    blurb: "Half science, half marketing. Our SEO blends internal optimization and authoritative external signals to drive qualified traffic that actually converts.",
    to: "/seo/",
    testId: "home-services-seo-card",
  },
  {
    icon: Share2,
    title: "Social Media",
    blurb: "Strategy and content that builds awareness, drives engagement, and turns followers into customers across the channels that matter.",
    to: "/social/",
    testId: "home-services-social-card",
  },
];

const featured = PORTFOLIO_ITEMS.slice(0, 9);

const testimonials = [
  {
    quote:
      "I'd like to thank you for taking my old website to a highest level possible! You handled everything in a professional manner — listening to my ideas, asking the right questions and coming to my business to help develop my site. Then adjusting it with me to fit my business desires. Money well spent! Feel free to use me for a recommendation anytime.",
    author: "Steve",
    role: "Small Business Owner",
  },
  {
    quote:
      "They rebuilt our site from scratch and our leads doubled within three months. The team is responsive, transparent and treats our project like their own.",
    author: "Maria",
    role: "Operations Manager",
  },
  {
    quote:
      "After years of struggling with template sites, we finally have a website we are proud of. Clean design, fast loading, and shows up on Google.",
    author: "James",
    role: "Service Business Owner",
  },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="#1 Website Design"
        description="WebDesignFLA is a website design, development, and marketing agency in Jupiter, FL. We have built hundreds of business websites nationwide. Call (561) 464-6222 for a free quote."
        path="/"
      />

      {/* HERO */}
      <section data-testid="home-hero" className="relative overflow-hidden hero-bg text-white">
        <div className="absolute inset-0 blueprint-bg opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
                  <MapPin className="mr-1.5 h-3.5 w-3.5 text-[#00D4FF]" />
                  Jupiter, FL · Nationwide
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
                  <Star className="mr-1.5 h-3.5 w-3.5 text-[#00D4FF]" />
                  639+ Sites Launched
                </span>
              </div>
              <h1 data-testid="home-hero-title" className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                Websites that look <span className="text-[#00D4FF]">premium</span>
                <br className="hidden sm:block" /> — and actually convert.
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
                WebDesignFLA is a website design, development, and marketing agency located in Jupiter, FL. We have developed several hundred websites for businesses nationwide — each one built to win customers, not just look good.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={SITE.phoneHref}
                  data-testid="home-hero-call-cta"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00D4FF] px-5 py-3.5 font-semibold text-[#071427] hover:bg-[#2EE9C6] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call {SITE.phoneDisplay}
                </a>
                <Link
                  to="/portfolio/"
                  data-testid="home-hero-portfolio-cta"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div data-testid="home-hero-stats" className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                    <Counter to={SITE.stats.satisfied} testId="stats-clients-count" />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/55">Satisfied Clients</p>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                    <Counter to={SITE.stats.active} testId="stats-active-count" />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/55">Active Clients</p>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                    <Counter to={SITE.stats.avgYears} suffix="+" testId="stats-years-count" />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/55">Years In Business</p>
                </div>
              </div>
            </div>

            {/* Hero visual card */}
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#00D4FF]/30 to-[#2EE9C6]/10 blur-2xl opacity-60" aria-hidden="true" />
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 pl-2 pb-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ml-3 font-mono-tech text-[10px] text-white/40">webdesignfla.com</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {PORTFOLIO_ITEMS.slice(0, 4).map((p) => (
                      <div key={p.title} className="relative overflow-hidden rounded-lg aspect-[4/3] bg-white/5">
                        <img
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                          <span className="text-[11px] font-medium text-white/90">{p.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/75">
                      <Zap className="h-3.5 w-3.5 text-[#00D4FF]" />
                      <span>Average launch: 3–6 weeks</span>
                    </div>
                    <span className="font-mono-tech text-[10px] text-white/45">v2026</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section data-testid="home-services" className="section-accent-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">
                Our Services
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A192F]">
                Strategy, design, and growth — in one team.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Three connected disciplines. One accountable team. Hire us for any one
                — most clients hire us for all three because they compound.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link
                  to={s.to}
                  data-testid={s.testId}
                  className="group block h-full rounded-2xl border border-border bg-white p-7 shadow-[0_10px_30px_rgba(7,20,39,0.06)] hover:shadow-[0_18px_50px_rgba(7,20,39,0.12)] hover:-translate-y-0.5 transition-[transform,box-shadow] duration-300"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A192F] text-[#00D4FF]">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[#0A192F]">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F6BFF]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Backed by a decade+", text: "Reliable team, long-term partnerships." },
            { icon: Zap, title: "Fast turnaround", text: "Most sites launched in 3–6 weeks." },
            { icon: Search, title: "SEO-first builds", text: "Each page built to rank, not just look good." },
            { icon: Phone, title: "Talk to a real person", text: "No forms, no bots — call us directly." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A192F] text-[#00D4FF]">
                <item.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-[#0A192F]">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section data-testid="home-testimonials" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Testimonials</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A192F]">
                Real clients. Real results.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_rgba(7,20,39,0.05)]">
                  <Quote className="h-6 w-6 text-[#00D4FF]" />
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">“{t.quote}”</p>
                  <footer className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A192F] text-white font-display text-sm">
                      {t.author.slice(0, 1)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0A192F]">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section data-testid="home-portfolio-preview" className="bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <div className="max-w-2xl">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Portfolio</span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A192F]">
                  Custom websites with an emphasis on results-driven marketing.
                </h2>
              </div>
            </Reveal>
            <Link
              to="/portfolio/"
              data-testid="home-portfolio-view-all"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F6BFF] hover:underline"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.05}>
                <article className="group relative overflow-hidden rounded-xl border border-border bg-white">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      onError={(e) => {
                        e.currentTarget.parentElement.classList.add("bg-gradient-to-br", "from-[#0A192F]", "to-[#0E2342]");
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071427]/85 via-[#071427]/20 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-display text-base font-semibold text-white">{p.title}</p>
                    <p className="text-xs text-white/65">{p.category}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border p-4">
                    <p className="font-display text-sm font-semibold text-[#0A192F]">{p.title}</p>
                    <span className="text-xs text-muted-foreground">{p.category}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhoneCTABand />
    </>
  );
}
