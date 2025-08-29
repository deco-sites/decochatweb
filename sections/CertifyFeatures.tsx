import Button from "../components/ui/Button.tsx";

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  /**
   * @title Section Title
   * @description Title for the features section
   */
  title?: string;
  /**
   * @title Features
   * @description List of feature cards
   */
  features?: FeatureCard[];
  /**
   * @title CTA Text
   * @description Text for the call-to-action button
   */
  ctaText?: string;
  /**
   * @title CTA Link
   * @description URL for the call-to-action button
   */
  ctaHref?: string;
}

export default function CertifyFeatures({
  title = "Why build on deco",
  features = [
    {
      title: "Unified Agentic Platform",
      description: "Design prompts, attach MCP tools, run workflows, ship UIs, and monitor everything in one place.",
      icon: "🤖"
    },
    {
      title: "Edge-native, fast to ship",
      description: "Use `deco-cli` to scaffold and deploy to Cloudflare Workers in minutes—global, secure, cost-aware.",
      icon: "⚡"
    },
    {
      title: "Governance & FinOps",
      description: "Built-in logs, cost controls, and observability so teams can scale responsibly.",
      icon: "📊"
    }
  ],
  ctaText = "Start for free with $5 credit",
  ctaHref = "https://deco.cx/start",
}: Props) {
  return (
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div class="text-4xl mb-4">{feature.icon}</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div class="text-center">
          <Button variant="primary" size="large" href={ctaHref}>
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}