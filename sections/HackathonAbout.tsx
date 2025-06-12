import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";

/**
 * @titleBy label
 */
interface EventDetail {
  /**
   * @title Ícone
   * @description Ícone do detalhe do evento
   */
  icon?: ImageWidget;
  /**
   * @title Nome do ícone
   * @description Nome do ícone Material Design
   */
  iconName?: string;
  /**
   * @title Label
   * @description Título do detalhe (ex: Data, Local, Premiação)
   */
  label: string;
  /**
   * @title Valor
   * @description Valor principal do detalhe
   */
  value: string;
  /**
   * @title Descrição
   * @description Descrição adicional do detalhe
   */
  description?: string;
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
   * @description Descrição principal sobre o hackathon
   */
  description: string;
  /**
   * @title Detalhes do evento
   * @description Lista dos detalhes principais do evento
   * @maxItems 3
   */
  eventDetails: EventDetail[];
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-dark" | "purple-dark";
}

export default function HackathonAbout({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  eventDetails = defaultProps.eventDetails,
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
              color={backgroundColor === "dc-50" ? "dc-500" : "dc-500"}
              size="lg"
              weight="medium"
              lineHeight="relaxed"
              className="max-w-4xl"
            >
              {description}
            </BodyText>
          </FadeUp>
        </div>

        {/* Event Details */}
        <FadeUp delay={400}>
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {eventDetails.map((detail, index) => (
              <div class="flex flex-col items-center text-center gap-4">
                {/* Icon */}
                <div
                  class={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    backgroundColor === "dc-50"
                      ? "bg-primary-light/10 border border-primary-light/30"
                      : "bg-primary-light/20 border border-primary-light/40"
                  }`}
                >
                  {detail.icon
                    ? (
                      <Image
                        src={detail.icon}
                        alt={detail.label}
                        width={32}
                        height={32}
                        class="w-8 h-8 object-contain"
                        loading="lazy"
                      />
                    )
                    : (
                      <span class="text-primary-light text-2xl">
                        {detail.iconName === "calendar"
                          ? "📅"
                          : detail.iconName === "location"
                          ? "🌍"
                          : detail.iconName === "prize"
                          ? "🏆"
                          : "⚡"}
                      </span>
                    )}
                </div>

                {/* Content */}
                <div class="flex flex-col gap-2">
                  <h3 class={`${textColor} text-xl font-semibold font-manrope`}>
                    {detail.label}
                  </h3>
                  <div class="text-primary-light text-2xl md:text-3xl font-bold font-manrope">
                    {detail.value}
                  </div>
                  {detail.description && (
                    <p
                      class={`${
                        backgroundColor === "dc-50"
                          ? "text-dc-500"
                          : "text-dc-400"
                      } text-base font-medium`}
                    >
                      {detail.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Sobre o evento",
  title: "Sobre o Hackathon",
  description:
    "Durante 2 dias, desenvolvedores vão explorar o poder da deco.chat para criar agentes que automatizam tarefas reais no ecossistema digital: geração de conteúdo, SEO, análise de dados, CMS customizados e muito mais.",
  eventDetails: [
    {
      iconName: "calendar",
      label: "Data",
      value: "10 a 11 de julho 2025",
      description: "Dois dias intensos de desenvolvimento e inovação",
    },
    {
      iconName: "location",
      label: "Local",
      value: "100% Online • Global",
      description: "Participe de qualquer lugar do mundo com internet",
    },
    {
      iconName: "prize",
      label: "Premiação",
      value: "R$ 30.000 em dinheiro e créditos",
      description: "▫ destaque na vitrine oficial da deco.chat",
    },
  ],
  backgroundColor: "dc-50",
};

export function Preview() {
  return <HackathonAbout {...defaultProps} />;
}
