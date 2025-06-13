import type { ImageWidget } from "apps/admin/widgets.ts";
import type { BlogPost } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BlogAuthorTag from "../components/blog/BlogAuthorTag.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useScript } from "@deco/deco/hooks";

/**
 * @titleBy title
 */
interface ChatMessage {
  /**
   * @title Tipo da mensagem
   * @description Tipo da mensagem no chat
   */
  type: "user" | "agent" | "system";
  /**
   * @title Conteúdo
   * @description Texto da mensagem
   */
  content: string;
  /**
   * @title Avatar
   * @description URL do avatar (opcional, para mensagens do agente)
   */
  avatar?: string;
}

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
interface UseCaseAgent {
  /**
   * @title Título do agente
   * @description Título do caso de uso/agente
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição do que o agente faz (aparece no hover)
   */
  description: string;
  /**
   * @title Integrações
   * @description Lista de integrações que o agente usa
   */
  integrations: Integration[];
  /**
   * @title Mensagens do chat
   * @description Conversa de exemplo do agente
   */
  conversation: {
    /**
     * @title Tipo
     * @description Tipo da mensagem (user ou agent)
     */
    type: "user" | "agent";
    /**
     * @title Mensagem
     * @description Texto da mensagem
     */
    message: string;
  }[];
}

/**
 * @titleBy title
 */
interface UseCase {
  /**
   * @title Tag do caso de uso
   * @description Tag que aparece no topo do cartão
   */
  tag: string;
  /**
   * @title Título
   * @description Título principal do caso de uso
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição do caso de uso
   */
  description: string;
  /**
   * @title Nome do agente
   * @description Nome que aparece no cabeçalho do chat
   */
  agentName: string;
  /**
   * @title Logo do agente
   * @description Logo que aparece no chat (ex: Google Drive, IPSUM Agent)
   */
  agentLogo?: ImageWidget;
  /**
   * @title Imagem do produto
   * @description Imagem do produto mostrada no chat (apenas para customer-facing)
   */
  productImage?: ImageWidget;
  /**
   * @title Mensagens do chat
   * @description Lista de mensagens que aparecem no chat
   */
  messages: ChatMessage[];
  /**
   * @title Status de conexão
   * @description Texto que aparece na barra de status (ex: "Connecting to Google Drive...")
   */
  connectionStatus?: string;
  /**
   * @title Ícone de status
   * @description URL do ícone que aparece na barra de status
   */
  statusIcon?: ImageWidget;
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
   * @title Descrição
   * @description Descrição da seção
   */
  description: string;
  /**
   * @title Cartões de agentes
   * @description Lista de agentes AI (máx 5 + 1 CTA)
   * @maxItems 5
   */
  agentCards: AgentCard[];
  /**
   * @title Link do CTA
   * @description Link para criar seu próprio agente
   */
  ctaLink?: string;
}

export default function UseCases({
  eyebrow = defaultProps.eyebrow,
  title = "Your next hire isn't human",
  description =
    "See how AI agents can help with your daily work and how you connect with customers.",
  agentCards = defaultProps.agentCards,
  ctaLink = "/create-agent",
}: Props) {
  const sectionId = `use-cases-${Math.random().toString(36).substr(2, 9)}`;

  // Default use cases if none provided via CMS
  const defaultUseCases: UseCaseAgent[] = [
    {
      title: "Meeting-to-Proposal Assistant",
      description: "Turn client call transcripts into ready-to-send proposals.",
      integrations: [
        {
          name: "Google Meet",
          icon: "https://placehold.co/24x24/4285f4/ffffff?text=GM",
        },
        {
          name: "Drive",
          icon: "https://placehold.co/24x24/0f9d58/ffffff?text=GD",
        },
        {
          name: "CRM",
          icon: "https://placehold.co/24x24/ff6d01/ffffff?text=CRM",
        },
      ],
      conversation: [
        {
          type: "user",
          message: "Turn my client call from today into a proposal",
        },
        {
          type: "agent",
          message:
            "Found your Google Meet transcript. Creating proposal with pricing from CRM... Done! 📄",
        },
      ],
    },
    {
      title: "Recruiting Assistant",
      description:
        "Answers candidate questions and updates your ATS—all in Slack.",
      integrations: [
        {
          name: "Slack",
          icon: "https://placehold.co/24x24/4a154b/ffffff?text=S",
        },
        {
          name: "Greenhouse",
          icon: "https://placehold.co/24x24/00a76f/ffffff?text=GH",
        },
      ],
      conversation: [
        { type: "user", message: "When do I hear back about the interview?" },
        {
          type: "agent",
          message:
            "Hi Sarah! Your interview is being reviewed. I'll update you by Thursday. Also updating your status in our ATS.",
        },
      ],
    },
    {
      title: "Interview Scheduler",
      description:
        "Finds the best interviewer match and books the slot in seconds.",
      integrations: [
        {
          name: "Calendars",
          icon: "https://placehold.co/24x24/ea4335/ffffff?text=📅",
        },
        {
          name: "ATS",
          icon: "https://placehold.co/24x24/673ab7/ffffff?text=ATS",
        },
        {
          name: "Email",
          icon: "https://placehold.co/24x24/1976d2/ffffff?text=✉️",
        },
      ],
      conversation: [
        { type: "user", message: "Schedule Sarah's final interview" },
        {
          type: "agent",
          message:
            "Found the best match: Alex (React expert). Booked Tuesday 2PM. Calendar invites sent! ✅",
        },
      ],
    },
    {
      title: "Refund Processor",
      description:
        "Captures, validates, and logs refund requests automatically.",
      integrations: [
        {
          name: "Zendesk",
          icon: "https://placehold.co/24x24/03363d/ffffff?text=Z",
        },
        {
          name: "Sheets",
          icon: "https://placehold.co/24x24/0f9d58/ffffff?text=📊",
        },
        {
          name: "ERP",
          icon: "https://placehold.co/24x24/9c27b0/ffffff?text=ERP",
        },
      ],
      conversation: [
        { type: "user", message: "I need a refund for order #12345" },
        {
          type: "agent",
          message:
            "Validated your order. Refund approved and logged. You'll see $89.99 back in 3-5 days. 💳",
        },
      ],
    },
    {
      title: "Order & Refund Concierge",
      description: "Guides customers through returns and refund status 24/7.",
      integrations: [
        {
          name: "Shopify",
          icon: "https://placehold.co/24x24/95bf47/ffffff?text=S",
        },
        {
          name: "Zendesk",
          icon: "https://placehold.co/24x24/03363d/ffffff?text=Z",
        },
        {
          name: "Email",
          icon: "https://placehold.co/24x24/1976d2/ffffff?text=✉️",
        },
      ],
      conversation: [
        { type: "user", message: "Where's my refund from last week?" },
        {
          type: "agent",
          message:
            "Your refund was processed on Monday. Shopify shows it's pending with your bank. Should arrive tomorrow! 📦",
        },
      ],
    },
    {
      title: "Product Advisor",
      description: "Recommends the right product or size to boost conversion.",
      integrations: [
        {
          name: "E-commerce API",
          icon: "https://placehold.co/24x24/ff9800/ffffff?text=🛒",
        },
        {
          name: "Chat",
          icon: "https://placehold.co/24x24/2196f3/ffffff?text=💬",
        },
      ],
      conversation: [
        { type: "user", message: "I'm 5'8\", what size jeans should I get?" },
        {
          type: "agent",
          message:
            'Based on your height and our size data, I recommend Medium (32" inseam). 95% customer satisfaction! 👖',
        },
      ],
    },
    {
      title: "24/7 Support Concierge",
      description: "Answers FAQs, escalates edge cases, hands off to humans.",
      integrations: [
        {
          name: "Slack",
          icon: "https://placehold.co/24x24/4a154b/ffffff?text=S",
        },
        {
          name: "Helpdesk",
          icon: "https://placehold.co/24x24/607d8b/ffffff?text=🎧",
        },
      ],
      conversation: [
        { type: "user", message: "My app crashed and I lost my work!" },
        {
          type: "agent",
          message:
            "Oh no! Let me check auto-saves... Found a backup from 2 mins ago. Escalating to dev team for the crash. 🚨",
        },
      ],
    },
  ];

  const displayUseCases = defaultUseCases;

  // Helper function to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch (e) {
      return dateString;
    }
  };

  // Helper function to render categories
  const renderCategories = (post: BlogPost) => {
    if (!post.categories?.length) return null;

    return (
      <div class="flex flex-wrap justify-start items-start gap-2">
        {post.categories.slice(0, 2).map((category, idx) => (
          <a
            key={idx}
            href={`/blog/${category.slug}`}
            class="px-4 py-1 bg-dc-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-dc-200 flex justify-center items-center hover:bg-dc-100 transition-colors"
          >
            <div class="justify-center text-dc-600 text-base font-semibold font-main leading-normal">
              {category.name}
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div class="w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-dc-50 flex flex-col justify-start items-center gap-14">
      <div class="w-full max-w-[1440px] flex flex-col justify-start items-center gap-14">
        {/* Header */}
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-10">
          <FadeUp>
            <div class="flex flex-col justify-start items-center gap-6">
              <Eyebrow
                variant={eyebrow?.variant || "primary-light"}
                iconName={eyebrow?.iconName || "info"}
                text={eyebrow?.text || "Use Cases"}
              />
              <h2 class="text-center text-dc-800 text-3xl md:text-5xl font-semibold font-main leading-tight">
                {title}
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <BodyText
              align="center"
              color="dc-500"
              size="lg"
              weight="medium"
              lineHeight="relaxed"
            >
              {description}
            </BodyText>
          </FadeUp>
        </div>

        {/* Category Headers */}
        <FadeUp delay={300}>
          <div class="w-full flex flex-col justify-start items-start gap-4">
            <div class="w-full flex flex-col sm:flex-row justify-start items-start gap-4">
              <div class="w-full sm:flex-1 p-2 bg-dc-100 rounded-xl flex justify-start items-center gap-4 overflow-hidden">
                <div class="w-12 h-12 bg-primary-dark rounded-xl flex justify-center items-center">
                  <Icon name="work" size="medium" class="text-primary-light" />
                </div>
                <div class="text-dc-900 text-xl md:text-2xl font-semibold font-main leading-7">
                  Internal work more productive
                </div>
              </div>
              <div class="w-full sm:flex-1 p-2 bg-dc-100 rounded-xl flex justify-start items-center gap-4 overflow-hidden">
                <div class="w-12 h-12 bg-primary-dark rounded-xl flex justify-center items-center">
                  <Icon name="chat" size="medium" class="text-primary-light" />
                </div>
                <div class="text-dc-900 text-xl md:text-2xl font-semibold font-main leading-7">
                  Customer interactions AI chats
                </div>
              </div>
            </div>

            {/* Agent Cards Grid */}
            <div
              id="use-cases-section"
              class="w-full relative"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
                {/* Agent Cards */}
                {agentCards.map((agent, index) => (
                  <FadeUp delay={500 + index * 100}>
                    <div
                      class="group relative p-6 sm:p-10 bg-dc-100 rounded-xl flex flex-col justify-start items-start gap-8 sm:gap-14 overflow-hidden cursor-pointer transition-all duration-300 agent-card h-[390px]"
                      data-agent-index={index}
                    >
                      {/* Header */}
                      <div class="w-full flex flex-col justify-start items-start gap-6">
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
                          <div class="flex justify-start items-center gap-0">
                            {agent.integrations.map((integration, idx) => (
                              <div
                                class="w-8 h-8 bg-white rounded-md shadow-sm border border-slate-300/20 overflow-hidden flex items-center justify-center"
                                title={integration.name}
                              >
                                <Image
                                  src={integration.icon}
                                  alt={integration.name}
                                  width={20}
                                  height={20}
                                  class="w-5 h-5 object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Title and Description */}
                        <div class="w-full flex flex-col justify-start items-start gap-2.5">
                          <h3 class="text-dc-800 text-2xl font-bold font-main leading-7">
                            {agent.title}
                          </h3>
                          {/* Description that slides down on hover (desktop) or shows always (mobile) */}
                          <div class="description-content opacity-100 sm:opacity-0 max-h-20 sm:max-h-0 overflow-hidden transition-all duration-500 ease-out sm:group-hover:opacity-100 sm:group-hover:max-h-20">
                            <p class="text-dc-500 text-lg font-medium font-main leading-relaxed">
                              {agent.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Chat Interface */}
                      <div class="w-full h-[800px] p-6 bg-dc-50 rounded-3xl border border-dc-300 flex flex-col justify-start items-center gap-6 overflow-hidden flex-shrink-0">
                        {/* Chat Header */}
                        <div class="w-full flex justify-start items-center gap-2.5">
                          <div class="text-dc-300 text-base font-medium font-main leading-normal">
                            New chat
                          </div>
                          <div class="flex-1 h-px border-t border-dc-300"></div>
                        </div>

                        {/* Messages */}
                        <div class="w-full flex flex-col justify-start items-start gap-1">
                          {agent.messages.map((message, msgIdx) => (
                            <div
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
                                <p class="text-dc-500 text-base font-medium font-main leading-normal">
                                  {message.content}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}

                {/* Create Your Own CTA Card */}
                <FadeUp delay={500 + agentCards.length * 100}>
                  <a
                    href={ctaLink}
                    class="group relative p-6 sm:p-10 rounded-xl border-2 border-dashed border-dc-300 flex flex-col justify-start items-start gap-8 sm:gap-14 overflow-hidden cursor-pointer transition-all duration-300 hover:bg-primary-light hover:border-primary-light hover:text-primary-dark cta-card h-[390px]"
                  >
                    {/* Header */}
                    <div class="w-full flex flex-col justify-start items-start gap-6">
                      <div class="w-full flex justify-start items-center">
                        <div class="w-10 h-10 bg-dc-300 rounded-xl flex justify-center items-center group-hover:bg-primary-dark transition-colors">
                          <Icon
                            name="add"
                            size="medium"
                            class="text-dc-600 group-hover:text-primary-light"
                          />
                        </div>
                      </div>

                      <div class="w-full flex flex-col justify-start items-start gap-2.5">
                        <h3 class="text-dc-800 text-2xl font-bold font-main leading-7 group-hover:text-primary-dark transition-colors">
                          Create your own
                        </h3>
                        <p class="text-dc-500 text-lg font-medium font-main leading-relaxed group-hover:text-primary-dark transition-colors">
                          Build your own custom agent from scratch with our
                          powerful builder.
                        </p>
                      </div>
                    </div>

                    {/* Empty Chat Interface */}
                    <div class="w-full h-[800px] p-6 bg-dc-50 rounded-3xl border border-dc-300 flex flex-col justify-start items-center gap-6 group-hover:bg-primary-light/20 group-hover:border-primary-dark transition-colors flex-shrink-0">
                      <div class="w-full flex justify-start items-center gap-2.5">
                        <div class="text-dc-300 text-base font-medium font-main leading-normal group-hover:text-primary-dark transition-colors">
                          New chat
                        </div>
                        <div class="flex-1 h-px border-t border-dc-300 group-hover:border-primary-dark transition-colors">
                        </div>
                      </div>
                    </div>
                  </a>
                </FadeUp>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* GSAP Animation Script */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        defer
      >
      </script>
      <script
        dangerouslySetInnerHTML={{
          __html: useScript(() => {
            function initializeGSAP() {
              if (typeof (globalThis as any).gsap !== "undefined") {
                let animationsStarted = false;
                const gsapLib = (globalThis as any).gsap;

                // Setup viewport observer
                const section = document.getElementById("use-cases-section");
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

                function setupHoverAnimations() {
                  // Agent card hover animations (desktop only)
                  const agentCards = document.querySelectorAll(".agent-card");
                  const isMobile = window.innerWidth < 640;

                  agentCards.forEach((card) => {
                    const description = card.querySelector(
                      ".description-content",
                    );
                    const chatInterface = card.querySelector(".bg-dc-50");

                    // Only add hover animations on desktop
                    if (!isMobile) {
                      card.addEventListener("mouseenter", () => {
                        if (animationsStarted) {
                          // Chat moves down
                          gsapLib.to(chatInterface, {
                            duration: 0.5,
                            y: 20,
                            ease: "power2.out",
                          });
                        }
                      });

                      card.addEventListener("mouseleave", () => {
                        if (animationsStarted) {
                          // Chat returns to position
                          gsapLib.to(chatInterface, {
                            duration: 0.5,
                            y: 0,
                            ease: "power2.out",
                          });
                        }
                      });
                    }
                  });

                  // CTA card doesn't need special hover animations
                }
              } else {
                setTimeout(initializeGSAP, 100);
              }
            }

            document.addEventListener("DOMContentLoaded", initializeGSAP);
          }),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: {
    text: "Use Cases",
    iconName: "info",
    variant: "primary-light",
  },
  title: "Your next hire isn't human",
  description:
    "See how AI agents can help with your daily work and how you connect with customers.",
  agentCards: [
    {
      avatar: "https://placehold.co/40x40/d0ec1a/07401a?text=👤",
      title: "Meeting-to-Proposal Assistant",
      description:
        "Let AI handle routine tasks and break down complex work into simple steps.",
      integrations: [
        {
          name: "Google Meet",
          icon: "https://placehold.co/20x20/4285f4/ffffff?text=GM",
        },
        {
          name: "Google Drive",
          icon: "https://placehold.co/20x20/0f9d58/ffffff?text=GD",
        },
        {
          name: "CRM",
          icon: "https://placehold.co/20x20/ff6d01/ffffff?text=CRM",
        },
        {
          name: "Calendar",
          icon: "https://placehold.co/20x20/ea4335/ffffff?text=📅",
        },
      ],
      messages: [
        { type: "user", content: "Draft a proposal from today's client call." },
        {
          type: "agent",
          content:
            "Hi Sarah! Your interview is being reviewed. I'll update you by Thursday. Also updating your status in our ATS.",
        },
      ],
    },
    {
      avatar: "https://placehold.co/40x40/d0ec1a/07401a?text=👤",
      title: "Recruiting Assistant",
      description:
        "Answers candidate questions and updates your ATS—all in Slack.",
      integrations: [
        {
          name: "Google Meet",
          icon: "https://placehold.co/20x20/4285f4/ffffff?text=GM",
        },
        {
          name: "Slack",
          icon: "https://placehold.co/20x20/4a154b/ffffff?text=S",
        },
        {
          name: "ATS",
          icon: "https://placehold.co/20x20/673ab7/ffffff?text=ATS",
        },
        {
          name: "Email",
          icon: "https://placehold.co/20x20/1976d2/ffffff?text=✉️",
        },
      ],
      messages: [
        { type: "user", content: "Give me the summaries of all candidates" },
        {
          type: "agent",
          content:
            "Hi Sarah! Your interview is being reviewed. I'll update you by Thursday. Also updating your status in our ATS.",
        },
      ],
    },
    {
      avatar: "https://placehold.co/40x40/d0ec1a/07401a?text=👤",
      title: "Interview Scheduler",
      description:
        "Finds the best interviewer match and books the slot in seconds.",
      integrations: [
        {
          name: "Google Meet",
          icon: "https://placehold.co/20x20/4285f4/ffffff?text=GM",
        },
        {
          name: "Slack",
          icon: "https://placehold.co/20x20/4a154b/ffffff?text=S",
        },
        {
          name: "ATS",
          icon: "https://placehold.co/20x20/673ab7/ffffff?text=ATS",
        },
        {
          name: "Email",
          icon: "https://placehold.co/20x20/1976d2/ffffff?text=✉️",
        },
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
      title: "Refund Processor",
      description:
        "Captures, validates, and logs refund requests automatically.",
      integrations: [
        {
          name: "Google Meet",
          icon: "https://placehold.co/20x20/4285f4/ffffff?text=GM",
        },
        {
          name: "Slack",
          icon: "https://placehold.co/20x20/4a154b/ffffff?text=S",
        },
        {
          name: "ATS",
          icon: "https://placehold.co/20x20/673ab7/ffffff?text=ATS",
        },
        {
          name: "Email",
          icon: "https://placehold.co/20x20/1976d2/ffffff?text=✉️",
        },
      ],
      messages: [
        { type: "user", content: "Refund order #4567, damaged item" },
        {
          type: "agent",
          content:
            "I'll set up a trigger for this repetitive task. I just need to connect the integrations, one moment.",
        },
      ],
    },
    {
      avatar: "https://placehold.co/40x40/a595ff/151042?text=👤",
      title: "Pet Concierge",
      description:
        "Guides pet owners through health questions and vet recommendations 24/7.",
      integrations: [
        {
          name: "Google Meet",
          icon: "https://placehold.co/20x20/4285f4/ffffff?text=GM",
        },
        {
          name: "Slack",
          icon: "https://placehold.co/20x20/4a154b/ffffff?text=S",
        },
        {
          name: "ATS",
          icon: "https://placehold.co/20x20/673ab7/ffffff?text=ATS",
        },
        {
          name: "Email",
          icon: "https://placehold.co/20x20/1976d2/ffffff?text=✉️",
        },
      ],
      messages: [
        { type: "user", content: "My dog keeps scratching, what could it be?" },
        {
          type: "agent",
          content:
            "I'll set up a trigger for this repetitive task. I just need to connect the integrations, one moment.",
        },
      ],
    },
  ],
  ctaLink: "/create-agent",
};

export function Preview() {
  return <UseCases {...defaultProps} />;
}
