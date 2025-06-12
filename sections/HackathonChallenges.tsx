import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import Icon from "../components/ui/Icon.tsx";

/**
 * @titleBy title
 */
interface Challenge {
  /**
   * @title Título do desafio
   * @description Nome da categoria do desafio
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição do que o agente deve fazer
   */
  description: string;
  /**
   * @title Ícone
   * @description Ícone personalizado da categoria
   */
  icon?: ImageWidget;
  /**
   * @title Nome do ícone
   * @description Nome do ícone Material Design
   */
  iconName?: string;
  /**
   * @title Sugestões de implementação
   * @description Lista de sugestões para implementar o agente
   * @maxItems 4
   */
  suggestions: string[];
  /**
   * @title Cor do cartão
   * @description Cor de destaque do cartão
   */
  cardColor?: "primary" | "purple" | "yellow" | "neutral";
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
   * @title Desafios disponíveis
   * @description Lista das categorias de desafio
   * @maxItems 4
   */
  challenges: Challenge[];
}

export default function HackathonChallenges({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  challenges = defaultProps.challenges,
}: Props) {
  const getCardColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary-light/10 hover:bg-primary-light/20",
          border: "border-primary-light/30 hover:border-primary-light/50",
          iconBg: "bg-primary-light/20",
          iconColor: "text-primary-dark",
        };
      case "purple":
        return {
          bg: "bg-purple-light/10 hover:bg-purple-light/20",
          border: "border-purple-light/30 hover:border-purple-light/50",
          iconBg: "bg-purple-light/20",
          iconColor: "text-purple-dark",
        };
      case "yellow":
        return {
          bg: "bg-yellow-light/10 hover:bg-yellow-light/20",
          border: "border-yellow-light/30 hover:border-yellow-light/50",
          iconBg: "bg-yellow-light/20",
          iconColor: "text-yellow-dark",
        };
      default:
        return {
          bg: "bg-dc-100 hover:bg-dc-200",
          border: "border-dc-300 hover:border-dc-400",
          iconBg: "bg-dc-200",
          iconColor: "text-dc-700",
        };
    }
  };

  return (
    <div class="w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-dc-50 flex flex-col justify-start items-center gap-14">
      <div class="w-full max-w-[1440px] flex flex-col justify-start items-center gap-14">
        {/* Header */}
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-10">
          <FadeUp>
            <div class="flex flex-col justify-start items-center gap-6">
              <Eyebrow
                variant="primary-light"
                iconName="info"
                text={eyebrow || ""}
              />
              <h2 class="text-center text-dc-800 text-3xl md:text-5xl font-semibold font-manrope leading-tight">
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

        {/* Challenges Grid */}
        <FadeUp delay={400}>
          <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {challenges.map((challenge, index) => {
              const colorClasses = getCardColorClasses(
                challenge.cardColor || "neutral",
              );

              return (
                <div
                  class={`p-6 md:p-8 ${colorClasses.bg} ${colorClasses.border} border-2 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group`}
                >
                  {/* Header */}
                  <div class="flex items-start gap-4 mb-6">
                    <div
                      class={`w-12 h-12 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      {challenge.icon
                        ? (
                          <Image
                            src={challenge.icon}
                            alt={challenge.title}
                            width={24}
                            height={24}
                            class="w-6 h-6 object-contain"
                            loading="lazy"
                          />
                        )
                        : (
                          <Icon
                            name={challenge.iconName || "code"}
                            size="medium"
                            class={colorClasses.iconColor}
                          />
                        )}
                    </div>

                    <div class="flex-1">
                      <h3 class="text-dc-800 text-xl md:text-2xl font-semibold font-manrope leading-tight mb-3">
                        {challenge.title}
                      </h3>
                      <p class="text-dc-600 text-base font-medium leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div class="space-y-3">
                    <h4 class="text-dc-700 text-sm font-semibold font-manrope uppercase tracking-wider">
                      Sugestões de implementação:
                    </h4>
                    <ul class="space-y-2">
                      {challenge.suggestions.map((suggestion, idx) => (
                        <li class="flex items-start gap-3">
                          <div class="w-1.5 h-1.5 bg-primary-light rounded-full mt-2 flex-shrink-0">
                          </div>
                          <span class="text-dc-600 text-sm font-medium leading-relaxed">
                            {suggestion}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Desafios disponíveis",
  title: "Categorias de Desafio",
  description:
    "Escolha uma categoria e desenvolva agentes inteligentes que resolvem problemas reais",
  challenges: [
    {
      title: "Agente de CMS customizados",
      description:
        "Crie agentes que automatizam a criação e gestão de conteúdo personalizado",
      iconName: "edit",
      cardColor: "primary",
      suggestions: [
        "Geração automática de posts",
        "Otimização de metadados",
        "Curadoria de conteúdo",
        "Templates inteligentes",
      ],
    },
    {
      title: "Agente de SEO + Analytics",
      description: "Desenvolva soluções inteligentes para otimização e análise",
      iconName: "analytics",
      cardColor: "purple",
      suggestions: [
        "Análise de keywords",
        "Relatórios automáticos",
        "Otimização on-page",
        "Monitoring de ranking",
      ],
    },
    {
      title: "Agente de Storefront Inteligente",
      description: "Construa agentes que melhoram a experiência de e-commerce",
      iconName: "shopping_cart",
      cardColor: "yellow",
      suggestions: [
        "Recomendações personalizadas",
        "Chat de vendas",
        "Gestão de estoque",
        "Análise de comportamento",
      ],
    },
    {
      title: "Agente de Onboarding",
      description: "Crie experiências de suporte e onboarding automatizadas",
      iconName: "school",
      cardColor: "neutral",
      suggestions: [
        "Guias interativos",
        "Suporte 24/7",
        "Tutoriais personalizados",
        "FAQ inteligente",
      ],
    },
  ],
};

export function Preview() {
  return <HackathonChallenges {...defaultProps} />;
}
