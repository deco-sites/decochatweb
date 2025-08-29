interface Props {
  /**
   * @title Section Title
   * @description Title for the tech stack section
   */
  title?: string;
  /**
   * @title Technologies
   * @description List of technologies used
   */
  technologies?: string[];
}

export default function CertifyTechStack({
  title = "Tech Stack",
  technologies = [
    "React 18",
    "TypeScript", 
    "Tailwind",
    "shadcn/ui",
    "TanStack Router/Query",
    "Cloudflare Workers",
    "SQLite (Durable Objects)",
    "Drizzle ORM",
    "MCP"
  ],
}: Props) {
  return (
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div class="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}