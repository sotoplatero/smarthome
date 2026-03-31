/**
 * HamiltonVolt — Site Configuration
 * ================================
 * Edit the values below and run `npm run build` to regenerate the site.
 * All values are injected at build time into every page via Eleventy.
 */

export default {

  // ── Business identity ──────────────────────────────────
  businessName: "HamiltonVolt",
  tagline: "Sub-metering for rental properties",
  serviceArea: "Hamilton & Burlington, ON",

  // ── Contact ────────────────────────────────────────────
  // Phone number displayed on the site (formatted)
  phoneDisplay: "(289) 799-8573",
  // Phone number for tel: links (E.164 format, no spaces)
  phoneLink: "+12897998573",
  // WhatsApp number (digits only, with country code, no + sign)
  whatsappNumber: "12897998573",
  // Pre-filled WhatsApp message (pre-qualifies the lead)
  whatsappMessage: "Hi, I have ___ units in ___ and I'd like to know if sub-metering works for my building.",

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
  // Hidden until we have real numbers — no fake stats
  showTrustBar: false,
  stats: {
    properties: "—",
    units: "—",
    monthlyFees: "$0",
    installTime: "< 1 Hour",
  },

  // ── Testimonials ───────────────────────────────────────
  // Hidden — no customers yet. Will enable when we have real testimonials.
  showTestimonials: false,
  testimonials: [],

  // ── Founder ────────────────────────────────────────────
  founder: {
    name: "[Your Name]",           // Replace with real name
    photo: "",                      // Replace with real photo path
    neighbourhood: "[your neighbourhood]", // Replace with real neighbourhood
    bio: "I started doing this after a friend with a fourplex showed me his hydro bills — he was losing over $500/month and didn't know it. The fix existed. Clip-on meters that measure each unit. But nobody around here was making it easy for landlords to actually get it done.",
    bio2: "That's what I do. I'm not a big company. I do sub-metering for landlords in Hamilton and Burlington. I show up, I tell you if it works, and if it does, I install it.",
    bio3: "If you Google me you're not going to find a corporate website with stock photos of people in hardhats. You're going to find this page and my WhatsApp number. That's on purpose.",
  },

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
  // Curated for rental density — neighbourhoods with the most multi-unit properties
  neighbourhoods: {
    hamilton: [
      "Downtown Hamilton", "Hamilton Mountain", "Westdale",
      "Crown Point", "Beasley", "Kirkendall",
      "Corktown", "Bartonville", "Delta",
      "Landsdale", "Stoney Creek", "Dundas",
      "Stipley", "Central Hamilton", "Gibson"
    ],
    burlington: [
      "Downtown Burlington", "Aldershot", "Central Burlington",
      "Appleby", "Elizabeth Gardens", "Maple",
      "Brant Hills", "Orchard", "Tyandaga",
      "Palmer", "Roseland"
    ],
  },

  // ── FAQ ────────────────────────────────────────────────
  faq: [
    {
      question: "Is sub-metering legal in Ontario?",
      answer: "Yes. Ontario Regulation 394/10 gives landlords the right to sub-meter and bill tenants for individual usage. You need to give proper notice — I provide the templates.",
      schemaAnswer: "Yes. Ontario Regulation 394/10 gives landlords the right to sub-meter and bill tenants for individual usage. You need to give proper notice."
    },
    {
      question: "How much does it cost?",
      answer: "$300–$600 per unit depending on your panel layout. You get the exact price during the free visit. No surprises after.",
      schemaAnswer: "$300–$600 per unit depending on your panel layout. You get the exact price during the free visit. No surprises after."
    },
    {
      question: "Do I need to change my leases?",
      answer: 'For existing tenants with "electricity included," you give written notice and reduce rent by a corresponding amount. For new tenants, you just write the lease without included hydro. I give you the notice templates.',
      schemaAnswer: "For existing tenants with electricity included, you give written notice and reduce rent by a corresponding amount. For new tenants, you just write the lease without included hydro."
    },
    {
      question: "What kinds of buildings work?",
      answer: "Duplexes, triplexes, fourplexes, townhouse blocks, small apartments. If you've got 2+ units on one meter, it almost certainly works. The visit confirms it.",
      schemaAnswer: "Duplexes, triplexes, fourplexes, townhouse blocks, small apartments. If you have 2 or more units on one meter, it almost certainly works."
    },
    {
      question: "Do I need an electrician?",
      answer: "No. The meters clamp around the wire without touching it. Nothing gets cut or modified. No permits, no inspection, no licensed trade required.",
      schemaAnswer: "No. The meters clamp around the wire without touching it. Nothing gets cut or modified. No permits, no inspection, no licensed trade required."
    },
    {
      question: "What if I want to remove them?",
      answer: "The clip comes off. Your panel goes back to how it was. Nothing permanent — no holes, no rewiring. Takes minutes.",
      schemaAnswer: "The clip comes off. Your panel goes back to how it was. Nothing permanent — no holes, no rewiring. Takes minutes."
    },
    {
      question: "What if it doesn't work for my building?",
      answer: "I tell you during the visit and you don't pay anything. Some panels aren't set up in a way that lets me isolate individual units. It happens. I'd rather tell you straight than waste your time.",
      schemaAnswer: "I tell you during the visit and you don't pay anything. Some panels aren't set up in a way that lets me isolate individual units."
    }
  ],

  // ── Footer ─────────────────────────────────────────────
  copyrightYear: "2026",
};
