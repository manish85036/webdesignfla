import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  return (
    <div className="grain-overlay relative min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 relative z-[2]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
