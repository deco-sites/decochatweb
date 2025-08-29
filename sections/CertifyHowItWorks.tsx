import Button from "../components/ui/Button.tsx";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface Props {
  /**
   * @title Section Title
   * @description Title for the how it works section
   */
  title?: string;
  /**
   * @title Steps
   * @description List of steps
   */
  steps?: Step[];
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

export default function CertifyHowItWorks({
  title = "How it works",
  steps = [
    {
      number: "1",
      title: "Create a Class (turma)",
      description: "to organize recipients.",
      icon: "👥"
    },
    {
      number: "2",
      title: "Upload your HTML template",
      description: "with placeholders.",
      icon: "📄"
    },
    {
      number: "3",
      title: "Upload CSV",
      description: "and map columns → placeholders.",
      icon: "📊"
    },
    {
      number: "4",
      title: "Generate certificates",
      description: "in batch; track statuses.",
      icon: "⚙️"
    },
    {
      number: "5",
      title: "Distribute & verify",
      description: "via unique URLs or email sends.",
      icon: "📧"
    }
  ],
  ctaText = "Start for free with $5 credit",
  ctaHref = "https://deco.cx/start",
}: Props) {
  return (
    <section id="how-it-works" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div class="grid md:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} class="text-center">
              <div class="relative mb-6">
                <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <div class="text-3xl mb-4">{step.icon}</div>
                {index < steps.length - 1 && (
                  <div class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5"></div>
                )}
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p class="text-sm text-gray-600">
                {step.description}
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