{
  "project": {
    "name": "WebDesignFLA (modern rebuild)",
    "app_type": "marketing_site / agency_website",
    "primary_goal": "High-trust conversion via phone calls",
    "secondary_goal": "Preserve SEO by keeping identical route slugs and content parity",
    "routes_must_match": [
      "/",
      "/web-design/",
      "/seo/",
      "/social/",
      "/portfolio/",
      "/privacy-policy/"
    ],
    "hard_constraints": [
      "NO contact forms anywhere; replace all form CTAs with tel:+15614646222",
      "Multi-page architecture (separate routes), not a single-page scroll",
      "All interactive + key informational elements MUST include data-testid (kebab-case)",
      "Use existing shadcn/ui components from /app/frontend/src/components/ui (JS files, not TSX)",
      "WCAG AA contrast on navy/cyan",
      "Gradients: follow GRADIENT RESTRICTION RULE (max 20% viewport, no dark saturated combos)"
    ]
  },

  "brand_personality": {
    "attributes": [
      "Trustworthy (enterprise-grade reliability)",
      "Modern craft (design-forward, not template)",
      "Direct-response (phone-first conversion)",
      "Locally rooted (Jupiter, FL) but nationally capable"
    ],
    "visual_metaphor": "Blueprint precision + coastal tech energy (navy structure, cyan signal, off-white paper, subtle grain).",
    "layout_principles": [
      "Swiss-style grid discipline for credibility",
      "Bento-like service cards for scannability",
      "Editorial long-form pages with strong typographic rhythm",
      "Portfolio as a ‘proof wall’ with consistent thumbnails and hover reveals"
    ]
  },

  "design_tokens": {
    "color_palette_hex": {
      "ink": "#071427",
      "navy": "#0A192F",
      "navy_2": "#0E2342",
      "paper": "#F7FAFC",
      "paper_2": "#EEF4FA",
      "text": "#0B1220",
      "muted_text": "#4B5563",
      "border": "#D7E2EE",
      "cyan": "#00D4FF",
      "cyan_2": "#2EE9C6",
      "blue": "#2F6BFF",
      "warning": "#F59E0B",
      "success": "#16A34A",
      "danger": "#DC2626"
    },

    "semantic_colors": {
      "bg": {
        "page": "paper",
        "section_alt": "paper_2",
        "hero": "navy",
        "footer": "ink"
      },
      "fg": {
        "primary": "text",
        "on_dark": "#EAF2FF",
        "muted": "muted_text"
      },
      "accent": {
        "primary": "cyan",
        "secondary": "cyan_2",
        "link": "blue"
      },
      "stroke": {
        "default": "border",
        "on_dark": "rgba(255,255,255,0.14)",
        "focus_ring": "rgba(0,212,255,0.45)"
      }
    },

    "shadcn_hsl_overrides_for_index_css": {
      "note": "Main agent should map these to :root CSS variables in /frontend/src/index.css (HSL values). Hex is the source of truth; convert to HSL during implementation.",
      "recommended_mapping": {
        "--background": "paper",
        "--foreground": "text",
        "--card": "#FFFFFF",
        "--card-foreground": "text",
        "--popover": "#FFFFFF",
        "--popover-foreground": "text",
        "--primary": "navy",
        "--primary-foreground": "#EAF2FF",
        "--secondary": "paper_2",
        "--secondary-foreground": "text",
        "--muted": "paper_2",
        "--muted-foreground": "muted_text",
        "--accent": "rgba(0,212,255,0.10)",
        "--accent-foreground": "navy",
        "--border": "border",
        "--input": "border",
        "--ring": "cyan",
        "--radius": "0.75rem"
      }
    },

    "gradients": {
      "allowed_usage": [
        "Hero background only (max ~20% viewport height)",
        "Large section background accents (not behind long paragraphs)",
        "Decorative overlays (blurred blobs)"
      ],
      "hero_bg_gradient_css": "radial-gradient(900px 420px at 15% 10%, rgba(0,212,255,0.18), transparent 60%), radial-gradient(700px 380px at 85% 0%, rgba(46,233,198,0.14), transparent 55%), linear-gradient(180deg, #0A192F 0%, #071427 100%)",
      "section_accent_gradient_css": "radial-gradient(520px 260px at 20% 0%, rgba(0,212,255,0.12), transparent 60%), radial-gradient(520px 260px at 80% 100%, rgba(47,107,255,0.10), transparent 60%)"
    },

    "typography": {
      "font_pairing": {
        "display": "Space Grotesk (Google Fonts)",
        "body": "Figtree (Google Fonts)",
        "mono_optional": "IBM Plex Mono (for tiny technical labels like DNS/SSL)"
      },
      "css_font_stack": {
        "display": "'Space Grotesk', ui-sans-serif, system-ui",
        "body": "'Figtree', ui-sans-serif, system-ui",
        "mono": "'IBM Plex Mono', ui-monospace, SFMono-Regular"
      },
      "type_scale_tailwind": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight",
        "h2": "text-base md:text-lg font-medium text-muted-foreground",
        "section_title": "text-2xl sm:text-3xl font-semibold tracking-tight",
        "card_title": "text-lg font-semibold",
        "body": "text-sm sm:text-base leading-relaxed",
        "small": "text-xs sm:text-sm text-muted-foreground"
      },
      "long_form_readability": {
        "max_width": "max-w-3xl",
        "line_height": "leading-7 sm:leading-8",
        "paragraph_spacing": "space-y-5",
        "list_style": "list-disc pl-5 space-y-2",
        "callouts": "Use Card with left border accent (cyan) for key takeaways"
      }
    },

    "spacing_and_layout": {
      "container": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
      "section_padding": "py-14 sm:py-18 lg:py-24",
      "grid": {
        "services": "grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3",
        "portfolio": "grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3",
        "stats": "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      },
      "radius": {
        "card": "rounded-xl",
        "button": "rounded-lg",
        "pill": "rounded-full"
      },
      "shadows": {
        "card": "shadow-[0_10px_30px_rgba(7,20,39,0.08)]",
        "hover": "hover:shadow-[0_18px_50px_rgba(7,20,39,0.14)]"
      }
    },

    "texture": {
      "grain_overlay": {
        "goal": "Add subtle film grain to avoid flat/AI look.",
        "implementation": "Create a fixed pseudo-element overlay on body or a top-level Layout wrapper: pointer-events-none, mix-blend-mode: multiply, opacity 0.05. Use a tiny base64 noise PNG or CSS noise via repeating-radial-gradient.",
        "tailwind_hint": "after:content-[''] after:fixed after:inset-0 after:pointer-events-none after:opacity-[0.05] after:mix-blend-multiply"
      }
    }
  },

  "component_path": {
    "shadcn_primary": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "navigation_menu": "/app/frontend/src/components/ui/navigation-menu.jsx",
      "sheet_mobile_nav": "/app/frontend/src/components/ui/sheet.jsx",
      "accordion": "/app/frontend/src/components/ui/accordion.jsx",
      "tabs": "/app/frontend/src/components/ui/tabs.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "tooltip": "/app/frontend/src/components/ui/tooltip.jsx",
      "carousel": "/app/frontend/src/components/ui/carousel.jsx",
      "scroll_area": "/app/frontend/src/components/ui/scroll-area.jsx",
      "breadcrumb": "/app/frontend/src/components/ui/breadcrumb.jsx",
      "sonner_toast": "/app/frontend/src/components/ui/sonner.jsx",
      "skeleton": "/app/frontend/src/components/ui/skeleton.jsx"
    },
    "icons": {
      "preferred": "lucide-react (already typical in shadcn stacks)",
      "fallback": "FontAwesome CDN"
    },
    "charts_optional": {
      "library": "recharts",
      "use_case": "Optional credibility section: ‘Traffic growth’ mini chart on /seo/ (keep subtle, not salesy)."
    }
  },

  "page_blueprints": {
    "global_header": {
      "behavior": [
        "Sticky header with blur + subtle border",
        "On scroll: reduce height slightly, increase background opacity",
        "Mobile: hamburger opens Sheet with large tap targets"
      ],
      "structure": [
        "Left: Wordmark ‘WebDesignFLA’ (Space Grotesk, tracking-tight)",
        "Center (desktop): nav links to all routes",
        "Right: Primary phone CTA button + small ‘Call now’ microcopy"
      ],
      "tailwind": {
        "wrapper": "sticky top-0 z-50 border-b border-white/10 bg-[#071427]/80 backdrop-blur supports-[backdrop-filter]:bg-[#071427]/70",
        "inner": "mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl",
        "nav_link": "text-sm font-medium text-white/80 hover:text-white transition-colors",
        "cta_button": "bg-[#00D4FF] text-[#071427] hover:bg-[#2EE9C6]"
      },
      "data_testids": {
        "logo": "site-header-logo",
        "nav": "site-header-nav",
        "mobile-menu-button": "site-header-mobile-menu-button",
        "phone-cta": "site-header-phone-cta"
      }
    },

    "global_footer": {
      "content": [
        "Phone (tel link), address, email",
        "Quick links to all routes",
        "Privacy policy link",
        "Small trust line: ‘Serving Jupiter, FL + nationwide’"
      ],
      "tailwind": {
        "wrapper": "border-t border-white/10 bg-[#071427] text-white",
        "inner": "mx-auto grid gap-10 px-4 py-14 sm:px-6 lg:px-8 max-w-6xl md:grid-cols-4",
        "link": "text-sm text-white/70 hover:text-white transition-colors"
      },
      "data_testids": {
        "phone": "site-footer-phone",
        "email": "site-footer-email",
        "address": "site-footer-address",
        "privacy": "site-footer-privacy-link"
      }
    },

    "home_page": {
      "hero": {
        "layout": "Split hero (copy left, proof right). Background uses allowed gradient + subtle noise. Keep hero height ~70vh max on desktop; on mobile stack.",
        "content": [
          "H1: ‘Websites that look premium — and convert.’",
          "H2: short credibility line (no fluff)",
          "Primary CTA: Call button",
          "Secondary CTA: View portfolio",
          "Proof chips: ‘Local in Jupiter, FL’, ‘SEO-first builds’, ‘Fast turnaround’",
          "Stats row: 639 clients, 303 active (animated counters)"
        ],
        "components": ["Button", "Badge", "Card"],
        "data_testids": {
          "hero": "home-hero",
          "primary-cta": "home-hero-call-cta",
          "secondary-cta": "home-hero-portfolio-cta",
          "stats": "home-hero-stats"
        }
      },
      "services_preview": {
        "pattern": "Bento grid of 3 service cards (Web Design, SEO, Social). Each card has icon, 2-line summary, ‘Learn more’ link.",
        "card_style": "White cards on paper background; top border accent on hover (cyan).",
        "components": ["Card", "Button"],
        "data_testids": {
          "section": "home-services",
          "web-design-card": "home-services-web-design-card",
          "seo-card": "home-services-seo-card",
          "social-card": "home-services-social-card"
        }
      },
      "testimonials": {
        "pattern": "Carousel on mobile, 3-column grid on desktop. Each testimonial includes name, business type, short quote.",
        "components": ["Card", "Carousel"],
        "data_testids": {
          "section": "home-testimonials"
        }
      },
      "portfolio_preview": {
        "pattern": "Show 9 thumbnails + ‘View all portfolio’ CTA. Use original images from webdesignfla.com/wp-content/uploads/2020/01/*.jpg",
        "hover": "On hover: image scales slightly, overlay fades in with project title + ‘View’ affordance.",
        "components": ["Card", "AspectRatio"],
        "data_testids": {
          "section": "home-portfolio-preview",
          "view-all": "home-portfolio-view-all"
        }
      },
      "phone_cta_band": {
        "pattern": "A slim, high-contrast CTA band near footer: ‘Ready to upgrade your site?’ + phone button.",
        "note": "No forms. Keep it short.",
        "data_testids": {
          "cta": "home-bottom-phone-cta"
        }
      }
    },

    "service_pages": {
      "shared_layout": {
        "pattern": "Hero (title + short promise + phone CTA) → sticky in-page TOC (desktop) → long-form sections with Cards/Accordions → proof strip → portfolio mini-grid → footer.",
        "content_density_strategy": [
          "Break long text into 6–10 sections with clear headings",
          "Use Accordion for FAQs and ‘What’s included’ lists",
          "Use callout Cards for key promises (speed, SEO, support)",
          "Add a right-rail (desktop) with phone CTA + quick bullets"
        ],
        "components": ["Breadcrumb", "Accordion", "Card", "Separator", "Badge"],
        "data_testids": {
          "hero": "service-hero",
          "phone-cta": "service-hero-phone-cta",
          "toc": "service-page-toc"
        }
      },
      "seo_page_specific": {
        "sections": [
          "What SEO is (plain language)",
          "On-page SEO (keywords, copywriting)",
          "Technical SEO (speed, indexing)",
          "Off-page SEO (links, citations)",
          "Local SEO (Jupiter/Florida focus)",
          "Reporting & iteration"
        ],
        "optional_visual": "Add a small, subtle Recharts line chart in a Card showing ‘Traffic trend example’ (no exaggerated claims).",
        "data_testids": {
          "chart": "seo-traffic-example-chart"
        }
      }
    },

    "portfolio_page": {
      "pattern": "Full grid (30+). Add filter Tabs (All / Web Design / SEO / Social) ONLY if categories exist; otherwise keep simple.",
      "performance": [
        "Use native lazy-loading on images",
        "Use AspectRatio to prevent layout shift",
        "Use Skeleton placeholders"
      ],
      "card_pattern": {
        "wrapper": "group relative overflow-hidden rounded-xl border border-border bg-white",
        "image": "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",
        "overlay": "absolute inset-0 bg-gradient-to-t from-[#071427]/70 via-[#071427]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
        "meta": "absolute bottom-3 left-3 right-3 flex items-end justify-between"
      },
      "data_testids": {
        "grid": "portfolio-grid",
        "card": "portfolio-card"
      }
    },

    "privacy_policy": {
      "pattern": "Simple long-form page with strong typographic rhythm. No decorative gradients behind text.",
      "components": ["Separator"],
      "data_testids": {
        "page": "privacy-policy-page"
      }
    }
  },

  "motion_and_microinteractions": {
    "library": "framer-motion",
    "principles": [
      "Use motion to clarify hierarchy (reveal sections, emphasize CTAs), not to entertain",
      "Respect prefers-reduced-motion",
      "Avoid heavy 3D"
    ],
    "recommended_patterns": {
      "scroll_reveal": {
        "use": "Fade + slight y translate (8–14px) for sections",
        "timing": "duration 0.45–0.6s, ease [0.22, 1, 0.36, 1]",
        "data_testid": "scroll-reveal-section"
      },
      "button": {
        "hover": "translate-y-[-1px] + shadow increase (no transform transitions globally)",
        "press": "scale(0.98)",
        "focus": "visible ring using --ring"
      },
      "sticky_header": {
        "on_scroll": "Add class that reduces height from 64px to 56px and increases bg opacity"
      },
      "counters": {
        "implementation": "Use requestAnimationFrame or react-countup; animate only when in viewport (IntersectionObserver).",
        "data_testids": ["stats-clients-count", "stats-active-count"]
      }
    }
  },

  "accessibility": {
    "requirements": [
      "WCAG AA contrast for text on navy",
      "Visible focus states (ring + offset)",
      "Keyboard navigable menus + sheet",
      "Reduced motion support",
      "Tap targets >= 44px on mobile"
    ],
    "notes": [
      "Avoid cyan text on white for body copy; cyan is for accents/links only.",
      "Use underline for links in long-form content to improve affordance."
    ]
  },

  "seo_and_routing": {
    "react_helmet": {
      "use": "Per-route title + meta description + canonical",
      "data_testid": "route-helmet"
    },
    "content_parity": "Mirror headings and section order from original site as closely as possible while improving layout and readability.",
    "no_forms": "Replace any original form sections with a phone CTA Card (tel link)."
  },

  "image_urls": {
    "portfolio_thumbnails": {
      "category": "portfolio",
      "description": "Use ORIGINAL images hosted at webdesignfla.com. Keep filenames as-is from the original site.",
      "base_path": "https://webdesignfla.com/wp-content/uploads/2020/01/",
      "examples": [
        "https://webdesignfla.com/wp-content/uploads/2020/01/1.jpg",
        "https://webdesignfla.com/wp-content/uploads/2020/01/2.jpg",
        "https://webdesignfla.com/wp-content/uploads/2020/01/3.jpg",
        "https://webdesignfla.com/wp-content/uploads/2020/01/4.jpg",
        "https://webdesignfla.com/wp-content/uploads/2020/01/5.jpg",
        "https://webdesignfla.com/wp-content/uploads/2020/01/6.jpg"
      ],
      "note": "Main agent should verify actual filenames exist (some sites use different numbering). If mismatch, crawl the portfolio page and extract exact URLs."
    },
    "decorative": {
      "category": "background",
      "description": "No external stock provider available via tool. Use CSS gradients + noise overlay instead of heavy imagery.",
      "fallback": "Optional: add a subtle SVG grid pattern as data URI for hero background."
    }
  },

  "instructions_to_main_agent": {
    "global": [
      "Remove CRA default App.css centering patterns; do not use .App { text-align:center }.",
      "Implement a Layout component that wraps pages with Header/Footer and applies grain overlay.",
      "Use Tailwind for layout; keep custom CSS minimal and token-driven.",
      "Ensure every CTA is a tel link: href=\"tel:+15614646222\".",
      "Preserve route slugs exactly; create separate page components per route.",
      "Add data-testid to: nav links, CTAs, portfolio cards, stats numbers, testimonial carousel controls, and any key text blocks (hero headline)."
    ],
    "header": [
      "Use shadcn NavigationMenu for desktop nav; Sheet for mobile.",
      "Add active route styling (cyan underline or dot) with aria-current=page."
    ],
    "portfolio": [
      "Use AspectRatio to stabilize image layout.",
      "Use loading=lazy and decoding=async on images.",
      "Add Skeleton placeholders while images load (optional)."
    ],
    "service_pages": [
      "Use Breadcrumb at top.",
      "Use a right-rail Card on desktop with phone CTA + quick bullets.",
      "Use Accordion for FAQs and inclusions to reduce scroll fatigue."
    ],
    "motion": [
      "Use Framer Motion for section reveals and counters; gate animations behind prefers-reduced-motion.",
      "Avoid universal transition: all; only transition colors/shadows/opacity."
    ],
    "fonts": [
      "Load Space Grotesk + Figtree via Google Fonts in index.html or CSS import.",
      "Apply display font to headings via utility class (e.g., .font-display) and body via default."
    ]
  },

  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>\n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
