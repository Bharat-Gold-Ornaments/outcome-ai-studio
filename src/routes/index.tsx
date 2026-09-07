import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Focus } from "@/components/site/Focus";
import { Approach } from "@/components/site/Approach";
import { Audit } from "@/components/site/Audit";
import { WorkflowDemo } from "@/components/site/WorkflowDemo";
import { Statement } from "@/components/site/Statement";
import { Services, Partnership } from "@/components/site/Services";
import { FinalCta, Faq, faqs } from "@/components/site/Close";
import { Footer } from "@/components/site/Footer";

const title = `Practical AI for Business | ${site.businessName}`;
const description = `${site.businessName} identifies where AI creates value, builds the systems and helps teams adopt them — across Sales, Marketing and Customer Service.`;

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
        <Focus />
        <Approach />
        <Audit />
        <WorkflowDemo />
        <Statement />
        <Services />
        <Partnership />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
