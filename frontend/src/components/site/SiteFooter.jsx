import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="relative border-t border-white/10 bg-[#071427] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#00D4FF] text-[#071427] font-display font-bold">W</span>
            <span className="font-display text-lg font-semibold tracking-tight">
              WebDesign<span className="text-[#00D4FF]">FLA</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
            WebDesignFLA is a website design, development, and marketing agency headquartered in
            Jupiter, FL. For over a decade we have built and grown hundreds of business websites nationwide.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">Jupiter, FL</span>
            <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">Nationwide Service</span>
            <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">Established {SITE.founded}</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy/" data-testid="site-footer-privacy-link" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={SITE.phoneHref} data-testid="site-footer-phone" className="group inline-flex items-start gap-2 text-white/85 hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 text-[#00D4FF]" />
                <span>
                  <span className="block font-semibold">{SITE.phoneDisplay}</span>
                  <span className="text-xs text-white/60">Tap to call</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} data-testid="site-footer-email" className="inline-flex items-start gap-2 text-white/85 hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 text-[#00D4FF]" />
                <span>{SITE.email}</span>
              </a>
            </li>
            <li data-testid="site-footer-address" className="inline-flex items-start gap-2 text-white/85">
              <MapPin className="mt-0.5 h-4 w-4 text-[#00D4FF]" />
              <span>
                {SITE.addressLine1}
                <br />
                {SITE.addressLine2}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55">
            &copy; {year} WebDesignFLA. All rights reserved.
          </p>
          <p className="text-xs text-white/55">Built with craft in Jupiter, FL.</p>
        </div>
      </div>
    </footer>
  );
}
