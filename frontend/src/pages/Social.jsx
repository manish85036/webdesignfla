import React from "react";
import SEOHead from "@/components/site/SEOHead";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import PhoneCTABand from "@/components/site/PhoneCTABand";
import ContactSidebar from "@/components/site/ContactSidebar";
import { Facebook, Instagram, Linkedin, Youtube, Music2, MessageCircle, Megaphone, Sparkles, Calendar, BarChart3, CheckCircle2 } from "lucide-react";

const platforms = [
  { icon: Facebook, name: "Facebook", text: "Community building, events, and reputation management." },
  { icon: Instagram, name: "Instagram", text: "Visual storytelling, reels, and lifestyle proof." },
  { icon: Linkedin, name: "LinkedIn", text: "B2B authority and lead-gen content." },
  { icon: Music2, name: "TikTok", text: "Short-form video reach and discovery." },
  { icon: Youtube, name: "YouTube", text: "Long-tail SEO and product education." },
  { icon: MessageCircle, name: "X (Twitter)", text: "Real-time conversation and PR amplification." },
];

const services = [
  { icon: Megaphone, title: "Brand Strategy", text: "Voice, audience, positioning and a content roadmap that ladders up to your business goals." },
  { icon: Sparkles, title: "Content Production", text: "Photo, short-form video, graphics and copy — built for the platform, not recycled." },
  { icon: Calendar, title: "Posting & Community", text: "Consistent posting cadence, comment moderation, and DM triage." },
  { icon: BarChart3, title: "Reporting & Iteration", text: "Monthly performance reports with insights you can act on, not vanity metrics." },
];

const benefits = [
  "Increase awareness of your products or services with the right audience.",
  "Build trust through consistency, transparency and real customer voices.",
  "Drive qualified traffic from social into your website and phone line.",
  "Compound earned attention into a long-term, defensible brand.",
];

export default function Social() {
  return (
    <>
      <SEOHead
        title="Social Media Marketing"
        description="Social media marketing that gains real attention and turns followers into customers. WebDesignFLA plans, produces, posts and measures — you get the leads."
        path="/social/"
      />
      <PageHero
        eyebrow="Social Media"
        title="Social media that earns attention — and customers."
        subtitle="Social media marketing is the process of gaining website traffic or attention through social media platforms. Our programs create content that attracts attention and encourages readers to share it with their networks — lifting both reach and revenue."
        breadcrumbs={[{ label: "Social Media" }]}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-12">
          {/* Intro */}
          <Reveal>
            <article>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Why it matters</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">
                WebDesignFLA brings your social media campaign to the next level.
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
                Social media is no longer optional. It is where new customers research you before they ever pick up the phone. We focus on the channels that drive real outcomes for your business — not vanity metrics.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 rounded-lg border border-border bg-white p-3 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#16A34A]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Services */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">What we do</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">
                Strategy, content, posting, reporting — end-to-end.
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {services.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.05}>
                    <div className="h-full rounded-xl border border-border bg-white p-5">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A192F] text-[#00D4FF]">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3 font-display text-base font-semibold text-[#0A192F]">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Platforms */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Channels we manage</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">
                We focus on the platforms where your customers actually are.
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {platforms.map((p) => (
                  <div key={p.name} className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF4FA] text-[#0A192F]">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-[#0A192F]">{p.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <ContactSidebar
          bullets={[
            "Strategy + content production included",
            "Posting + community management",
            "Honest reporting, not vanity metrics",
            "Integrated with your website + SEO",
          ]}
        />
      </section>

      <PhoneCTABand heading="Ready to grow your audience the right way?" subheading="Call us and we will sketch a 90-day plan that fits your budget." />
    </>
  );
}
