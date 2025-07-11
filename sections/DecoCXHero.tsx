import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "../components/ui/Button.tsx";
import Icon from "../components/ui/Icon.tsx";
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

export interface Props {
  /**
   * @title Título principal
   * @description Título principal da seção hero
   */
  title: string;
  /**
   * @title Subtítulo
   * @description Texto descritivo que aparece abaixo do título
   */
  subtitle: string;
  /**
   * @title Placeholder do input
   * @description Texto placeholder que aparece no campo de busca
   */
  inputPlaceholder: string;
  /**
   * @title Ícone do input
   * @description Nome do ícone do Material Design para o botão do input (ex: search, send, arrow_forward)
   */
  inputIcon?: string;
  /**
   * @title URL do webhook do chat
   * @description URL do webhook para enviar mensagens do chat
   */
  chatWebhookUrl?: string;
  /**
   * @title Texto do botão
   * @description Texto que aparece no botão de ação
   */
  buttonText: string;
  /**
   * @title URL do botão
   * @description Link para onde o botão deve direcionar
   */
  buttonHref: string;
  /**
   * @title Mensagem do chat
   * @description Mensagem que aparece na bolha de chat central
   */
  chatMessage: string;
  /**
   * @title Ícones de integração
   * @description Lista de ícones que aparecem flutuando ao redor do círculo
   * @maxItems 6
   */
  integrationIcons: IntegrationIcon[];
  /**
   * @title Imagem do Hero
   * @description Imagem principal do hero (1440x495px recomendado)
   */
  heroImage?: ImageWidget;
}

export default function DecoCXHero({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  inputPlaceholder = defaultProps.inputPlaceholder,
  inputIcon = defaultProps.inputIcon,
  chatWebhookUrl = defaultProps.chatWebhookUrl,
  buttonText = defaultProps.buttonText,
  buttonHref = defaultProps.buttonHref,
  chatMessage = defaultProps.chatMessage,
  integrationIcons = defaultProps.integrationIcons,
  heroImage = defaultProps.heroImage,
}: Props) {
  const sectionId = `deco-cx-hero-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section class="w-full bg-dc-900 p-2 pb-0">
      <div
        id={sectionId}
        class="w-full bg-dc-900 rounded-3xl relative overflow-hidden"
      >
        {/* Header Content */}
        <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-24">
          <div class="w-full max-w-[850px] mx-auto flex flex-col items-center gap-16">
            {/* Title and Subtitle */}
            <div class="flex flex-col items-center gap-6 text-center">
              <h1 class="text-dc-50 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-tight">
                {title}
              </h1>
              <p class="text-dc-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </div>

            {/* Search Input + Button */}
            <div class="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              <div class="w-full sm:w-96 p-2 bg-dc-800 rounded-2xl shadow-[0px_3px_7px_0px_rgba(39,37,36,0.12),0px_12px_12px_0px_rgba(39,37,36,0.10),0px_27px_16px_0px_rgba(39,37,36,0.06),0px_49px_19px_0px_rgba(39,37,36,0.02),0px_76px_21px_0px_rgba(39,37,36,0.00)] outline outline-1 outline-offset-[-0.5px] outline-dc-700 flex items-center gap-2">
                <form
                  id={`chat-form-${sectionId}`}
                  class="flex-1 px-4 py-2 rounded-full flex items-center"
                >
                  <input
                    id={`chat-input-${sectionId}`}
                    type="text"
                    placeholder={inputPlaceholder}
                    class="w-full bg-transparent text-dc-300 text-base font-normal leading-tight placeholder:text-dc-400 outline-none border-none focus:outline-none focus:ring-0"
                  />
                </form>
                <div class="relative">
                  <button
                    id={`chat-button-${sectionId}`}
                    type="button"
                    class="w-8 h-8 rounded-full outline outline-[0.16px] outline-offset-[-0.08px] outline-dc-800 bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors duration-200"
                  >
                    {inputIcon
                      ? (
                        <Icon
                          name={inputIcon}
                          size="small"
                          class="text-primary-dark"
                        />
                      )
                      : <div class="w-4 h-4 bg-primary-dark rounded-sm"></div>}
                  </button>
                </div>
              </div>

              <Button
                href={buttonHref}
                variant="primary"
                size="medium"
                className="w-full sm:w-auto h-12"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image or Placeholder - Max Width 1440px */}
        <div class="w-full flex justify-center">
          <div class="w-full max-w-[1440px] h-[495px] overflow-hidden">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="Hero image"
                width={1440}
                height={495}
                class="w-full h-full object-cover"
                loading="lazy"
                fetchPriority="high"
              />
            ) : (
              <div class="w-full h-full bg-dc-800 flex items-center justify-center text-center text-dc-400">
                <div>
                  <div class="w-16 h-16 bg-dc-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name="image" size="large" class="text-dc-400" />
                  </div>
                  <p class="text-lg font-medium">Hero Image Placeholder</p>
                  <p class="text-sm mt-1">1440 x 495 pixels</p>
                  <p class="text-xs mt-2 opacity-75">Configure a imagem via CMS</p>
                </div>
              </div>
            )}
          </div>
        </div>



        {/* Chat Input Handler Script */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: useScript((sectionId: string) => {
              console.log("Chat script loading for section:", sectionId);

              const form = document.getElementById(`chat-form-${sectionId}`);
              const input = document.getElementById(
                `chat-input-${sectionId}`,
              ) as HTMLInputElement;
              const button = document.getElementById(
                `chat-button-${sectionId}`,
              );

              console.log("Elements found:", { form, input, button });

              if (!form || !input || !button) {
                console.error("Missing elements for chat functionality");
                return;
              }

              const handleSubmit = (e: Event) => {
                e.preventDefault();
                const message = input.value.trim();
                console.log("Handling submit:", message);
                console.log(
                  "openChatDrawer function:",
                  (window as any).openChatDrawer,
                );

                if (message && (window as any).openChatDrawer) {
                  console.log("Opening chat drawer with message:", message);
                  (window as any).openChatDrawer(message);
                  input.value = "";
                } else if (message && !(window as any).openChatDrawer) {
                  console.error("openChatDrawer function not found on window");
                } else if (!message) {
                  console.log("Empty message, not opening chat");
                }
              };

              form.addEventListener("submit", handleSubmit);
              button.addEventListener("click", handleSubmit);

              // Also handle Enter key
              input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                  console.log("Enter key pressed");
                  handleSubmit(e);
                }
              });

              console.log("Chat input handlers set up successfully");
            }, sectionId),
          }}
        />

        {/* Chat Drawer Functionality Script */}
        {chatWebhookUrl && (
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: useScript(
                (sectionId: string, webhookUrl: string) => {
                  console.log("Chat Drawer: Initializing chat functionality");

                  // Get all elements
                  const chatDrawer = document.getElementById(
                    `chat-drawer-${sectionId}`,
                  );
                  const chatMinimized = document.getElementById(
                    `chat-minimized-${sectionId}`,
                  );
                  const chatBackdrop = document.getElementById(
                    `chat-backdrop-${sectionId}`,
                  );
                  const chatContainer = document.getElementById(
                    `chat-container-${sectionId}`,
                  );
                  const minimizeBtn = document.getElementById(
                    `minimize-chat-${sectionId}`,
                  );
                  const closeBtn = document.getElementById(
                    `close-chat-${sectionId}`,
                  );
                  const chatForm = document.getElementById(
                    `chat-form-inner-${sectionId}`,
                  );
                  const chatInput = document.getElementById(
                    `chat-input-inner-${sectionId}`,
                  ) as HTMLInputElement;
                  const chatMessages = document.getElementById(
                    `chat-messages-${sectionId}`,
                  );
                  const typingIndicator = document.getElementById(
                    `typing-indicator-${sectionId}`,
                  ) as HTMLElement | null;
                  const sendBtn = document.getElementById(
                    `chat-send-${sectionId}`,
                  ) as HTMLButtonElement | null;

                  if (
                    !chatDrawer || !chatMinimized || !chatBackdrop ||
                    !chatForm || !chatInput || !chatMessages || !chatContainer
                  ) {
                    console.error("Chat Drawer: Missing required elements");
                    return;
                  }

                  let isOpen = false;
                  let isMinimized = false;
                  let isLoading = false;

                  // Generate threadId to persist across the whole session
                  const threadId = `thread_${Date.now()}_${
                    Math.random().toString(36).substr(2, 9)
                  }`;

                  // Helper to build webhook URL with threadId param only once
                  const buildWebhookUrl = () => {
                    // If the base URL already contains threadId, replace it
                    if (webhookUrl.includes("threadId=")) {
                      return webhookUrl.replace(
                        /threadId=[^&]*/,
                        `threadId=${threadId}`,
                      );
                    }
                    return webhookUrl + (webhookUrl.includes("?") ? "&" : "?") +
                      `threadId=${threadId}`;
                  };

                  // Function to open chat
                  const openChat = (message?: string) => {
                    console.log(
                      "Chat Drawer: Opening chat with message:",
                      message,
                    );
                    isOpen = true;
                    isMinimized = false;
                    chatDrawer.classList.remove("hidden");
                    chatMinimized.classList.add("hidden");
                    chatBackdrop.classList.remove("hidden");

                    // Trigger slide-in animation
                    chatContainer?.classList.remove("translate-y-full");
                    chatContainer?.classList.add("translate-y-0");

                    // If a starter message was provided, send it immediately
                    if (message) {
                      // Ensure we don't double-send later
                      sendMessage(message);
                    } else {
                      chatInput.focus();
                    }
                  };

                  // Function to minimize chat
                  const minimizeChat = () => {
                    console.log("Chat Drawer: Minimizing chat");
                    isMinimized = true;
                    // Slide out then hide
                    chatContainer?.classList.remove("translate-y-0");
                    chatContainer?.classList.add("translate-y-full");
                    setTimeout(() => {
                      chatDrawer.classList.add("hidden");
                      chatMinimized.classList.remove("hidden");
                      chatBackdrop.classList.add("hidden");
                    }, 500); // Sync with CSS duration
                  };

                  // Function to close chat
                  const closeChat = () => {
                    console.log("Chat Drawer: Closing chat");
                    isOpen = false;
                    isMinimized = false;
                    // Slide out then fully hide
                    chatContainer?.classList.remove("translate-y-0");
                    chatContainer?.classList.add("translate-y-full");
                    setTimeout(() => {
                      chatDrawer.classList.add("hidden");
                      chatMinimized.classList.add("hidden");
                      chatBackdrop.classList.add("hidden");
                    }, 500);
                  };

                  // Function to add message to chat
                  const addMessage = (
                    content: string,
                    type: "user" | "agent",
                  ) => {
                    const messageDiv = document.createElement("div");
                    messageDiv.className = `flex ${
                      type === "user" ? "justify-end" : "justify-start"
                    }`;

                    const timestamp = new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    messageDiv.innerHTML = `
                    <div class="max-w-[80%] p-3 rounded-2xl ${
                      type === "user"
                        ? "bg-primary-dark text-white rounded-br-sm"
                        : "bg-dc-100 text-dc-800 rounded-bl-sm"
                    }">
                      <p class="text-sm leading-relaxed">${content}</p>
                      <p class="text-xs mt-1 ${
                      type === "user" ? "text-white/70" : "text-dc-500"
                    }">
                        ${timestamp}
                      </p>
                    </div>
                  `;

                    // Remove welcome message if exists
                    const welcomeMsg = chatMessages.querySelector(
                      ".text-center",
                    );
                    if (welcomeMsg) {
                      welcomeMsg.remove();
                    }

                    chatMessages.appendChild(messageDiv);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                  };

                  // Function to show typing indicator
                  const showTyping = () => {
                    typingIndicator?.classList.remove("hidden");
                    const typingDiv = document.createElement("div");
                    typingDiv.className = "flex justify-start typing-indicator";
                    typingDiv.innerHTML = `
                    <div class="bg-dc-100 p-3 rounded-2xl rounded-bl-sm">
                      <div class="flex space-x-1">
                        <div class="w-2 h-2 bg-dc-400 rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-dc-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                        <div class="w-2 h-2 bg-dc-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                      </div>
                    </div>
                  `;
                    chatMessages.appendChild(typingDiv);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                  };

                  // Function to hide typing indicator
                  const hideTyping = () => {
                    typingIndicator?.classList.add("hidden");
                    const typingDiv = chatMessages.querySelector(
                      ".typing-indicator",
                    );
                    if (typingDiv) {
                      typingDiv.remove();
                    }
                  };

                  // Function to send message
                  const sendMessage = async (message: string) => {
                    if (!message.trim() || isLoading) return;

                    console.log("Chat Drawer: Sending message:", message);

                    addMessage(message, "user");
                    chatInput.value = "";
                    isLoading = true;
                    if (sendBtn) sendBtn.disabled = true;
                    chatInput.disabled = true;

                    showTyping();

                    try {
                      const response = await fetch(buildWebhookUrl(), {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ message, sessionId: threadId }),
                      });

                      if (!response.ok) {
                        throw new Error("Failed to send message");
                      }

                      const data = await response.json();

                      // Simulate typing delay
                      setTimeout(() => {
                        hideTyping();
                        addMessage(
                          data.message ||
                            "Desculpe, não consegui processar sua mensagem.",
                          "agent",
                        );
                        isLoading = false;
                        if (sendBtn) sendBtn.disabled = false;
                        chatInput.disabled = false;
                        chatInput.focus();
                      }, 1000);
                    } catch (error) {
                      console.error(
                        "Chat Drawer: Error sending message:",
                        error,
                      );
                      hideTyping();
                      addMessage(
                        "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.",
                        "agent",
                      );
                      isLoading = false;
                      if (sendBtn) sendBtn.disabled = false;
                      chatInput.disabled = false;
                      chatInput.focus();
                    }
                  };

                  // Event listeners
                  minimizeBtn?.addEventListener("click", minimizeChat);
                  closeBtn?.addEventListener("click", closeChat);
                  chatBackdrop?.addEventListener("click", minimizeChat);
                  chatMinimized?.addEventListener("click", () => {
                    isMinimized = false;
                    openChat();
                  });

                  chatForm.addEventListener("submit", (e) => {
                    e.preventDefault();
                    sendMessage(chatInput.value);
                  });

                  // Expose openChat function globally
                  (window as any).openChatDrawer = openChat;
                  console.log(
                    "Chat Drawer: Function exposed to window:",
                    (window as any).openChatDrawer,
                  );

                  console.log("Chat Drawer: Initialization complete");
                },
                sectionId,
                chatWebhookUrl,
              ),
            }}
          />
        )}
      </div>

      {/* Chat Drawer */}
      {chatWebhookUrl && (
        <div
          id={`chat-drawer-${sectionId}`}
          class="fixed inset-0 z-50 flex items-end justify-center p-4 hidden"
        >
          <div
            id={`chat-container-${sectionId}`}
            class="w-full max-w-2xl h-[80vh] max-h-[700px] bg-white rounded-t-3xl flex flex-col overflow-hidden border border-dc-200 shadow-2xl transform translate-y-full transition-transform duration-500 ease-out"
          >
            {/* Header */}
            <div class="flex items-center justify-between p-6 bg-white border-b border-dc-200">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                  <Icon
                    name="smart_toy"
                    size="small"
                    class="text-primary-dark"
                  />
                </div>
                <div>
                  <h3 class="text-dc-800 font-semibold text-lg">
                    deco.chat Assistant
                  </h3>
                  <p
                    id={`typing-indicator-${sectionId}`}
                    class="text-dc-500 text-sm hidden"
                  >
                    Digitando...
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <button
                  id={`minimize-chat-${sectionId}`}
                  class="w-10 h-10 rounded-full bg-dc-100 hover:bg-dc-200 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="remove" size="small" class="text-dc-600" />
                </button>
                <button
                  id={`close-chat-${sectionId}`}
                  class="w-10 h-10 rounded-full bg-dc-100 hover:bg-dc-200 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="close" size="small" class="text-dc-600" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              id={`chat-messages-${sectionId}`}
              class="flex-1 p-6 overflow-y-auto space-y-4"
            >
              <div class="text-center text-dc-500 text-base py-12">
                <Icon
                  name="smart_toy"
                  size="large"
                  class="text-primary-dark mb-6 mx-auto"
                />
                <p class="text-lg font-medium text-dc-700 mb-2">
                  Olá! Sou o assistente da deco.chat.
                </p>
                <p>Como posso ajudar você hoje?</p>
              </div>
            </div>

            {/* Input */}
            <div class="p-6 border-t border-dc-200 bg-dc-50">
              <form id={`chat-form-inner-${sectionId}`} class="flex gap-3">
                <input
                  id={`chat-input-inner-${sectionId}`}
                  type="text"
                  placeholder={inputPlaceholder}
                  class="flex-1 px-6 py-4 border border-dc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent disabled:opacity-50 text-base bg-white"
                />
                <button
                  type="submit"
                  id={`chat-send-${sectionId}`}
                  class="w-14 h-14 bg-primary-dark text-white rounded-2xl flex items-center justify-center hover:bg-primary-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <Icon name="send" size="small" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Minimized Chat Button */}
      {chatWebhookUrl && (
        <button
          id={`chat-minimized-${sectionId}`}
          class="fixed bottom-6 right-6 w-72 h-16 bg-white border border-dc-200 rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 z-50 hidden"
        >
          <Icon name="smart_toy" size="small" class="text-primary-dark mr-3" />
          <span class="text-dc-800 font-medium text-base">
            deco.chat Assistant
          </span>
        </button>
      )}

      {/* Chat Backdrop */}
      {chatWebhookUrl && (
        <div
          id={`chat-backdrop-${sectionId}`}
          class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden"
        />
      )}
    </section>
  );
}

const defaultProps: Props = {
  title: "Centralize seus Agentes e Workflows de IA",
  subtitle:
    "Substitua sua stack complicada por uma plataforma open-source e um time que constrói com você do primeiro prompt à automação completa.",
  inputPlaceholder: "O que é deco.chat?",
  inputIcon: "send",
  chatWebhookUrl:
    "https://api.deco.chat/actors/Trigger/invoke/run?passphrase=undefined&deno_isolate_instance_id=/shared/deco.cx/Agents/a213785a-57b4-4800-a207-e408fb476841/triggers/632bce52-a316-43d0-a724-bd1de45d980b&output_tool=undefined?threadId=",
  buttonText: "Marcar uma demo",
  buttonHref: "#demo",
  chatMessage:
    "Você pode analisar nosso desempenho nas mídias sociais e criar um relatório todo primeiro trimestre?",
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
  heroImage: undefined,
};

export function Preview() {
  return <DecoCXHero {...defaultProps} />;
} 