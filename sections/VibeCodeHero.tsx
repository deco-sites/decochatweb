import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "../components/ui/Button.tsx";

interface Props {
  /**
   * @title Título Principal
   * @description Título principal do hero section
   */
  title?: string;
  /**
   * @title Subtítulo
   * @description Subtítulo descritivo
   */
  subtitle?: string;
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
   * @title Imagem de Fundo
   * @description Imagem de fundo ou mockup (opcional)
   */
  backgroundImage?: ImageWidget;
  /**
   * @title Mostrar Elementos Decorativos
   * @description Exibir elementos decorativos no hero
   */
  showDecorative?: boolean;
}

const defaultProps: Props = {
  title: "Vibecode high-performance storefronts",
  subtitle: "Create shopping experiences by chatting with AI",
  emailPlaceholder: "Enter your email",
  ctaText: "I want early access",
  showDecorative: true,
};

export default function VibeCodeHero({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  emailPlaceholder = defaultProps.emailPlaceholder,
  ctaText = defaultProps.ctaText,
  backgroundImage,
  showDecorative = defaultProps.showDecorative,
}: Props) {
  return (
    <div class="w-full bg-dc-900 py-8">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="relative bg-dc-900 rounded-3xl overflow-hidden">
          
          {/* Main Hero Content */}
          <div class="relative z-10 pt-16 pb-24 md:pt-20 md:pb-32 flex flex-col justify-center items-center gap-16 md:gap-32">
            
            {/* Text Content */}
            <div class="w-full max-w-[850px] flex justify-center items-center">
              <div class="flex-1 flex flex-col justify-center items-center gap-12 md:gap-16">
                <div class="relative flex flex-col justify-start items-center gap-6 text-center">
                  
                  {/* Decorative element behind title */}
                  {showDecorative && (
                    <div class="w-64 md:w-80 h-12 md:h-16 absolute opacity-20 bg-primary-light rounded-lg blur-sm"></div>
                  )}
                  
                  {/* Title */}
                  <h1 class="text-3xl md:text-5xl lg:text-7xl font-medium leading-tight">
                    <span class="text-primary-light">Vibecode </span>
                    <span class="text-white">high-performance storefronts</span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p class="text-dc-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                    {subtitle}
                  </p>
                </div>
                
                {/* Email Signup Form */}
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md">
                  <div class="w-full sm:w-64 p-2 bg-dc-50 rounded-2xl shadow-lg outline outline-1 outline-dc-200 flex justify-start items-center">
                    <input
                      type="email"
                      placeholder={emailPlaceholder}
                      class="flex-1 px-4 py-2 bg-transparent rounded-full text-dc-800 placeholder-dc-400 text-base font-normal outline-none"
                    />
                  </div>
                  <Button
                    variant="primary"
                    size="medium"
                    className="w-full sm:w-auto bg-primary-light text-primary-dark hover:bg-primary-light/90 rounded-xl font-medium"
                  >
                    {ctaText}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Background Image/Mockup */}
            {backgroundImage && (
              <div class="w-full max-w-6xl h-64 md:h-96 relative">
                <img
                  src={backgroundImage}
                  alt="Product Interface"
                  class="w-full h-full object-cover rounded-2xl opacity-80"
                  loading="lazy"
                />
              </div>
            )}
            
            {/* Placeholder for mockup interfaces */}
            <div class="w-full max-w-6xl h-64 md:h-96 relative bg-dc-800/50 rounded-2xl flex items-center justify-center">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-primary-light rounded-2xl opacity-60"></div>
                <p class="text-dc-400 text-sm">Product Interface Preview</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          {showDecorative && (
            <>
              {/* Floating Action Button */}
              <div class="hidden lg:block absolute right-8 bottom-20 w-28 h-28 bg-primary-light rounded-full shadow-2xl flex items-center justify-center">
                <div class="w-12 h-12 bg-dc-800 rounded-lg"></div>
                <div class="absolute -inset-6 bg-primary-light/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Floating Card */}
              <div class="hidden lg:block absolute right-12 bottom-8 w-16 h-20 bg-white rounded-lg shadow-2xl transform rotate-12 border-4 border-dc-950">
                <div class="absolute bottom-2 right-2 w-1.5 h-4 bg-dc-950 rounded-sm"></div>
                <div class="absolute bottom-2 right-5 w-1.5 h-4 bg-dc-950 rounded-sm"></div>
                <div class="absolute bottom-2 right-8 w-1.5 h-3.5 bg-dc-950 rounded-sm"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <VibeCodeHero {...defaultProps} />;
} 