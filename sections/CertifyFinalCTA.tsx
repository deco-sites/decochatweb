import Button from "../components/ui/Button.tsx";

interface Props {
  /**
   * @title Headline
   * @description Main headline for the final CTA section
   */
  headline?: string;
  /**
   * @title Subheadline
   * @description Supporting text for the final CTA section
   */
  subheadline?: string;
  /**
   * @title Primary CTA Text
   * @description Text for the primary call-to-action button
   */
  primaryCtaText?: string;
  /**
   * @title Primary CTA Link
   * @description URL for the primary call-to-action button
   */
  primaryCtaHref?: string;
  /**
   * @title Secondary CTA Text
   * @description Text for the secondary call-to-action button
   */
  secondaryCtaText?: string;
  /**
   * @title Secondary CTA Link
   * @description URL for the secondary call-to-action button
   */
  secondaryCtaHref?: string;
}

export default function CertifyFinalCTA({
  headline = "Build your own Certify today",
  subheadline = "Start with the open-source repo, then extend with agents, workflows, and dashboards—all inside deco.",
  primaryCtaText = "Start for free with $5 credit",
  primaryCtaHref = "https://deco.cx/start",
  secondaryCtaText = "View on GitHub",
  secondaryCtaHref = "https://github.com/deco-cx/certify",
}: Props) {
  return (
    <section class="py-20 bg-gradient-to-br from-primary to-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="space-y-8">
          <div class="space-y-4">
            <h2 class="text-3xl lg:text-5xl font-bold text-white">
              {headline}
            </h2>
            <p class="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {subheadline}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="large" 
              href={primaryCtaHref}
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              {primaryCtaText}
            </Button>
            <Button 
              variant="ghost" 
              size="large" 
              href={secondaryCtaHref}
              className="text-white border-white hover:bg-white/10"
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}