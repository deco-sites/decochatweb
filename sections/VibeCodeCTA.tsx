import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "../components/ui/Button.tsx";

interface Props {
  /**
   * @title Título Principal
   * @description Título principal da seção CTA
   */
  title?: string;
  /**
   * @title Descrição
   * @description Texto descritivo da seção
   */
  description?: string;
  /**
   * @title Placeholder do Email
   * @description Texto placeholder do campo de email
   */
  emailPlaceholder?: string;
  /**
   * @title Texto do Botão CTA
   * @description Texto do botão de call-to-action
   */
  ctaText?: string;
  /**
   * @title URL de Ação
   * @description URL para onde o formulário deve enviar (opcional)
   */
  actionUrl?: string;
  /**
   * @title Imagem de Fundo
   * @description Imagem de fundo decorativa (opcional)
   */
  backgroundImage?: ImageWidget;
  /**
   * @title Cor de Fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "primary" | "dark" | "custom";
  /**
   * @title Estilo do Layout
   * @description Layout da seção CTA
   */
  layout?: "split" | "centered";
}

const defaultProps: Props = {
  title: "Be one of the first to use the new",
  description: "Join the waiting list to gain early access to the platform that will transform how you create online stores.",
  emailPlaceholder: "Enter your email",
  ctaText: "I want early access",
  backgroundColor: "primary",
  layout: "split",
};

export default function VibeCodeCTA({
  title = defaultProps.title,
  description = defaultProps.description,
  emailPlaceholder = defaultProps.emailPlaceholder,
  ctaText = defaultProps.ctaText,
  actionUrl,
  backgroundImage,
  backgroundColor = defaultProps.backgroundColor,
  layout = defaultProps.layout,
}: Props) {
  const bgColorClasses = {
    primary: "bg-primary-light",
    dark: "bg-dc-900",
    custom: "bg-gradient-to-br from-primary-light to-yellow-light",
  };

  const textColorClasses = {
    primary: "text-primary-dark",
    dark: "text-white",
    custom: "text-primary-dark",
  };

  return (
    <div class="w-full bg-dc-900 py-8">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class={`${bgColorClasses[backgroundColor!]} rounded-3xl lg:rounded-[40px] overflow-hidden relative`}>
          
          {/* Main Content */}
          <div class={`relative z-10 p-8 md:p-12 lg:p-20 ${
            layout === "split" 
              ? "flex flex-col lg:flex-row justify-start items-center gap-12 lg:gap-28" 
              : "flex flex-col justify-center items-center gap-12 text-center"
          }`}>
            
            {/* Text Content */}
            <div class={`${
              layout === "split" 
                ? "w-full lg:w-auto lg:max-w-lg flex-shrink-0" 
                : "w-full max-w-3xl"
            } flex flex-col justify-start items-start gap-6 md:gap-10`}>
              
              <h2 class={`${textColorClasses[backgroundColor!]} text-3xl md:text-5xl lg:text-6xl font-medium leading-tight`}>
                {title}
              </h2>
              
              <p class={`${textColorClasses[backgroundColor!]} text-lg md:text-xl font-normal leading-relaxed`}>
                {description}
              </p>
            </div>
            
            {/* Email Signup Form */}
            <div class={`${
              layout === "split" 
                ? "flex-1 w-full" 
                : "w-full max-w-md"
            } flex flex-col justify-start items-start gap-4`}>
              
              <form
                action={actionUrl}
                method="POST"
                class="w-full flex flex-col gap-4"
              >
                {/* Email Input */}
                <div class="w-full p-2 bg-dc-50 rounded-2xl shadow-lg outline outline-1 outline-dc-200 flex justify-start items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder={emailPlaceholder}
                    required
                    class="flex-1 px-4 py-2 bg-transparent rounded-full text-dc-800 placeholder-dc-400 text-base font-normal outline-none"
                  />
                </div>
                
                {/* CTA Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  className="w-full bg-primary-dark text-primary-light hover:bg-primary-dark/90 rounded-xl font-medium"
                >
                  {ctaText}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Background Image */}
          {backgroundImage && (
            <div class="w-full h-16 md:h-20 relative overflow-hidden">
              <img
                src={backgroundImage}
                alt="Background decoration"
                class="w-full h-full object-cover mix-blend-darken opacity-60"
                loading="lazy"
              />
            </div>
          )}
          
          {/* Decorative Elements */}
          <div class="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 opacity-20">
            <div class="w-32 h-8 md:w-36 md:h-10 relative">
              <div class="w-full h-full bg-primary-dark rounded-lg"></div>
              <div class="w-5/6 h-3/4 absolute left-1 top-1 bg-primary-light rounded-lg"></div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div class="absolute inset-0 opacity-5">
            <div class="w-full h-full bg-gradient-to-br from-transparent via-primary-dark/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <VibeCodeCTA {...defaultProps} />;
} 