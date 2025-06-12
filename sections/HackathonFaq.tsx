import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy question
 */
interface FAQItem {
  /**
   * @title Pergunta
   * @description Pergunta do FAQ
   */
  question: string;
  /**
   * @title Resposta
   * @description Resposta do FAQ
   */
  answer: string;
}

interface Props {
  /**
   * @title Eyebrow
   * @description Texto pequeno que aparece acima do título
   */
  eyebrow?: string;
  /**
   * @title Título principal
   * @description Título principal da seção
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição da seção
   */
  description: string;
  /**
   * @title Logo das respostas
   * @description Logo que aparece ao lado das respostas do FAQ
   */
  answerLogo: ImageWidget;
  /**
   * @title Perguntas frequentes
   * @description Lista de perguntas e respostas
   */
  faqItems: FAQItem[];
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-dark" | "purple-dark";
}

export default function HackathonFaq({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  answerLogo = defaultProps.answerLogo,
  faqItems = defaultProps.faqItems,
  backgroundColor = defaultProps.backgroundColor,
}: Props) {
  const bgColorMap = {
    "dc-50": "bg-dc-50",
    "primary-dark": "bg-primary-dark",
    "purple-dark": "bg-purple-dark",
  };

  const textColorMap = {
    "dc-50": "text-dc-800",
    "primary-dark": "text-dc-200",
    "purple-dark": "text-dc-200",
  };

  const eyebrowVariantMap = {
    "dc-50": "primary-light" as const,
    "primary-dark": "primary-light" as const,
    "purple-dark": "purple-light" as const,
  };

  const bgColor = bgColorMap[backgroundColor || "dc-50"];
  const textColor = textColorMap[backgroundColor || "dc-50"];
  const eyebrowVariant = eyebrowVariantMap[backgroundColor || "dc-50"];

  return (
    <div class={`w-full ${bgColor} py-16 md:py-32`}>
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-start items-center gap-8 md:gap-14">
        <div class="w-full max-w-[650px] flex flex-col justify-start items-center gap-6 md:gap-10">
          <FadeUp>
            <div class="self-stretch flex flex-col justify-start items-center gap-6">
              <Eyebrow
                variant={eyebrowVariant}
                iconName="info"
                text={eyebrow || ""}
              />
              <h2
                class={`text-center ${textColor} text-3xl md:text-5xl font-semibold font-manrope leading-normal`}
              >
                {title}
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div
              class={`self-stretch text-center ${
                backgroundColor === "dc-50" ? "text-dc-500" : "text-dc-400"
              } text-xl font-medium font-manrope leading-normal`}
            >
              {description}
            </div>
          </FadeUp>
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
                    <div
                      class={`w-3.5 h-0.5 left-[5px] top-[11px] absolute ${
                        backgroundColor === "dc-50" ? "bg-dc-500" : "bg-dc-400"
                      } transition-transform duration-300`}
                    >
                    </div>
                    <div
                      class={`w-0.5 h-3.5 left-[11px] top-[5px] absolute ${
                        backgroundColor === "dc-50" ? "bg-dc-500" : "bg-dc-400"
                      } transition-transform duration-300 faq-plus-vertical`}
                    >
                    </div>
                  </div>
                  <div
                    class={`max-w-[500px] p-6 ${
                      backgroundColor === "dc-50" ? "bg-dc-100" : "bg-dc-50/10"
                    } rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex flex-col justify-center items-start`}
                  >
                    <div
                      class={`self-stretch ${
                        backgroundColor === "dc-50"
                          ? "text-dc-600"
                          : "text-dc-300"
                      } text-xl font-medium font-manrope leading-normal`}
                    >
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
                      <div class="self-stretch text-primary-light text-xl font-medium font-manrope leading-normal">
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
  eyebrow: "Perguntas Frequentes",
  title: "Tire suas dúvidas sobre o hackathon",
  description:
    "Tudo que você precisa saber para participar e ter sucesso no evento",
  answerLogo: "https://placehold.co/48x48/d0ec1a/07401a?text=🤖",
  faqItems: [
    {
      question: "Quem pode participar?",
      answer:
        "Desenvolvedores de todos os níveis podem participar! Desde iniciantes até experts em IA. O importante é ter vontade de aprender e criar.",
    },
    {
      question: "É preciso já conhecer o deco.chat?",
      answer:
        "Não é necessário! Forneceremos toda a documentação e tutoriais para você começar. Também teremos sessões de onboarding antes do evento.",
    },
    {
      question: "Como será feita a avaliação?",
      answer:
        "Os projetos serão avaliados por critérios como inovação, utilidade prática, qualidade técnica e apresentação. Detalhes completos no regulamento.",
    },
    {
      question: "Posso usar LLMs diferentes?",
      answer:
        "Sim! O deco.chat suporta mais de 60 modelos de IA diferentes. Você pode usar OpenAI, Claude, Gemini, Llama e muitos outros através da nossa API unificada.",
    },
    {
      question: "Qual o tamanho máximo da equipe?",
      answer:
        "Equipes podem ter até 4 desenvolvedores. Você também pode participar sozinho se preferir. Incentivamos a colaboração!",
    },
    {
      question: "Posso participar de múltiplas categorias?",
      answer:
        "Cada equipe pode se inscrever em apenas uma categoria para focar melhor no desenvolvimento e garantir qualidade do projeto.",
    },
  ],
  backgroundColor: "dc-50",
};

export function Preview() {
  return <HackathonFaq {...defaultProps} />;
}
