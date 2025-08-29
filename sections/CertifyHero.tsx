import Button from "../components/ui/Button.tsx";

interface Props {
  /**
   * @title Headline
   * @description Main headline for the hero section
   */
  headline?: string;
  /**
   * @title Subheadline
   * @description Supporting text for the hero section
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

export default function CertifyHero({
  headline = "Certify — open-source digital certificates on deco",
  subheadline = "Generate, manage, and verify certificates at scale. Build your own Certify in minutes on deco — the home for all your AI projects.",
  primaryCtaText = "Start for free with $5 credit",
  primaryCtaHref = "https://deco.cx/start",
  secondaryCtaText = "View on GitHub",
  secondaryCtaHref = "https://github.com/deco-cx/certify",
}: Props) {
  return (
    <section class="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div class="space-y-8">
            <div class="space-y-6">
              <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {headline}
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                {subheadline}
              </p>
            </div>

            {/* CTAs */}
            <div class="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large" href={primaryCtaHref}>
                {primaryCtaText}
              </Button>
              <Button variant="ghost" size="large" href={secondaryCtaHref}>
                {secondaryCtaText}
              </Button>
            </div>

            {/* Hero bullets */}
            <div class="space-y-3 pt-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">TypeScript + Cloudflare Workers, MCP-native</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">HTML template placeholders (e.g., `{{name}}`, `{{course}}`)</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Batch generation via CSV + unique verification URLs</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Email campaigns + PDF/PNG export</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Deploy globally at the edge</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div class="space-y-6">
                {/* Mock app interface */}
                <div class="border-b border-gray-200 pb-4">
                  <h3 class="text-lg font-semibold text-gray-900">Certificate Template</h3>
                </div>
                
                <div class="space-y-4">
                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="text-sm text-gray-600 mb-2">HTML Template</div>
                    <div class="font-mono text-xs text-gray-800 bg-white p-3 rounded border">
                      &lt;h1&gt;Certificate of Completion&lt;/h1&gt;<br/>
                      &lt;p&gt;This certifies that &lt;strong&gt;{`{{name}}`}&lt;/strong&gt;&lt;/p&gt;<br/>
                      &lt;p&gt;has completed &lt;strong&gt;{`{{course}}`}&lt;/strong&gt;&lt;/p&gt;
                    </div>
                  </div>
                  
                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="text-sm text-gray-600 mb-2">CSV Mapping</div>
                    <div class="font-mono text-xs text-gray-800 bg-white p-3 rounded border">
                      name,course,email<br/>
                      John Doe,React Fundamentals,john@example.com<br/>
                      Jane Smith,TypeScript Basics,jane@example.com
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  Generate Certificates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}