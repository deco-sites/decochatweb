import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Button from "../components/ui/Button.tsx";
import { useScript } from "@deco/deco/hooks";

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
   * @title Logo
   * @description Logo que aparece acima do título principal
   */
  logo?: ImageWidget;
  /**
   * @title Título principal
   * @description Título principal do hackathon
   */
  title: string;
  /**
   * @title Subtítulo
   * @description Texto descritivo que aparece abaixo do título
   */
  subtitle: string;
  /**
   * @title Botões de ação
   * @description Lista de botões que aparecerão no hero
   * @maxItems 2
   */
  ctas: CTA[];
  /**
   * @title Data do evento
   * @description Data final para o countdown (formato: YYYY-MM-DDTHH:mm:ss)
   */
  eventDate: string;
}

export default function HackathonHero({
  logo = defaultProps.logo,
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  ctas = defaultProps.ctas,
  eventDate = defaultProps.eventDate,
}: Props) {
  const sectionId = `hackathon-hero-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div class="w-full bg-dc-50 h-screen flex flex-col">
      <div class="p-2 flex-1 flex flex-col">
        <div
          id={sectionId}
          class="w-full bg-primary-dark rounded-2xl overflow-hidden relative flex-1 flex flex-col justify-center items-center"
        >
          {/* ASCII Dots Background */}
          <div
            id={`ascii-canvas-${sectionId}`}
            class="absolute inset-0 z-10 pointer-events-none"
          >
          </div>

          <div class="relative z-30 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 flex flex-col justify-between items-center h-full text-center">
            {/* Empty spacer */}
            <div></div>

            {/* Centered Content */}
            <div class="flex flex-col justify-center items-center gap-12 md:gap-16">
              {/* Logo + Presents, Title, Subtitle */}
              <FadeUp delay={0}>
                <div class="flex flex-col justify-center items-center gap-6 md:gap-8 max-w-4xl">
                  {/* Logo + Presents */}
                  {logo && (
                    <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                      <img
                        src={logo}
                        alt="Logo"
                        class="h-6 sm:h-8 object-contain"
                      />
                    </div>
                  )}

                  <h1 class="text-center text-primary-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-black font-main uppercase leading-tight md:leading-[1.1] lg:leading-[100px] tracking-tight">
                    <div class="whitespace-nowrap">OS MELHORES</div>
                    <div class="whitespace-nowrap">AGENTS VENCEM!</div>
                  </h1>

                  <p class="text-center text-white opacity-80 text-lg md:text-xl lg:text-2xl font-normal font-main leading-relaxed max-w-4xl">
                    {subtitle}
                  </p>
                </div>
              </FadeUp>

              {/* CTAs */}
              <FadeUp delay={200}>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                  {ctas.map((cta) => (
                    <Button
                      href={cta.href}
                      variant={cta.variant}
                      size="large"
                      className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 ease-out"
                    >
                      {cta.text}
                    </Button>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Countdown - At Bottom */}
            <FadeUp delay={400}>
              <div
                id={`countdown-${sectionId}`}
                class="flex gap-4 md:gap-6 text-center"
              >
                <div class="flex flex-col items-center">
                  <span
                    id={`days-${sectionId}`}
                    class="text-2xl md:text-4xl font-bold text-primary-light font-main"
                  >
                    00
                  </span>
                  <span class="text-dc-300 text-xs md:text-sm font-medium mt-1">
                    DIAS
                  </span>
                </div>

                <div class="flex flex-col items-center">
                  <span
                    id={`hours-${sectionId}`}
                    class="text-2xl md:text-4xl font-bold text-primary-light font-main"
                  >
                    00
                  </span>
                  <span class="text-dc-300 text-xs md:text-sm font-medium mt-1">
                    HORAS
                  </span>
                </div>

                <div class="flex flex-col items-center">
                  <span
                    id={`minutes-${sectionId}`}
                    class="text-2xl md:text-4xl font-bold text-primary-light font-main"
                  >
                    00
                  </span>
                  <span class="text-dc-300 text-xs md:text-sm font-medium mt-1">
                    MIN
                  </span>
                </div>

                <div class="flex flex-col items-center">
                  <span
                    id={`seconds-${sectionId}`}
                    class="text-2xl md:text-4xl font-bold text-primary-light font-main"
                  >
                    00
                  </span>
                  <span class="text-dc-300 text-xs md:text-sm font-medium mt-1">
                    SEG
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Custom Styles and Animations */}
          <style jsx>
            {`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-3deg); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(12deg); }
          to { transform: rotate(-348deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-rotate-reverse {
          animation: rotate-reverse 15s linear infinite;
        }
      `}
          </style>

          {/* ASCII Animation Script */}
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: useScript((sectionId: string) => {
                const CHARS = "⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏";
                let GRID_WIDTH = 80;
                let GRID_HEIGHT = 40;

                interface Wave {
                  x: number;
                  y: number;
                  frequency: number;
                  amplitude: number;
                  phase: number;
                  speed: number;
                }

                function initAsciiAnimation() {
                  const container = document.getElementById(
                    `ascii-canvas-${sectionId}`,
                  );
                  if (!container) return;

                  const canvas = document.createElement("canvas");
                  const ctx = canvas.getContext("2d");
                  if (!ctx) return;

                  // Style the canvas to fill the container
                  canvas.style.position = "absolute";
                  canvas.style.top = "0";
                  canvas.style.left = "0";
                  canvas.style.width = "100%";
                  canvas.style.height = "100%";

                  container.appendChild(canvas);

                  // Set canvas resolution after it's in the DOM
                  function updateCanvasSize() {
                    if (!container || !ctx) return;
                    const rect = container.getBoundingClientRect();
                    const dpr = window.devicePixelRatio || 1;

                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;

                    // Calculate grid size based on canvas dimensions
                    GRID_WIDTH = Math.floor(rect.width / 20); // ~20px per cell
                    GRID_HEIGHT = Math.floor(rect.height / 20);

                    ctx.scale(dpr, dpr);
                    ctx.font = "14px monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                  }

                  // Initial size setup
                  updateCanvasSize();

                  const mouse = { x: 0, y: 0 };
                  const waves: Wave[] = [];
                  let time = 0;

                  // Initialize waves
                  for (let i = 0; i < 3; i++) {
                    waves.push({
                      x: GRID_WIDTH * (0.25 + Math.random() * 0.5),
                      y: GRID_HEIGHT * (0.25 + Math.random() * 0.5),
                      frequency: 0.2 + Math.random() * 0.3,
                      amplitude: 0.5 + Math.random() * 0.5,
                      phase: Math.random() * Math.PI * 2,
                      speed: 0.5 + Math.random() * 0.5,
                    });
                  }

                  function update(delta: number) {
                    time += delta * 0.75;
                    const newGrid = Array(GRID_HEIGHT).fill(0).map(() =>
                      Array(GRID_WIDTH).fill(null)
                    );

                    const mouseX = (mouse.x + 1) * GRID_WIDTH / 2;
                    const mouseY = (1 - mouse.y) * GRID_HEIGHT / 2;
                    const mouseWave: Wave = {
                      x: mouseX,
                      y: mouseY,
                      frequency: 0.3,
                      amplitude: 1,
                      phase: time * 2,
                      speed: 1,
                    };

                    // Function to check if position is in the title area (middle section)
                    function isInTitleArea(x: number, y: number): boolean {
                      const centerX = GRID_WIDTH / 2;
                      const centerY = GRID_HEIGHT / 2;

                      // Create an elliptical blank area in the center
                      const radiusX = GRID_WIDTH * 0.25; // 25% of width (less wide)
                      const radiusY = GRID_HEIGHT * 0.32; // 32% of height

                      const normalizedX = (x - centerX) / radiusX;
                      const normalizedY = (y - centerY) / radiusY;

                      return (normalizedX * normalizedX +
                        normalizedY * normalizedY) <= 1;
                    }

                    for (let y = 0; y < GRID_HEIGHT; y++) {
                      for (let x = 0; x < GRID_WIDTH; x++) {
                        // Skip drawing in the title area
                        if (isInTitleArea(x, y)) {
                          continue;
                        }

                        let totalWave = 0;
                        const allWaves = waves.concat([mouseWave]);
                        allWaves.forEach((wave) => {
                          const dx = x - wave.x;
                          const dy = y - wave.y;
                          const dist = Math.sqrt(dx * dx + dy * dy);
                          const falloff = 1 / (1 + dist * 0.1);
                          const value = Math.sin(
                            dist * wave.frequency - time * wave.speed +
                              wave.phase,
                          ) * wave.amplitude * falloff;
                          totalWave += value;
                        });

                        const normalizedWave = (totalWave + 2) / 4;
                        if (Math.abs(totalWave) > 0.2) {
                          const charIndex = Math.min(
                            CHARS.length - 1,
                            Math.max(
                              0,
                              Math.floor(normalizedWave * (CHARS.length - 1)),
                            ),
                          );
                          const opacity = Math.min(
                            0.9,
                            Math.max(0.3, 0.3 + (normalizedWave * 0.6)),
                          );
                          newGrid[y][x] = {
                            char: CHARS[charIndex] || CHARS[0],
                            opacity: opacity,
                          };
                        }
                      }
                    }

                    // Clear canvas
                    if (!ctx) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Draw characters
                    if (!container) return;
                    const rect = container.getBoundingClientRect();
                    const cellWidth = rect.width / GRID_WIDTH;
                    const cellHeight = rect.height / GRID_HEIGHT;
                    for (let y = 0; y < GRID_HEIGHT; y++) {
                      for (let x = 0; x < GRID_WIDTH; x++) {
                        const cell = newGrid[y][x];
                        if (cell && cell.char && CHARS.includes(cell.char)) {
                          ctx.fillStyle = `rgba(208, 236, 26, ${
                            cell.opacity || 0.4
                          })`;
                          ctx.fillText(
                            cell.char,
                            x * cellWidth + cellWidth / 2,
                            y * cellHeight + cellHeight / 2,
                          );
                        }
                      }
                    }
                  }

                  function handleMouseMove(event: MouseEvent) {
                    const rect = canvas.getBoundingClientRect();
                    const x = (event.clientX - rect.left) / rect.width;
                    const y = (event.clientY - rect.top) / rect.height;
                    mouse.x = x * 2 - 1;
                    mouse.y = y * 2 - 1;
                  }

                  function handleResize() {
                    updateCanvasSize();
                  }

                  window.addEventListener("resize", handleResize);
                  canvas.addEventListener("mousemove", handleMouseMove);

                  let lastTime = 0;
                  function animate(currentTime: number) {
                    const delta = Math.min(
                      (currentTime - lastTime) / 1000,
                      0.1,
                    );
                    lastTime = currentTime;
                    update(delta);
                    requestAnimationFrame(animate);
                  }

                  requestAnimationFrame(animate);
                }

                // Initialize when DOM is ready with a small delay to ensure container has dimensions
                function delayedInit() {
                  setTimeout(initAsciiAnimation, 100);
                }

                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", delayedInit);
                } else {
                  delayedInit();
                }
              }, sectionId),
            }}
          />

          {/* Countdown Script */}
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: useScript(
                (eventDate: string, sectionId: string) => {
                  function updateCountdown() {
                    const now = new Date().getTime();
                    const eventTime = new Date(eventDate).getTime();
                    const distance = eventTime - now;

                    const daysEl = document.getElementById(`days-${sectionId}`);
                    const hoursEl = document.getElementById(
                      `hours-${sectionId}`,
                    );
                    const minutesEl = document.getElementById(
                      `minutes-${sectionId}`,
                    );
                    const secondsEl = document.getElementById(
                      `seconds-${sectionId}`,
                    );

                    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
                      console.log("Countdown elements not found:", sectionId);
                      return;
                    }

                    if (distance < 0) {
                      daysEl.textContent = "00";
                      hoursEl.textContent = "00";
                      minutesEl.textContent = "00";
                      secondsEl.textContent = "00";
                      return;
                    }

                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(
                      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                    );
                    const minutes = Math.floor(
                      (distance % (1000 * 60 * 60)) / (1000 * 60),
                    );
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    daysEl.textContent = days.toString().padStart(2, "0");
                    hoursEl.textContent = hours.toString().padStart(2, "0");
                    minutesEl.textContent = minutes.toString().padStart(2, "0");
                    secondsEl.textContent = seconds.toString().padStart(2, "0");
                  }

                  function startCountdown() {
                    updateCountdown();
                    setInterval(updateCountdown, 1000);
                  }

                  // Wait for DOM to be ready
                  if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", () => {
                      setTimeout(startCountdown, 100);
                    });
                  } else {
                    setTimeout(startCountdown, 100);
                  }
                },
                eventDate,
                sectionId,
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  logo:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  title: "Os melhores agentes vencem!",
  subtitle:
    "Participe do Hackathon deco.chat e crie agentes inteligentes para e-commerce, conteúdo e storefront que transformam experiências digitais.",
  ctas: [
    {
      text: "Inscreva sua equipe",
      href: "#registration",
      variant: "primary",
    },
    {
      text: "Ver regulamento",
      href: "#rules",
      variant: "secondary",
    },
  ],
  eventDate: "2025-07-10T00:00:00",
};

export function Preview() {
  return <HackathonHero {...defaultProps} />;
}
