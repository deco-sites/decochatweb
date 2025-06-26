import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../../components/ui/Eyebrow.tsx";
import FadeUp from "../../components/ui/FadeUp.tsx";
import Button from "../../components/ui/Button.tsx";
import BodyText from "../../components/ui/BodyText.tsx";

export interface CTA {
  /**
   * @title Texto do botão
   * @description Texto que aparece no botão
   */
  text: string;
  /**
   * @title URL do botão
   * @description Link para onde o botão deve levar
   */
  href: string;
  /**
   * @title Estilo do botão
   * @description Escolha o estilo visual do botão
   */
  variant?: "primary" | "secondary";
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
   * @description Título principal do hero, pode conter quebras de linha
   */
  title: string;
  /**
   * @title Descrição
   * @description Texto descritivo que aparece abaixo do título
   */
  description: string;
  /**
   * @title Botões de ação
   * @description Lista de botões que aparecerão no hero
   * @maxItems 2
   */
  ctas: CTA[];
  /**
   * @title Imagem de fundo
   * @description Imagem de fundo decorativa do hero
   */
  backgroundImage?: ImageWidget;
  /**
   * @title Imagem principal
   * @description Imagem principal que aparece na parte inferior do hero
   */
  mainImage?: ImageWidget;
  /**
   * @title Imagem de fundo da seção principal
   * @description Imagem de fundo para a seção da imagem principal
   */
  mainImageBackground?: ImageWidget;
  /**
   * @title SVG Decorativo
   * @description SVG decorativo que aparece no canto superior direito da imagem principal
   */
  decorativeSvg?: ImageWidget;
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-light" | "purple-light" | "yellow-light";
}

export default function Hero({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  ctas = defaultProps.ctas,
  backgroundImage = defaultProps.backgroundImage,
  mainImage = defaultProps.mainImage,
  mainImageBackground = defaultProps.mainImageBackground,
  decorativeSvg = defaultProps.decorativeSvg,
  backgroundColor = defaultProps.backgroundColor,
}: Props) {
  const bgColorMap = {
    "dc-50": "bg-dc-50",
    "primary-light": "bg-primary-light",
    "purple-light": "bg-purple-light",
    "yellow-light": "bg-yellow-light",
  };

  const bgColor = bgColorMap[backgroundColor || "dc-50"];

  return (
    <div class="w-full bg-primary-dark flex flex-col justify-start items-start overflow-hidden">
      <div
        class={`self-stretch w-full px-4 md:px-8 lg:px-16 pt-16 relative ${bgColor} rounded-bl-3xl rounded-br-3xl flex flex-col justify-start items-center overflow-hidden`}
      >
        {/* Background Image - positioned at bottom */}
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Background decoration"
            width={1760}
            height={902}
            class="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full max-w-none h-auto object-cover object-top"
            style={{ minWidth: "1440px" }}
            loading="eager"
            fetchPriority="high"
          />
        )}

        {/* Content Container with max-width 1440px */}
        <div class="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-center gap-20">
          {/* Content */}
          <div class="flex flex-col justify-start items-center gap-8">
            <FadeUp delay={0}>
              <div class="flex flex-col justify-start items-center gap-10">
                <div class="flex flex-col justify-start items-center gap-4">
                  {/* Eyebrow */}
                  {eyebrow && (
                    <Eyebrow
                      text={eyebrow.text}
                      iconName={eyebrow.iconName}
                      variant={eyebrow.variant}
                    />
                  )}

                  {/* Main Title - Large size matching Figma */}
                  <h1 class="text-center text-dc-700 text-5xl md:text-6xl lg:text-[80px] font-bold font-main leading-none tracking-[-0.03em] max-w-4xl">
                    {title.split("\n").map((line, index) => (
                      <>
                        {index > 0 && <br />}
                        {line}
                      </>
                    ))}
                  </h1>
                </div>

                {/* Description */}
                <div class="max-w-full text-center">
                  <BodyText
                    align="center"
                    color="dc-500"
                    size="lg"
                    weight="medium"
                    lineHeight="relaxed"
                    className="max-w-3xl mx-auto"
                  >
                    {description.split("\n").map((line, index) => (
                      <>
                        {index > 0 && <br />}
                        {line}
                      </>
                    ))}
                  </BodyText>
                </div>
              </div>
            </FadeUp>

            {/* CTAs */}
            {ctas && ctas.length > 0 && (
              <FadeUp delay={200}>
                <div class="flex flex-row justify-center items-center gap-4">
                  {ctas.map((cta) => (
                    <Button
                      href={cta.href}
                      variant={cta.variant}
                      size="large"
                      className="hover:opacity-90 hover:-translate-y-0.5 transition-transform duration-200 ease-out"
                    >
                      {cta.text}
                    </Button>
                  ))}
                </div>
              </FadeUp>
            )}
          </div>

          {/* Main Image Container */}
          {mainImage && (
            <FadeUp delay={400}>
              <div class="w-full relative">
                <div
                  class="w-full bg-primary-light rounded-tl-3xl rounded-tr-3xl border-2 border-dc-50 pt-4 px-4 sm:px-4 md:pt-20 md:px-20 pb-0 h-auto md:h-[443px] flex flex-col justify-start items-center overflow-hidden relative"
                  style={{
                    backgroundImage: mainImageBackground
                      ? `url(${mainImageBackground})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Main platform image - fills available height with top padding */}
                  <div class="w-full flex items-start justify-center relative z-10">
                    <Image
                      src={mainImage}
                      alt="Main hero image"
                      width={1440}
                      height={900}
                      class="w-full sm:max-w-[1182px] h-auto md:min-h-full md:object-cover md:object-top"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>

                  {/* Decorative SVG Arrow - positioned absolutely at top-right with higher z-index */}
                  {decorativeSvg && (
                    <div class="absolute top-5 right-5 w-[104px] h-[109px] flex items-center justify-center z-20">
                      <div class="transform rotate-[45deg] scale-y-[1]">
                        <Image
                          src={decorativeSvg}
                          alt="Decorative arrow"
                          width={72}
                          height={84}
                          class="w-[72px] h-[84px]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: {
    text: "AI Agent Workspace",
    iconName: "info",
    variant: "dc-50",
  },
  title: "Turn your\ncompany AI-first",
  description:
    "The platform to build AI agents in minutes, connected to your company knowledge and tools, powered by the best AI models.",
  ctas: [
    {
      text: "Try it for free",
      href: "/signup",
      variant: "primary",
    },
    {
      text: "Book a Demo",
      href: "/demo",
      variant: "secondary",
    },
  ],
  backgroundImage: "https://placehold.co/1760x902",
  mainImage: "https://placehold.co/1182x378",
  mainImageBackground: "https://placehold.co/1440x844",
  decorativeSvg: "https://placehold.co/72x84",
  backgroundColor: "dc-50",
};

export function Preview() {
  return <Hero {...defaultProps} />;
}
