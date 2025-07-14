import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "../../components/ui/Button.tsx";
import Icon from "../../components/ui/Icon.tsx";
import AnnouncementBanner from "../../components/ui/AnnouncementBanner.tsx";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy title
 */
export interface IntegrationIcon {
  /**
   * @title Nome da integração
   * @description Nome descritivo da integração (ex: Google Drive, Slack)
   */
  title: string;
  /**
   * @title Ícone
   * @description Imagem do ícone da integração
   */
  image: ImageWidget;
  /**
   * @title Posição horizontal
   * @description Posição horizontal do ícone (0-100)
   */
  positionX: number;
  /**
   * @title Posição vertical
   * @description Posição vertical do ícone (0-100)
   */
  positionY: number;
  /**
   * @title Rotação
   * @description Ângulo de rotação do ícone em graus
   */
  rotation?: number;
  /**
   * @title Tamanho
   * @description Tamanho do ícone
   */
  size?: "small" | "medium" | "large";
}

/**
 * @titleBy title
 */
export interface FeatureCard {
  /**
   * @title Título
   * @description Título da funcionalidade
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição da funcionalidade
   */
  description: string;
  /**
   * @title Ícone
   * @description Imagem do ícone da funcionalidade
   */
  icon: ImageWidget;
}

export interface Props {
  /**
   * @title Texto do anúncio
   * @description Texto que aparece no banner de anúncio superior
   */
  announcementText: string;
  /**
   * @title Link do anúncio
   * @description URL para onde o banner de anúncio deve direcionar
   */
  announcementHref?: string;
  /**
   * @title Título principal
   * @description Título principal da seção hero
   */
  title: string;
  /**
   * @title Subtítulo em itálico
   * @description Subtítulo em fonte Instrument Serif italic
   */
  italicSubtitle: string;
  /**
   * @title Subtítulo principal
   * @description Texto descritivo principal que aparece abaixo do título
   */
  subtitle: string;
  /**
   * @title Texto do botão primário
   * @description Texto que aparece no botão de ação principal
   */
  primaryButtonText: string;
  /**
   * @title URL do botão primário
   * @description Link para onde o botão primário deve direcionar
   */
  primaryButtonHref: string;
  /**
   * @title Tipo do botão secundário
   * @description Escolha se o botão secundário é para copiar texto ou navegar para um link
   */
  secondaryButtonType: "copy" | "link";
  /**
   * @title Texto do botão secundário
   * @description Texto que aparece no botão secundário
   */
  secondaryButtonText: string;
  /**
   * @title Texto para copiar
   * @description Texto que será copiado quando o botão for clicado (apenas se tipo for 'copy')
   */
  secondaryButtonCopyText?: string;
  /**
   * @title URL do botão secundário
   * @description Link para onde o botão secundário deve direcionar (apenas se tipo for 'link')
   */
  secondaryButtonHref?: string;
  /**
   * @title Ícones de integração
   * @description Lista de ícones que aparecem flutuando ao redor do círculo
   * @maxItems 6
   */
  integrationIcons: IntegrationIcon[];
  /**
   * @title Cards de funcionalidades
   * @description Lista de cards que aparecem sobre o círculo
   * @maxItems 4
   */
  featureCards: FeatureCard[];
  /**
   * @title Título da plataforma unificada
   * @description Título da seção da plataforma unificada
   */
  unifiedPlatformTitle: string;
  /**
   * @title Descrição da plataforma unificada
   * @description Descrição da seção da plataforma unificada
   */
  unifiedPlatformDescription: string;
  /**
   * @title Ícone da plataforma unificada
   * @description Ícone da seção da plataforma unificada
   */
  unifiedPlatformIcon: ImageWidget;
}

export default function NewHomeHero({
  announcementText = defaultProps.announcementText,
  announcementHref = defaultProps.announcementHref,
  title = defaultProps.title,
  italicSubtitle = defaultProps.italicSubtitle,
  subtitle = defaultProps.subtitle,
  primaryButtonText = defaultProps.primaryButtonText,
  primaryButtonHref = defaultProps.primaryButtonHref,
  secondaryButtonType = defaultProps.secondaryButtonType,
  secondaryButtonText = defaultProps.secondaryButtonText,
  secondaryButtonCopyText = defaultProps.secondaryButtonCopyText,
  secondaryButtonHref = defaultProps.secondaryButtonHref,
  integrationIcons = defaultProps.integrationIcons,
  featureCards = defaultProps.featureCards,
  unifiedPlatformTitle = defaultProps.unifiedPlatformTitle,
  unifiedPlatformDescription = defaultProps.unifiedPlatformDescription,
  unifiedPlatformIcon = defaultProps.unifiedPlatformIcon,
}: Props) {
  const sectionId = `new-home-hero-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section class="w-full bg-dc-50 p-2 pb-0 pt-20 sm:pt-24 lg:pt-2">
      <div
        id={sectionId}
        class="w-full bg-dc-50 rounded-3xl relative overflow-hidden"
      >
        <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-10 lg:py-24 flex flex-col items-center gap-12">
          {/* Header Content */}
          <div class="w-full max-w-[850px] flex flex-col items-center gap-10">
            <div class="flex flex-col items-center gap-4 text-center">
              {/* Announcement Banner */}
              <AnnouncementBanner
                text={announcementText}
                href={announcementHref}
                openInNewTab={true}
              />

              {/* Title and Subtitles */}
              <div class="flex flex-col items-center gap-8 md:gap-14 text-center">
                <h1 class="text-dc-800 text-5xl md:text-6xl xl:text-[5.5rem] font-medium leading-tightest tracking-tight whitespace-pre-line">
                  {title}
                </h1>

                <div class="flex flex-col items-center gap-2 text-center">
                  {/* Italic Subtitle */}
                  <p class="text-dc-800 text-xl md:text-2xl font-normal italic leading-normal font-instrument-serif">
                    {italicSubtitle}
                  </p>

                  {/* Main Subtitle */}
                  <p class="text-dc-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div class="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <Button
                href={primaryButtonHref}
                variant="primary"
                size="medium"
                className="w-full sm:w-auto h-12 rounded-xl"
              >
                {primaryButtonText}
              </Button>

              {/* Secondary Button - Dynamic based on type */}
              {secondaryButtonType === "copy"
                ? (
                  <button
                    class="w-full sm:w-auto h-12 px-4 py-2 bg-dc-100 rounded-xl flex items-center justify-center gap-2 hover:bg-dc-200 transition-colors duration-200 cli-copy-button"
                    data-command={secondaryButtonCopyText}
                  >
                    <span class="text-dc-800 text-base font-medium font-mono leading-tight">
                      {secondaryButtonText}
                    </span>
                    <span class="copy-feedback text-dc-600 text-xs font-normal font-mono ml-2 hidden">
                      copied!
                    </span>
                  </button>
                )
                : (
                  <a
                    href={secondaryButtonHref}
                    class="w-full sm:w-auto h-12 px-4 py-2 bg-dc-100 rounded-xl flex items-center justify-center gap-2 hover:bg-dc-200 transition-colors duration-200"
                  >
                    <span class="text-dc-800 text-base font-medium font-mono leading-tight">
                      {secondaryButtonText}
                    </span>
                  </a>
                )}
            </div>
          </div>

          {/* Central Visual with Circles and Icons */}
          <div class="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-visible border border-dc-200 rounded-2xl sm:border-none sm:rounded-none">
            {/* Main Circle with Dithering Animation */}
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[25%] sm:translate-y-[35%] md:translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] z-10">
              <div
                id={`circle-container-${sectionId}`}
                class="relative w-full h-full rounded-full overflow-hidden shadow-[0px_0px_90px_10px_rgba(208,236,26,0.30)] shadow-[inset_0px_2px_80px_20px_rgba(0,0,0,0.10)] outline outline-[3px] sm:outline-[4px] md:outline-[5px] outline-offset-[-1.5px] sm:outline-offset-[-2px] md:outline-offset-[-2.5px] outline-dc-50"
                style={{ backgroundColor: "#d0ec1a" }}
              >
                <canvas
                  id={`dither-canvas-${sectionId}`}
                  class="absolute inset-0 w-full h-full cursor-none"
                  style={{ imageRendering: "pixelated" }}
                >
                </canvas>
              </div>
            </div>

            {/* Concentric Rings */}
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[25%] sm:translate-y-[35%] md:translate-y-1/2 w-[405px] h-[405px] sm:w-[485px] sm:h-[485px] md:w-[650px] md:h-[650px] lg:w-[850px] lg:h-[850px] xl:w-[1050px] xl:h-[1050px] opacity-30 rounded-full outline outline-[3.25px] sm:outline-[4.25px] md:outline-[5.25px] outline-offset-[-1.62px] sm:outline-offset-[-2.12px] md:outline-offset-[-2.62px] outline-primary-light pointer-events-none">
            </div>
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[25%] sm:translate-y-[35%] md:translate-y-1/2 w-[430px] h-[430px] sm:w-[510px] sm:h-[510px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] opacity-20 rounded-full outline outline-[3.51px] sm:outline-[4.51px] md:outline-[5.51px] outline-offset-[-1.76px] sm:outline-offset-[-2.26px] md:outline-offset-[-2.76px] outline-primary-light pointer-events-none">
            </div>
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[25%] sm:translate-y-[35%] md:translate-y-1/2 w-[455px] h-[455px] sm:w-[535px] sm:h-[535px] md:w-[750px] md:h-[750px] lg:w-[950px] lg:h-[950px] xl:w-[1150px] xl:h-[1150px] opacity-10 rounded-full outline outline-[3.79px] sm:outline-[4.79px] md:outline-[5.79px] outline-offset-[-1.89px] sm:outline-offset-[-2.39px] md:outline-offset-[-2.89px] outline-primary-light pointer-events-none">
            </div>
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[25%] sm:translate-y-[35%] md:translate-y-1/2 w-[480px] h-[480px] sm:w-[560px] sm:h-[560px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] xl:w-[1200px] xl:h-[1200px] opacity-5 rounded-full outline outline-[4.08px] sm:outline-[5.08px] md:outline-[6.08px] outline-offset-[-2.04px] sm:outline-offset-[-2.54px] md:outline-offset-[-3.04px] outline-primary-light pointer-events-none">
            </div>

            {/* Feature Cards Overlay */}
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[90vw] sm:max-w-none sm:w-auto">
              <div class="bg-stone-50/95 rounded-lg sm:rounded-2xl outline outline-2 sm:outline-4 outline-white/50 backdrop-blur-sm flex flex-col overflow-hidden">
                {/* Top Three Cards */}
                <div class="border-b border-dc-200 flex flex-col sm:flex-row">
                  {featureCards.slice(0, 3).map((card, index) => (
                    <>
                      <div class="w-full sm:w-48 md:w-56 lg:w-64 p-3 sm:p-4 md:p-6 flex flex-col gap-2">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={40}
                          height={40}
                          class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                          loading="lazy"
                        />
                        <div class="flex flex-col gap-1">
                          <h3 class="text-dc-800 text-base sm:text-lg font-medium leading-snug">
                            {card.title}
                          </h3>
                          <p class="text-dc-500 text-sm sm:text-base font-normal leading-normal">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      {index < 2 && (
                        <>
                          {/* Horizontal divider for mobile */}
                          <div class="w-full h-0 border-b border-dc-200 sm:hidden">
                          </div>
                          {/* Vertical divider for desktop */}
                          <div class="hidden sm:block w-0 self-stretch border-l border-dc-200">
                          </div>
                        </>
                      )}
                    </>
                  ))}
                </div>

                {/* Bottom Unified Platform Card */}
                <div class="p-3 sm:p-4 md:p-6 flex flex-col gap-2 w-full">
                  <Image
                    src={unifiedPlatformIcon}
                    alt={unifiedPlatformTitle}
                    width={40}
                    height={40}
                    class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    loading="lazy"
                  />
                  <div class="flex flex-col gap-1">
                    <h3 class="text-dc-800 text-base sm:text-lg font-medium leading-snug">
                      {unifiedPlatformTitle}
                    </h3>
                    <p class="text-dc-500 text-sm sm:text-base font-normal leading-normal">
                      {unifiedPlatformDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Icons */}
            {integrationIcons.map((icon, index) => {
              const sizeClasses = {
                small: "w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9",
                medium:
                  "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
                large:
                  "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
              };

              const iconSizeClasses = {
                small: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6",
                medium: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-11 lg:h-11",
                large: "w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16",
              };

              const size = icon.size || "medium";

              // Some icons behind the circle (z-5), others in front (z-20)
              const zIndex = (icon.positionY > 60 ||
                  (icon.positionX < 20 && icon.positionY > 50))
                ? "z-5"
                : "z-20";

              // Reduce opacity on smaller screens to avoid visual clutter
              const opacityClass = "opacity-60 sm:opacity-80 md:opacity-100";

              return (
                <div
                  key={index}
                  class={`absolute ${
                    sizeClasses[size]
                  } ${zIndex} ${opacityClass} transform -translate-x-1/2 -translate-y-1/2 animate-float-${
                    index % 3
                  }`}
                  style={{
                    left: `${icon.positionX}%`,
                    top: `${icon.positionY}%`,
                    transform: `translate(-50%, -50%) rotate(${
                      icon.rotation || 0
                    }deg)`,
                  }}
                >
                  <div class="w-full h-full bg-white rounded-lg sm:rounded-xl md:rounded-2xl outline outline-1 md:outline-2 outline-offset-[-1px] md:outline-offset-[-2px] outline-dc-100 flex items-center justify-center overflow-hidden shadow-sm md:shadow-md">
                    <Image
                      src={icon.image}
                      alt={icon.title}
                      width={64}
                      height={64}
                      class={`${iconSizeClasses[size]} object-contain`}
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>
          {`
          @keyframes float-0 {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateY(0px); }
            50% { transform: translate(-50%, -50%) rotate(5deg) translateY(-15px); }
          }
          @keyframes float-1 {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateY(0px); }
            50% { transform: translate(-50%, -50%) rotate(-3deg) translateY(12px); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateY(0px); }
            50% { transform: translate(-50%, -50%) rotate(8deg) translateY(-8px); }
          }
          
          .animate-float-0 {
            animation: float-0 6s ease-in-out infinite;
          }
          .animate-float-1 {
            animation: float-1 7s ease-in-out infinite;
            animation-delay: -2s;
          }
          .animate-float-2 {
            animation: float-2 8s ease-in-out infinite;
            animation-delay: -4s;
          }
        `}
        </style>

        {/* Dithering Animation Script */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: useScript((sectionId: string) => {
              const canvas = document.getElementById(
                `dither-canvas-${sectionId}`,
              ) as HTMLCanvasElement;
              const container = document.getElementById(
                `circle-container-${sectionId}`,
              );

              if (!canvas || !container) return;

              const ctx = canvas.getContext("2d");
              if (!ctx) return;

              let animationRef: number;
              let mousePos = { x: 0, y: 0 };
              let isHovering = false;

              // Set canvas size to match container
              const resizeCanvas = () => {
                const rect = container.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
              };

              resizeCanvas();
              window.addEventListener("resize", resizeCanvas);

              // Mouse tracking
              const handleMouseMove = (e: MouseEvent) => {
                const rect = canvas.getBoundingClientRect();
                mousePos = {
                  x: (e.clientX - rect.left) / rect.width,
                  y: (e.clientY - rect.top) / rect.height,
                };
              };

              const handleMouseEnter = () => {
                isHovering = true;
              };
              const handleMouseLeave = () => {
                isHovering = false;
              };

              canvas.addEventListener("mousemove", handleMouseMove);
              canvas.addEventListener("mouseenter", handleMouseEnter);
              canvas.addEventListener("mouseleave", handleMouseLeave);

              // Bayer matrix 8x8 for sophisticated dithering
              const bayerMatrix8x8 = [
                [0, 32, 8, 40, 2, 34, 10, 42],
                [48, 16, 56, 24, 50, 18, 58, 26],
                [12, 44, 4, 36, 14, 46, 6, 38],
                [60, 28, 52, 20, 62, 30, 54, 22],
                [3, 35, 11, 43, 1, 33, 9, 41],
                [51, 19, 59, 27, 49, 17, 57, 25],
                [15, 47, 7, 39, 13, 45, 5, 37],
                [63, 31, 55, 23, 61, 29, 53, 21],
              ];

              let time = 0;
              const cellSize = 2;

              const animate = () => {
                if (canvas.width === 0 || canvas.height === 0) return;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Create noise texture for dithering base
                const imageData = ctx.createImageData(
                  canvas.width,
                  canvas.height,
                );
                const data = imageData.data;

                for (let y = 0; y < canvas.height; y += cellSize) {
                  for (let x = 0; x < canvas.width; x += cellSize) {
                    // Normalized coordinates
                    const nx = x / canvas.width;
                    const ny = y / canvas.height;

                    // Create flowing dither pattern from bottom
                    const baseIntensity = ny; // Start from bottom (0 at top, 1 at bottom)

                    // Add flowing waves that emanate from bottom
                    const wave1 =
                      Math.sin(nx * 8 + (1 - ny) * 10 + time * 0.0003) * 0.3;
                    const wave2 =
                      Math.cos(nx * 6 + (1 - ny) * 8 + time * 0.0002) * 0.2;
                    const wave3 =
                      Math.sin((nx + (1 - ny)) * 4 + time * 0.0001) * 0.15;

                    // Create ripple effect from bottom center
                    const centerX = 0.5;
                    const bottomY = 1.0;
                    const distanceFromBottom = Math.sqrt(
                      Math.pow(nx - centerX, 2) + Math.pow(ny - bottomY, 2),
                    );
                    const ripple =
                      Math.sin(distanceFromBottom * 15 - time * 0.0004) * 0.2;

                    // Add mouse interaction
                    let mouseInfluence = 1;
                    if (isHovering) {
                      const dx = nx - mousePos.x;
                      const dy = ny - mousePos.y;
                      const distance = Math.sqrt(dx * dx + dy * dy);
                      mouseInfluence = 1 + Math.exp(-distance * 8) * 0.3;
                    }

                    // Combine all effects
                    let intensity = baseIntensity + wave1 + wave2 + wave3 +
                      ripple;

                    // Add mouse influence
                    intensity = intensity * mouseInfluence;

                    // Clamp intensity to 0-1 range
                    intensity = Math.max(0, Math.min(1, intensity));

                    // Get Bayer matrix threshold
                    const matrixX = Math.floor(x / cellSize) % 8;
                    const matrixY = Math.floor(y / cellSize) % 8;
                    const threshold = bayerMatrix8x8[matrixY][matrixX] / 64;

                    // Apply dithering with design system colors
                    const ditherResult = intensity > threshold;
                    const r = ditherResult ? 0x07 : 0xd0; // primary-dark : primary-light
                    const g = ditherResult ? 0x40 : 0xec;
                    const b = ditherResult ? 0x1a : 0x1a;

                    // Apply to pixel grid
                    for (
                      let dy = 0;
                      dy < cellSize && y + dy < canvas.height;
                      dy++
                    ) {
                      for (
                        let dx = 0;
                        dx < cellSize && x + dx < canvas.width;
                        dx++
                      ) {
                        const pixelIndex =
                          ((y + dy) * canvas.width + (x + dx)) * 4;
                        data[pixelIndex] = r; // Red
                        data[pixelIndex + 1] = g; // Green
                        data[pixelIndex + 2] = b; // Blue
                        data[pixelIndex + 3] = 255; // Alpha
                      }
                    }
                  }
                }

                ctx.putImageData(imageData, 0, 0);

                time += 16;
                animationRef = requestAnimationFrame(animate);
              };

              // Start animation
              animate();

              // Cleanup on page unload
              const cleanup = () => {
                window.removeEventListener("resize", resizeCanvas);
                canvas.removeEventListener("mousemove", handleMouseMove);
                canvas.removeEventListener("mouseenter", handleMouseEnter);
                canvas.removeEventListener("mouseleave", handleMouseLeave);
                if (animationRef) {
                  cancelAnimationFrame(animationRef);
                }
              };

              window.addEventListener("beforeunload", cleanup);

              return cleanup;
            }, sectionId),
          }}
        />

        {/* CLI Copy Script */}
        {secondaryButtonType === "copy" && (
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: useScript((sectionId: string) => {
                // Setup CLI copy functionality
                const setupCliCopy = () => {
                  const cliButtons = document.querySelectorAll(
                    `#${sectionId} .cli-copy-button`,
                  );

                  cliButtons.forEach((button) => {
                    const buttonElement = button as HTMLElement;
                    const command = buttonElement.dataset.command;

                    buttonElement.addEventListener("click", async () => {
                      if (command) {
                        try {
                          await navigator.clipboard.writeText(command);

                          // Show feedback
                          const feedbackText = buttonElement.querySelector(
                            ".copy-feedback",
                          );
                          if (feedbackText) {
                            feedbackText.classList.remove("hidden");
                            setTimeout(() => {
                              feedbackText.classList.add("hidden");
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
                          if (feedbackText) {
                            feedbackText.classList.remove("hidden");
                            setTimeout(() => {
                              feedbackText.classList.add("hidden");
                            }, 2000);
                          }
                        }
                      }
                    });
                  });
                };

                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", setupCliCopy);
                } else {
                  setupCliCopy();
                }
              }, sectionId),
            }}
          />
        )}
      </div>
    </section>
  );
}

const defaultProps: Props = {
  announcementText: "Vibecode high-performance storefronts: deco.cx",
  announcementHref: "https://deco.cx",
  title: "Vibecode your\nAgentic Workforce",
  italicSubtitle: "Full-typescript, no Python allowed",
  subtitle:
    "Build and launch agents, set up workflows, and connect to any tool. Become the kind of engineer everyone's looking for.",
  primaryButtonText: "Start now",
  primaryButtonHref: "#get-started",
  secondaryButtonType: "copy",
  secondaryButtonText: "deno -A jsr:@deco/cli create",
  secondaryButtonCopyText: "deno -A jsr:@deco/cli create",
  integrationIcons: [
    {
      title: "Google Drive",
      image:
        "https://assets.decocache.com/decochatweb/14108bc0-7b5c-4b64-ac7e-ec07cc836801/drive.svg",
      positionX: 5,
      positionY: 70,
      rotation: -15,
      size: "large",
    },
    {
      title: "AI Assistant",
      image:
        "https://assets.decocache.com/decochatweb/90e6f9bf-b27d-47e5-b43e-6c61640ec777/smart_toy.svg",
      positionX: 25,
      positionY: 15,
      rotation: -15,
      size: "medium",
    },
    {
      title: "Slack",
      image:
        "https://assets.decocache.com/decochatweb/83a9769d-e67f-4166-90c8-3a51475efc41/slack.svg",
      positionX: 95,
      positionY: 75,
      rotation: 30,
      size: "large",
    },
    {
      title: "WhatsApp",
      image:
        "https://assets.decocache.com/decochatweb/6a63040b-e08f-40b2-8243-7aaf21280844/whatsapp.svg",
      positionX: 90,
      positionY: 20,
      rotation: 15,
      size: "large",
    },
    {
      title: "Jira",
      image:
        "https://assets.decocache.com/decochatweb/07456829-aa1f-4661-ab67-5d2bbbd42616/jira.svg",
      positionX: 2,
      positionY: 5,
      rotation: -15,
      size: "small",
    },
  ],
  featureCards: [
    {
      title: "AI Chat",
      description: "All company tools and knowledge",
      icon: "https://via.placeholder.com/40x40?text=Chat",
    },
    {
      title: "AI Agents",
      description: "Autonomous workers with total context",
      icon: "https://via.placeholder.com/40x40?text=Agents",
    },
    {
      title: "Workflows & Views",
      description: "Web-native deterministic flows and UIs",
      icon: "https://via.placeholder.com/40x40?text=Flows",
    },
  ],
  unifiedPlatformTitle: "Unified MCP Platform",
  unifiedPlatformDescription:
    "Centralize integrations, monitor and control, cost and logs",
  unifiedPlatformIcon: "https://via.placeholder.com/40x40?text=MCP",
};

export function Preview() {
  return <NewHomeHero {...defaultProps} />;
}
