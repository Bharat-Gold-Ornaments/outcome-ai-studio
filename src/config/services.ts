/**
 * Service catalogue — shared between the header mega-menu and the
 * homepage Services section, so the two never drift apart.
 */
export const serviceCategories = [
  {
    name: "Advisory",
    line: "Know where to start.",
    items: ["AI Strategy", "AI Readiness", "Process Transformation"],
  },
  {
    name: "AI & Automation",
    line: "Put AI to work.",
    items: [
      "AI Agents",
      "Workflow Automation",
      "CRM/Sales Automation",
      "Customer Service Automation",
    ],
  },
  {
    name: "Implementation",
    line: "Build it into the business.",
    items: ["Integrations", "Custom AI Systems", "Internal AI Tools"],
  },
  {
    name: "Training",
    line: "Bring the team with you.",
    items: ["Leadership AI Training", "Employee AI Training", "AI Adoption Programs"],
  },
  {
    name: "Managed AI",
    line: "Keep it running, and improving.",
    items: ["AI Operations", "Continuous Improvement", "AI Support"],
  },
] as const;
