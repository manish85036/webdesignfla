import React, { useState, useMemo } from "react";
import SEOHead from "@/components/site/SEOHead";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import PhoneCTABand from "@/components/site/PhoneCTABand";
import { PORTFOLIO_ITEMS } from "@/lib/site";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";

function ProjectCard({ item }) {
  const [imageOk, setImageOk] = useState(true);

  return (
    <article data-testid="portfolio-card" className="group relative overflow-hidden rounded-xl border border-border bg-white shadow-[0_8px_24px_rgba(7,20,39,0.05)] hover:shadow-[0_18px_50px_rgba(7,20,39,0.12)] hover:-translate-y-0.5 transition-[transform,box-shadow] duration-300">
      <AspectRatio ratio={4 / 3} className="w-full bg-secondary">
        {imageOk ? (
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            onError={() => setImageOk(false)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0A192F] to-[#0E2342] p-4 text-center">
            <span className="font-display text-base font-semibold text-white">{item.title}</span>
          </div>
        )}
      </AspectRatio>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071427]/85 via-[#071427]/15 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="font-display text-base font-semibold text-white leading-tight">{item.title}</p>
            <p className="text-xs text-white/65">{item.category}</p>
          </div>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#00D4FF] text-[#071427]">
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border p-4">
        <p className="font-display text-sm font-semibold text-[#0A192F] leading-tight">{item.title}</p>
        <span className="shrink-0 inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground/70">
          {item.category}
        </span>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const items = useMemo(() => PORTFOLIO_ITEMS, []);

  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Selected work by WebDesignFLA — custom business websites with an emphasis on results-driven marketing. Hundreds of clients, real outcomes."
        path="/portfolio/"
      />
      <PageHero
        eyebrow="Portfolio"
        title="Custom websites with an emphasis on results-driven marketing."
        subtitle="A selection of business websites our team has designed, built and grown. Every project starts with discovery and ends in measurable outcomes — phone calls, bookings and revenue."
        breadcrumbs={[{ label: "Portfolio" }]}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Featured work</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">
                {items.length}+ business websites and counting
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              We build for service businesses, hospitality, professional services, e-commerce and more. Each site is custom — never templated.
            </p>
          </div>
        </Reveal>

        <div data-testid="portfolio-grid" className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 0.04}>
              <ProjectCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <PhoneCTABand heading="Want your project to be next?" subheading="Call us to discuss your goals, timeline and budget — no forms, no spam." />
    </>
  );
}
