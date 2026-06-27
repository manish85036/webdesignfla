import React from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function ContactSidebar({ bullets = [] }) {
  return (
    <aside className="lg:sticky lg:top-24 self-start">
      <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_rgba(7,20,39,0.06)]">
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">
          Get a free quote
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold text-[#0A192F]">
          Talk to a senior designer
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          No forms. Just a real conversation about your project, timeline and budget.
        </p>
        <a
          href={SITE.phoneHref}
          data-testid="sidebar-phone-cta"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A192F] px-4 py-3 font-semibold text-white hover:bg-[#0E2342] transition-colors"
        >
          <Phone className="h-4 w-4 text-[#00D4FF]" />
          {SITE.phoneDisplay}
        </a>
        {bullets.length > 0 && (
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
          {SITE.addressLine1}
          <br />
          {SITE.addressLine2}
        </div>
      </div>
    </aside>
  );
}
