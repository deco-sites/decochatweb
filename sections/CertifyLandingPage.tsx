import CertifyHeader from "./CertifyHeader.tsx";
import CertifyHero from "./CertifyHero.tsx";
import CertifyFeatures from "./CertifyFeatures.tsx";
import CertifyCapabilities from "./CertifyCapabilities.tsx";
import CertifyHowItWorks from "./CertifyHowItWorks.tsx";
import CertifyQuickstart from "./CertifyQuickstart.tsx";
import CertifyTechStack from "./CertifyTechStack.tsx";
import CertifyUseCases from "./CertifyUseCases.tsx";
import CertifyFAQ from "./CertifyFAQ.tsx";
import CertifyFinalCTA from "./CertifyFinalCTA.tsx";
import CertifyFooter from "./CertifyFooter.tsx";

interface Props {
  /**
   * @title Page Title
   * @description Title for the landing page
   */
  pageTitle?: string;
}

export default function CertifyLandingPage({
  pageTitle = "Certify - Open-source Digital Certificates on deco",
}: Props) {
  return (
    <div class="min-h-screen bg-white">
      {/* Meta tags for SEO */}
      <head>
        <title>{pageTitle}</title>
        <meta 
          name="description" 
          content="Generate, manage, and verify certificates at scale. Build your own Certify in minutes on deco—the home for all your AI projects. Start for free with $5 credit." 
        />
        <meta property="og:title" content="Certify — Open-source Digital Certificates on deco" />
        <meta 
          property="og:description" 
          content="Generate, manage, and verify certificates at scale. Build your own Certify in minutes on deco—the home for all your AI projects. Start for free with $5 credit." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      {/* Header */}
      <CertifyHeader />

      {/* Hero Section */}
      <CertifyHero />

      {/* Why build on deco */}
      <CertifyFeatures />

      {/* What you get with Certify */}
      <CertifyCapabilities />

      {/* How it works */}
      <CertifyHowItWorks />

      {/* Quickstart */}
      <CertifyQuickstart />

      {/* Tech Stack */}
      <CertifyTechStack />

      {/* Use Cases */}
      <CertifyUseCases />

      {/* FAQs */}
      <CertifyFAQ />

      {/* Final CTA */}
      <CertifyFinalCTA />

      {/* Footer */}
      <CertifyFooter />
    </div>
  );
}