import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Icon from "../components/ui/Icon.tsx";

/**
 * @titleBy title
 */
interface ProcessStep {
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
   * @title Nome do ícone
   * @description Nome do ícone Material Design
   */
  iconName: string;
}

interface Props {
  /**
   * @title Título principal
   * @description Título principal da seção
   */
  title: string;
  /**
   * @title Passos do processo
   * @description Lista dos passos para participar (máx 4)
   * @maxItems 4
   */
  processSteps: ProcessStep[];
}

export default function HackathonProcess({
  title = defaultProps.title,
  processSteps = defaultProps.processSteps,
}: Props) {
  return (
    <div class="w-full px-4 md:px-16 py-16 md:py-32 bg-stone-50 flex flex-col justify-start items-center gap-14">
      {/* Title */}
      <FadeUp>
        <h2 class="w-full text-dc-800 text-4xl md:text-6xl font-black font-main leading-tight text-center uppercase">
          {title}
        </h2>
      </FadeUp>

      {/* Process Steps */}
      <FadeUp delay={200}>
        <div class="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
          {processSteps.map((step, index) => (
            <div class="flex flex-col md:flex-row items-center flex-1">
              {/* Step Container */}
              <div class="flex flex-col justify-center items-center gap-8 w-full">
                {/* Icon Container */}
                <div class="w-32 h-32 md:w-44 md:h-44 bg-primary-light rounded-[48px] flex justify-center items-center relative">
                  <Icon
                    name={step.iconName}
                    size="immense"
                    class="text-primary-dark"
                  />

                  {/* Connecting Line (not on last item) */}
                  {index < processSteps.length - 1 && (
                    <div class="hidden md:block absolute left-full top-1/2 w-80 h-2 bg-primary-light transform -translate-y-1/2">
                    </div>
                  )}
                </div>

                {/* Content */}
                <div class="w-full max-w-xs flex flex-col justify-start items-start gap-3">
                  <h3 class="w-full text-center text-dc-800 text-xl md:text-2xl font-semibold font-main leading-normal">
                    {step.title}
                  </h3>
                  <p class="w-full text-center text-dc-400 text-lg md:text-xl font-normal font-main leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}

const defaultProps: Props = {
  title: "COMO FUNCIONA",
  processSteps: [
    {
      title: "Inscreva sua equipe",
      description: "Registre-se e forme seu time de até 4 desenvolvedores",
      iconName: "group_add",
    },
    {
      title: "Receba os desafios",
      description: "Acesse a documentação e escolha sua categoria favorita",
      iconName: "assignment",
    },
    {
      title: "Crie, teste e publique",
      description: "Desenvolva seus agents usando a plataforma deco.chat",
      iconName: "code",
    },
    {
      title: "Demo Day",
      description: "Apresente sua solução para o time deco.cx e comunidade",
      iconName: "present_to_all",
    },
  ],
};

export function Preview() {
  return <HackathonProcess {...defaultProps} />;
}
