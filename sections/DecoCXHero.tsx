import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "../components/ui/Button.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface Props {
  /**
   * @title Título principal
   * @description Título principal da seção hero
   */
  title: string;
  /**
   * @title Subtítulo
   * @description Texto descritivo que aparece abaixo do título
   */
  subtitle: string;
  /**
   * @title Texto do botão
   * @description Texto que aparece no botão de ação
   */
  buttonText: string;
  /**
   * @title URL do botão
   * @description Link para onde o botão deve direcionar
   */
  buttonHref: string;
  /**
   * @title Imagem do Hero
   * @description Imagem principal do hero (1440x495px recomendado)
   */
  heroImage?: ImageWidget;
}

export default function DecoCXHero({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  buttonText = defaultProps.buttonText,
  buttonHref = defaultProps.buttonHref,
  heroImage = defaultProps.heroImage,
}: Props) {
  const sectionId = `deco-cx-hero-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section class="w-full bg-dc-900 p-2 pb-0">
      <div
        id={sectionId}
        class="w-full bg-dc-900 relative overflow-hidden"
      >
        {/* Header Content */}
        <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-24">
          <div class="w-full max-w-[850px] mx-auto flex flex-col items-center gap-16">
            {/* Title and Subtitle */}
            <div class="flex flex-col items-center gap-6 text-center">
              <h1 class="text-dc-50 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-tight">
                {(() => {
                  // Split title into 3 lines for better visual hierarchy
                  const words = title.split(' ');
                  if (words.length <= 3) {
                    return words.map((word, i) => (
                      <span key={i} class="block">{word}</span>
                    ));
                  }
                  // For longer titles, try to distribute words across 3 lines
                  const wordsPerLine = Math.ceil(words.length / 3);
                  const lines = [];
                  for (let i = 0; i < words.length; i += wordsPerLine) {
                    lines.push(words.slice(i, i + wordsPerLine).join(' '));
                  }
                  return lines.map((line, i) => (
                    <span key={i} class="block">{line}</span>
                  ));
                })()}
              </h1>
              <div class="text-dc-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                {(() => {
                  // Split subtitle at sentence endings or specific breakpoints
                  const sentences = subtitle.split('. ');
                  if (sentences.length === 1) {
                    return <p>{subtitle}</p>;
                  }
                  return sentences.map((sentence, i) => (
                    <p key={i} class={i < sentences.length - 1 ? "mb-2" : ""}>
                      {sentence}{i < sentences.length - 1 ? '.' : ''}
                    </p>
                  ));
                })()}
              </div>
            </div>

            {/* Call to Action Button */}
            <div class="flex justify-center">
              <Button
                href={buttonHref}
                variant="primary"
                size="large"
                className="w-full sm:w-auto"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image or Placeholder - Max Width 1440px */}
        <div class="w-full flex justify-center">
          <div class="w-full max-w-[1440px] h-[495px] overflow-hidden">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="Hero image"
                width={1440}
                height={495}
                class="w-full h-full object-cover"
                loading="lazy"
                fetchPriority="high"
              />
            ) : (
              <div class="w-full h-full bg-dc-800 flex items-center justify-center text-center text-dc-400">
                <div>
                  <div class="w-16 h-16 bg-dc-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name="image" size="large" class="text-dc-400" />
                  </div>
                  <p class="text-lg font-medium">Hero Image Placeholder</p>
                  <p class="text-sm mt-1">1440 x 495 pixels</p>
                  <p class="text-xs mt-2 opacity-75">Configure a imagem via CMS</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const defaultProps: Props = {
  title: "Vibecode high-performance storefronts",
  subtitle:
    "Create shopping experiences by chatting with AI. Join us August 25 to see what's next.",
  buttonText: "Join the waitlist",
  buttonHref: "#waitlist",
  heroImage: undefined,
};

export function Preview() {
  return <DecoCXHero {...defaultProps} />;
} 