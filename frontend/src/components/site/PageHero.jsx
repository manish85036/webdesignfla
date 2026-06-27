import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon } from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden hero-bg text-white">
      <div className="absolute inset-0 blueprint-bg opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/65">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-white">
              <HomeIcon className="h-3.5 w-3.5" />
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
