import type { ImageWidget } from "apps/admin/widgets.ts";

interface IntegrationItem {
  /**
   * @title Nome da Plataforma
   * @description Nome da plataforma/integração
   */
  name: string;
  /**
   * @title Ícone/Logo
   * @description Ícone ou logo da plataforma
   */
  icon: ImageWidget;
  /**
   * @title Cor de Fundo
   * @description Cor de fundo do ícone (opcional)
   */
  backgroundColor?: string;
  /**
   * @title Link
   * @description Link para a página da integração (opcional)
   */
  href?: string;
}

interface Props {
  /**
   * @title Título Principal
   * @description Título da seção
   */
  title?: string;
  /**
   * @title Subtítulo
   * @description Subtítulo descritivo
   */
  subtitle?: string;
  /**
   * @title Lista de Integrações
   * @description Plataformas e integrações disponíveis
   */
  integrations?: IntegrationItem[];
  /**
   * @title Mostrar Linhas Conectoras
   * @description Exibir linhas decorativas conectando as integrações
   */
  showConnectors?: boolean;
}

const defaultProps: Props = {
  title: "Connect to any platform with one click",
  subtitle: "No code. No friction.",
  integrations: [
    {
      name: "Shopify",
      icon: "https://via.placeholder.com/80x80/DC2626/FFFFFF?text=S",
      backgroundColor: "#DC2626",
      href: "/integrations/shopify",
    },
    {
      name: "WooCommerce",
      icon: "https://via.placeholder.com/80x80/84CC16/FFFFFF?text=W",
      backgroundColor: "#84CC16",
      href: "/integrations/woocommerce",
    },
    {
      name: "Magento",
      icon: "https://via.placeholder.com/80x80/7C3AED/FFFFFF?text=M",
      backgroundColor: "#7C3AED",
      href: "/integrations/magento",
    },
    {
      name: "BigCommerce",
      icon: "https://via.placeholder.com/80x80/DC2626/FFFFFF?text=B",
      backgroundColor: "#DC2626",
      href: "/integrations/bigcommerce",
    },
    {
      name: "Prestashop",
      icon: "https://via.placeholder.com/80x80/2563EB/FFFFFF?text=P",
      backgroundColor: "#2563EB",
      href: "/integrations/prestashop",
    },
    {
      name: "Vtex",
      icon: "https://via.placeholder.com/80x80/059669/FFFFFF?text=V",
      backgroundColor: "#059669",
      href: "/integrations/vtex",
    },
  ],
  showConnectors: true,
};

export default function VibeCodeIntegrations({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  integrations = defaultProps.integrations,
  showConnectors = defaultProps.showConnectors,
}: Props) {
  return (
    <div class="w-full bg-dc-900 py-20 md:py-32 lg:py-40 relative">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="flex flex-col justify-center items-center gap-16 md:gap-20 lg:gap-28">
          
          {/* Header */}
          <div class="w-full flex flex-col justify-center items-center gap-6 text-center">
            <h2 class="text-white text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
              {title}
            </h2>
            <p class="text-dc-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
          
          {/* Integrations */}
          <div class="relative">
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-14">
              {integrations?.map((integration, index) => {
                const IntegrationComponent = (
                  <div
                    key={index}
                    class="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-2 border-dc-100 flex justify-center items-center overflow-hidden group hover:scale-110 transition-all duration-300 hover:shadow-xl"
                    style={integration.backgroundColor ? { backgroundColor: integration.backgroundColor } : {}}
                  >
                    <div class="w-16 h-16 md:w-20 md:h-20 relative overflow-hidden flex items-center justify-center">
                      <img
                        src={integration.icon}
                        alt={integration.name}
                        class="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );

                if (integration.href) {
                  return (
                    <a
                      key={index}
                      href={integration.href}
                      class="inline-block"
                      title={integration.name}
                    >
                      {IntegrationComponent}
                    </a>
                  );
                }

                return IntegrationComponent;
              })}
            </div>
            
            {/* Connector Lines */}
            {showConnectors && (
              <div class="absolute inset-0 pointer-events-none hidden lg:block">
                <svg
                  class="w-full h-full"
                  viewBox="0 0 800 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Horizontal connection lines */}
                  <line
                    x1="100"
                    y1="100"
                    x2="200"
                    y2="100"
                    stroke="#374151"
                    stroke-width="1"
                    stroke-dasharray="5,5"
                    opacity="0.3"
                  />
                  <line
                    x1="250"
                    y1="100"
                    x2="350"
                    y2="100"
                    stroke="#374151"
                    stroke-width="1"
                    stroke-dasharray="5,5"
                    opacity="0.3"
                  />
                  <line
                    x1="400"
                    y1="100"
                    x2="500"
                    y2="100"
                    stroke="#374151"
                    stroke-width="1"
                    stroke-dasharray="5,5"
                    opacity="0.3"
                  />
                  <line
                    x1="550"
                    y1="100"
                    x2="650"
                    y2="100"
                    stroke="#374151"
                    stroke-width="1"
                    stroke-dasharray="5,5"
                    opacity="0.3"
                  />
                  
                  {/* Vertical accent line */}
                  <line
                    x1="400"
                    y1="50"
                    x2="400"
                    y2="150"
                    stroke="#84CC16"
                    stroke-width="2"
                    opacity="0.6"
                  />
                </svg>
              </div>
            )}
          </div>
          
          {/* Fallback if no integrations */}
          {(!integrations || integrations.length === 0) && (
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-14">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  class="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-2 border-dc-100 flex justify-center items-center overflow-hidden opacity-60"
                >
                  <div class="w-16 h-16 md:w-20 md:h-20 bg-dc-300 rounded-full"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <VibeCodeIntegrations {...defaultProps} />;
} 