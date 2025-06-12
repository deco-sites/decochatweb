import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import Icon from "../components/ui/Icon.tsx";

/**
 * @titleBy title
 */
interface ProcessStep {
  /**
   * @title Número do passo
   * @description Número sequencial do passo
   */
  stepNumber: string;
  /**
   * @title Título do passo
   * @description Nome do passo do processo
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição do que acontece neste passo
   */
  description: string;
  /**
   * @title Ícone
   * @description Ícone personalizado do passo
   */
  icon?: ImageWidget;
  /**
   * @title Nome do ícone
   * @description Nome do ícone Material Design
   */
  iconName?: string;
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
   * @title Passos do processo
   * @description Lista dos passos para participar
   * @maxItems 4
   */
  processSteps: ProcessStep[];
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-dark" | "purple-dark";
}

export default function HackathonProcess({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  processSteps = defaultProps.processSteps,
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
    <div
      class={`w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 ${bgColor} flex flex-col justify-start items-center gap-14`}
    >
      <div class="w-full max-w-[1440px] flex flex-col justify-start items-center gap-14">
        {/* Header */}
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-10">
          <FadeUp>
            <div class="flex flex-col justify-start items-center gap-6">
              <Eyebrow
                variant={eyebrowVariant}
                iconName="info"
                text={eyebrow || ""}
              />
              <h2
                class={`text-center ${textColor} text-3xl md:text-5xl font-semibold font-manrope leading-tight`}
              >
                {title}
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <BodyText
              align="center"
              color="dc-500"
              size="lg"
              weight="medium"
              lineHeight="relaxed"
              className="max-w-4xl"
            >
              {description}
            </BodyText>
          </FadeUp>
        </div>

        {/* Process Steps */}
        <FadeUp delay={400}>
          <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div class="flex flex-col items-center text-center group">
                {/* Step Number and Icon */}
                <div class="relative mb-6">
                  {/* Step Number Background */}
                  <div
                    class={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      backgroundColor === "dc-50"
                        ? "bg-primary-light/10 border-2 border-primary-light/30 group-hover:bg-primary-light/20"
                        : "bg-primary-light/20 border-2 border-primary-light/40 group-hover:bg-primary-light/30"
                    }`}
                  >
                    {step.icon
                      ? (
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={40}
                          height={40}
                          class="w-10 h-10 object-contain"
                          loading="lazy"
                        />
                      )
                      : (
                        <Icon
                          name={step.iconName || "check_circle"}
                          size="large"
                          class="text-primary-light"
                        />
                      )}
                  </div>

                  {/* Step Number Badge */}
                  <div class="absolute -top-2 -right-2 w-8 h-8 bg-primary-light text-primary-dark rounded-full flex items-center justify-center text-sm font-bold font-manrope">
                    {step.stepNumber}
                  </div>

                  {/* Connecting Line (not on last item) */}
                  {index < processSteps.length - 1 && (
                    <div class="hidden lg:block absolute top-10 left-20 w-12 xl:w-24 h-0.5 bg-primary-light/30">
                    </div>
                  )}
                </div>

                {/* Content */}
                <div class="space-y-4">
                  <h3
                    class={`${textColor} text-xl md:text-2xl font-semibold font-manrope leading-tight`}
                  >
                    {step.title}
                  </h3>
                  <p
                    class={`${
                      backgroundColor === "dc-50"
                        ? "text-dc-600"
                        : "text-dc-400"
                    } text-base font-medium leading-relaxed`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Bottom CTA */}
        <FadeUp delay={600}>
          <div class="w-full max-w-3xl text-center">
            <div
              class={`p-8 md:p-12 rounded-3xl ${
                backgroundColor === "dc-50"
                  ? "bg-gradient-to-r from-primary-light/10 to-yellow-light/10 border border-primary-light/20"
                  : "bg-gradient-to-r from-primary-light/20 to-yellow-light/20 border border-primary-light/30"
              }`}
            >
              <div class="flex items-center justify-center gap-3 mb-6">
                <Icon
                  name="rocket_launch"
                  size="large"
                  class="text-primary-light"
                />
                <h3
                  class={`${textColor} text-2xl md:text-3xl font-bold font-manrope`}
                >
                  Começe agora!
                </h3>
              </div>
              <p
                class={`${
                  backgroundColor === "dc-50" ? "text-dc-600" : "text-dc-400"
                } text-lg font-medium mb-8`}
              >
                Não perca tempo - as inscrições são limitadas e por ordem de
                chegada
              </p>
              <a
                href="#registration"
                class="inline-flex items-center gap-3 px-8 py-4 bg-primary-light text-primary-dark rounded-2xl font-semibold font-manrope hover:scale-105 transition-transform duration-200"
              >
                <Icon
                  name="person_add"
                  size="medium"
                  class="text-primary-dark"
                />
                Inscrever Minha Equipe
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Como Funciona",
  title:
    "Um processo simples e estruturado para maximizar seu aprendizado e resultados",
  description:
    "Siga estes passos para participar do hackathon e ter a melhor experiência possível",
  processSteps: [
    {
      stepNumber: "1",
      title: "Inscreva sua equipe",
      description: "Registre-se e forme seu time de até 4 desenvolvedores",
      iconName: "group_add",
    },
    {
      stepNumber: "2",
      title: "Receba os desafios",
      description: "Acesse a documentação e escolha sua categoria favorita",
      iconName: "assignment",
    },
    {
      stepNumber: "3",
      title: "Crie, teste e publique",
      description: "Desenvolva seus agents usando a plataforma deco.chat",
      iconName: "code",
    },
    {
      stepNumber: "4",
      title: "Demo Day",
      description: "Apresente sua solução para o time deco.cx e comunidade",
      iconName: "present_to_all",
    },
  ],
  backgroundColor: "dc-50",
};

export function Preview() {
  return <HackathonProcess {...defaultProps} />;
}
