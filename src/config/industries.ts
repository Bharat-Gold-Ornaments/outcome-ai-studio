/**
 * Industries served — shared between the secondary Industries nav bar
 * and the homepage Industries section.
 */
export const industries = [
  {
    slug: "hospitality",
    name: "Hospitality",
    blurb: "Guest experience, bookings and service operations.",
    apps: [
      "Guest messaging & concierge AI",
      "Booking & revenue optimisation",
      "Reputation & review management",
      "Staff scheduling",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "Patient experience and clinical operations.",
    apps: [
      "Patient intake & scheduling",
      "Clinical documentation support",
      "Care coordination",
      "Compliance & records",
    ],
  },
  {
    slug: "gems-jewellery",
    name: "Gems & Jewellery",
    blurb: "Catalogue, consultation and provenance workflows.",
    apps: [
      "Inventory & catalogue automation",
      "Customer consultations",
      "Custom design workflows",
      "Certification & provenance tracking",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb: "Lead, listing and transaction workflows.",
    apps: [
      "Lead qualification & follow-up",
      "Listing & marketing content",
      "Client communications",
      "Transaction documentation",
    ],
  },
] as const;
