import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
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
}

export default function HackathonFaq({
  title = defaultProps.title,
  description = defaultProps.description,
  answerLogo = defaultProps.answerLogo,
  faqItems = defaultProps.faqItems,
}: Props) {
  return (
    <div class="w-full bg-stone-50 py-16 md:py-32">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-start items-center gap-8 md:gap-14">
        {/* Header */}
        <div class="w-full flex flex-col justify-center items-center gap-10">
          <FadeUp>
            <h2 class="text-dc-800 text-4xl md:text-6xl font-black font-main leading-tight text-center uppercase">
              {title}
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p class="text-dc-500 text-xl md:text-2xl font-medium font-main leading-relaxed max-w-4xl text-center">
              {description}
            </p>
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
                    <div class="w-3.5 h-0.5 left-[5px] top-[11px] absolute bg-dc-500 transition-transform duration-300">
                    </div>
                    <div class="w-0.5 h-3.5 left-[11px] top-[5px] absolute bg-dc-500 transition-transform duration-300 faq-plus-vertical">
                    </div>
                  </div>
                  <div class="max-w-[500px] p-6 bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex flex-col justify-center items-start">
                    <div class="self-stretch text-dc-600 text-xl font-medium font-main leading-normal">
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
                      <div class="self-stretch text-primary-light text-xl font-medium font-main leading-normal">
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
  title: "PERGUNTAS FREQUENTES",
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
};

export function Preview() {
  return <HackathonFaq {...defaultProps} />;
}
