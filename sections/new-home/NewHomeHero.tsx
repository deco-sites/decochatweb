import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "../../components/ui/Button.tsx";
import Icon from "../../components/ui/Icon.tsx";
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
}

export default function NewHomeHero({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  inputPlaceholder = defaultProps.inputPlaceholder,
  inputIcon = defaultProps.inputIcon,
  chatWebhookUrl = defaultProps.chatWebhookUrl,
  buttonText = defaultProps.buttonText,
  buttonHref = defaultProps.buttonHref,
  chatMessage = defaultProps.chatMessage,
  integrationIcons = defaultProps.integrationIcons,
}: Props) {
  const sectionId = `new-home-hero-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section class="w-full bg-dc-50 p-2 pb-0">
      <div
        id={sectionId}
        class="w-full bg-dc-50 rounded-3xl relative overflow-hidden"
      >
        <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-24 flex flex-col items-center gap-16 lg:gap-32">
          {/* Header Content */}
          <div class="w-full max-w-[850px] flex flex-col items-center gap-16">
            {/* Title and Subtitle */}
            <div class="flex flex-col items-center gap-6 text-center">
              <h1 class="text-dc-800 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-tight">
                {title}
              </h1>
              <p class="text-dc-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </div>

            {/* Search Input + Button */}
            <div class="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              <div class="w-full sm:w-96 p-2 bg-dc-50 rounded-2xl shadow-[0px_3px_7px_0px_rgba(39,37,36,0.12),0px_12px_12px_0px_rgba(39,37,36,0.10),0px_27px_16px_0px_rgba(39,37,36,0.06),0px_49px_19px_0px_rgba(39,37,36,0.02),0px_76px_21px_0px_rgba(39,37,36,0.00)] outline outline-1 outline-offset-[-0.5px] outline-dc-200 flex items-center gap-2">
                <form
                  id={`chat-form-${sectionId}`}
                  class="flex-1 px-4 py-2 rounded-full flex items-center"
                >
                  <input
                    id={`chat-input-${sectionId}`}
                    type="text"
                    placeholder={inputPlaceholder}
                    class="w-full bg-transparent text-dc-400 text-base font-normal leading-tight placeholder:text-dc-400 outline-none border-none focus:outline-none focus:ring-0"
                  />
                </form>
                <div class="relative">
                  <button
                    id={`chat-button-${sectionId}`}
                    type="button"
                    class="w-8 h-8 rounded-full outline outline-[0.16px] outline-offset-[-0.08px] outline-dc-50 bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors duration-200"
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

          {/* Central Visual with Circles and Icons */}
          <div class="relative w-full h-[400px] md:h-[500px]">
            {/* Main Circle with Dithering Animation */}
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] z-10">
              <div
                id={`circle-container-${sectionId}`}
                class="relative w-full h-full rounded-full overflow-hidden shadow-[0px_0px_90px_10px_rgba(208,236,26,0.30)] shadow-[inset_0px_2px_80px_20px_rgba(0,0,0,0.10)] outline outline-[5px] outline-offset-[-2.5px] outline-dc-50"
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

            {/* Concentric Rings - Adjusted for new circle size and position */}
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[650px] h-[650px] md:w-[850px] md:h-[850px] lg:w-[1050px] lg:h-[1050px] opacity-30 rounded-full outline outline-[5.25px] outline-offset-[-2.62px] outline-primary-light pointer-events-none">
            </div>
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px] opacity-20 rounded-full outline outline-[5.51px] outline-offset-[-2.76px] outline-primary-light pointer-events-none">
            </div>
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[750px] h-[750px] md:w-[950px] md:h-[950px] lg:w-[1150px] lg:h-[1150px] opacity-10 rounded-full outline outline-[5.79px] outline-offset-[-2.89px] outline-primary-light pointer-events-none">
            </div>
            <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px] opacity-5 rounded-full outline outline-[6.08px] outline-offset-[-3.04px] outline-primary-light pointer-events-none">
            </div>

            {/* Chat Bubble - Centered in the visible part of the circle */}
            <div class="absolute left-1/2 bottom-8 md:bottom-12 lg:bottom-16 transform -translate-x-1/2 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] p-6 bg-dc-50 rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[32px] z-30">
              <p
                id={`chat-message-${sectionId}`}
                class="text-dc-500 text-base md:text-lg font-normal leading-normal"
              >
                {chatMessage}
              </p>
            </div>

            {/* Integration Icons */}
            {integrationIcons.map((icon, index) => {
              const sizeClasses = {
                small: "w-9 h-9",
                medium: "w-14 h-14",
                large: "w-20 h-20",
              };

              const iconSizeClasses = {
                small: "w-6 h-6",
                medium: "w-11 h-11",
                large: "w-16 h-16",
              };

              const size = icon.size || "medium";

              // Some icons behind the circle (z-5), others in front (z-20)
              const zIndex = (icon.positionY > 60 ||
                  (icon.positionX < 20 && icon.positionY > 50))
                ? "z-5"
                : "z-20";

              return (
                <div
                  key={index}
                  class={`absolute ${
                    sizeClasses[size]
                  } ${zIndex} transform -translate-x-1/2 -translate-y-1/2 animate-float-${
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
                  <div class="w-full h-full bg-white rounded-xl md:rounded-2xl outline outline-1 md:outline-2 outline-offset-[-1px] md:outline-offset-[-2px] outline-dc-100 flex items-center justify-center overflow-hidden shadow-md">
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
};

export function Preview() {
  return <NewHomeHero {...defaultProps} />;
}
