import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-[#071427]/85 backdrop-blur supports-[backdrop-filter]:bg-[#071427]/70"
          : "border-white/5 bg-[#0A192F]"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={cn("flex items-center justify-between transition-all duration-300", scrolled ? "h-14" : "h-16")}>
          <Link to="/" data-testid="site-header-logo" className="group flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#00D4FF] text-[#071427] font-display font-bold">W</span>
            <span className="font-display text-white text-base sm:text-lg font-semibold tracking-tight">
              WebDesign<span className="text-[#00D4FF]">FLA</span>
            </span>
          </Link>

          <nav data-testid="site-header-nav" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm font-medium transition-colors",
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  )
                }
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#00D4FF] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.phoneHref}
              data-testid="site-header-phone-cta"
              className="hidden sm:inline-flex h-9 items-center gap-2 rounded-lg bg-[#00D4FF] px-3 text-sm font-semibold text-[#071427] hover:bg-[#2EE9C6] transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>

            <a
              href={SITE.phoneHref}
              data-testid="site-header-phone-cta-mobile"
              className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#00D4FF] text-[#071427]"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  data-testid="site-header-mobile-menu-button"
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A192F] text-white border-white/10 w-[85%] max-w-sm">
                <SheetHeader>
                  <SheetTitle className="text-white font-display">
                    WebDesign<span className="text-[#00D4FF]">FLA</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "rounded-md px-3 py-3 text-base font-medium transition-colors",
                          isActive ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5"
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <a
                    href={SITE.phoneHref}
                    data-testid="mobile-menu-phone-cta"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#00D4FF] px-4 py-3 font-semibold text-[#071427]"
                  >
                    <Phone className="h-4 w-4" />
                    Call {SITE.phoneDisplay}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
