import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { serviceCategories } from "@/config/services";
import { industries } from "@/config/industries";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { Approach } from "@/components/site/Approach";
import { Audit } from "@/components/site/Audit";
import { WorkflowDemo } from "@/components/site/WorkflowDemo";
import { Statement } from "@/components/site/Statement";
import { Services, Partnership } from "@/components/site/Services";
import { FinalCta, Faq, faqs } from "@/components/site/Close";
import { Footer } from "@/components/site/Footer";

const title = `${site.tagline} | ${site.businessName}`;
const description = `${site.businessName} — ${site.tagline.toLowerCase()}, built on the best automation stack. Serving Hospitality, Healthcare, Gems & Jewellery and Real Estate.`;

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
              serviceType: serviceCategories.map((c) => c.name),
              audience: industries.map((i) => ({
                "@type": "Audience",
                audienceType: i.name,
              })),
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
        <Industries />
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
