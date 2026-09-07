import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem, WhatWeDo, FocusAreas, HowItWorks } from "@/components/site/SectionsA";
import {
  ConsultingDeepDive,
  BusinessAudit,
  Roadmap,
  Automation,
  Training,
  Partnership,
} from "@/components/site/SectionsB";
import {
  ExampleWorkflow,
  WhoWeWorkWith,
  EngagementModel,
  FinalCta,
  Faq,
  faqs,
} from "@/components/site/SectionsC";
import { Footer } from "@/components/site/Footer";

const title = `Practical AI for Business | ${site.businessName}`;
const description = `${site.businessName} helps businesses identify, implement and improve practical AI systems across Sales, Marketing and Customer Service.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              name: site.businessName,
              description,
              email: site.email,
              telephone: site.phone,
              url: "/",
              areaServed: "Worldwide",
              serviceType: ["AI Consulting", "AI Automation", "AI Training"],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhatWeDo />
        <FocusAreas />
        <HowItWorks />
        <ConsultingDeepDive />
        <BusinessAudit />
        <Roadmap />
        <Automation />
        <Training />
        <Partnership />
        <ExampleWorkflow />
        <WhoWeWorkWith />
        <EngagementModel />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
