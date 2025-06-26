import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Eyebrow from "../../components/ui/Eyebrow.tsx";
import FadeUp from "../../components/ui/FadeUp.tsx";
import BodyText from "../../components/ui/BodyText.tsx";

/**
 * @titleBy text
 */
export interface AIModel {
  /**
   * @title Nome do modelo de IA
   * @description Nome ou identificador do modelo de IA
   */
  name: string;
  /**
   * @title Logo do modelo
   * @description Logo ou ícone do modelo de IA
   */
  logo: ImageWidget;
}

/**
 * @titleBy service
 */
export interface IntegrationStatus {
  /**
   * @title Nome do serviço
   * @description Nome do serviço sendo conectado
   */
  service: string;
  /**
   * @title Ícone do serviço
   * @description Ícone do serviço
   */
  icon: ImageWidget;
  /**
   * @title Status
   * @description Status da conexão
   */
  status: "connecting" | "connected" | "error";
}

export interface StatementCard {
  /**
   * @title Texto do cartão
   * @description Texto que aparece no cartão
   */
  text?: string;
  /**
   * @title Imagem do cartão
   * @description Imagem principal do cartão
   */
  image?: ImageWidget;
  /**
   * @title Imagens do cartão
   * @description Múltiplas imagens para o cartão (mockups de telefone)
   */
  images?: ImageWidget[];
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
   * @description Título principal da seção
   */
  title: string;
  /**
   * @title Modelos de IA
   * @description Lista de modelos de IA para exibir no cartão esquerdo
   * @maxItems 12
   */
  aiModels: AIModel[];
  /**
   * @title Texto do cartão de modelos
   * @description Texto que aparece no cartão dos modelos de IA
   */
  aiModelsText: string;
  /**
   * @title Status das integrações
   * @description Status de conexão com serviços externos
   * @maxItems 3
   */
  integrationStatus: IntegrationStatus[];
  /**
   * @title Resultado final
   * @description Informações sobre o resultado gerado
   */
  finalResult: {
    /**
     * @title Horário
     * @description Horário do resultado
     */
    time: string;
    /**
     * @title Título do serviço
     * @description Nome do serviço (ex: Sheets)
     */
    serviceTitle: string;
    /**
     * @title Ícone do serviço
     * @description Ícone do serviço
     */
    serviceIcon: ImageWidget;
    /**
     * @title Imagem de preview
     * @description Imagem de preview do resultado
     */
    previewImage: ImageWidget;
  };
  /**
   * @title Cartão superior direito
   * @description Cartão de geração de conteúdo
   */
  topRightCard: StatementCard;
  /**
   * @title Cartão inferior direito
   * @description Cartão com personagem
   */
  bottomRightCard: StatementCard;
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "green-950" | "dc-900" | "primary-dark" | "purple-dark";
}

export default function Statement({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  aiModels = defaultProps.aiModels,
  aiModelsText = defaultProps.aiModelsText,
  integrationStatus = defaultProps.integrationStatus,
  finalResult = defaultProps.finalResult,
  topRightCard = defaultProps.topRightCard,
  bottomRightCard = defaultProps.bottomRightCard,
  backgroundColor = defaultProps.backgroundColor,
}: Props) {
  const bgColorMap = {
    "green-950": "bg-primary-dark",
    "dc-900": "bg-dc-900",
    "primary-dark": "bg-primary-dark",
    "purple-dark": "bg-purple-dark",
  };

  const bgColor = bgColorMap[backgroundColor || "primary-dark"];
  const sectionId = `statement-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      id={sectionId}
      class={`w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 ${bgColor} flex flex-col justify-start items-center gap-14`}
    >
      <div class="w-full max-w-[1440px] flex flex-col justify-start items-center gap-14">
        {/* Header Content */}
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-10">
          <FadeUp delay={0}>
            <div class="flex flex-col justify-start items-center gap-6">
              {/* Eyebrow */}
              {eyebrow && (
                <div class="px-4 py-1 bg-primary-light rounded-full inline-flex justify-center items-center gap-2">
                  <div class="w-6 h-6 relative overflow-hidden">
                    <div class="w-2.5 h-5 left-[7px] top-[2px] absolute bg-primary-dark">
                    </div>
                  </div>
                  <div class="justify-center text-primary-dark text-base font-semibold font-main leading-tight">
                    {eyebrow.text}
                  </div>
                </div>
              )}

              {/* Main Title */}
              <h1 class="text-center text-dc-200 text-3xl md:text-4xl lg:text-5xl font-semibold font-main leading-tight">
                {title}
              </h1>
            </div>
          </FadeUp>
        </div>

        {/* Cards and Chat Layout */}
        <FadeUp delay={200}>
          <div class="w-full flex flex-col lg:flex-row justify-start items-end gap-1 lg:gap-2">
            {/* Left Card - AI Models */}
            <div class="w-full lg:w-80 h-80 p-4 bg-primary-light rounded-[32px] flex flex-col justify-between items-center order-2 lg:order-1 relative overflow-hidden">
              {/* AI Model Icons Grid */}
              <div class="flex justify-center items-center flex-1">
                <div class="w-[280px] sm:w-[340px] lg:w-[280px] grid grid-cols-4 gap-1">
                  {aiModels.map((model, index) => (
                    <div
                      key={index}
                      class="px-3 sm:px-4 py-2 sm:py-2.5 bg-primary-dark rounded-full flex justify-center items-center"
                    >
                      <Image
                        src={model.logo}
                        alt={model.name}
                        width={24}
                        height={24}
                        class="w-7 sm:w-6 h-7 sm:h-6 object-contain"
                        loading="lazy"
                        fetchPriority="low"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Text */}
              <div class="px-4 py-2">
                <div class="text-primary-dark text-2xl lg:text-3xl font-medium font-main leading-tight">
                  {aiModelsText}
                </div>
              </div>
            </div>

            {/* Center Chat Interface */}
            <div class="order-1 lg:order-2 flex-1 h-auto lg:h-[669px] p-4 sm:p-6 lg:p-10 bg-dc-50 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-dc-300 flex flex-col justify-start items-center gap-5 overflow-hidden">
              {/* User Message */}
              <div class="chat-user-message self-stretch pl-2 sm:pl-6 lg:pl-12 flex flex-col justify-end items-end gap-2">
                <div class="self-stretch text-right text-dc-400 text-sm sm:text-base font-normal font-inter leading-none">
                  12:23 PM
                </div>
                <div class="w-full max-w-[500px] p-3 sm:p-4 lg:p-6 bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex flex-col justify-center items-start">
                  <div class="self-stretch text-dc-600 text-base sm:text-lg font-medium font-main leading-relaxed">
                    Create a spreadsheet based on the recent Slack conversations
                    about our main project
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div class="chat-ai-response-1 self-stretch pr-2 sm:pr-6 lg:pr-12 flex flex-col justify-end items-start gap-2">
                <div class="self-stretch text-dc-400 text-sm sm:text-base font-normal font-inter leading-none">
                  12:24 PM
                </div>
                <div class="self-stretch text-dc-600 text-base sm:text-lg font-medium font-main leading-relaxed">
                  I'll need to connect with the necessary integrations, just a
                  moment!
                </div>
              </div>

              {/* Integration Status */}
              <div class="chat-integration-status self-stretch flex flex-col justify-start items-start gap-1">
                {integrationStatus.map((integration, index) => (
                  <div
                    key={index}
                    class="self-stretch px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 rounded-[51.81px] outline outline-1 outline-offset-[-1px] outline-dc-300 flex justify-between items-center"
                  >
                    <div class="flex justify-start items-center gap-3">
                      <Image
                        src={integration.icon}
                        alt={integration.service}
                        width={24}
                        height={24}
                        class="w-5 sm:w-6 h-5 sm:h-6 object-contain"
                        loading="lazy"
                        fetchPriority="low"
                      />
                      <div class="text-dc-700 text-base sm:text-lg font-medium font-main leading-relaxed">
                        {integration.service}
                      </div>
                    </div>
                    <div class="w-10 h-10 px-2 py-2 rounded-full flex justify-center items-center gap-2">
                      {integration.status === "connected"
                        ? (
                          <Icon
                            name="check_circle"
                            size="medium"
                            class="text-green-500"
                          />
                        )
                        : integration.status === "connecting"
                        ? (
                          <div class="w-5 h-5 border-2 border-dc-400 border-t-transparent rounded-full animate-spin" />
                        )
                        : <div class="w-5 h-5 rounded-full bg-red-400" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Response 2 */}
              <div class="chat-ai-response-2 self-stretch pr-2 sm:pr-6 lg:pr-12 flex flex-col justify-end items-start gap-2">
                <div class="self-stretch text-dc-400 text-sm sm:text-base font-normal font-inter leading-none">
                  12:25 PM
                </div>
                <div class="self-stretch text-dc-600 text-base sm:text-lg font-medium font-main leading-relaxed">
                  I found the relevant information. Creating the spreadsheet in
                  Google Drive now.
                </div>
              </div>

              {/* Final Result */}
              <div class="chat-final-result self-stretch pr-2 sm:pr-6 lg:pr-12 flex flex-col justify-end items-start gap-2">
                <div class="self-stretch text-dc-400 text-sm sm:text-base font-normal font-inter leading-none">
                  {finalResult.time}
                </div>
                <div class="p-3 sm:p-4 lg:p-6 rounded-2xl outline outline-1 outline-offset-[-1px] outline-dc-300 flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div class="w-full flex justify-between items-center">
                    <div class="flex-1 flex justify-start items-center gap-1.5">
                      <Image
                        src={finalResult.serviceIcon}
                        alt={finalResult.serviceTitle}
                        width={14}
                        height={16}
                        class="w-3.5 h-4 object-contain"
                        loading="lazy"
                        fetchPriority="low"
                      />
                      <div class="text-dc-700 text-lg sm:text-xl font-medium font-inter leading-none">
                        {finalResult.serviceTitle}
                      </div>
                    </div>
                    <div class="w-8 h-8 p-2 rounded-full flex justify-center items-center gap-2">
                      <div class="w-4 h-4 bg-dc-700 rounded"></div>
                    </div>
                  </div>
                  <Image
                    src={finalResult.previewImage}
                    alt="Preview"
                    width={311}
                    height={117}
                    class="w-full sm:w-80 h-28 rounded-xl border-[0.52px] border-dc-300 object-cover"
                    loading="lazy"
                    fetchPriority="low"
                  />
                </div>
              </div>
            </div>

            {/* Right Cards Container */}
            <div class="w-full lg:w-80 self-stretch flex flex-col justify-center items-start gap-2 order-3">
              {/* Top Right Card - Single Image */}
              <div class="w-full lg:w-80 h-96 p-4 bg-primary-light rounded-[32px] flex flex-col justify-between items-center overflow-hidden">
                {/* Single Image */}
                <div class="relative w-full flex-1 flex justify-center items-center">
                  {topRightCard.image && (
                    <Image
                      src={topRightCard.image}
                      alt="Content generation"
                      width={238}
                      height={209}
                      class="max-w-full max-h-full object-contain"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  )}
                </div>

                {/* Card Text */}
                <div class="px-4 py-2">
                  <div class="text-primary-dark text-2xl lg:text-3xl font-medium font-main leading-tight">
                    {topRightCard.text}
                  </div>
                </div>
              </div>

              {/* Bottom Right Card with Character */}
              <div class="self-stretch flex-1 p-6 sm:p-8 lg:p-10 bg-primary-light rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[32px] rounded-br-[80px] sm:rounded-br-[160px] lg:rounded-br-[320px] flex justify-start items-end overflow-hidden relative min-h-[200px]">
                {/* Character Illustration - positioned at bottom */}
                {bottomRightCard.image && (
                  <div class="absolute right-0 bottom-0 w-60 sm:w-72 lg:w-80 h-40 sm:h-48 lg:h-56 overflow-hidden">
                    <Image
                      src={bottomRightCard.image}
                      alt="Character illustration"
                      width={320}
                      height={192}
                      class="w-full h-full object-contain object-bottom"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                )}

                {/* Card Text */}
                {bottomRightCard.text && (
                  <div class="w-full relative z-10 flex items-end">
                    <div class="text-primary-dark text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium font-main leading-tight max-w-[60%]">
                      {bottomRightCard.text}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* GSAP Animation Scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js">
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js">
      </script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", () => {
            function initializeGSAP() {
              if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
                
                let animationsStarted = false;
                
                // Viewport Detection
                const section = document.getElementById("${sectionId}");
                if (section) {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting && !animationsStarted) {
                          animationsStarted = true;
                          initializeAnimations();
                          observer.unobserve(entry.target);
                        }
                      });
                    },
                    {
                      threshold: 0.1,
                      rootMargin: "0px 0px -50px 0px",
                    }
                  );
                  
                  observer.observe(section);
                }
                
                function initializeAnimations() {
                  // Gentle floating animation for phone mockups only
                  gsap.to("#${sectionId} img[alt*='Phone mockup']", {
                    duration: 4,
                    y: -6,
                    ease: "power2.inOut",
                    yoyo: true,
                    repeat: -1,
                    stagger: 0.3,
                  });
                  
                  // Sequential chat message animation
                  const chatMessages = [
                    "#${sectionId} .chat-user-message",
                    "#${sectionId} .chat-ai-response-1", 
                    "#${sectionId} .chat-integration-status",
                    "#${sectionId} .chat-ai-response-2",
                    "#${sectionId} .chat-final-result"
                  ];
                  
                  // Hide all messages initially
                  gsap.set(chatMessages, { opacity: 0, y: 30 });
                  
                  // Create timeline for sequential message appearance
                  const chatTimeline = gsap.timeline({ delay: 0.8 });
                  
                  chatMessages.forEach((selector, index) => {
                    chatTimeline.to(selector, {
                      duration: 0.6,
                      opacity: 1,
                      y: 0,
                      ease: "power2.out",
                    }, index * 0.8); // 0.8s delay between each message
                  });
                }
                
              } else {
                setTimeout(initializeGSAP, 100);
              }
            }
            
            initializeGSAP();
          });
        `,
        }}
      >
      </script>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: {
    text: "Meet deco.chat",
    iconName: "info",
    variant: "primary-light",
  },
  title:
    "deco.chat is the platform that allows everyone to solve problems and automate daily work with AI Agents",
  aiModels: [
    { name: "OpenAI GPT", logo: "https://placehold.co/24x24" },
    { name: "Claude", logo: "https://placehold.co/24x24" },
    { name: "Gemini", logo: "https://placehold.co/24x24" },
    { name: "Llama", logo: "https://placehold.co/24x24" },
    { name: "Mistral", logo: "https://placehold.co/24x24" },
    { name: "Cohere", logo: "https://placehold.co/24x24" },
    { name: "Perplexity", logo: "https://placehold.co/24x24" },
    { name: "Groq", logo: "https://placehold.co/24x24" },
    { name: "Together", logo: "https://placehold.co/24x24" },
    { name: "Replicate", logo: "https://placehold.co/24x24" },
    { name: "Hugging Face", logo: "https://placehold.co/24x24" },
    { name: "Stability AI", logo: "https://placehold.co/24x24" },
  ],
  aiModelsText: "Access over 60 AI models through one unified API",
  integrationStatus: [
    {
      service: "Slack",
      icon: "https://placehold.co/24x24",
      status: "connected",
    },
    {
      service: "Google Drive",
      icon: "https://placehold.co/24x24",
      status: "connecting",
    },
  ],
  finalResult: {
    time: "12:26 PM",
    serviceTitle: "Sheets",
    serviceIcon: "https://placehold.co/14x16",
    previewImage: "https://placehold.co/311x117",
  },
  topRightCard: {
    text: "Text, image, video and code (app) generation",
    images: [
      "https://placehold.co/127x186",
      "https://placehold.co/127x186",
    ],
  },
  bottomRightCard: {
    text: "Advanced AI capabilities for complex workflows",
    image: "https://placehold.co/320x192",
  },
  backgroundColor: "green-950",
};

export function Preview() {
  return <Statement {...defaultProps} />;
}
