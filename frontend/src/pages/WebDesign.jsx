import React from "react";
import SEOHead from "@/components/site/SEOHead";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import PhoneCTABand from "@/components/site/PhoneCTABand";
import ContactSidebar from "@/components/site/ContactSidebar";
import { Globe, Database, Mail, Settings, BarChart3, Layers, FileCheck, Search, Share2, Server, ShieldCheck, CheckCircle2 } from "lucide-react";

const inclusions = [
  {
    icon: Globe,
    title: "DNS Transfer",
    text: "We point your domain to our secure servers and handle the DNS configuration so your launch is seamless and downtime is minimized.",
  },
  {
    icon: Layers,
    title: "WordPress Installation",
    text: "WordPress content management system gives you the ability to update your website through a secured administrative login — no developer required for routine updates.",
  },
  {
    icon: Database,
    title: "Database Set-up",
    text: "All of our websites run on MySQL database which stores your website content and user information — configured for performance and reliability.",
  },
  {
    icon: Mail,
    title: "Email Set-up",
    text: "Unlimited email accounts on your own domain (e.g., name@yourdomain.com), including spam filtering and webmail access.",
  },
  {
    icon: Settings,
    title: "Secured Administrative Control Panel",
    text: "Once your website is on our servers you will have access to make all changes through an SSL-secured admin panel.",
  },
  {
    icon: BarChart3,
    title: "Web Hosting Control Panel",
    text: "Check your website stats and traffic, set up new email addresses, and perform many other advanced functions — all from one place.",
  },
  {
    icon: FileCheck,
    title: "Unlimited Web Pages",
    text: "We quote you on the initial pages we set up, but you can add an unlimited number of pages anytime through wp-admin.",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    text: "Fast, secure, and monitored hosting included. Daily backups, SSL, and uptime monitoring out of the box.",
  },
  {
    icon: Search,
    title: "On-Page SEO",
    text: "Optimization for your chosen keywords — title tags, meta descriptions, H1 hierarchy, and image naming.",
  },
  {
    icon: ShieldCheck,
    title: "Search Engine Submissions",
    text: "We submit your site to Google, Yahoo, and Bing, and additional reputable directories for improved discoverability.",
  },
  {
    icon: Share2,
    title: "Social Media Links",
    text: "Branded social media buttons that link your website to your Facebook, Twitter, LinkedIn, Instagram and other profiles.",
  },
  {
    icon: CheckCircle2,
    title: "Phone-First Lead Capture",
    text: "Prominent click-to-call buttons on every page. No bloated forms — just direct customer conversations.",
  },
];

const process = [
  { step: "01", title: "Discovery", text: "We learn your business, customers, and goals. Send us references and competitors you admire." },
  { step: "02", title: "Concepts & Iteration", text: "We provide as many concepts as needed until you are extremely happy. Real iteration, not endless lipstick." },
  { step: "03", title: "Build & Optimize", text: "Responsive build, on-page SEO, performance and accessibility baked in from day one." },
  { step: "04", title: "Launch & Support", text: "We launch carefully, submit to search engines, and stay on call for updates and growth." },
];

export default function WebDesign() {
  return (
    <>
      <SEOHead
        title="Website Design Services"
        description="Custom website design with WordPress, hosting, SEO, email setup and unlimited pages. WebDesignFLA builds modern business sites for clients nationwide."
        path="/web-design/"
      />
      <PageHero
        eyebrow="Website Design"
        title="Custom websites built to look premium and convert."
        subtitle="We work with you and provide as many concepts as required until you are extremely happy. If you see a site that you like, send it over — we will use it as a point of reference and design something better."
        breadcrumbs={[{ label: "Web Design" }]}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">What's included</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">
                Everything you need to launch a serious business website.
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Our website design plans bundle hosting, CMS, email, SEO and ongoing access — so you can focus on running your business while we handle the technology.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
            {inclusions.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 0.04}>
                <div className="h-full rounded-xl border border-border bg-white p-5 hover:border-[#00D4FF]/40 transition-colors">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A192F] text-[#00D4FF]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-[#0A192F]">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* PROCESS */}
          <div className="mt-14">
            <Reveal>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Our process</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">
                A simple, no-surprise build cycle.
              </h2>
            </Reveal>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.05}>
                  <li className="relative rounded-xl border border-border bg-white p-5">
                    <span className="font-mono-tech text-xs text-[#2F6BFF]">{p.step}</span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-[#0A192F]">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <ContactSidebar
          bullets={[
            "WordPress + managed hosting included",
            "On-page SEO done during the build",
            "Unlimited content pages",
            "Branded email on your domain",
          ]}
        />
      </section>

      <PhoneCTABand heading="Contact us today for a FREE quote." subheading="Tell us about your business and we will scope an honest, fixed-price plan." />
    </>
  );
}
