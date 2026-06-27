import React from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function PhoneCTABand({ heading = "Ready to upgrade your website?", subheading = "Get a free, no-pressure quote. Speak with a senior designer today." }) {
  return (
    <section data-testid="phone-cta-band" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="relative overflow-hidden rounded-2xl bg-[#0A192F] text-white shadow-[0_20px_60px_rgba(7,20,39,0.25)]">
          <div className="absolute inset-0 blueprint-bg opacity-40" aria-hidden="true" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#00D4FF]/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2EE9C6]/15 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-6 p-8 sm:p-10 lg:p-12 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
                Free quote &middot; No contact form &middot; Just call
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                {heading}
              </h3>
              <p className="mt-2 text-white/75 max-w-xl text-sm sm:text-base">{subheading}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <a
                href={SITE.phoneHref}
                data-testid="cta-band-phone-link"
                className="inline-flex items-center gap-3 rounded-xl bg-[#00D4FF] px-5 py-4 text-[#071427] font-semibold hover:bg-[#2EE9C6] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-display text-lg">{SITE.phoneDisplay}</span>
              </a>
              <span className="text-xs text-white/55">Mon–Fri 9am–6pm ET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
