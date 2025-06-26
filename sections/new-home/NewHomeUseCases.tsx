import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy title
 */
interface Integration {
  /**
   * @title Nome da integração
   * @description Nome da integração (ex: Google Drive, Slack)
   */
  name: string;
  /**
   * @title Ícone da integração
   * @description Ícone/logo da integração
   */
  icon: ImageWidget;
}

/**
 * @titleBy title
 */
interface MainUseCase {
  /**
   * @title Avatar/Logo
   * @description Logo ou avatar do caso de uso
   */
  avatar: ImageWidget;
  /**
   * @title Título
   * @description Título do caso de uso principal
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição detalhada do caso de uso
   */
  description: string;
  /**
   * @title Tipo de mídia
   * @description Escolha entre imagem ou vídeo
   */
  mediaType: "image" | "video";
  /**
   * @title Imagem principal
   * @description Imagem de demonstração do caso de uso (se tipo for imagem)
   */
  mainImage?: ImageWidget;
  /**
   * @title URL do vídeo principal
   * @description URL do vídeo de demonstração do caso de uso (se tipo for vídeo)
   */
  mainVideo?: string;
  /**
   * @title Posição da imagem
   * @description Define se a imagem aparece à esquerda ou direita
   */
  imagePosition: "left" | "right";
  /**
   * @title Integrações
   * @description Lista de integrações utilizadas
   * @maxItems 4
   */
  integrations: Integration[];
  /**
   * @title Mostrar botão
   * @description Se deve mostrar o botão de ação
   */
  showButton?: boolean;
  /**
   * @title Ícone do botão
   * @description Nome do ícone do Material Design (ex: arrow_forward, play_arrow, launch)
   */
  buttonIcon?: string;
  /**
   * @title Link do botão
   * @description URL para onde o botão deve levar
   */
  buttonHref?: string;
}

/**
 * @titleBy title
 */
interface AgentCard {
  /**
   * @title Avatar do agente
   * @description Imagem do avatar do agente
   */
  avatar: ImageWidget;
  /**
   * @title Título do agente
   * @description Nome do agente/caso de uso
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição que aparece quando hovera o cartão
   */
  description: string;
  /**
   * @title Integrações
   * @description Lista de integrações do agente (máx 4)
   * @maxItems 4
   */
  integrations: Integration[];
  /**
   * @title Mensagens do chat
   * @description Conversa de exemplo (máx 2 mensagens)
   * @maxItems 2
   */
  messages: {
    /**
     * @title Tipo da mensagem
     * @description Se é do usuário ou do agente
     */
    type: "user" | "agent";
    /**
     * @title Conteúdo
     * @description Texto da mensagem
     */
    content: string;
  }[];
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
   * @title Casos de uso principais
   * @description Dois casos de uso em destaque
   * @maxItems 2
   * @minItems 2
   */
  mainUseCases?: MainUseCase[];
  /**
   * @title Cartões de agentes
   * @description Lista de agentes menores (máx 3)
   * @maxItems 3
   */
  agentCards?: AgentCard[];
}

// Integration Icon Components (simplified versions of Figma icons)
function IntegrationIcon1({ className = "" }: { className?: string }) {
  return (
    <div
      class={`w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm border border-slate-300/20 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div class="w-5 h-5 md:w-6 md:h-6 relative overflow-hidden">
        <div class="absolute inset-0 grid grid-cols-3 gap-px p-0.5">
          <div class="bg-blue-700 rounded-sm"></div>
          <div class="bg-green-600 rounded-sm col-span-2"></div>
          <div class="bg-red-500 rounded-sm"></div>
          <div class="bg-green-700 rounded-sm"></div>
          <div class="bg-blue-500 rounded-sm col-span-2"></div>
          <div class="bg-yellow-500 rounded-sm col-span-2"></div>
        </div>
      </div>
    </div>
  );
}

function IntegrationIcon2({ className = "" }: { className?: string }) {
  return (
    <div
      class={`w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm border border-slate-300/20 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div class="w-5 h-5 md:w-6 md:h-6 relative overflow-hidden">
        <div class="w-4 h-3 md:w-5 md:h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-sm">
        </div>
      </div>
    </div>
  );
}

function IntegrationIcon3({ className = "" }: { className?: string }) {
  return (
    <div
      class={`w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm border border-slate-300/20 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div class="w-5 h-5 md:w-6 md:h-6 relative overflow-hidden">
        <div class="w-4 h-4 md:w-5 md:h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-sm">
        </div>
      </div>
    </div>
  );
}

function IntegrationIcon4({ className = "" }: { className?: string }) {
  return (
    <div
      class={`w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm border border-slate-300/20 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div class="w-5 h-5 md:w-6 md:h-6 relative overflow-hidden">
        <div class="absolute inset-0 grid grid-cols-5 gap-px p-0.5">
          <div class="bg-blue-500 rounded-sm"></div>
          <div class="bg-green-600 rounded-sm"></div>
          <div class="bg-yellow-500 rounded-sm"></div>
          <div class="bg-red-500 rounded-sm col-span-2"></div>
          <div class="bg-red-700 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}

const defaultIntegrationIcons = [
  IntegrationIcon1,
  IntegrationIcon2,
  IntegrationIcon3,
  IntegrationIcon4,
];

export default function NewHomeUseCases({
  title = defaultProps.title,
  description = defaultProps.description,
  mainUseCases = defaultProps.mainUseCases,
  agentCards = defaultProps.agentCards,
}: Props) {
  const sectionId = `use-cases-${Math.random().toString(36).substr(2, 9)}`;

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

        {/* Main Use Cases */}
        <div class="w-full flex flex-col gap-4">
          {mainUseCases?.map((useCase, index) => (
            <div
              key={index}
              class="w-full p-2 bg-dc-100 rounded-xl overflow-hidden"
            >
              <div
                class={`flex flex-col ${
                  useCase.imagePosition === "right"
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                } gap-6 lg:gap-6`}
              >
                {/* Media */}
                <div class="w-full lg:w-3/5 bg-primary-light rounded-2xl flex-shrink-0">
                  <div class="w-full relative">
                    {useCase.mediaType === "image" && useCase.mainImage
                      ? (
                        <Image
                          src={useCase.mainImage}
                          alt={useCase.title}
                          width={636}
                          height={477}
                          class="w-full h-auto rounded-lg"
                          loading="lazy"
                          fetchPriority="low"
                        />
                      )
                      : useCase.mediaType === "video" && useCase.mainVideo
                      ? (
                        <video
                          class="w-full h-auto rounded-lg use-case-video"
                          muted
                          loop
                          autoplay
                          playsInline
                          preload="auto"
                          data-use-case-index={index}
                        >
                          <source src={useCase.mainVideo} type="video/webm" />
                          {useCase.mainVideo?.includes(".webm") && (
                            <source
                              src={useCase.mainVideo.replace(".webm", ".mp4")}
                              type="video/mp4"
                            />
                          )}
                          Seu navegador não suporta vídeo.
                        </video>
                      )
                      : (
                        <div class="w-full h-32 bg-dc-200 rounded-lg flex items-center justify-center">
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
                      src={useCase.avatar}
                      alt={useCase.title}
                      width={64}
                      height={64}
                      class="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title and Description */}
                  <div class="flex flex-col gap-2.5">
                    <h3 class="text-dc-800 text-2xl md:text-3xl font-medium leading-tight">
                      {useCase.title}
                    </h3>
                    <p class="text-dc-500 text-base md:text-lg leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div class="w-full h-px border-t border-dc-400"></div>

                  {/* Integrations and Button */}
                  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div class="flex flex-col gap-3">
                      <div class="text-dc-500 text-sm font-bold uppercase tracking-wide">
                        INTEGRAÇÕES
                      </div>
                      <div class="flex items-center gap-0.5">
                        {useCase.integrations.slice(0, 4).map(
                          (integration, idx) => (
                            <div
                              key={idx}
                              class="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm border border-slate-300/20 flex items-center justify-center overflow-hidden"
                            >
                              <Image
                                src={integration.icon}
                                alt={integration.name}
                                width={32}
                                height={32}
                                class="w-6 h-6 md:w-7 md:h-7 object-contain"
                                loading="lazy"
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {useCase.showButton && (
                      <a
                        href={useCase.buttonHref || "#"}
                        class="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center hover:bg-primary-light/80 transition-colors duration-200"
                        target={useCase.buttonHref?.startsWith("http")
                          ? "_blank"
                          : "_self"}
                        rel={useCase.buttonHref?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined}
                      >
                        {useCase.buttonIcon
                          ? (
                            <Icon
                              name={useCase.buttonIcon}
                              size="small"
                              class="text-primary-dark"
                            />
                          )
                          : (
                            <div class="w-4 h-4 bg-primary-dark rounded-sm">
                            </div>
                          )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agent Cards */}
        <div
          id={sectionId}
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {agentCards?.map((agent, index) => (
            <div
              key={index}
              class="group relative max-h-[350px] p-6 md:p-10 bg-dc-100 rounded-xl flex flex-col gap-8 md:gap-14 overflow-hidden cursor-pointer agent-card"
              data-agent-index={index}
            >
              {/* Header */}
              <div class="w-full flex flex-col gap-6">
                <div class="w-full flex justify-between items-center">
                  {/* Avatar */}
                  <div class="w-10 h-10 rounded-xl shadow-sm border border-stone-500/10 overflow-hidden">
                    <Image
                      src={agent.avatar}
                      alt={agent.title}
                      width={40}
                      height={40}
                      class="w-full h-full object-cover"
                    />
                  </div>

                  {/* Integration Icons */}
                  <div class="flex items-center gap-0">
                    {agent.integrations.slice(0, 4).map((integration, idx) => (
                      <div
                        key={idx}
                        class="w-8 h-8 bg-white rounded-lg shadow-sm border border-slate-300/20 flex items-center justify-center overflow-hidden"
                      >
                        <Image
                          src={integration.icon}
                          alt={integration.name}
                          width={24}
                          height={24}
                          class="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title and Description */}
                <div class="w-full flex flex-col gap-2.5">
                  <h3 class="text-dc-800 text-xl md:text-2xl font-medium leading-7">
                    {agent.title}
                  </h3>
                  {/* Description that slides down on hover (desktop) or shows always (mobile) */}
                  <div class="description-content opacity-100 md:opacity-0 max-h-20 md:max-h-0 overflow-hidden transition-all duration-500 ease-out md:group-hover:opacity-100 md:group-hover:max-h-20">
                    <p class="text-dc-500 text-base md:text-lg leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div class="w-full h-80 p-6 bg-dc-50 rounded-3xl border border-dc-300 flex flex-col gap-6 overflow-hidden flex-shrink-0">
                {/* Chat Header */}
                <div class="w-full flex items-center gap-2.5">
                  <div class="text-dc-300 text-base font-medium">
                    New chat
                  </div>
                  <div class="flex-1 h-px border-t border-dc-300"></div>
                </div>

                {/* Messages */}
                <div class="w-full flex flex-col gap-1">
                  {agent.messages.map((message, msgIdx) => (
                    <div
                      key={msgIdx}
                      class={`w-full flex ${
                        message.type === "user"
                          ? "justify-end pl-12"
                          : "justify-start pr-12"
                      } items-end gap-2.5`}
                    >
                      <div
                        class={`flex-1 max-w-[500px] px-3 py-2 ${
                          message.type === "user"
                            ? "bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
                            : "rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-dc-300 bg-white"
                        } flex flex-col justify-center items-start`}
                      >
                        <p class="text-dc-500 text-sm leading-tight">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  ))}
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
                  const videos = document.querySelectorAll(".use-case-video");
                  console.log("Found use case videos:", videos.length);

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
                                `Use case video ${index} autoplay blocked:`,
                                error,
                              );
                            });
                          }
                          // Note: We don't pause use case videos when out of viewport
                          // so they can keep looping continuously
                        });
                      },
                      { threshold: 0.1, rootMargin: "100px 0px -100px 0px" },
                    );

                    videoObserver.observe(videoElement);
                  });
                }

                function setupHoverAnimations() {
                  // Agent card hover animations (desktop only)
                  const agentCards = document.querySelectorAll(".agent-card");
                  const isMobile = window.innerWidth < 768;

                  agentCards.forEach((card) => {
                    const chatInterface = card.querySelector(".bg-dc-50");

                    // Only add hover animations on desktop
                    if (!isMobile && chatInterface) {
                      // Add will-change for better performance
                      (chatInterface as HTMLElement).style.willChange =
                        "transform";

                      card.addEventListener("mouseenter", () => {
                        if (animationsStarted) {
                          // Chat moves down with smoother animation
                          gsapLib.to(chatInterface, {
                            duration: 0.25,
                            y: 20,
                            ease: "power2.inOut",
                            force3D: true,
                          });
                        }
                      });

                      card.addEventListener("mouseleave", () => {
                        if (animationsStarted) {
                          // Chat returns to position with smoother animation
                          gsapLib.to(chatInterface, {
                            duration: 0.25,
                            y: 0,
                            ease: "power2.inOut",
                            force3D: true,
                          });
                        }
                      });
                    }
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
  mainUseCases: [
    {
      avatar: "https://placehold.co/64x64/d0ec1a/07401a?text=RFP",
      title: "Preenchimento de RFP",
      description:
        "Converse com as propostas e opiniões do Professor Mangabeira diretamente pelo WhatsApp.",
      mediaType: "image",
      mainImage: "https://placehold.co/636x477?text=RFP+Interface",
      imagePosition: "left",
      integrations: [
        { name: "Google Drive", icon: "https://placehold.co/24x24" },
        { name: "Slack", icon: "https://placehold.co/24x24" },
        { name: "Notion", icon: "https://placehold.co/24x24" },
        { name: "CRM", icon: "https://placehold.co/24x24" },
      ],
      showButton: false,
    },
    {
      avatar: "https://placehold.co/64x64/059669/ffffff?text=MC",
      title: "Mangabeira Chat",
      description:
        "Converse com as propostas e opiniões do Professor Mangabeira diretamente pelo WhatsApp.",
      mediaType: "video",
      mainVideo:
        "https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_1mb.mp4",
      imagePosition: "right",
      integrations: [
        { name: "WhatsApp", icon: "https://placehold.co/24x24" },
        { name: "Database", icon: "https://placehold.co/24x24" },
        { name: "AI Model", icon: "https://placehold.co/24x24" },
        { name: "Analytics", icon: "https://placehold.co/24x24" },
      ],
      showButton: true,
      buttonIcon: "arrow_forward",
      buttonHref: "#",
    },
  ],
  agentCards: [
    {
      avatar: "https://placehold.co/40x40/d0ec1a/07401a?text=👤",
      title: "Agendador de Entrevistas",
      description:
        "Encontra a melhor combinação de entrevistador e agenda o horário em segundos.",
      integrations: [
        { name: "Calendar", icon: "https://placehold.co/20x20" },
        { name: "ATS", icon: "https://placehold.co/20x20" },
        { name: "Email", icon: "https://placehold.co/20x20" },
        { name: "Slack", icon: "https://placehold.co/20x20" },
      ],
      messages: [
        { type: "user", content: "Schedule Sarah's final interview" },
        {
          type: "agent",
          content:
            "Found the best match: Alex (React expert). Booked Tuesday 2PM. Calendar invites sent! ✅",
        },
      ],
    },
    {
      avatar: "https://placehold.co/40x40/d0ec1a/07401a?text=👤",
      title: "Agendador de Entrevistas",
      description:
        "Encontra a melhor combinação de entrevistador e agenda o horário em segundos.",
      integrations: [
        { name: "Calendar", icon: "https://placehold.co/20x20" },
        { name: "ATS", icon: "https://placehold.co/20x20" },
        { name: "Email", icon: "https://placehold.co/20x20" },
        { name: "Slack", icon: "https://placehold.co/20x20" },
      ],
      messages: [
        { type: "user", content: "Schedule Sarah's final interview" },
        {
          type: "agent",
          content:
            "Found the best match: Alex (React expert). Booked Tuesday 2PM. Calendar invites sent! ✅",
        },
      ],
    },
    {
      avatar: "https://placehold.co/40x40/d0ec1a/07401a?text=👤",
      title: "Agendador de Entrevistas",
      description:
        "Encontra a melhor combinação de entrevistador e agenda o horário em segundos.",
      integrations: [
        { name: "Calendar", icon: "https://placehold.co/20x20" },
        { name: "ATS", icon: "https://placehold.co/20x20" },
        { name: "Email", icon: "https://placehold.co/20x20" },
        { name: "Slack", icon: "https://placehold.co/20x20" },
      ],
      messages: [
        { type: "user", content: "Schedule Sarah's final interview" },
        {
          type: "agent",
          content:
            "Found the best match: Alex (React expert). Booked Tuesday 2PM. Calendar invites sent! ✅",
        },
      ],
    },
  ],
};

export function Preview() {
  return <NewHomeUseCases {...defaultProps} />;
}
