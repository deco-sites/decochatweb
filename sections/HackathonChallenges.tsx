import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import { useScript } from "@deco/deco/hooks";

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
   * @description Descrição do que o agente deve fazer (aparece no hover)
   */
  description: string;
  /**
   * @title Nome do ícone
   * @description Nome do ícone Material Design
   */
  iconName: string;
  /**
   * @title Sugestões de implementação
   * @description Lista de sugestões para implementar o agente
   * @maxItems 4
   */
  suggestions: string[];
}

interface Props {
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
   * @title Texto do botão
   * @description Texto que aparece no botão de call-to-action
   */
  ctaText: string;
  /**
   * @title Link do botão
   * @description URL para onde o botão deve redirecionar
   */
  ctaLink: string;
  /**
   * @title Desafios disponíveis
   * @description Lista das categorias de desafio (máx 4)
   * @maxItems 4
   */
  challenges: Challenge[];
}

export default function HackathonChallenges({
  title = defaultProps.title,
  description = defaultProps.description,
  ctaText = defaultProps.ctaText,
  ctaLink = defaultProps.ctaLink,
  challenges = defaultProps.challenges,
}: Props) {
  const sectionId = `challenges-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div class="w-full p-2 bg-dc-50 flex flex-col justify-start items-start gap-2.5">
      <div class="w-full px-4 md:px-16 py-16 md:py-32 bg-primary-light rounded-2xl flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 overflow-hidden">
        <div class="max-w-[1580px] w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
          {/* Left Side - Content */}
          <div class="w-full lg:w-auto flex flex-col justify-center items-start gap-10">
            <FadeUp>
              <h2 class="text-primary-dark text-4xl md:text-6xl font-black font-main leading-tight">
                CATEGORIAS<br />DE DESAFIO
              </h2>
            </FadeUp>

            <FadeUp delay={200}>
              <p class="text-primary-dark text-xl md:text-3xl font-semibold font-main leading-relaxed max-w-lg">
                {description}
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div class="w-full h-px bg-primary-dark"></div>
            </FadeUp>

            <FadeUp delay={400}>
              <a
                href={ctaLink}
                class="px-5 py-3 bg-primary-dark rounded-xl border border-neutral-900/20 flex justify-center items-center gap-2 hover:bg-primary-dark/90 transition-colors"
              >
                <span class="text-primary-light text-lg font-semibold font-main leading-tight">
                  {ctaText}
                </span>
              </a>
            </FadeUp>
          </div>

          {/* Right Side - Challenge Cards Grid */}
          <div
            class="flex-1 w-full flex flex-col justify-start items-start gap-6"
            id={sectionId}
          >
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <FadeUp delay={500 + index * 100}>
                  <div class="group relative w-full h-[28rem] p-6 md:p-10 bg-primary-dark rounded-xl flex flex-col justify-start items-start gap-6 md:gap-14 overflow-hidden cursor-pointer transition-all duration-300 challenge-card">
                    {/* ASCII Art Background */}
                    <div
                      class="ascii-canvas absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      data-card-index={index}
                    >
                    </div>

                    {/* Header */}
                    <div class="w-full flex flex-col justify-start items-start gap-6 relative z-20">
                      <div class="w-full flex justify-start items-center">
                        <Icon
                          name={challenge.iconName}
                          size="xxl"
                          class="text-primary-light"
                        />
                      </div>

                      <div class="w-full flex flex-col justify-start items-start gap-2.5">
                        <h3 class="text-primary-light text-xl md:text-2xl font-bold font-main leading-7">
                          {challenge.title}
                        </h3>

                        {/* Description that slides down on hover (desktop) or shows always (mobile) */}
                        <div class="description-content opacity-100 sm:opacity-0 max-h-20 sm:max-h-0 overflow-hidden transition-all duration-500 ease-out sm:group-hover:opacity-100 sm:group-hover:max-h-20">
                          <p class="text-dc-100 text-base md:text-lg font-medium font-main leading-relaxed">
                            {challenge.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Suggestions Interface */}
                    <div class="w-full flex-1 p-6 pb-32 bg-dc-50 rounded-3xl border border-dc-300 flex flex-col justify-start items-center gap-6 suggestions-interface relative z-20">
                      {/* Header */}
                      <div class="w-full flex justify-start items-center gap-2.5">
                        <span class="text-dc-300 text-base font-medium font-main leading-normal">
                          Sugestões
                        </span>
                        <div class="flex-1 h-px border-t border-dc-300"></div>
                      </div>

                      {/* Suggestions List */}
                      <div class="w-full flex flex-col justify-start items-start gap-1">
                        <div class="w-full flex flex-col justify-end items-start gap-2.5">
                          {challenge.suggestions.map((suggestion, idx) => (
                            <div class="w-full flex justify-start items-center gap-2.5">
                              <div class="w-3 h-3 bg-primary-light rounded-full flex-shrink-0">
                              </div>
                              <span class="flex-1 text-dc-500 text-base font-medium font-main leading-normal">
                                {suggestion}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GSAP Animation Script */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        defer
      />
      <script
        dangerouslySetInnerHTML={{
          __html: useScript((sectionId: string) => {
            const CHARS = "⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏";
            const cardAnimations = new Map();

            function initializeGSAP() {
              if (typeof (globalThis as any).gsap !== "undefined") {
                let animationsStarted = false;
                const gsapLib = (globalThis as any).gsap;

                // Setup viewport observer
                const section = document.getElementById(sectionId);
                if (section) {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting && !animationsStarted) {
                          animationsStarted = true;
                          setupHoverAnimations();
                          observer.unobserve(entry.target);
                        }
                      });
                    },
                    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
                  );
                  observer.observe(section);
                }

                function createAsciiAnimation(container, cardIndex) {
                  if (!container) return null;

                  const canvas = document.createElement("canvas");
                  const ctx = canvas.getContext("2d");
                  if (!ctx) return null;

                  canvas.style.position = "absolute";
                  canvas.style.top = "0";
                  canvas.style.left = "0";
                  canvas.style.width = "100%";
                  canvas.style.height = "100%";

                  container.appendChild(canvas);

                  let GRID_WIDTH = 20;
                  let GRID_HEIGHT = 15;
                  let animationId = null;
                  let time = 0;

                  function updateCanvasSize() {
                    const rect = container.getBoundingClientRect();
                    const dpr = window.devicePixelRatio || 1;

                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;

                    GRID_WIDTH = Math.floor(rect.width / 25);
                    GRID_HEIGHT = Math.floor(rect.height / 30);

                    ctx.scale(dpr, dpr);
                    ctx.font = "12px monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                  }

                  updateCanvasSize();

                  const waves = [];
                  for (let i = 0; i < 2; i++) {
                    waves.push({
                      x: GRID_WIDTH * (0.2 + Math.random() * 0.6),
                      y: GRID_HEIGHT * (0.2 + Math.random() * 0.6),
                      frequency: 0.15 + Math.random() * 0.2,
                      amplitude: 0.4 + Math.random() * 0.4,
                      phase: Math.random() * Math.PI * 2,
                      speed: 0.4 + Math.random() * 0.4,
                    });
                  }

                  function animate() {
                    time += 0.02;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    const rect = container.getBoundingClientRect();
                    const cellWidth = rect.width / GRID_WIDTH;
                    const cellHeight = rect.height / GRID_HEIGHT;

                    for (let y = 0; y < GRID_HEIGHT; y++) {
                      for (let x = 0; x < GRID_WIDTH; x++) {
                        let totalWave = 0;
                        waves.forEach((wave) => {
                          const dx = x - wave.x;
                          const dy = y - wave.y;
                          const dist = Math.sqrt(dx * dx + dy * dy);
                          const falloff = 1 / (1 + dist * 0.15);
                          const value = Math.sin(
                            dist * wave.frequency - time * wave.speed +
                              wave.phase,
                          ) * wave.amplitude * falloff;
                          totalWave += value;
                        });

                        if (Math.abs(totalWave) > 0.15) {
                          const normalizedWave = (totalWave + 1) / 2;
                          const charIndex = Math.floor(
                            normalizedWave * (CHARS.length - 1),
                          );
                          const opacity = Math.min(
                            0.6,
                            Math.max(0.2, 0.2 + (normalizedWave * 0.4)),
                          );

                          ctx.fillStyle = `rgba(208, 236, 26, ${opacity})`;
                          ctx.fillText(
                            CHARS[charIndex] || CHARS[0],
                            x * cellWidth + cellWidth / 2,
                            y * cellHeight + cellHeight / 2,
                          );
                        }
                      }
                    }

                    animationId = requestAnimationFrame(animate);
                  }

                  return {
                    start: () => {
                      if (!animationId) {
                        animate();
                      }
                    },
                    stop: () => {
                      if (animationId) {
                        cancelAnimationFrame(animationId);
                        animationId = null;
                      }
                    },
                    cleanup: () => {
                      if (animationId) {
                        cancelAnimationFrame(animationId);
                        animationId = null;
                      }
                      if (canvas && canvas.parentNode) {
                        canvas.parentNode.removeChild(canvas);
                      }
                    },
                  };
                }

                function setupHoverAnimations() {
                  const challengeCards = document.querySelectorAll(
                    ".challenge-card",
                  );
                  const isMobile = window.innerWidth < 640;

                  challengeCards.forEach((card, index) => {
                    const suggestionsInterface = card.querySelector(
                      ".suggestions-interface",
                    );
                    const asciiCanvas = card.querySelector(".ascii-canvas");

                    // Only add hover animations on desktop
                    if (!isMobile) {
                      // Initialize ASCII animation for this card
                      const asciiAnimation = createAsciiAnimation(
                        asciiCanvas,
                        index,
                      );
                      if (asciiAnimation) {
                        cardAnimations.set(index, asciiAnimation);
                      }

                      card.addEventListener("mouseenter", () => {
                        if (animationsStarted) {
                          // Start ASCII animation
                          const animation = cardAnimations.get(index);
                          if (animation) {
                            animation.start();
                          }

                          // Suggestions interface moves down slightly
                          gsapLib.to(suggestionsInterface, {
                            duration: 0.5,
                            y: 20,
                            ease: "power2.out",
                          });
                        }
                      });

                      card.addEventListener("mouseleave", () => {
                        if (animationsStarted) {
                          // Stop ASCII animation
                          const animation = cardAnimations.get(index);
                          if (animation) {
                            animation.stop();
                          }

                          // Suggestions interface returns to position
                          gsapLib.to(suggestionsInterface, {
                            duration: 0.5,
                            y: 0,
                            ease: "power2.out",
                          });
                        }
                      });
                    }
                  });
                }

                // Cleanup on page unload
                window.addEventListener("beforeunload", () => {
                  cardAnimations.forEach((animation) => {
                    animation.cleanup();
                  });
                  cardAnimations.clear();
                });
              } else {
                setTimeout(initializeGSAP, 100);
              }
            }

            document.addEventListener("DOMContentLoaded", initializeGSAP);
          }, sectionId),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  title: "CATEGORIAS DE DESAFIO",
  description:
    "Escolha uma categoria e desenvolva agentes inteligentes que resolvem problemas reais",
  ctaText: "Inscrever minha equipe",
  ctaLink: "#register",
  challenges: [
    {
      title: "Agente de CMS Customizados",
      description:
        "Crie agentes que automatizam a criação e gestão de conteúdo personalizado",
      iconName: "edit",
      suggestions: [
        "Geração automática de posts",
        "Otimização de metadados",
        "Curadoria de conteúdo",
        "Templates inteligentes",
      ],
    },
    {
      title: "Agente de Onboarding",
      description: "Crie experiências de suporte e onboarding automatizadas",
      iconName: "school",
      suggestions: [
        "Guias interativos",
        "Suporte 24/7",
        "Tutoriais personalizados",
        "FAQ inteligente",
      ],
    },
    {
      title: "Agente de SEO + Analytics",
      description: "Desenvolva soluções inteligentes para otimização e análise",
      iconName: "analytics",
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
      suggestions: [
        "Recomendações personalizadas",
        "Chat de vendas",
        "Gestão de estoque",
        "Análise de comportamento",
      ],
    },
  ],
};

export function Preview() {
  return <HackathonChallenges {...defaultProps} />;
}
