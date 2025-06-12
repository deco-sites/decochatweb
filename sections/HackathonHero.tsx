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
   * @title Tag superior
   * @description Texto pequeno que aparece acima do título principal
   */
  topTag?: string;
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
  /**
   * @title Texto do countdown
   * @description Texto que aparece acima do countdown
   */
  countdownText?: string;
  /**
   * @title Stats do evento
   * @description Estatísticas que aparecem na parte inferior
   */
  stats: {
    /**
     * @title Valor
     * @description Número ou valor da estatística
     */
    value: string;
    /**
     * @title Label
     * @description Descrição da estatística
     */
    label: string;
  }[];
}

export default function HackathonHero({
  topTag = defaultProps.topTag,
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  ctas = defaultProps.ctas,
  eventDate = defaultProps.eventDate,
  countdownText = defaultProps.countdownText,
  stats = defaultProps.stats,
}: Props) {
  const sectionId = `hackathon-hero-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      id={sectionId}
      class="w-full min-h-screen bg-primary-dark relative overflow-hidden flex flex-col justify-center items-center"
    >
      {/* 3D Background Elements */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-light to-yellow-light rounded-full opacity-20 blur-xl animate-float-slow">
        </div>
        <div class="absolute top-1/3 right-16 w-24 h-24 bg-gradient-to-br from-purple-light to-primary-light rounded-full opacity-15 blur-lg animate-float-reverse">
        </div>
        <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-light to-purple-light rounded-full opacity-10 blur-2xl animate-float-slow">
        </div>

        {/* Geometric shapes */}
        <div class="absolute top-20 right-1/3 w-16 h-16 border-2 border-primary-light/30 rotate-45 animate-rotate-slow">
        </div>
        <div class="absolute bottom-32 right-20 w-20 h-20 border-2 border-yellow-light/20 rotate-12 animate-rotate-reverse">
        </div>
      </div>

      <div class="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 flex flex-col justify-center items-center gap-16 text-center">
        {/* Main Content */}
        <div class="flex flex-col justify-center items-center gap-8 md:gap-12">
          <FadeUp delay={0}>
            <div class="flex flex-col justify-center items-center gap-4 md:gap-6">
              {topTag && (
                <div class="px-4 py-2 bg-primary-light/10 border border-primary-light/30 rounded-full">
                  <span class="text-primary-light text-sm md:text-base font-semibold font-manrope">
                    {topTag}
                  </span>
                </div>
              )}

              <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-manrope leading-tight text-dc-50 max-w-4xl">
                {title.split("\n").map((line, index) => (
                  <>
                    {index > 0 && <br />}
                    {line}
                  </>
                ))}
              </h1>

              <p class="text-lg md:text-xl text-dc-200 font-medium font-manrope leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            </div>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={200}>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctas.map((cta) => (
                <Button
                  href={cta.href}
                  variant={cta.variant}
                  size="large"
                  className="hover:scale-105 transition-transform duration-200 ease-out"
                >
                  {cta.text}
                </Button>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Countdown */}
        <FadeUp delay={400}>
          <div class="flex flex-col items-center gap-6">
            {countdownText && (
              <p class="text-dc-300 text-lg font-medium font-manrope uppercase tracking-wider">
                {countdownText}
              </p>
            )}

            <div
              id="countdown"
              class="flex gap-4 md:gap-8 text-center"
            >
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-primary-light/10 border border-primary-light/30 rounded-lg flex items-center justify-center mb-2">
                  <span
                    id="days"
                    class="text-2xl md:text-3xl font-bold text-primary-light font-manrope"
                  >
                    00
                  </span>
                </div>
                <span class="text-dc-300 text-sm font-medium">DAYS</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-primary-light/10 border border-primary-light/30 rounded-lg flex items-center justify-center mb-2">
                  <span
                    id="hours"
                    class="text-2xl md:text-3xl font-bold text-primary-light font-manrope"
                  >
                    00
                  </span>
                </div>
                <span class="text-dc-300 text-sm font-medium">HOURS</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-primary-light/10 border border-primary-light/30 rounded-lg flex items-center justify-center mb-2">
                  <span
                    id="minutes"
                    class="text-2xl md:text-3xl font-bold text-primary-light font-manrope"
                  >
                    00
                  </span>
                </div>
                <span class="text-dc-300 text-sm font-medium">MIN</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-primary-light/10 border border-primary-light/30 rounded-lg flex items-center justify-center mb-2">
                  <span
                    id="seconds"
                    class="text-2xl md:text-3xl font-bold text-primary-light font-manrope"
                  >
                    00
                  </span>
                </div>
                <span class="text-dc-300 text-sm font-medium">SEC</span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <FadeUp delay={600}>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <div class="text-center">
                  <div class="text-3xl md:text-4xl font-bold text-primary-light font-manrope mb-1">
                    {stat.value}
                  </div>
                  <div class="text-dc-300 text-sm md:text-base font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        )}
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

      {/* Countdown Script */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((eventDate: string) => {
            function updateCountdown() {
              const now = new Date().getTime();
              const eventTime = new Date(eventDate).getTime();
              const distance = eventTime - now;

              if (distance < 0) {
                document.getElementById("days")!.textContent = "00";
                document.getElementById("hours")!.textContent = "00";
                document.getElementById("minutes")!.textContent = "00";
                document.getElementById("seconds")!.textContent = "00";
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

              document.getElementById("days")!.textContent = days.toString()
                .padStart(2, "0");
              document.getElementById("hours")!.textContent = hours.toString()
                .padStart(2, "0");
              document.getElementById("minutes")!.textContent = minutes
                .toString().padStart(2, "0");
              document.getElementById("seconds")!.textContent = seconds
                .toString().padStart(2, "0");
            }

            // Update immediately and then every second
            updateCountdown();
            setInterval(updateCountdown, 1000);
          }, eventDate),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  topTag: "deco.chat presents",
  title: "WORLD'S LARGEST\nAGENT HACKATHON",
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
  countdownText: "Event starts in",
  stats: [
    { value: "75+", label: "Teams" },
    { value: "90K+", label: "Prize Pool" },
    { value: "$1M+", label: "In Funding" },
    { value: "1", label: "Winner" },
  ],
};

export function Preview() {
  return <HackathonHero {...defaultProps} />;
}
