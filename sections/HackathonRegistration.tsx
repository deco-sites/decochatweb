import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useScript } from "@deco/deco/hooks";

interface Props {
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
}

export default function HackathonRegistration({
  title = defaultProps.title,
  description = defaultProps.description,
  formAction = defaultProps.formAction,
  formMethod = defaultProps.formMethod,
}: Props) {
  return (
    <div class="w-full bg-dc-50">
      <div class="relative z-10 pt-20 md:pt-40 px-4 md:px-8 lg:px-16 mb-[-100px]">
        <div class="w-full max-w-[1580px] mx-auto">
          <div
            id="registration"
            class="px-4 sm:px-6 md:px-16 py-16 md:py-24 bg-primary-light rounded-[20px] md:rounded-[40px] flex flex-col justify-center items-center gap-10 relative"
          >
            {/* Content Layout - Side by Side */}
            <div class="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
              {/* Left Side - Header */}
              <div class="w-full lg:w-auto flex flex-col justify-center items-start gap-6">
                <FadeUp>
                  <h2 class="text-primary-dark text-4xl md:text-6xl font-black font-main leading-tight uppercase">
                    REGISTRE SUA<br />EQUIPE
                  </h2>
                </FadeUp>

                <FadeUp delay={200}>
                  <p class="text-primary-dark text-xl md:text-2xl font-medium font-main leading-relaxed max-w-lg">
                    {description}
                  </p>
                </FadeUp>
              </div>

              {/* Right Side - Registration Form */}
              <FadeUp delay={400}>
                <div class="flex-1 w-full max-w-2xl">
                  <div class="p-8 md:p-12 bg-white rounded-3xl border-2 border-primary-dark/10 shadow-lg">
                    <form
                      id="hackathon-form"
                      action={formAction}
                      method={formMethod}
                      class="space-y-6 relative z-20"
                    >
                      {/* Team Name */}
                      <div class="space-y-3">
                        <label
                          for="teamName"
                          class="block text-lg font-semibold font-main text-dc-800"
                        >
                          Nome da Equipe *
                        </label>
                        <input
                          type="text"
                          id="teamName"
                          name="teamName"
                          required
                          placeholder="Ex: Code Warriors"
                          class="w-full px-4 py-4 rounded-2xl border-2 border-dc-200 text-lg font-medium font-main transition-all duration-200 focus:outline-none focus:border-primary-light focus:bg-dc-50 text-dc-800 placeholder-dc-400"
                        />
                      </div>

                      {/* Team Members */}
                      <div class="space-y-3">
                        <label
                          for="teamMembers"
                          class="block text-lg font-semibold font-main text-dc-800"
                        >
                          Integrantes *
                        </label>
                        <textarea
                          id="teamMembers"
                          name="teamMembers"
                          required
                          rows={4}
                          placeholder="Liste os nomes dos integrantes da equipe (máximo 4 pessoas)&#10;Ex:&#10;João Silva - Desenvolvedor Full-stack&#10;Maria Santos - UI/UX Designer&#10;Pedro Costa - Backend Developer"
                          class="w-full px-4 py-4 rounded-2xl border-2 border-dc-200 text-lg font-medium font-main transition-all duration-200 focus:outline-none resize-none focus:border-primary-light focus:bg-dc-50 text-dc-800 placeholder-dc-400"
                        />
                      </div>

                      {/* Agency (Optional) */}
                      <div class="space-y-3">
                        <label
                          for="agency"
                          class="block text-lg font-semibold font-main text-dc-800"
                        >
                          Agência (opcional)
                        </label>
                        <input
                          type="text"
                          id="agency"
                          name="agency"
                          placeholder="Nome da sua empresa/agência"
                          class="w-full px-4 py-4 rounded-2xl border-2 border-dc-200 text-lg font-medium font-main transition-all duration-200 focus:outline-none focus:border-primary-light focus:bg-dc-50 text-dc-800 placeholder-dc-400"
                        />
                      </div>

                      {/* Email */}
                      <div class="space-y-3">
                        <label
                          for="email"
                          class="block text-lg font-semibold font-main text-dc-800"
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="seu-email@exemplo.com"
                          class="w-full px-4 py-4 rounded-2xl border-2 border-dc-200 text-lg font-medium font-main transition-all duration-200 focus:outline-none focus:border-primary-light focus:bg-dc-50 text-dc-800 placeholder-dc-400"
                        />
                      </div>

                      {/* Challenge Category */}
                      <div class="space-y-3">
                        <label
                          for="category"
                          class="block text-lg font-semibold font-main text-dc-800"
                        >
                          Categoria do Desafio *
                        </label>
                        <select
                          id="category"
                          name="category"
                          required
                          class="w-full px-4 py-4 rounded-2xl border-2 border-dc-200 text-lg font-medium font-main transition-all duration-200 focus:outline-none focus:border-primary-light focus:bg-dc-50 text-dc-800"
                        >
                          <option value="">Selecione uma categoria</option>
                          <option value="cms">
                            Agente de CMS customizados
                          </option>
                          <option value="seo">Agente de SEO + Analytics</option>
                          <option value="storefront">
                            Agente de Storefront Inteligente
                          </option>
                          <option value="onboarding">
                            Agente de Onboarding
                          </option>
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
                          class="text-base font-medium text-dc-600"
                        >
                          Concordo com os{" "}
                          <a
                            href="#rules"
                            class="text-primary-light hover:underline"
                          >
                            termos e condições
                          </a>{" "}
                          do hackathon e autorizo o uso das informações para
                          fins do evento.
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-dark text-primary-light rounded-2xl text-lg font-bold font-main hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-primary-dark/30"
                      >
                        <Icon
                          name="send"
                          size="medium"
                          class="text-primary-light"
                        />
                        Confirmar minha inscrição
                      </button>

                      {/* Success/Error Messages */}
                      <div id="form-message" class="hidden"></div>
                    </form>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
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
  title: "INSCREVA SUA EQUIPE",
  description:
    "Preencha os dados da sua equipe para participar do maior hackathon de agentes AI do mundo",
  formAction: "javascript:void(0)", // Replace with actual form action URL
  formMethod: "POST",
};

export function Preview() {
  return <HackathonRegistration {...defaultProps} />;
}
