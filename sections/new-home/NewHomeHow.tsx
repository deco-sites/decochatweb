import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy title
 */
interface FeatureCard {
  /**
   * @title Categoria
   * @description Categoria da funcionalidade (ex: STACK, DECO CLI)
   */
  category: string;
  /**
   * @title Título
   * @description Título da funcionalidade
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição detalhada da funcionalidade
   */
  description: string;
  /**
   * @title Imagem
   * @description Imagem da funcionalidade
   */
  image: ImageWidget;
  /**
   * @title Tem comando CLI
   * @description Se true, mostra overlay com comando CLI para copiar
   */
  hasCliCommand?: boolean;
  /**
   * @title Comando CLI
   * @description Comando que aparece no overlay (apenas se hasCliCommand for true)
   */
  cliCommand?: string;
  /**
   * @title Texto para copiar
   * @description Texto que será copiado quando o botão CLI for clicado
   */
  cliCopyText?: string;
}

interface Props {
  /**
   * @title Título principal
   * @description Título da seção
   */
  title: string;
  /**
   * @title Descrição
   * @description Texto explicativo da seção
   */
  description: string;
  /**
   * @title Cards de funcionalidades
   * @description Lista de funcionalidades (máx 2 cards)
   * @maxItems 2
   */
  featureCards: FeatureCard[];
  /**
   * @title Imagem decorativa
   * @description Imagem/SVG decorativo que aparece à direita (desktop) ou embaixo (mobile)
   */
  decorativeImage?: ImageWidget;
}

export default function NewHomeHow({
  title = defaultProps.title,
  description = defaultProps.description,
  featureCards = defaultProps.featureCards,
  decorativeImage = defaultProps.decorativeImage,
}: Props) {
  const sectionId = `how-section-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div class="w-full bg-dc-50 p-2 pt-0 pb-2">
      <div
        id={sectionId}
        class="w-full bg-primary-dark rounded-3xl overflow-hidden relative"
      >
        <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
          {/* Header Section */}
          <div class="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start mb-16 lg:mb-32">
            {/* Title */}
            <div class="lg:w-auto lg:flex-shrink-0">
              <h2 class="text-primary-light text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight max-w-2xl">
                {title}
              </h2>
            </div>

            {/* Description */}
            <div class="flex-1 lg:max-w-md">
              <p class="text-dc-100 text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Main Content Layout */}
          <div class="relative">
            {/* Cards Section - 2/3 width on desktop */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featureCards.map((card, index) => (
                <FeatureCardComponent
                  key={index}
                  card={card}
                  index={index}
                  sectionId={sectionId}
                />
              ))}
              {/* Empty third column on desktop */}
              <div class="hidden lg:block"></div>
            </div>

            {/* Decorative Image - Absolutely positioned on far right */}
            {decorativeImage && (
              <div class="hidden lg:block absolute top-0 -right-48 w-auto h-full pointer-events-none overflow-visible">
                <div class="relative h-full flex items-center">
                  <Image
                    src={decorativeImage}
                    alt="Decorative illustration"
                    width={671}
                    height={924}
                    class="h-auto max-h-[900px] w-auto object-contain filter drop-shadow-[0px_0px_60px_rgba(208,236,26,0.30)]"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Decorative Image - Mobile */}
          {decorativeImage && (
            <div class="block lg:hidden mt-16">
              <div class="flex justify-center">
                <div class="w-full max-w-[400px] relative">
                  <Image
                    src={decorativeImage}
                    alt="Decorative illustration"
                    width={671}
                    height={924}
                    class="w-full h-auto object-contain object-center filter drop-shadow-[0px_0px_60px_rgba(208,236,26,0.30)]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CLI Copy Script */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((sectionId: string) => {
            function initializeCliCopy() {
              const section = document.getElementById(sectionId);
              if (!section) {
                setTimeout(initializeCliCopy, 100);
                return;
              }

              const cliButtons = section.querySelectorAll(".cli-copy-button");
              console.log("Found CLI buttons:", cliButtons.length);

              cliButtons.forEach((button) => {
                const buttonElement = button as HTMLElement;
                const command = buttonElement.dataset.command;
                console.log("Button command:", command);

                buttonElement.addEventListener("click", async (e) => {
                  e.preventDefault();
                  if (command) {
                    try {
                      await navigator.clipboard.writeText(command);
                      console.log("Copied to clipboard:", command);

                      // Show feedback
                      const feedbackText = buttonElement.querySelector(
                        ".copy-feedback",
                      );
                      const initialText = buttonElement.querySelector(
                        ".copy-initial",
                      );

                      if (feedbackText && initialText) {
                        initialText.classList.add("hidden");
                        feedbackText.classList.remove("hidden");
                        setTimeout(() => {
                          feedbackText.classList.add("hidden");
                          initialText.classList.remove("hidden");
                        }, 2000);
                      }
                    } catch (error) {
                      console.log("Failed to copy CLI command:", error);
                      // Fallback for older browsers
                      const textArea = document.createElement("textarea");
                      textArea.value = command;
                      document.body.appendChild(textArea);
                      textArea.select();
                      document.execCommand("copy");
                      document.body.removeChild(textArea);

                      // Show feedback
                      const feedbackText = buttonElement.querySelector(
                        ".copy-feedback",
                      );
                      const initialText = buttonElement.querySelector(
                        ".copy-initial",
                      );

                      if (feedbackText && initialText) {
                        initialText.classList.add("hidden");
                        feedbackText.classList.remove("hidden");
                        setTimeout(() => {
                          feedbackText.classList.add("hidden");
                          initialText.classList.remove("hidden");
                        }, 2000);
                      }
                    }
                  }
                });
              });
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", initializeCliCopy);
            } else {
              initializeCliCopy();
            }
          }, sectionId),
        }}
      />
    </div>
  );
}

// Feature Card Component
function FeatureCardComponent({
  card,
  index,
  sectionId,
}: {
  card: FeatureCard;
  index: number;
  sectionId: string;
}) {
  return (
    <div class="relative bg-primary-dark rounded-2xl border border-green-800 overflow-hidden flex flex-col h-auto">
      {/* Content */}
      <div class="p-6 flex flex-col gap-2.5">
        {/* Category */}
        <div class="text-primary-light text-sm font-bold uppercase tracking-wide leading-none">
          {card.category}
        </div>

        {/* Title */}
        <h3 class="text-dc-200 text-xl md:text-2xl font-medium leading-tight">
          {card.title}
        </h3>

        {/* Description */}
        <p class="text-dc-300 text-base md:text-lg leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Image */}
      <div class="relative flex-shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          width={425}
          height={287}
          class="w-full h-auto object-cover object-center"
          loading="lazy"
        />

        {/* CLI Command Overlay */}
        {card.hasCliCommand && card.cliCommand && (
          <button
            class="cli-copy-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dc-800 border border-dc-700 rounded-xl px-4 py-3 flex flex-col items-center gap-2 hover:bg-dc-700 transition-colors duration-200 cursor-pointer"
            data-command={card.cliCopyText || card.cliCommand}
            style={{ minWidth: "fit-content" }}
          >
            <div class="text-dc-200 text-sm md:text-base font-normal font-mono leading-normal whitespace-nowrap">
              <span class="text-dc-200">deno -A jsr:@</span>
              <span class="text-primary-light">deco</span>
              <span class="text-dc-200">/cli create</span>
            </div>
            <div class="copy-feedback text-dc-600 text-xs md:text-sm font-normal font-mono leading-normal whitespace-nowrap hidden">
              copied!
            </div>
            <div class="copy-initial text-dc-600 text-xs md:text-sm font-normal font-mono leading-normal whitespace-nowrap">
              press to copy
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "The fastest way to become an Agentic Engineer",
  description:
    "No more jumping between tools or trying to stitch things together. Build, launch, and manage your agents and workflows from a single platform.",
  featureCards: [
    {
      category: "STACK",
      title: "Unified architecture",
      description:
        "Everything runs on TypeScript, so you don't have to juggle different languages or tools.",
      image: "https://via.placeholder.com/425x287?text=TypeScript+Stack",
      hasCliCommand: false,
    },
    {
      category: "DECO CLI",
      title: "Simple to get started",
      description:
        "Forget the complicated setup. Get up and running in minutes, and spend your time actually building.",
      image: "https://via.placeholder.com/425x260?text=CLI+Interface",
      hasCliCommand: true,
      cliCommand: "deno -A jsr:@deco/cli create",
      cliCopyText: "deno -A jsr:@deco/cli create",
    },
  ],
  decorativeImage: "https://via.placeholder.com/671x924?text=Decorative+SVG",
};

export function Preview() {
  return <NewHomeHow {...defaultProps} />;
}
