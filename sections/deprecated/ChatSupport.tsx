import { useScript } from "deco/hooks/useScript.ts";
import Button from "../../components/ui/Button.tsx";
import Icon from "../../components/ui/Icon.tsx";

interface Props {
  /**
   * @title Agent Name
   * @description Name of your deco.chat agent
   */
  agentName?: string;
  /**
   * @title Webhook URL
   * @description Your deco.chat agent webhook URL
   */
  webhookUrl: string;
  /**
   * @title Welcome Message
   * @description Initial message shown to users
   */
  welcomeMessage?: string;
}

export default function ChatSupport({
  agentName = "Assistant",
  webhookUrl,
  welcomeMessage =
    "Hi! I'm here to help you learn about deco.chat. Ask me anything about our AI workspace!",
}: Props) {
  const chatId = `chat-bubble-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      {/* Chat Bubble Container */}
      <div
        id={chatId}
        class="fixed bottom-4 right-4 z-50 font-main"
        style="display: none;"
      >
        {/* Chat Window */}
        <div
          id="chat-window"
          class="mb-4 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-dc-200 flex-col overflow-hidden hidden"
        >
          {/* Header */}
          <div class="bg-primary-dark text-primary-light p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-primary-light rounded-[10.6667px] flex items-center justify-center">
                {/* Deco Logo SVG */}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  class="w-4 h-4"
                >
                  <path
                    d="M5.66828 16.6113C3.56088 16.6113 1.88736 15.8055 0.895644 14.3799C-0.158055 12.8923 -0.282019 10.7849 0.52375 8.55356C1.63943 5.64039 4.30467 3.8429 7.52775 3.8429H7.58973C7.58973 3.78092 7.58973 3.71894 7.58973 3.59497C7.52775 2.54127 8.20956 1.61154 9.20127 1.30163L12.1144 0.185947C12.4244 0.0619823 12.7343 0 13.0442 0C13.9739 0 14.8417 0.495858 15.2755 1.36361L16.4532 3.8429C16.8251 4.58669 16.8251 5.51642 16.3912 6.19823C15.9573 6.88004 15.2755 7.25193 14.5318 7.31391C14.3458 7.68581 14.2218 8.0577 14.0359 8.36761C13.664 9.23536 13.2921 10.1031 12.8582 11.0328C11.2467 14.3799 9.4492 16.6113 5.66828 16.6113Z"
                    fill="#07401A"
                  />
                  <path
                    d="M5.66807 14.4419C8.0234 14.4419 9.32503 13.3882 10.8746 10.1031C11.7423 8.30565 12.4241 6.50817 13.2299 4.77266L14.2216 5.08257C14.4696 5.14455 14.6555 5.02059 14.5315 4.77266L13.2919 2.35535C13.2299 2.1694 12.982 2.1694 12.858 2.23139L9.88287 3.34707C9.63494 3.40905 9.63494 3.65698 9.88287 3.71896L10.7506 4.02887C10.0068 5.64041 9.13908 8.11971 8.39529 9.66926C7.58952 11.4048 7.21763 12.5824 5.79204 12.5824C4.36644 12.5824 4.1805 11.5287 4.80032 9.97917C5.48212 8.18169 6.59781 7.68583 7.83745 8.05772C8.20935 7.56187 8.45728 6.81808 8.58124 6.13627C8.20935 6.01231 7.77547 6.01231 7.40358 6.01231C5.35816 6.01231 3.31274 7.06601 2.44499 9.29737C1.51526 12.2105 2.50697 14.4419 5.66807 14.4419Z"
                    fill="#D0EC1A"
                  />
                </svg>
              </div>
              <div>
                <div class="font-bold text-sm">{agentName}</div>
                <div class="text-xs text-primary-light/80">
                  powered by deco.chat
                </div>
              </div>
            </div>
            <button
              id="close-chat"
              class="text-primary-light/80 hover:text-primary-light hover:bg-primary-dark/80 rounded-lg p-1 transition-colors"
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div class="flex-1 p-6 bg-dc-50 flex flex-col overflow-hidden">
            {/* Messages */}
            <div
              id="messages-container"
              class="w-full flex-1 flex flex-col justify-start items-start gap-4 overflow-y-auto"
            >
              {/* Welcome message will be inserted here */}
            </div>
          </div>

          {/* Input */}
          <form id="chat-form" class="p-4 border-t border-dc-200 bg-white">
            <div class="flex gap-2">
              <input
                id="chat-input"
                type="text"
                placeholder="Ask about deco.chat..."
                class="flex-1 px-4 py-3 border border-dc-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent text-sm"
              />
              <button
                id="send-button"
                type="submit"
                class="bg-primary-dark text-primary-light px-4 py-3 rounded-2xl hover:bg-primary-dark/80 transition-colors flex items-center justify-center min-w-[48px]"
              >
                ➤
              </button>
            </div>
          </form>
        </div>

        {/* Chat Bubble Button - Figma Design */}
        <div
          id="chat-bubble"
          class="bg-primary-dark relative rounded-xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] border border-white cursor-pointer"
        >
          <div class="flex flex-col gap-2.5 p-4">
            {/* Header with logo and "Need help?" */}
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 bg-primary-light rounded-[10.6667px] flex items-center justify-center">
                {/* Deco Logo SVG */}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  class="w-4 h-4"
                >
                  <path
                    d="M5.66828 16.6113C3.56088 16.6113 1.88736 15.8055 0.895644 14.3799C-0.158055 12.8923 -0.282019 10.7849 0.52375 8.55356C1.63943 5.64039 4.30467 3.8429 7.52775 3.8429H7.58973C7.58973 3.78092 7.58973 3.71894 7.58973 3.59497C7.52775 2.54127 8.20956 1.61154 9.20127 1.30163L12.1144 0.185947C12.4244 0.0619823 12.7343 0 13.0442 0C13.9739 0 14.8417 0.495858 15.2755 1.36361L16.4532 3.8429C16.8251 4.58669 16.8251 5.51642 16.3912 6.19823C15.9573 6.88004 15.2755 7.25193 14.5318 7.31391C14.3458 7.68581 14.2218 8.0577 14.0359 8.36761C13.664 9.23536 13.2921 10.1031 12.8582 11.0328C11.2467 14.3799 9.4492 16.6113 5.66828 16.6113Z"
                    fill="#07401A"
                  />
                  <path
                    d="M5.66807 14.4419C8.0234 14.4419 9.32503 13.3882 10.8746 10.1031C11.7423 8.30565 12.4241 6.50817 13.2299 4.77266L14.2216 5.08257C14.4696 5.14455 14.6555 5.02059 14.5315 4.77266L13.2919 2.35535C13.2299 2.1694 12.982 2.1694 12.858 2.23139L9.88287 3.34707C9.63494 3.40905 9.63494 3.65698 9.88287 3.71896L10.7506 4.02887C10.0068 5.64041 9.13908 8.11971 8.39529 9.66926C7.58952 11.4048 7.21763 12.5824 5.79204 12.5824C4.36644 12.5824 4.1805 11.5287 4.80032 9.97917C5.48212 8.18169 6.59781 7.68583 7.83745 8.05772C8.20935 7.56187 8.45728 6.81808 8.58124 6.13627C8.20935 6.01231 7.77547 6.01231 7.40358 6.01231C5.35816 6.01231 3.31274 7.06601 2.44499 9.29737C1.51526 12.2105 2.50697 14.4419 5.66807 14.4419Z"
                    fill="#D0EC1A"
                  />
                </svg>
              </div>
              <span class="font-semibold text-xl text-primary-light tracking-[-0.4px] leading-none">
                Need help?
              </span>
            </div>

            {/* Button */}
            <Button
              variant="primary"
              size="medium"
              className="w-full gap-2 border border-[rgba(24,24,24,0.2)]"
              onClick={() => {}}
            >
              <Icon name="chat_bubble" size="small" class="text-primary-dark" />
              Ask anything
            </Button>
          </div>
        </div>
      </div>

      {/* Chat JavaScript */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((data) => {
            const { chatId, agentName, webhookUrl, welcomeMessage } = data;

            console.log("🚀 Chat script loading...", { chatId, agentName });

            let isOpen = false;
            let messages: string[] = [];
            let isLoading = false;

            // Generate threadId once for the entire conversation
            const threadId = "thread_" + Date.now() + "_" +
              Math.random().toString(36).substr(2, 9);

            function init() {
              console.log("🎯 Chat init function called");

              const container = document.getElementById(chatId);
              const bubble = document.getElementById("chat-bubble");
              const window = document.getElementById("chat-window");
              const closeBtn = document.getElementById("close-chat");
              const form = document.getElementById("chat-form");
              const input = document.getElementById(
                "chat-input",
              ) as HTMLInputElement;
              const sendBtn = document.getElementById(
                "send-button",
              ) as HTMLButtonElement;
              const messagesContainer = document.getElementById(
                "messages-container",
              );

              if (!container || !bubble) {
                console.error("❌ Chat elements not found!");
                return;
              }

              console.log("✅ Chat elements found, setting up...");

              // Show the container
              container.style.display = "block";

              // Add welcome message
              addMessage(welcomeMessage, false);

              // Bubble click handler
              bubble.addEventListener("click", () => {
                console.log("🎉 Chat bubble clicked! Current state:", isOpen);
                toggleChat();
              });

              // Close button handler
              closeBtn?.addEventListener("click", () => {
                console.log("❌ Close button clicked");
                closeChat();
              });

              // Form submit handler
              form?.addEventListener("submit", (e) => {
                e.preventDefault();
                const message = input?.value?.trim();
                if (message && !isLoading) {
                  console.log("📤 Sending message:", message);
                  sendMessage(message);
                  if (input) input.value = "";
                }
              });

              function toggleChat() {
                isOpen = !isOpen;
                console.log("🔄 Toggling chat, new state:", isOpen);

                if (isOpen) {
                  openChat();
                } else {
                  closeChat();
                }
              }

              function openChat() {
                // Show window, hide bubble
                window?.classList.remove("hidden");
                window?.classList.add("flex");
                if (bubble) bubble.style.display = "none";
              }

              function closeChat() {
                isOpen = false;
                // Hide window, show bubble
                window?.classList.add("hidden");
                window?.classList.remove("flex");
                if (bubble) bubble.style.display = "block";
              }

              function addMessage(text: string, isUser = false) {
                console.log("💬 Adding message:", { text, isUser });

                const messageDiv = document.createElement("div");
                messageDiv.className = `w-full flex ${
                  isUser ? "justify-end pl-12" : "justify-start pr-12"
                } items-end gap-2.5`;

                const timestamp = new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                const bubbleClasses = isUser
                  ? "bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
                  : "rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-dc-300 bg-white";

                messageDiv.innerHTML = `
                  <div class="flex-1 max-w-[500px] px-3 py-2 ${bubbleClasses} flex flex-col justify-center items-start">
                    <p class="text-dc-500 text-sm font-medium font-main leading-normal">${text}</p>
                    <div class="text-xs mt-1 text-dc-400">${timestamp}</div>
                  </div>
                `;

                messagesContainer?.appendChild(messageDiv);
                messagesContainer?.scrollTo({
                  top: messagesContainer.scrollHeight,
                  behavior: "smooth",
                });
              }

              async function sendMessage(text: string) {
                if (isLoading) return;

                // Add user message
                addMessage(text, true);

                isLoading = true;
                if (sendBtn) sendBtn.disabled = true;

                // Show typing indicator
                const typingDiv = document.createElement("div");
                typingDiv.id = "typing-indicator";
                typingDiv.className =
                  "w-full flex justify-start pr-12 items-end gap-2.5";
                typingDiv.innerHTML = `
                  <div class="flex-1 max-w-[500px] px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-dc-300 bg-white flex flex-col justify-center items-start">
                    <div class="flex items-center gap-2">
                      <div class="flex gap-1">
                        <div class="w-2 h-2 bg-dc-500 rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-dc-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                        <div class="w-2 h-2 bg-dc-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                      </div>
                      <span class="text-xs text-dc-500">Typing...</span>
                    </div>
                  </div>
                `;
                messagesContainer?.appendChild(typingDiv);
                messagesContainer?.scrollTo({
                  top: messagesContainer.scrollHeight,
                  behavior: "smooth",
                });

                try {
                  // Add threadId to the webhook URL
                  const webhookWithThread = webhookUrl + "&threadId=" +
                    threadId;
                  console.log("🌐 Sending to webhook:", webhookWithThread);

                  const response = await fetch(webhookWithThread, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      message: text,
                      sessionId: threadId,
                    }),
                  });

                  // Remove typing indicator
                  document.getElementById("typing-indicator")?.remove();

                  if (!response.ok) {
                    throw new Error("HTTP error! status: " + response.status);
                  }

                  const data = await response.json();
                  console.log("📥 Received response:", data);

                  const responseText = data.text || data.message ||
                    data.response ||
                    "I'm having trouble responding right now. Please try again.";
                  addMessage(responseText, false);
                } catch (error) {
                  console.error("❌ Error sending message:", error);

                  // Remove typing indicator
                  document.getElementById("typing-indicator")?.remove();

                  addMessage(
                    "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
                    false,
                  );
                } finally {
                  isLoading = false;
                  if (sendBtn) sendBtn.disabled = false;
                }
              }
            }

            // Initialize when DOM is ready
            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", init);
            } else {
              init();
            }
          }, { chatId, agentName, webhookUrl, welcomeMessage }),
        }}
      />
    </>
  );
}

const defaultProps: Props = {
  agentName: "Assistant",
  webhookUrl:
    "https://api.deco.chat/actors/Trigger/invoke/run?passphrase=undefined&deno_isolate_instance_id=/shared/deco.cx/Agents/a213785a-57b4-4800-a207-e408fb476841/triggers/632bce52-a316-43d0-a724-bd1de45d980b&output_tool=undefined",
  welcomeMessage:
    "Hi! I'm here to help you learn about deco.chat. Ask me anything about our AI workspace!",
};

export function Preview() {
  return <ChatSupport {...defaultProps} />;
}
