import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import Icon from "../components/ui/Icon.tsx";

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
    <div class="w-full px-4 md:px-16 py-12 md:py-32 bg-dc-50 flex flex-col justify-start items-center gap-8 md:gap-14">
      {/* Content Layout */}
      <FadeUp delay={200}>
        <div class="w-full max-w-[1580px] flex flex-col justify-start items-start gap-8 md:gap-14">
          {/* Title */}
          <h2 class="text-left text-dc-800 text-3xl sm:text-4xl md:text-6xl font-black font-main leading-tight md:leading-[64px] uppercase">
            <div class="whitespace-nowrap">SOBRE O</div>
            <div class="whitespace-nowrap">HACKATHON</div>
          </h2>

          {/* Main Content */}
          <div class="w-full flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-6">
            {/* Left Side - Date */}
            <div class="w-full lg:w-96 flex flex-row md:flex-col justify-start items-start gap-6 md:gap-14">
              {/* Large Calendar */}
              <div class="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-[20px] md:rounded-[24px] overflow-hidden bg-primary-light border-4 border-primary-light">
                <div class="h-[66px] sm:h-[78px] md:h-[84px] flex justify-center items-center text-center bg-primary-light font-main text-[28px] sm:text-[32px] md:text-[36px] uppercase text-primary-dark font-semibold">
                  Jul
                </div>
                <div class="h-[110px] sm:h-[130px] md:h-[140px] flex justify-center items-center text-center bg-primary-dark font-main text-3xl sm:text-4xl md:text-5xl uppercase text-primary-light font-semibold">
                  10-11
                </div>
              </div>

              {/* Date Info */}
              <div class="w-full flex flex-col justify-start items-start gap-2 md:gap-3">
                <div class="text-dc-800 text-lg md:text-xl font-semibold font-main leading-tight">
                  Data
                </div>
                <div class="w-full text-dc-800 text-xl sm:text-2xl md:text-3xl font-semibold font-main leading-relaxed">
                  Dois dias intensos de desenvolvimento e inovação
                </div>
              </div>
            </div>

            {/* Right Side - Location & Prize Cards */}
            <div class="flex-1 w-full flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6">
              {/* Location Card */}
              <div class="flex-1 w-full p-6 sm:p-8 md:p-12 bg-primary-dark rounded-[24px] md:rounded-[32px] flex flex-col justify-end items-center gap-8 md:gap-14">
                <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative overflow-hidden flex items-center justify-center">
                  <Icon
                    name="language"
                    size="immense"
                    class="text-primary-light"
                  />
                </div>
                <div class="w-full flex flex-col justify-start items-center gap-2 md:gap-3">
                  <div class="text-center text-primary-light text-lg md:text-xl font-semibold font-main leading-tight">
                    Local
                  </div>
                  <div class="w-full text-center text-primary-light text-3xl font-semibold font-main">
                    100% Online • Global
                  </div>
                </div>
              </div>

              {/* Prize Card */}
              <div class="flex-1 w-full p-6 sm:p-8 md:p-12 bg-primary-dark rounded-[24px] md:rounded-[32px] flex flex-col justify-end items-center gap-8 md:gap-14">
                <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative overflow-hidden flex items-center justify-center">
                  <Icon
                    name="paid"
                    size="immense"
                    class="text-primary-light"
                  />
                </div>
                <div class="w-full flex flex-col justify-start items-center gap-2 md:gap-3">
                  <div class="text-center text-primary-light text-lg md:text-xl font-semibold font-main leading-tight">
                    Premiação
                  </div>
                  <div class="w-full text-center text-primary-light text-3xl font-semibold font-main">
                    R$ 30k em dinheiro<br />e créditos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
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
