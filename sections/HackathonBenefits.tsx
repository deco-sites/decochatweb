import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy title
 */
interface Benefit {
  /**
   * @title Título do benefício
   * @description Nome do benefício
   */
  title: string;
  /**
   * @title Nome do ícone
   * @description Nome do ícone Material Design
   */
  iconName: string;
}

interface Props {
  /**
   * @title Título principal
   * @description Título principal da seção
   */
  title: string;
  /**
   * @title Benefícios
   * @description Lista dos benefícios para os participantes
   * @maxItems 6
   */
  benefits: Benefit[];
}

export default function HackathonBenefits({
  title = defaultProps.title,
  benefits = defaultProps.benefits,
}: Props) {
  const sectionId = `benefits-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div class="w-full px-4 md:px-16 py-16 md:py-32 bg-stone-50 flex flex-col justify-start items-center gap-14">
      <div class="w-full max-w-[1580px] flex flex-col gap-6">
        {/* Top Row - Title (2 spaces) + 2 cards */}
        <div class="w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Title taking 2 grid spaces */}
          <div class="lg:col-span-2 flex items-center">
            <FadeUp>
              <h2 class="text-dc-800 text-4xl md:text-6xl font-black font-main leading-tight uppercase">
                {title}
              </h2>
            </FadeUp>
          </div>

          {/* First 2 benefit cards */}
          {benefits.slice(0, 2).map((benefit, index) => (
            <FadeUp delay={200 + (index * 100)}>
              <div class="group relative w-full h-[315px] p-12 bg-primary-dark rounded-[32px] flex flex-col justify-between items-start benefit-card overflow-hidden cursor-pointer transition-all duration-300">
                {/* ASCII Art Background */}
                <div
                  class="ascii-canvas absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  data-card-index={index}
                >
                </div>

                {/* Icon */}
                <div class="w-8 h-8 relative overflow-hidden z-20">
                  <Icon
                    name={benefit.iconName}
                    size="xxl"
                    class="text-primary-light"
                  />
                </div>

                {/* Title */}
                <div class="w-full flex flex-col justify-start items-start gap-3 relative z-20">
                  <div class="w-full text-primary-light text-2xl md:text-3xl font-semibold font-main leading-loose">
                    {benefit.title}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom Row - 4 cards */}
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id={sectionId}
        >
          {benefits.slice(2).map((benefit, index) => (
            <FadeUp delay={400 + (index * 100)}>
              <div class="group relative w-full h-[315px] p-12 bg-primary-dark rounded-[32px] flex flex-col justify-between items-start benefit-card overflow-hidden cursor-pointer transition-all duration-300">
                {/* ASCII Art Background */}
                <div
                  class="ascii-canvas absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  data-card-index={index + 2}
                >
                </div>

                {/* Icon */}
                <div class="w-8 h-8 relative overflow-hidden z-20">
                  <Icon
                    name={benefit.iconName}
                    size="xxl"
                    class="text-primary-light"
                  />
                </div>

                {/* Title */}
                <div class="w-full flex flex-col justify-start items-start gap-3 relative z-20">
                  <div class="w-full text-primary-light text-2xl md:text-3xl font-semibold font-main leading-loose">
                    {benefit.title}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ASCII Animation Script */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((sectionId: string) => {
            const CHARS = "⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏";
            const cardAnimations = new Map();

            function initializeBenefitsAnimation() {
              let animationsStarted = false;

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

                let GRID_WIDTH = 15;
                let GRID_HEIGHT = 12;
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
                    x: GRID_WIDTH * (0.3 + Math.random() * 0.4),
                    y: GRID_HEIGHT * (0.3 + Math.random() * 0.4),
                    frequency: 0.2 + Math.random() * 0.2,
                    amplitude: 0.3 + Math.random() * 0.3,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.3 + Math.random() * 0.3,
                  });
                }

                function animate() {
                  time += 0.015;

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
                        const falloff = 1 / (1 + dist * 0.2);
                        const value = Math.sin(
                          dist * wave.frequency - time * wave.speed +
                            wave.phase,
                        ) * wave.amplitude * falloff;
                        totalWave += value;
                      });

                      if (Math.abs(totalWave) > 0.1) {
                        const normalizedWave = (totalWave + 1) / 2;
                        const charIndex = Math.floor(
                          normalizedWave * (CHARS.length - 1),
                        );
                        const opacity = Math.min(
                          0.4,
                          Math.max(0.15, 0.15 + (normalizedWave * 0.25)),
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
                const benefitCards = document.querySelectorAll(".benefit-card");
                const isMobile = window.innerWidth < 640;

                benefitCards.forEach((card, index) => {
                  const asciiCanvas = card.querySelector(".ascii-canvas");

                  // Only add hover animations on desktop
                  if (!isMobile && asciiCanvas) {
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
                      }
                    });

                    card.addEventListener("mouseleave", () => {
                      if (animationsStarted) {
                        // Stop ASCII animation
                        const animation = cardAnimations.get(index);
                        if (animation) {
                          animation.stop();
                        }
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
            }

            // Initialize when DOM is ready
            if (document.readyState === "loading") {
              document.addEventListener(
                "DOMContentLoaded",
                initializeBenefitsAnimation,
              );
            } else {
              initializeBenefitsAnimation();
            }
          }, sectionId),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  title: "BENEFÍCIOS EXCLUSIVOS",
  benefits: [
    {
      title: 'Badge oficial "Certified Agent Builder"',
      iconName: "verified",
    },
    {
      title: "Mentoria da equipe deco.chat",
      iconName: "group",
    },
    {
      title: "Divulgação oficial",
      iconName: "campaign",
    },
    {
      title: "Acesso exclusivo",
      iconName: "lock_open",
    },
    {
      title: "Networking tech-first",
      iconName: "connect_without_contact",
    },
    {
      title: "Oportunidades de carreira",
      iconName: "work",
    },
  ],
};

export function Preview() {
  return <HackathonBenefits {...defaultProps} />;
}
