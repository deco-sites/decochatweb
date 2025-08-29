interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  /**
   * @title Section Title
   * @description Title for the FAQ section
   */
  title?: string;
  /**
   * @title FAQs
   * @description List of frequently asked questions
   */
  faqs?: FAQ[];
}

export default function CertifyFAQ({
  title = "FAQs",
  faqs = [
    {
      question: "Is deco free to start?",
      answer: "Yes. You can start free and get $5 credit to try it out."
    },
    {
      question: "Can I customize templates?",
      answer: "100%—bring your own HTML/CSS with placeholders."
    },
    {
      question: "How do I deploy?",
      answer: "Use `deco-cli` to deploy to Cloudflare Workers at the edge."
    },
    {
      question: "Can I extend with agents/tools?",
      answer: "Yes—MCP-native. Add tools, workflows, and UIs in one place."
    }
  ],
}: Props) {
  return (
    <section id="docs" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div class="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} class="group bg-gray-50 rounded-xl">
              <summary class="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg 
                  class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="px-6 pb-6">
                <p class="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}