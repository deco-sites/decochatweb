interface Capability {
  title: string;
  description: string;
}

interface Props {
  /**
   * @title Section Title
   * @description Title for the capabilities section
   */
  title?: string;
  /**
   * @title Capabilities
   * @description List of capabilities
   */
  capabilities?: Capability[];
}

export default function CertifyCapabilities({
  title = "What you get with Certify",
  capabilities = [
    {
      title: "Custom HTML templates",
      description: "with placeholders"
    },
    {
      title: "Batch generation",
      description: "from CSV"
    },
    {
      title: "Public verification URLs",
      description: "per certificate"
    },
    {
      title: "Class (turma) management",
      description: "for cohorts"
    },
    {
      title: "Email campaigns",
      description: "to send certificates"
    },
    {
      title: "PDF/PNG export",
      description: "(API)"
    },
    {
      title: "React + Tailwind + shadcn/ui",
      description: "UI"
    },
    {
      title: "SQLite (Durable Objects) + Drizzle",
      description: "on the edge"
    }
  ],
}: Props) {
  return (
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div key={index} class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">
                    {capability.title}
                  </h3>
                  <p class="text-sm text-gray-600">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}