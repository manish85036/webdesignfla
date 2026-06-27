import React from "react";
import SEOHead from "@/components/site/SEOHead";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import PhoneCTABand from "@/components/site/PhoneCTABand";
import ContactSidebar from "@/components/site/ContactSidebar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CircleCheck, AlertTriangle, Search, Link2, Target, TrendingUp } from "lucide-react";

const seoFacts = [
  "SEO is a sub-set of Search Engine Marketing. There is both internal and external SEO.",
  "SEO is an important factor in the success of a Web site regardless of its size.",
  "SEO delivers quality traffic for a maximum return on investment.",
  "SEO is the way to pull massive amounts of \u201corganic\u201d free traffic.",
  "SEO produces a higher rate of return (ROI) than almost any other form of advertising or marketing.",
  "SEO without targeting the right keywords & key phrases is a waste of keystrokes.",
  "SEO is such a technical and ever-changing field that it demands specialization.",
  "SEO is the process of improving a web site for higher search engine rankings.",
  "85% of high income and highly educated adults use search engines as their primary research tool.",
];

const onPage = [
  "Metadata — page title, meta description, structured tags",
  "Heading analysis and proper H1–H6 hierarchy",
  "Image naming, alt text, and compression",
  "Interior page analysis and internal linking",
  "Readability, page speed, and Core Web Vitals",
];
const offPage = [
  "Domain history & registration trust signals",
  "Google indexed pages and crawl frequency",
  "Bing indexed pages and crawl frequency",
  "Inbound link profile and anchor diversity",
  "Authoritative directory & citation building",
  "Blog analysis and outreach",
  "Social signals & brand presence",
];
const visitorFocus = [
  "Clear calls to action on every page",
  "Honest conversion paths (phone, quote)",
  "Overall experience and trust review",
];

const chartData = [
  { m: "Jan", v: 240 }, { m: "Feb", v: 310 }, { m: "Mar", v: 380 }, { m: "Apr", v: 470 },
  { m: "May", v: 560 }, { m: "Jun", v: 690 }, { m: "Jul", v: 820 }, { m: "Aug", v: 970 },
  { m: "Sep", v: 1120 }, { m: "Oct", v: 1310 }, { m: "Nov", v: 1520 }, { m: "Dec", v: 1760 },
];

export default function SEOPage() {
  return (
    <>
      <SEOHead
        title="SEO Services"
        description="Half science, half marketing. WebDesignFLA designs SEO campaigns that combine on-page optimization, technical SEO, and authoritative external links to drive qualified, organic traffic."
        path="/seo/"
      />
      <PageHero
        eyebrow="Search Engine Optimization"
        title="Half science. Half marketing. All measurable."
        subtitle="Search engines are the SINGLE most important source of new visitors (qualified customers) to your website. Our SEO program designs, implements and monitors campaigns to win the only competition that matters — the one in front of your buyers."
        breadcrumbs={[{ label: "SEO" }]}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-12">
          {/* Why it matters */}
          <Reveal>
            <article className="prose-clean">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">What SEO really is</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                SEO never rests, much like your competition, and requires in-depth knowledge of marketing, technology, search engines and customer behavior. It takes a tremendous amount of time and expertise to design, implement and monitor a successful SEO campaign.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You can absolutely do it yourself if you have the time to invest and your business can wait years to see the results. In the long run it is much better for your business if you concentrate on making it WOW your customers and let the experts handle your Internet marketing. People are looking for the best business to fill their needs — there is no room for mediocre in today's fast-paced digital society. Your competition is only a click away, so make sure you shine.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                If your website is mediocre, start with a redesign. Driving traffic to a website that doesn't convey you are the best in your field does nothing for your bottom line.
              </p>
            </article>
          </Reveal>

          {/* Internal vs External */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">The 25 / 75 rule</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">Internal (25%) vs. External SEO (75%)</h2>
              <p className="mt-3 text-muted-foreground max-w-3xl">
                Search engine optimization must be done on your website (Internal) and throughout the internet (External) via directory links, blog links, social networking and more. Internal SEO should be done during the planning phase of website development. External SEO is planned during development and continues forever.
              </p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Card className="p-6 border-l-4 border-l-[#00D4FF]">
                <div className="flex items-center gap-2 text-[#0A192F]">
                  <Target className="h-5 w-5" />
                  <h3 className="font-display text-lg font-semibold">On-page SEO</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {onPage.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CircleCheck className="mt-0.5 h-4 w-4 text-[#16A34A]" />
                      <span className="text-foreground/80">{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 border-l-4 border-l-[#2F6BFF]">
                <div className="flex items-center gap-2 text-[#0A192F]">
                  <Link2 className="h-5 w-5" />
                  <h3 className="font-display text-lg font-semibold">Off-page SEO</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {offPage.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CircleCheck className="mt-0.5 h-4 w-4 text-[#16A34A]" />
                      <span className="text-foreground/80">{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 border-l-4 border-l-[#0A192F] md:col-span-2">
                <div className="flex items-center gap-2 text-[#0A192F]">
                  <Search className="h-5 w-5" />
                  <h3 className="font-display text-lg font-semibold">Visitor experience</h3>
                </div>
                <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
                  {visitorFocus.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CircleCheck className="mt-0.5 h-4 w-4 text-[#16A34A]" />
                      <span className="text-foreground/80">{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Reveal>

          {/* Keyword research */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Keyword Research</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">Finding the top 10 phrases that actually buy</h2>
              <p className="mt-3 text-muted-foreground max-w-3xl">
                SEO starts with research. What are your customers actually looking for? We perform keyword research for every page (product or service) on your website. Keywords drive both internal and external SEO and are derived from a base phrase, a brainstorming session, and competitor analysis.
              </p>
            </div>
          </Reveal>

          {/* SEO Copywriting */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">SEO Copywriting</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">From keywords to power copy</h2>
              <p className="mt-3 text-muted-foreground max-w-3xl">
                Once a set of keyword phrases is established, your current content and the keyword research are combined into power copy. That text is added to your website pages — written for humans first, machines second.
              </p>
            </div>
          </Reveal>

          {/* Traffic chart */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">Compounding Results</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">What a healthy organic curve looks like</h2>
              <p className="mt-3 text-muted-foreground max-w-3xl">
                This is an illustrative example of the kind of organic traffic curve we aim for over 12 months — steady gains compounding into meaningful business outcomes. Real numbers depend on your industry and competition.
              </p>
              <Card className="mt-6 p-4 sm:p-6">
                <div className="flex items-center gap-2 text-[#0A192F]">
                  <TrendingUp className="h-5 w-5 text-[#00D4FF]" />
                  <span className="font-display text-sm font-semibold">Illustrative organic sessions / month</span>
                </div>
                <div data-testid="seo-traffic-example-chart" className="mt-4 h-56 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <XAxis dataKey="m" tick={{ fill: "#4B5563", fontSize: 12 }} axisLine={{ stroke: "#D7E2EE" }} tickLine={false} />
                      <YAxis tick={{ fill: "#4B5563", fontSize: 12 }} axisLine={{ stroke: "#D7E2EE" }} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #D7E2EE" }} />
                      <Line type="monotone" dataKey="v" stroke="#0A192F" strokeWidth={2.5} dot={{ r: 3, fill: "#00D4FF" }} activeDot={{ r: 5, fill: "#2F6BFF" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </Reveal>

          {/* Snake oil callout */}
          <Reveal>
            <Card className="p-6 border-l-4 border-l-[#F59E0B] bg-[#FFFBEB]/50">
              <div className="flex items-center gap-2 text-[#0A192F]">
                <AlertTriangle className="h-5 w-5 text-[#F59E0B]" />
                <h3 className="font-display text-lg font-semibold">Beware of the snake oil salesman</h3>
              </div>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                You have all received the famous email claiming “top of Google in 24 hours guaranteed.” Logical thinking should immediately make you question such a claim. The only company that could guarantee that is running pay-per-click ads — not the same as the free, organic search results. The only way to earn top placement on organic results is a strong SEO strategy and a website built to be read by the search engines. SEO is labor-intensive and can take months for results to fully show.
              </p>
            </Card>
          </Reveal>

          {/* Facts list */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">SEO Facts</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">Things every business owner should know</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {seoFacts.map((f) => (
                  <li key={f} className="flex items-start gap-2 rounded-lg border border-border bg-white p-3 text-sm text-foreground/80">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal>
            <div>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#2F6BFF]">FAQ</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A192F]">Common questions about SEO</h2>
              <Accordion type="single" collapsible className="mt-4 w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger className="text-left">How long until I see results?</AccordionTrigger>
                  <AccordionContent>Most clients see meaningful movement in 3–6 months and compounding results from month 6 onward. Local SEO can move faster.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger className="text-left">Will you guarantee a #1 ranking?</AccordionTrigger>
                  <AccordionContent>No reputable agency will guarantee specific positions on organic results. Anyone who does is selling pay-per-click in disguise.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger className="text-left">Do I need a new website for SEO to work?</AccordionTrigger>
                  <AccordionContent>Not always. If your site is structurally sound, we can optimize the existing one. If it's mediocre, a redesign is usually the highest-ROI starting point.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4">
                  <AccordionTrigger className="text-left">Which search engines do you optimize for?</AccordionTrigger>
                  <AccordionContent>The big three: Google, Yahoo and Bing. Most others either pull from these or have small market share.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Reveal>
        </div>

        <ContactSidebar
          bullets={[
            "Keyword + competitor research included",
            "On-page + technical fixes",
            "Authoritative link building",
            "Monthly transparent reporting",
          ]}
        />
      </section>

      <PhoneCTABand heading="Contact WebDesignFLA today for a FREE SEO quote." subheading="Tell us your top services and your geography — we will tell you what's realistic." />
    </>
  );
}
