import { useScript } from "@deco/deco/hooks";

interface FAQItem {
  /**
   * @title Pergunta
   * @description A pergunta frequente
   */
  question: string;
  /**
   * @title Resposta
   * @description A resposta da pergunta
   */
  answer: string;
  /**
   * @title Aberta por padrão
   * @description Se esta pergunta deve estar expandida por padrão
   */
  defaultOpen?: boolean;
}

interface Props {
  /**
   * @title Título Principal
   * @description Título da seção FAQ
   */
  title?: string;
  /**
   * @title Subtítulo
   * @description Subtítulo descritivo
   */
  subtitle?: string;
  /**
   * @title Lista de FAQs
   * @description Perguntas e respostas frequentes
   */
  faqs?: FAQItem[];
  /**
   * @title Estilo de Layout
   * @description Estilo de exibição do FAQ
   */
  layout?: "chat" | "accordion";
}

const defaultProps: Props = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to build, run, and scale AI across your organization with control and confidence.",
  layout: "chat",
  faqs: [
    {
      question: "What exactly is deco.chat?",
      answer: "deco.chat is an open-source AI workspace that helps organizations build and manage AI agents. It's designed to make AI implementation simple, whether for internal tools or customer-facing applications.",
      defaultOpen: true,
    },
    {
      question: "Is deco.chat suitable for my company size?",
      answer: "Yes, deco.chat is designed to scale from small startups to large enterprises. Our platform adapts to your needs and grows with your organization.",
    },
    {
      question: "Which platforms can I integrate with deco.chat?",
      answer: "We support integration with major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and many more through our API.",
    },
    {
      question: "Do I need technical expertise to use deco.chat?",
      answer: "Not at all! Our no-code interface makes it easy for anyone to build and deploy AI agents without technical knowledge.",
    },
    {
      question: "How secure is my company's data?",
      answer: "We prioritize security with enterprise-grade encryption, SOC 2 compliance, and strict data protection policies. Your data never leaves your control.",
    },
    {
      question: "Can I host deco.chat on my own servers?",
      answer: "Yes, we offer both cloud and self-hosted deployment options to meet your organization's security and compliance requirements.",
    },
    {
      question: "How long does it take to implement deco.chat?",
      answer: "Most implementations are live within days, not months. Our team provides full support during setup and onboarding.",
    },
    {
      question: "How can I try deco.chat?",
      answer: "You can start with our free trial or request a demo. No credit card required to get started.",
    },
  ],
};

export default function VibeCodeFAQ({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  faqs = defaultProps.faqs,
  layout = defaultProps.layout,
}: Props) {
  const sectionId = `faq-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div class="w-full bg-dc-900 py-20 md:py-32 lg:py-40">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="flex flex-col justify-center items-center gap-12 md:gap-14">
          
          {/* Header */}
          <div class="w-full flex flex-col justify-center items-center gap-6 text-center">
            <h2 class="text-white text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
              {title}
            </h2>
            <p class="text-dc-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          </div>
          
          {/* FAQ Content */}
          <div class="w-full max-w-3xl">
            {layout === "chat" ? (
              /* Chat Style FAQ */
              <div id={sectionId} class="flex flex-col gap-4">
                {faqs?.map((faq, index) => (
                  <div key={index} class="flex flex-col gap-4">
                    {/* Question (User side - right) */}
                    <div class="flex justify-end items-center gap-2">
                      <div class="w-6 h-6 flex items-center justify-center">
                        <div class="w-3.5 h-3.5 bg-dc-300 rounded-full"></div>
                      </div>
                      <div class="max-w-md md:max-w-lg p-6 bg-dc-800 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                        <p class="text-dc-200 text-lg md:text-xl font-medium leading-relaxed">
                          {faq.question}
                        </p>
                      </div>
                    </div>
                    
                    {/* Answer (Bot side - left) */}
                    <div class={`faq-answer flex justify-start items-end gap-2 ${!faq.defaultOpen ? 'hidden' : ''}`}>
                      <div class="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center flex-shrink-0">
                        <div class="w-6 h-6 bg-primary-dark rounded-lg"></div>
                      </div>
                      <div class="max-w-md md:max-w-lg p-6 bg-primary-dark rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                        <p class="text-primary-light text-lg md:text-xl font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Accordion Style FAQ */
              <div id={sectionId} class="space-y-4">
                {faqs?.map((faq, index) => (
                  <div
                    key={index}
                    class="faq-accordion bg-dc-800 rounded-2xl overflow-hidden"
                  >
                    <button
                      class="faq-question w-full p-6 text-left flex justify-between items-center hover:bg-dc-700 transition-colors"
                      data-index={index}
                    >
                      <span class="text-dc-200 text-lg md:text-xl font-medium">
                        {faq.question}
                      </span>
                      <svg
                        class="faq-icon w-6 h-6 text-dc-400 transform transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      class={`faq-answer overflow-hidden transition-all duration-300 ${
                        faq.defaultOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div class="p-6 pt-0 text-dc-300 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Fallback if no FAQs */}
          {(!faqs || faqs.length === 0) && (
            <div class="w-full max-w-3xl space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  class="bg-dc-800 rounded-2xl p-6 space-y-4"
                >
                  <div class="w-2/3 h-6 bg-dc-600 rounded"></div>
                  <div class="w-full h-16 bg-dc-700 rounded"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Interactive Script */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((sectionId: string, layout: string) => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            if (layout === "chat") {
              // Chat style - click questions to show answers
              const questions = section.querySelectorAll('.faq-answer');
              const questionButtons = section.querySelectorAll('[data-index]');
              
              questionButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                  const answer = questions[index];
                  if (answer) {
                    // Hide all other answers
                    questions.forEach((ans, i) => {
                      if (i !== index) {
                        ans.classList.add('hidden');
                      }
                    });
                    // Toggle current answer
                    answer.classList.toggle('hidden');
                  }
                });
              });
            } else {
              // Accordion style
              const accordions = section.querySelectorAll('.faq-accordion');
              
              accordions.forEach((accordion) => {
                const question = accordion.querySelector('.faq-question');
                const answer = accordion.querySelector('.faq-answer');
                const icon = accordion.querySelector('.faq-icon');
                
                if (question && answer && icon) {
                  question.addEventListener('click', () => {
                    const isOpen = !answer.classList.contains('max-h-0');
                    
                    if (isOpen) {
                      answer.classList.remove('max-h-96');
                      answer.classList.add('max-h-0');
                      icon.classList.remove('rotate-180');
                    } else {
                      answer.classList.remove('max-h-0');
                      answer.classList.add('max-h-96');
                      icon.classList.add('rotate-180');
                    }
                  });
                }
              });
            }
          }, sectionId, layout || "chat")
        }}
      />
    </div>
  );
}

export function Preview() {
  return <VibeCodeFAQ {...defaultProps} />;
} 