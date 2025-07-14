import Eyebrow from "../../components/ui/Eyebrow.tsx";
import FadeUp from "../../components/ui/FadeUp.tsx";
import { useScript } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy question
 */
interface FAQItem {
  /** @title Pergunta */
  /** @description Pergunta do FAQ */
  question: string;
  /** @title Resposta */
  /** @description Resposta do FAQ */
  answer: string;
}

interface Props {
  /** @title Eyebrow */
  /** @description Texto pequeno que aparece acima do título */
  eyebrow?: string;
  /** @title Título principal */
  /** @description Título principal da seção */
  title?: string;
  /** @title Descrição */
  /** @description Descrição da seção */
  description?: string;
  /** @title Logo das respostas */
  /** @description Logo que aparece ao lado das respostas do FAQ */
  answerLogo?: ImageWidget;
  /** @title Perguntas frequentes */
  /** @description Lista de perguntas e respostas */
  faqItems?: FAQItem[];
}

export default function FAQ({
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  description =
    "Everything you need to build, run, and scale AI across your organization with control and confidence.",
  answerLogo = "https://placehold.co/48x48",
  faqItems = [],
}: Props) {
  return (
    <div class="w-full bg-dc-50 py-16 md:py-32">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-start items-center gap-8 md:gap-14">
        {/* Header */}
        <div class="w-full flex flex-col items-center gap-6">
          <h2 class="text-center text-dc-800 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
            {title}
          </h2>
          <p class="text-center text-dc-500 text-base md:text-lg leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        <FadeUp delay={400}>
          <div class="w-full max-w-[750px] flex flex-col justify-start items-start gap-4">
            {faqItems.map((item, index) => (
              <div class="self-stretch faq-item">
                {/* Question */}
                <div
                  class="self-stretch flex justify-end items-center gap-2.5 cursor-pointer faq-question"
                  data-index={index}
                >
                  <div class="w-6 h-6 relative overflow-hidden faq-icon">
                    <div class="w-3.5 h-0.5 left-[5px] top-[11px] absolute bg-dc-500 transition-transform duration-300">
                    </div>
                    <div class="w-0.5 h-3.5 left-[11px] top-[5px] absolute bg-dc-500 transition-transform duration-300 faq-plus-vertical">
                    </div>
                  </div>
                  <div class="max-w-[500px] p-6 bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex flex-col justify-center items-start">
                    <div class="self-stretch text-dc-600 text-base md:text-lg lg:text-xl font-medium font-main leading-normal">
                      {item.question}
                    </div>
                  </div>
                </div>

                {/* Answer */}
                <div class="self-stretch faq-answer hidden" data-index={index}>
                  <div class="self-stretch flex justify-start items-end gap-2.5 mt-4">
                    <div class="w-12 h-12 relative bg-primary-light rounded-2xl flex-shrink-0 overflow-hidden">
                      <Image
                        src={answerLogo}
                        alt="Logo"
                        width={48}
                        height={48}
                        class="w-full h-full object-cover"
                        loading="lazy"
                        fetchPriority="low"
                      />
                    </div>
                    <div class="max-w-[500px] p-6 bg-primary-dark rounded-tl-2xl rounded-tr-2xl rounded-br-2xl flex flex-col justify-center items-start">
                      <div class="self-stretch text-primary-light text-base md:text-lg lg:text-xl font-medium font-main leading-normal">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(() => {
            const init = () => {
              const questions = document.querySelectorAll(".faq-question");
              let activeIndex = -1;

              questions.forEach((question, index) => {
                question.addEventListener("click", () => {
                  const answer = document.querySelector(
                    `.faq-answer[data-index=\"${index}\"]`,
                  );
                  const icon = question.querySelector(
                    ".faq-plus-vertical",
                  ) as HTMLElement | null;

                  // Close previously opened answer
                  if (activeIndex !== -1 && activeIndex !== index) {
                    const prevAnswer = document.querySelector(
                      `.faq-answer[data-index=\"${activeIndex}\"]`,
                    );
                    const prevIcon = document.querySelector(
                      `.faq-question[data-index=\"${activeIndex}\"] .faq-plus-vertical`,
                    ) as HTMLElement | null;

                    if (prevAnswer) {
                      prevAnswer.classList.add("hidden");
                    }
                    if (prevIcon) {
                      prevIcon.style.transform = "rotate(0deg)";
                    }
                  }

                  // Toggle current answer
                  if (answer) {
                    const isHidden = answer.classList.contains("hidden");

                    if (isHidden) {
                      answer.classList.remove("hidden");
                      if (icon) icon.style.transform = "rotate(90deg)";
                      activeIndex = index;
                    } else {
                      answer.classList.add("hidden");
                      if (icon) icon.style.transform = "rotate(0deg)";
                      activeIndex = -1;
                    }
                  }
                });
              });
            };

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", init);
            } else {
              init();
            }
          }),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  description:
    "Everything you need to build, run, and scale AI across your organization with control and confidence.",
  answerLogo: "https://placehold.co/48x48",
  faqItems: [
    {
      question: "What exactly is deco.chat?",
      answer:
        "deco.chat is an open-source AI workspace that helps organizations build and manage AI agents. It's designed to make AI implementation simple, whether for internal tools or customer-facing applications.",
    },
    {
      question: "Is deco.chat suitable for my company size?",
      answer:
        "Yes! deco.chat is designed to scale from small teams to large enterprises. Whether you're a startup or a Fortune 500 company, our platform adapts to your needs.",
    },
    {
      question: "Which platforms can I integrate with deco.chat?",
      answer:
        "deco.chat integrates with over 60+ platforms including Slack, Microsoft Teams, Google Workspace, Notion, GitHub, and many more through our MCP servers.",
    },
    {
      question: "Do I need technical expertise to use deco.chat?",
      answer:
        "Not necessarily! While technical knowledge helps for advanced customizations, our platform is designed to be user-friendly for non-technical team members as well.",
    },
    {
      question: "How secure is my company's data?",
      answer:
        "Security is our top priority. We offer enterprise-grade security with options for self-hosting, SOC 2 compliance, and granular permission controls.",
    },
    {
      question: "Can I host deco.chat on my own servers?",
      answer:
        "Absolutely! deco.chat is open-source and can be self-hosted on your own infrastructure for maximum control and security.",
    },
    {
      question: "How long does it take to implement deco.chat?",
      answer:
        "Implementation time varies based on your needs. Simple setups can be done in hours, while complex enterprise deployments may take a few weeks.",
    },
    {
      question: "How can I try deco.chat?",
      answer:
        "You can start with our free trial or book a demo with our team. We also offer a sandbox environment to test the platform before committing.",
    },
  ],
};

export function Preview() {
  return <FAQ {...defaultProps} />;
}
