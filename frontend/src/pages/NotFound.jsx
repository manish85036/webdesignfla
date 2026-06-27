import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/site/SEOHead";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="Sorry, the page you were looking for could not be found." path="/" />
      <section className="hero-bg text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#00D4FF]">Error 404</span>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl font-semibold tracking-tight">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            We could not find the page you were looking for. It may have been moved or removed.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#00D4FF] px-5 py-3 font-semibold text-[#071427] hover:bg-[#2EE9C6] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
