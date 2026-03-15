/**
 * HamiltonVolt — Site Configuration
 * ================================
 * Edit the values below and run `npm run build` to regenerate the site.
 * All values are injected at build time into every page via Eleventy.
 */

export default {

  // ── Business identity ──────────────────────────────────
  businessName: "HamiltonVolt",
  tagline: "Sub-metering installation",
  serviceArea: "Hamilton & Burlington, ON",

  // ── Contact ────────────────────────────────────────────
  // Phone number displayed on the site (formatted)
  phoneDisplay: "(905) 555-0199",
  // Phone number for tel: links (E.164 format, no spaces)
  phoneLink: "+19055550199",
  // WhatsApp number (digits only, with country code, no + sign)
  whatsappNumber: "19055550199",
  // Pre-filled WhatsApp message
  whatsappMessage: "Hi HamiltonVolt, I'd like a free quote for sub-metering my property.",

  // ── Address & location ─────────────────────────────────
  address: {
    street: "",          // e.g. "123 James St N"
    city: "Hamilton",
    province: "ON",
    postalCode: "",      // e.g. "L8R 2K5"
    country: "CA",
  },
  // Google Maps coordinates (used in schema, geo meta)
  coordinates: {
    lat: "43.2557",
    lng: "-79.8711",
  },

  // ── Trust bar stats ────────────────────────────────────
  // Set to real numbers or set showTrustBar to false to hide
  showTrustBar: true,
  stats: {
    properties: "50+",      // e.g. "50+" or "73"
    units: "200+",           // e.g. "200+" or "312"
    monthlyFees: "$0",       // keep as-is
    installTime: "1 Day",    // keep as-is
  },

  // ── Testimonials ───────────────────────────────────────
  // Set to real testimonials or set showTestimonials to false to hide
  showTestimonials: true,
  testimonials: [
    {
      quote: "I was paying $480/month in hydro for a fourplex and couldn't figure out why. HamiltonVolt installed meters in one afternoon — turns out one unit was using more than the other three combined. Paid for itself in two months.",
      name: "Mark T.",
      detail: "Fourplex owner, Hamilton Mountain",
      stars: 5,
    },
    {
      quote: "My biggest fear was the install tearing up the building. They literally clipped the meters on and left. My tenants didn't even notice until I told them they'd be paying their own hydro. Zero complaints — the usage data is right there.",
      name: "Sandra K.",
      detail: "Triplex owner, Burlington",
      stars: 5,
    },
  ],

  // ── Pricing (shown in FAQ) ─────────────────────────────
  pricing: {
    perUnit: "$300–$600",
    fourplexTotal: "$1,200–$2,000",
    roiMonths: "3–5",
  },

  // ── URLs ───────────────────────────────────────────────
  siteUrl: "https://voltshare.ca",
  // OG image for social sharing (1200x630px, absolute URL)
  ogImageUrl: "https://voltshare.ca/img/og-image.svg",

  // ── Images (local paths) ───────────────────────────────
  images: {
    hero: "/img/hero-apartment-interior.jpg",
    inspection: "/img/step-inspection-property.jpg",
    installation: "/img/step-installation-electrician.jpg",
    monitoring: "/img/step-monitoring-dashboard.jpg",
    cta: "/img/cta-hamilton-skyline.jpg",
    ogImage: "/img/og-image.svg",
  },

  // ── Neighbourhoods (for footer & schema) ──────────────
  neighbourhoods: {
    hamilton: [
      "Hamilton Mountain", "Downtown Hamilton", "Westdale", "Stoney Creek",
      "Dundas", "Ancaster", "Bartonville", "Binbrook", "Crown Point",
      "Kirkendall", "Stipley", "Delta", "Corktown", "Beasley", "Landsdale"
    ],
    burlington: [
      "Downtown Burlington", "Aldershot", "Appleby", "Brant Hills",
      "Tyandaga", "Orchard", "Palmer", "Headon Forest", "Millcroft",
      "Roseland", "Shoreacres", "Elizabeth Gardens", "Maple",
      "Mountainside", "Central Burlington"
    ],
  },

  // ── FAQ ────────────────────────────────────────────────
  faq: [
    {
      question: "Is sub-metering legal in Ontario?",
      answer: "Yes. Ontario Regulation 394/10 under the <em>Electricity Act</em> gives landlords the right to install sub-meters and bill tenants for individual electricity usage, as long as meters are Measurement Canada certified and tenants receive proper notice. We handle all compliance paperwork.",
      schemaAnswer: "Yes. Ontario Regulation 394/10 under the Electricity Act gives landlords the right to install sub-meters and bill tenants for individual electricity usage, as long as meters are Measurement Canada certified and tenants receive proper notice."
    },
    {
      question: "How much does it cost?",
      answer: "Typical installations range from $300–$600 per unit depending on your panel layout. A fourplex usually costs $1,200–$2,000 total. Most landlords recoup the full cost in 3–5 months through reduced hydro bills. You get the exact number during the free inspection — no surprises after.",
      schemaAnswer: "Typical installations range from $300–$600 per unit depending on your panel layout. A fourplex usually costs $1,200–$2,000 total. Most landlords recoup the full cost in 3–5 months through reduced hydro bills."
    },
    {
      question: "Do I need to change my leases?",
      answer: 'For existing tenants with "electricity included" leases, you must provide written notice and reduce rent by a corresponding amount per Reg. 394/10. For new tenants, you simply write the lease without included electricity. We provide notice templates and walk you through the process.',
      schemaAnswer: "For existing tenants with electricity included leases, you must provide written notice and reduce rent by a corresponding amount per Reg. 394/10. For new tenants, you simply write the lease without included electricity."
    },
    {
      question: "What types of properties work?",
      answer: "Duplexes, triplexes, fourplexes, townhouse blocks, and apartment buildings across Hamilton and Burlington. If you have 2+ units sharing one meter, sub-metering will almost certainly work. The free inspection confirms it for your specific property.",
      schemaAnswer: "Duplexes, triplexes, fourplexes, townhouse blocks, and apartment buildings. If you have 2 or more units sharing one meter, sub-metering will almost certainly work."
    }
  ],

  // ── Footer ─────────────────────────────────────────────
  copyrightYear: "2026",
  license: "Licensed and insured in Ontario",
};
