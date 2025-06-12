import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useScript } from "@deco/deco/hooks";

interface Props {
  /**
   * @title Eyebrow
   * @description Texto pequeno que aparece acima do título
   */
  eyebrow?: string;
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
   * @title URL de envio
   * @description URL para onde o formulário será enviado
   */
  formAction?: string;
  /**
   * @title Método do formulário
   * @description Método HTTP para envio do formulário
   */
  formMethod?: "POST" | "GET";
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-dark" | "purple-dark";
}

export default function HackathonRegistration({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  formAction = defaultProps.formAction,
  formMethod = defaultProps.formMethod,
  backgroundColor = defaultProps.backgroundColor,
}: Props) {
  const bgColorMap = {
    "dc-50": "bg-dc-50",
    "primary-dark": "bg-primary-dark",
    "purple-dark": "bg-purple-dark",
  };

  const textColorMap = {
    "dc-50": "text-dc-800",
    "primary-dark": "text-dc-200",
    "purple-dark": "text-dc-200",
  };

  const eyebrowVariantMap = {
    "dc-50": "primary-light" as const,
    "primary-dark": "primary-light" as const,
    "purple-dark": "purple-light" as const,
  };

  const bgColor = bgColorMap[backgroundColor || "dc-50"];
  const textColor = textColorMap[backgroundColor || "dc-50"];
  const eyebrowVariant = eyebrowVariantMap[backgroundColor || "dc-50"];

  return (
    <div
      id="registration"
      class={`w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 ${bgColor} flex flex-col justify-start items-center gap-14`}
    >
      <div class="w-full max-w-[1440px] flex flex-col justify-start items-center gap-14">
        {/* Header */}
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-10">
          <FadeUp>
            <div class="flex flex-col justify-start items-center gap-6">
              <Eyebrow
                variant={eyebrowVariant}
                iconName="info"
                text={eyebrow || ""}
              />
              <h2
                class={`text-center ${textColor} text-3xl md:text-5xl font-semibold font-manrope leading-tight`}
              >
                {title}
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div
              class={`self-stretch text-center ${
                backgroundColor === "dc-50" ? "text-dc-500" : "text-dc-400"
              } text-xl font-medium font-manrope leading-normal`}
            >
              {description}
            </div>
          </FadeUp>
        </div>

        {/* Registration Form */}
        <FadeUp delay={400}>
          <div class="w-full max-w-2xl">
            <div
              class={`p-8 md:p-12 rounded-3xl ${
                backgroundColor === "dc-50"
                  ? "bg-white border border-dc-200 shadow-lg"
                  : "bg-dc-50/10 border border-dc-50/20"
              }`}
            >
              <form
                id="hackathon-form"
                action={formAction}
                method={formMethod}
                class="space-y-6"
              >
                {/* Team Name */}
                <div class="space-y-3">
                  <label
                    for="teamName"
                    class={`block text-lg font-semibold font-manrope ${
                      backgroundColor === "dc-50"
                        ? "text-dc-800"
                        : "text-dc-200"
                    }`}
                  >
                    Nome da Equipe *
                  </label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    required
                    placeholder="Ex: Code Warriors"
                    class={`w-full px-4 py-4 rounded-2xl border-2 text-lg font-medium font-manrope transition-all duration-200 focus:outline-none ${
                      backgroundColor === "dc-50"
                        ? "bg-dc-50 border-dc-200 text-dc-800 placeholder-dc-400 focus:border-primary-light focus:bg-white"
                        : "bg-dc-50/10 border-dc-50/20 text-dc-200 placeholder-dc-400 focus:border-primary-light focus:bg-dc-50/20"
                    }`}
                  />
                </div>

                {/* Team Members */}
                <div class="space-y-3">
                  <label
                    for="teamMembers"
                    class={`block text-lg font-semibold font-manrope ${
                      backgroundColor === "dc-50"
                        ? "text-dc-800"
                        : "text-dc-200"
                    }`}
                  >
                    Integrantes *
                  </label>
                  <textarea
                    id="teamMembers"
                    name="teamMembers"
                    required
                    rows={4}
                    placeholder="Liste os nomes dos integrantes da equipe (máximo 4 pessoas)&#10;Ex:&#10;João Silva - Desenvolvedor Full-stack&#10;Maria Santos - UI/UX Designer&#10;Pedro Costa - Backend Developer"
                    class={`w-full px-4 py-4 rounded-2xl border-2 text-lg font-medium font-manrope transition-all duration-200 focus:outline-none resize-none ${
                      backgroundColor === "dc-50"
                        ? "bg-dc-50 border-dc-200 text-dc-800 placeholder-dc-400 focus:border-primary-light focus:bg-white"
                        : "bg-dc-50/10 border-dc-50/20 text-dc-200 placeholder-dc-400 focus:border-primary-light focus:bg-dc-50/20"
                    }`}
                  />
                </div>

                {/* Agency (Optional) */}
                <div class="space-y-3">
                  <label
                    for="agency"
                    class={`block text-lg font-semibold font-manrope ${
                      backgroundColor === "dc-50"
                        ? "text-dc-800"
                        : "text-dc-200"
                    }`}
                  >
                    Agência (opcional)
                  </label>
                  <input
                    type="text"
                    id="agency"
                    name="agency"
                    placeholder="Nome da sua empresa/agência"
                    class={`w-full px-4 py-4 rounded-2xl border-2 text-lg font-medium font-manrope transition-all duration-200 focus:outline-none ${
                      backgroundColor === "dc-50"
                        ? "bg-dc-50 border-dc-200 text-dc-800 placeholder-dc-400 focus:border-primary-light focus:bg-white"
                        : "bg-dc-50/10 border-dc-50/20 text-dc-200 placeholder-dc-400 focus:border-primary-light focus:bg-dc-50/20"
                    }`}
                  />
                </div>

                {/* Email */}
                <div class="space-y-3">
                  <label
                    for="email"
                    class={`block text-lg font-semibold font-manrope ${
                      backgroundColor === "dc-50"
                        ? "text-dc-800"
                        : "text-dc-200"
                    }`}
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu-email@exemplo.com"
                    class={`w-full px-4 py-4 rounded-2xl border-2 text-lg font-medium font-manrope transition-all duration-200 focus:outline-none ${
                      backgroundColor === "dc-50"
                        ? "bg-dc-50 border-dc-200 text-dc-800 placeholder-dc-400 focus:border-primary-light focus:bg-white"
                        : "bg-dc-50/10 border-dc-50/20 text-dc-200 placeholder-dc-400 focus:border-primary-light focus:bg-dc-50/20"
                    }`}
                  />
                </div>

                {/* Challenge Category */}
                <div class="space-y-3">
                  <label
                    for="category"
                    class={`block text-lg font-semibold font-manrope ${
                      backgroundColor === "dc-50"
                        ? "text-dc-800"
                        : "text-dc-200"
                    }`}
                  >
                    Categoria do Desafio *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    class={`w-full px-4 py-4 rounded-2xl border-2 text-lg font-medium font-manrope transition-all duration-200 focus:outline-none ${
                      backgroundColor === "dc-50"
                        ? "bg-dc-50 border-dc-200 text-dc-800 focus:border-primary-light focus:bg-white"
                        : "bg-dc-50/10 border-dc-50/20 text-dc-200 focus:border-primary-light focus:bg-dc-50/20"
                    }`}
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="cms">Agente de CMS customizados</option>
                    <option value="seo">Agente de SEO + Analytics</option>
                    <option value="storefront">
                      Agente de Storefront Inteligente
                    </option>
                    <option value="onboarding">Agente de Onboarding</option>
                  </select>
                </div>

                {/* Terms and Conditions */}
                <div class="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    class="w-5 h-5 mt-1 rounded border-2 border-dc-300 text-primary-light focus:ring-primary-light focus:ring-2"
                  />
                  <label
                    for="terms"
                    class={`text-base font-medium ${
                      backgroundColor === "dc-50"
                        ? "text-dc-600"
                        : "text-dc-400"
                    }`}
                  >
                    Concordo com os{" "}
                    <a href="#rules" class="text-primary-light hover:underline">
                      termos e condições
                    </a>{" "}
                    do hackathon e autorizo o uso das informações para fins do
                    evento.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-light text-primary-dark rounded-2xl text-lg font-bold font-manrope hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary-light/30"
                >
                  <Icon name="send" size="medium" class="text-primary-dark" />
                  Confirmar minha inscrição
                </button>

                {/* Success/Error Messages */}
                <div id="form-message" class="hidden"></div>
              </form>
            </div>
          </div>
        </FadeUp>

        {/* Additional Info */}
        <FadeUp delay={600}>
          <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center space-y-3">
              <div
                class={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center ${
                  backgroundColor === "dc-50"
                    ? "bg-primary-light/10"
                    : "bg-primary-light/20"
                }`}
              >
                <Icon name="timer" size="medium" class="text-primary-light" />
              </div>
              <h3 class={`text-lg font-semibold font-manrope ${textColor}`}>
                Inscrições Limitadas
              </h3>
              <p
                class={`text-sm ${
                  backgroundColor === "dc-50" ? "text-dc-500" : "text-dc-400"
                }`}
              >
                Vagas por ordem de chegada
              </p>
            </div>

            <div class="text-center space-y-3">
              <div
                class={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center ${
                  backgroundColor === "dc-50"
                    ? "bg-primary-light/10"
                    : "bg-primary-light/20"
                }`}
              >
                <Icon
                  name="support_agent"
                  size="medium"
                  class="text-primary-light"
                />
              </div>
              <h3 class={`text-lg font-semibold font-manrope ${textColor}`}>
                Suporte Completo
              </h3>
              <p
                class={`text-sm ${
                  backgroundColor === "dc-50" ? "text-dc-500" : "text-dc-400"
                }`}
              >
                Mentoria e documentação
              </p>
            </div>

            <div class="text-center space-y-3">
              <div
                class={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center ${
                  backgroundColor === "dc-50"
                    ? "bg-primary-light/10"
                    : "bg-primary-light/20"
                }`}
              >
                <Icon
                  name="emoji_events"
                  size="medium"
                  class="text-primary-light"
                />
              </div>
              <h3 class={`text-lg font-semibold font-manrope ${textColor}`}>
                Grandes Prêmios
              </h3>
              <p
                class={`text-sm ${
                  backgroundColor === "dc-50" ? "text-dc-500" : "text-dc-400"
                }`}
              >
                R$ 30k + oportunidades
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Form Submission Script */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(() => {
            const form = document.getElementById(
              "hackathon-form",
            ) as HTMLFormElement;
            const messageDiv = document.getElementById(
              "form-message",
            ) as HTMLDivElement;

            if (form) {
              form.addEventListener("submit", async (e) => {
                e.preventDefault();

                const submitButton = form.querySelector(
                  'button[type="submit"]',
                ) as HTMLButtonElement;
                const originalText = submitButton.innerHTML;

                // Show loading state
                submitButton.innerHTML =
                  '<span class="animate-spin">⏳</span> Enviando...';
                submitButton.disabled = true;

                try {
                  const formData = new FormData(form);

                  // If no action URL provided, show success message without actually submitting
                  if (
                    !form.action || form.action.includes("javascript:void(0)")
                  ) {
                    // Simulate API call delay
                    await new Promise((resolve) => setTimeout(resolve, 2000));

                    messageDiv.className =
                      "block p-4 bg-green-100 border border-green-300 text-green-800 rounded-2xl text-center";
                    messageDiv.textContent =
                      "🎉 Inscrição realizada com sucesso! Você receberá um e-mail de confirmação em breve.";

                    form.reset();
                  } else {
                    // Actual form submission
                    const response = await fetch(form.action, {
                      method: form.method,
                      body: formData,
                    });

                    if (response.ok) {
                      messageDiv.className =
                        "block p-4 bg-green-100 border border-green-300 text-green-800 rounded-2xl text-center";
                      messageDiv.textContent =
                        "🎉 Inscrição realizada com sucesso! Você receberá um e-mail de confirmação em breve.";
                      form.reset();
                    } else {
                      throw new Error("Erro no envio");
                    }
                  }
                } catch (error) {
                  messageDiv.className =
                    "block p-4 bg-red-100 border border-red-300 text-red-800 rounded-2xl text-center";
                  messageDiv.textContent =
                    "❌ Erro ao enviar inscrição. Tente novamente ou entre em contato conosco.";
                } finally {
                  submitButton.innerHTML = originalText;
                  submitButton.disabled = false;

                  // Hide message after 5 seconds
                  setTimeout(() => {
                    messageDiv.className = "hidden";
                  }, 5000);
                }
              });
            }
          }),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Inscrição",
  title: "Registre sua equipe e garanta sua vaga no hackathon",
  description:
    "Preencha os dados da sua equipe para participar do maior hackathon de agentes AI do mundo",
  formAction: "javascript:void(0)", // Replace with actual form action URL
  formMethod: "POST",
  backgroundColor: "dc-50",
};

export function Preview() {
  return <HackathonRegistration {...defaultProps} />;
}
