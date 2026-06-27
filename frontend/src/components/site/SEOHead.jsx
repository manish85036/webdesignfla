import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/site";

export default function SEOHead({ title, description, path = "/", image }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} - ${SITE.tagline}`;
  const canonical = `${SITE.url}${path}`;
  const desc = description || "WebDesignFLA is a website design, development, and marketing agency in Jupiter, FL. We build modern, SEO-ready business websites that convert. Call (561) 464-6222.";
  return (
    <Helmet data-testid="route-helmet">
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}
