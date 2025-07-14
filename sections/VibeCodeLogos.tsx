import type { ImageWidget } from "apps/admin/widgets.ts";

interface LogoItem {
  /**
   * @title Imagem do Logo
   * @description Logo da empresa/parceiro
   */
  image: ImageWidget;
  /**
   * @title Nome da Empresa
   * @description Nome da empresa para acessibilidade
   */
  name: string;
  /**
   * @title Link (opcional)
   * @description Link para o site da empresa
   */
  href?: string;
}

interface Props {
  /**
   * @title Título da Seção
   * @description Título da seção de logos (opcional)
   */
  title?: string;
  /**
   * @title Lista de Logos
   * @description Logos de parceiros e integrações
   */
  logos?: LogoItem[];
  /**
   * @title Mostrar como Infinito
   * @description Exibir logos em loop infinito
   */
  showInfiniteLoop?: boolean;
}

const defaultProps: Props = {
  title: "Trusted by leading companies",
  logos: [
    {
      image: "https://via.placeholder.com/128x44?text=Company+1",
      name: "Company 1",
      href: "#",
    },
    {
      image: "https://via.placeholder.com/96x36?text=Co+2",
      name: "Company 2",
      href: "#",
    },
    {
      image: "https://via.placeholder.com/112x28?text=Company+3",
      name: "Company 3",
      href: "#",
    },
    {
      image: "https://via.placeholder.com/88x40?text=Co+4",
      name: "Company 4",
      href: "#",
    },
    {
      image: "https://via.placeholder.com/120x32?text=Company+5",
      name: "Company 5",
      href: "#",
    },
    {
      image: "https://via.placeholder.com/104x48?text=Co+6",
      name: "Company 6",
      href: "#",
    },
    {
      image: "https://via.placeholder.com/140x36?text=Company+7",
      name: "Company 7",
      href: "#",
    },
    {
      image: "https://via.placeholder.com/92x44?text=Co+8",
      name: "Company 8",
      href: "#",
    },
  ],
  showInfiniteLoop: false,
};

export default function VibeCodeLogos({
  title = defaultProps.title,
  logos = defaultProps.logos,
  showInfiniteLoop = defaultProps.showInfiniteLoop,
}: Props) {
  return (
    <div class="w-full bg-dc-900 py-12 md:py-16">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="flex flex-col justify-center items-center gap-8 md:gap-12">
          
          {/* Title */}
          {title && (
            <h2 class="text-dc-300 text-sm md:text-base font-medium text-center uppercase tracking-wider">
              {title}
            </h2>
          )}
          
          {/* Logos Grid */}
          <div class="w-full overflow-hidden">
            <div class={`flex items-center justify-center gap-8 md:gap-12 lg:gap-16 ${showInfiniteLoop ? 'animate-scroll' : 'flex-wrap'}`}>
              {logos?.map((logo, index) => {
                const LogoComponent = (
                  <div
                    key={index}
                    class="flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 group"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      class="max-w-full max-h-12 md:max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                );

                if (logo.href) {
                  return (
                    <a
                      key={index}
                      href={logo.href}
                      class="inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {LogoComponent}
                    </a>
                  );
                }

                return LogoComponent;
              })}
              
              {/* Duplicate logos for infinite scroll effect */}
              {showInfiniteLoop && logos?.map((logo, index) => {
                const LogoComponent = (
                  <div
                    key={`duplicate-${index}`}
                    class="flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 group"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      class="max-w-full max-h-12 md:max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                );

                if (logo.href) {
                  return (
                    <a
                      key={`duplicate-${index}`}
                      href={logo.href}
                      class="inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {LogoComponent}
                    </a>
                  );
                }

                return LogoComponent;
              })}
            </div>
          </div>
          
          {/* Fallback placeholder logos if none provided */}
          {(!logos || logos.length === 0) && (
            <div class="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  class="flex items-center justify-center p-4 opacity-40"
                >
                  <div class="w-16 md:w-24 h-8 md:h-12 bg-dc-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Custom CSS for infinite scroll animation */}
      {showInfiniteLoop && (
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>
      )}
    </div>
  );
}

export function Preview() {
  return <VibeCodeLogos {...defaultProps} />;
} 