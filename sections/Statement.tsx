import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";

export interface StatementCard {
  /**
   * @title Texto do cartão
   * @description Texto que aparece no cartão
   */
  text?: string;
  /**
   * @title Imagem do cartão
   * @description Imagem opcional que aparece no cartão (para o cartão inferior direito)
   */
  image?: ImageWidget;
}

export interface Props {
  /**
   * @title Eyebrow
   * @description Texto pequeno que aparece acima do título principal
   */
  eyebrow?: {
    /**
     * @title Texto
     * @description Texto do eyebrow
     */
    text: string;
    /**
     * @title Ícone
     * @description Nome do ícone a ser exibido
     */
    iconName?: string;
    /**
     * @title Variante de cor
     * @description Escolha a variante de cor do eyebrow
     */
    variant?: "primary-light" | "purple-light" | "dc-50" | "yellow-light";
  };
  /**
   * @title Título principal
   * @description Título principal da seção
   */
  title: string;
  /**
   * @title Imagem central
   * @description Imagem principal que aparece no centro da seção
   */
  centerImage?: ImageWidget;
  /**
   * @title Cartão esquerdo
   * @description Cartão que aparece à esquerda da imagem central
   */
  leftCard: StatementCard;
  /**
   * @title Cartão superior direito
   * @description Cartão que aparece no topo direito
   */
  topRightCard: StatementCard;
  /**
   * @title Cartão inferior direito
   * @description Cartão que aparece na parte inferior direita (com imagem)
   */
  bottomRightCard: StatementCard;
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "green-950" | "dc-900" | "primary-dark" | "purple-dark";
}

export default function Statement({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  centerImage = defaultProps.centerImage,
  leftCard = defaultProps.leftCard,
  topRightCard = defaultProps.topRightCard,
  bottomRightCard = defaultProps.bottomRightCard,
  backgroundColor = defaultProps.backgroundColor,
}: Props) {
  const bgColorMap = {
    "green-950": "bg-green-950",
    "dc-900": "bg-dc-900",
    "primary-dark": "bg-primary-dark",
    "purple-dark": "bg-purple-dark",
  };

  const bgColor = bgColorMap[backgroundColor || "green-950"];

  return (
    <div
      class={`w-full ${bgColor} inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden`}
    >
      <div
        class={`self-stretch min-w-full px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32 ${bgColor} flex flex-col justify-start items-center gap-8 md:gap-12 lg:gap-14`}
      >
        {/* Header Content */}
        <FadeUp delay={0}>
          <div class="w-full max-w-7xl mx-auto flex flex-col justify-start items-center gap-6 lg:gap-8">
            <div class="self-stretch flex flex-col justify-start items-center gap-4 lg:gap-6">
              {/* Eyebrow */}
              {eyebrow && (
                <Eyebrow
                  text={eyebrow.text}
                  iconName={eyebrow.iconName}
                  variant={eyebrow.variant}
                />
              )}

              {/* Main Title */}
              <h2 class="self-stretch text-center text-dc-200 text-2xl md:text-4xl lg:text-5xl font-semibold font-manrope leading-tight lg:leading-tight max-w-4xl mx-auto">
                {title}
              </h2>
            </div>
          </div>
        </FadeUp>

        {/* Cards and Image Layout */}
        <FadeUp delay={200}>
          <div class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-end gap-2 lg:gap-2">
            {/* Left Card */}
            <div class="w-full lg:w-80 h-64 lg:h-80 p-6 lg:p-10 bg-primary-light rounded-3xl flex justify-start items-end order-2 lg:order-1">
              {leftCard.text && (
                <div class="flex-1 text-primary-dark text-xl md:text-2xl lg:text-3xl font-medium font-manrope leading-loose">
                  {leftCard.text}
                </div>
              )}
            </div>

            {/* Center Chat Interface */}
            <div class="order-1 lg:order-2 w-full lg:w-auto lg:flex-1 max-w-2xl">
              <div class="self-stretch h-auto lg:h-[669px] p-6 lg:p-10 bg-dc-50 rounded-3xl outline outline-1 outline-offset-[-1px] outline-dc-300 inline-flex flex-col justify-start items-center gap-5 overflow-hidden">
                {/* User Message */}
                <div class="self-stretch pl-6 lg:pl-12 flex flex-col justify-end items-end gap-2">
                  <div class="self-stretch text-right text-dc-400 text-base font-normal font-inter leading-none">
                    12:23 PM
                  </div>
                  <div class="w-full max-w-md lg:max-w-lg p-4 lg:p-6 bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex flex-col justify-center items-start">
                    <div class="self-stretch text-dc-600 text-lg lg:text-xl font-medium font-manrope leading-loose">
                      Create a spreadsheet based on the recent Slack
                      conversations about our main project
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div class="self-stretch pr-6 lg:pr-12 flex flex-col justify-end items-start gap-2">
                  <div class="self-stretch text-dc-400 text-base font-normal font-inter leading-none">
                    12:24 PM
                  </div>
                  <div class="self-stretch text-dc-600 text-lg lg:text-xl font-medium font-manrope leading-loose">
                    I'll need to connect with the necessary integrations, just a
                    moment!
                  </div>
                </div>

                {/* Integration Status */}
                <div class="self-stretch flex flex-col justify-start items-start gap-1">
                  <div class="self-stretch px-4 lg:px-6 py-3 lg:py-4 rounded-full outline outline-1 outline-offset-[-1px] outline-dc-300 inline-flex justify-between items-center">
                    <div class="flex justify-start items-center gap-3">
                      <div class="w-6 h-6 bg-dc-300 rounded"></div>
                      <div class="text-dc-700 text-lg lg:text-xl font-normal font-inter leading-relaxed">
                        Connecting to Slack...
                      </div>
                    </div>
                    <div class="w-8 lg:w-10 h-8 lg:h-10 p-2 rounded-full flex justify-center items-center">
                      <div class="w-4 lg:w-5 h-4 lg:h-5 bg-primary-light rounded-full">
                      </div>
                    </div>
                  </div>
                  <div class="self-stretch px-4 lg:px-6 py-3 lg:py-4 rounded-full outline outline-1 outline-offset-[-1px] outline-dc-300 inline-flex justify-between items-center">
                    <div class="flex justify-start items-center gap-3">
                      <div class="w-6 h-6 bg-dc-300 rounded"></div>
                      <div class="text-dc-700 text-lg lg:text-xl font-normal font-inter leading-relaxed">
                        Connecting to Google Drive...
                      </div>
                    </div>
                    <div class="w-8 lg:w-10 h-8 lg:h-10 p-2 rounded-full flex justify-center items-center">
                      <div class="w-4 lg:w-5 h-4 lg:h-5 bg-dc-400 rounded-full">
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Response 2 */}
                <div class="self-stretch pr-6 lg:pr-12 flex flex-col justify-end items-start gap-2">
                  <div class="self-stretch text-dc-400 text-base font-normal font-inter leading-none">
                    12:24 PM
                  </div>
                  <div class="self-stretch text-dc-600 text-lg lg:text-xl font-medium font-manrope leading-loose">
                    I found the relevant information. Creating the spreadsheet
                    in Google Drive now.
                  </div>
                </div>

                {/* Final Result */}
                <div class="self-stretch pr-6 lg:pr-12 flex flex-col justify-end items-start gap-2">
                  <div class="self-stretch text-dc-400 text-base font-normal font-inter leading-none">
                    12:26 PM
                  </div>
                  <div class="p-4 lg:p-6 rounded-2xl outline outline-1 outline-offset-[-1px] outline-dc-300 flex flex-col justify-start items-start gap-4 overflow-hidden">
                    <div class="w-full inline-flex justify-between items-center">
                      <div class="flex-1 flex justify-start items-center gap-1.5">
                        <div class="w-3.5 h-4 bg-dc-300 rounded"></div>
                        <div class="text-dc-700 text-lg lg:text-xl font-medium font-inter leading-none">
                          Sheets
                        </div>
                      </div>
                      <div class="w-6 lg:w-8 h-6 lg:h-8 p-1 lg:p-2 rounded-full flex justify-center items-center">
                        <div class="w-3 lg:w-4 h-3 lg:h-4 bg-dc-700 rounded">
                        </div>
                      </div>
                    </div>
                    <div class="w-full h-20 lg:h-28 bg-dc-200 rounded-xl border border-dc-300">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cards Container */}
            <div class="w-full lg:w-80 self-stretch inline-flex flex-col justify-center items-start gap-2 order-3">
              {/* Top Right Card */}
              <div class="self-stretch h-64 lg:h-96 p-6 lg:p-10 bg-primary-light rounded-3xl inline-flex justify-start items-end">
                {topRightCard.text && (
                  <div class="flex-1 text-primary-dark text-xl md:text-2xl lg:text-3xl font-medium font-manrope leading-loose">
                    {topRightCard.text}
                  </div>
                )}
              </div>

              {/* Bottom Right Card with Image */}
              <div class="self-stretch flex-1 p-6 lg:p-10 relative bg-primary-light rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-[20rem] inline-flex justify-start items-end overflow-hidden min-h-64 lg:min-h-80">
                {bottomRightCard.image && (
                  <Image
                    src={bottomRightCard.image}
                    alt="Bottom right card image"
                    width={323}
                    height={308}
                    class="w-48 lg:w-60 h-48 lg:h-60 right-4 lg:right-6 top-4 lg:top-6 absolute rounded object-cover"
                    loading="lazy"
                    fetchPriority="low"
                  />
                )}
                {bottomRightCard.text && (
                  <div class="flex-1 relative z-10 text-primary-dark text-xl md:text-2xl lg:text-3xl font-medium font-manrope leading-loose">
                    {bottomRightCard.text}
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: {
    text: "Two ways to use AI Agents",
    iconName: "info",
    variant: "primary-light",
  },
  title:
    "deco.chat is the platform that allows everyone to solve problems and automate daily work with AI Agents",
  centerImage: "https://placehold.co/596x669",
  leftCard: {
    text: "Access over 60 AI models through one unified API",
  },
  topRightCard: {
    text: "Text, image, video and code (app) generation",
  },
  bottomRightCard: {
    text: "Advanced AI capabilities for complex workflows",
    image: "https://placehold.co/323x308",
  },
  backgroundColor: "green-950",
};

export function Preview() {
  return <Statement {...defaultProps} />;
}
