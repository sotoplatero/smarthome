/**
 * VoltShare — Site Configuration
 * ================================
 * Edit the values below and reload the page.
 * The script at the bottom of index.html reads this object
 * and injects values into the DOM automatically.
 *
 * For SEO meta tags and structured data (JSON-LD), you must also
 * update the <head> section of index.html directly — those are
 * read by crawlers before JS executes.
 */

const SITE_CONFIG = {

  // ── Business identity ──────────────────────────────────
  businessName: "VoltShare",
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
  whatsappMessage: "Hi VoltShare, I'd like a free quote for sub-metering my property.",

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
      quote: "I was paying $480/month in hydro for a fourplex and couldn't figure out why. VoltShare installed meters in one afternoon — turns out one unit was using more than the other three combined. Paid for itself in two months.",
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
    hero: "img/hero-apartment-interior.jpg",
    inspection: "img/step-inspection-property.jpg",
    installation: "img/step-installation-electrician.jpg",
    monitoring: "img/step-monitoring-dashboard.jpg",
    cta: "img/cta-hamilton-skyline.jpg",
    ogImage: "img/og-image.svg",
  },

  // ── Footer ─────────────────────────────────────────────
  copyrightYear: "2026",
  license: "Licensed and insured in Ontario",
};
