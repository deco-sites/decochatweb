import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy title
 */
interface MainBenefit {
  /**
   * @title Avatar/Logo
   * @description Logo ou avatar do benefício
   */
  avatar: ImageWidget;
  /**
   * @title Título
   * @description Título do benefício principal
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição detalhada do benefício
   */
  description: string;
  /**
   * @title Tipo de mídia
   * @description Escolha entre imagem ou vídeo
   */
  mediaType: "image" | "video";
  /**
   * @title Imagem principal
   * @description Imagem de demonstração do benefício (se tipo for imagem)
   */
  mainImage?: ImageWidget;
  /**
   * @title URL do vídeo principal
   * @description URL do vídeo de demonstração do benefício (se tipo for vídeo)
   */
  mainVideo?: string;
  /**
   * @title Posição da imagem
   * @description Define se a imagem aparece à esquerda ou direita
   */
  imagePosition: "left" | "right";
}

interface Props {
  /**
   * @title Título principal
   * @description Título da seção
   */
  title?: string;
  /**
   * @title Descrição
   * @description Descrição da seção
   */
  description?: string;
  /**
   * @title Benefícios principais
   * @description Benefícios em destaque
   * @maxItems 3
   * @minItems 2
   */
  mainBenefits?: MainBenefit[];
}

export default function NewHomeBenefits({
  title = defaultProps.title,
  description = defaultProps.description,
  mainBenefits = defaultProps.mainBenefits,
}: Props) {
  const sectionId = `benefits-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div class="w-full bg-dc-50 px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-40">
      <div class="w-full max-w-[1440px] mx-auto flex flex-col gap-14">
        {/* Header */}
        <div class="w-full flex flex-col items-center gap-6">
          <h2 class="text-center text-dc-800 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
            {title}
          </h2>
          <p class="text-center text-dc-500 text-base md:text-lg leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Main Benefits */}
        <div class="w-full flex flex-col gap-4">
          {mainBenefits?.map((benefit, index) => (
            <div
              key={index}
              class="w-full p-2 bg-dc-100 rounded-xl overflow-hidden"
            >
              <div
                class={`flex flex-col ${
                  benefit.imagePosition === "right"
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                } gap-6 lg:gap-6`}
              >
                {/* Media */}
                <div class="w-full lg:w-1/2 bg-primary-light rounded-2xl flex-shrink-0">
                  <div class="w-full aspect-[5/4] relative overflow-hidden rounded-lg">
                    {benefit.mediaType === "image" && benefit.mainImage
                      ? (
                        <Image
                          src={benefit.mainImage}
                          alt={benefit.title}
                          width={636}
                          height={477}
                          class="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                          fetchPriority="low"
                        />
                      )
                      : benefit.mediaType === "video" && benefit.mainVideo
                      ? (
                        <video
                          class="w-full h-full object-cover rounded-lg benefit-video"
                          muted
                          loop
                          autoplay
                          playsInline
                          preload="auto"
                          data-benefit-index={index}
                        >
                          <source src={benefit.mainVideo} type="video/webm" />
                          {benefit.mainVideo?.includes(".webm") && (
                            <source
                              src={benefit.mainVideo.replace(".webm", ".mp4")}
                              type="video/mp4"
                            />
                          )}
                          Seu navegador não suporta vídeo.
                        </video>
                      )
                      : (
                        <div class="w-full h-full bg-dc-200 rounded-lg flex items-center justify-center">
                          <span class="text-dc-400 text-sm">
                            No media provided
                          </span>
                        </div>
                      )}
                  </div>
                </div>

                {/* Content */}
                <div class="flex-1 px-4 justify-center lg:px-20 py-8 flex flex-col gap-6">
                  {/* Avatar */}
                  <div class="w-16 h-16 rounded-2xl overflow-hidden">
                    <Image
                      src={benefit.avatar}
                      alt={benefit.title}
                      width={64}
                      height={64}
                      class="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title and Description */}
                  <div class="flex flex-col gap-2.5">
                    <h3 class="text-dc-800 text-2xl md:text-3xl font-medium leading-tight">
                      {benefit.title}
                    </h3>
                    <p class="text-dc-500 text-base md:text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GSAP Animation Script */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        defer
      >
      </script>

      <script
        dangerouslySetInnerHTML={{
          __html: useScript((sectionId: string) => {
            function initializeGSAP() {
              if (typeof (globalThis as any).gsap !== "undefined") {
                let animationsStarted = false;

                // Setup viewport observer
                const section = document.getElementById(sectionId);
                if (section) {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting && !animationsStarted) {
                          animationsStarted = true;
                          setupVideoAutoplay();
                          observer.unobserve(entry.target);
                        }
                      });
                    },
                    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
                  );
                  observer.observe(section);
                }

                function setupVideoAutoplay() {
                  // Setup video autoplay when they come into viewport
                  const videos = document.querySelectorAll(".benefit-video");
                  console.log("Found benefit videos:", videos.length);

                  videos.forEach((video, index) => {
                    const videoElement = video as HTMLVideoElement;
                    console.log(`Setting up video ${index}:`, videoElement.src);

                    // Try to play immediately (fallback)
                    setTimeout(() => {
                      videoElement.play().catch((error) => {
                        console.log(
                          `Video ${index} immediate play failed:`,
                          error,
                        );
                      });
                    }, 1000);

                    const videoObserver = new IntersectionObserver(
                      (entries) => {
                        entries.forEach((entry) => {
                          console.log(
                            `Video ${index} intersection:`,
                            entry.isIntersecting,
                          );
                          if (entry.isIntersecting) {
                            // Play video when it enters viewport
                            console.log(`Attempting to play video ${index}`);
                            videoElement.play().catch((error) => {
                              console.log(
                                `Benefit video ${index} autoplay blocked:`,
                                error,
                              );
                            });
                          }
                        });
                      },
                      { threshold: 0.1, rootMargin: "100px 0px -100px 0px" },
                    );

                    videoObserver.observe(videoElement);
                  });
                }
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
  title: "Sua próxima contratação é agentica",
  description:
    "Conectamos modelos a sistemas internos, com segurança, customização e auditoria, para escalar e entregar resultados.",
  mainBenefits: [
    {
      avatar: "https://placehold.co/64x64/a6a09d/282524?text=MCP",
      title: "Unified MCP Provider",
      description:
        "Build, test, and manage MCPs right from your browser, connecting your agents and workflows securely and with full control to any system or service you want.",
      mediaType: "image",
      mainImage: "https://placehold.co/636x477?text=MCP+Provider",
      imagePosition: "left",
    },
    {
      avatar: "https://placehold.co/64x64/d0ec1a/07401a?text=LLM",
      title: "Easy to consume LLM",
      description:
        "Use language models easily and only pay for what you use. Just add your balance and start building—no complicated billing or surprises.",
      mediaType: "image",
      mainImage: "https://placehold.co/636x477?text=LLM+Interface",
      imagePosition: "right",
    },
    {
      avatar: "https://placehold.co/64x64/a6a09d/282524?text=AI",
      title: "Easy to sell agents",
      description:
        "List your agents, set your price, and get paid directly from users' wallets. You build, you earn, it's that simple.",
      mediaType: "image",
      mainImage: "https://placehold.co/636x477?text=Agent+Marketplace",
      imagePosition: "left",
    },
  ],
};

export function Preview() {
  return <NewHomeBenefits {...defaultProps} />;
}
