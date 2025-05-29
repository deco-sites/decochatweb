import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Button from "../components/ui/Button.tsx";
import BodyText from "../components/ui/BodyText.tsx";

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
    <div class="w-full bg-green-950 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
      <div
        class={`self-stretch min-w-full px-4 md:px-8 lg:px-16 pt-16 relative ${bgColor} rounded-bl-3xl rounded-br-3xl flex flex-col justify-start items-center gap-12 lg:gap-20 overflow-hidden`}
      >
        {/* Background Image */}
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Background decoration"
            width={1440}
            height={844}
            class="w-full h-96 md:h-[36rem] lg:h-[52rem] left-0 top-28 absolute object-cover"
            loading="eager"
            fetchPriority="high"
          />
        )}

        {/* Content */}
        <div class="relative z-10 flex flex-col justify-start items-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          <FadeUp delay={0}>
            <div class="flex flex-col justify-start items-center gap-6 lg:gap-10">
              <div class="flex flex-col justify-start items-center gap-4">
                {/* Eyebrow */}
                {eyebrow && (
                  <Eyebrow
                    text={eyebrow.text}
                    iconName={eyebrow.iconName}
                    variant={eyebrow.variant}
                  />
                )}

                {/* Main Title */}
                <h1 class="text-center text-dc-700 text-3xl md:text-6xl font-bold font-manrope leading-normal max-w-4xl">
                  {title.split("\n").map((line, index) => (
                    <>
                      {index > 0 && <br />}
                      {line}
                    </>
                  ))}
                </h1>
              </div>

              {/* Description */}
              <BodyText
                align="center"
                color="dc-500"
                size="xl"
                weight="medium"
                lineHeight="figma"
                className="max-w-3xl px-4"
              >
                {description.split("\n").map((line, index) => (
                  <>
                    {index > 0 && <br />}
                    {line}
                  </>
                ))}
              </BodyText>
            </div>
          </FadeUp>

          {/* CTAs */}
          {ctas && ctas.length > 0 && (
            <FadeUp delay={200}>
              <div class="inline-flex flex-col sm:flex-row justify-start items-center gap-4">
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
            <div
              class="self-stretch px-12 pt-12 rounded-tl-3xl rounded-tr-3xl outline outline-2 outline-dc-50 flex flex-col justify-start items-center overflow-hidden relative"
              style={{
                backgroundImage: mainImageBackground
                  ? `url(${mainImageBackground})`
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Image
                src={mainImage}
                alt="Main hero image"
                width={1155}
                height={363}
                class="w-full h-auto rounded-tl-3xl object-fill rounded-tr-3xl shadow-sm outline outline-8 outline-white/25 backdrop-blur-sm"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: {
    text: "Opensource Whitelabel AI Workspace",
    iconName: "info",
    variant: "dc-50",
  },
  title: "The fastest way to\nbecome AI-First company",
  description:
    "Everything you need to build, run, and scale AI across your\norganization with control and confidence.",
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
  backgroundImage: "https://placehold.co/1440x844",
  mainImage: "https://placehold.co/1155x722",
  mainImageBackground: "https://placehold.co/1440x844",
  backgroundColor: "dc-50",
};

export function Preview() {
  return <Hero {...defaultProps} />;
}
