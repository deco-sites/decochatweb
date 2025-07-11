import type { ImageWidget } from "apps/admin/widgets.ts";

interface FeatureCard {
  /**
   * @title Eyebrow/Categoria
   * @description Texto pequeno acima do título
   */
  eyebrow: string;
  /**
   * @title Título
   * @description Título principal da feature
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição detalhada da feature
   */
  description: string;
  /**
   * @title Imagem
   * @description Imagem ilustrativa da feature
   */
  image: ImageWidget;
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
   * @title Ícone da Seção
   * @description Ícone pequeno acima do título (opcional)
   */
  icon?: ImageWidget;
  /**
   * @title Lista de Features
   * @description Cards das principais features
   */
  features?: FeatureCard[];
  /**
   * @title Layout
   * @description Layout dos cards (horizontal ou vertical)
   */
  layout?: "horizontal" | "vertical";
}

const defaultProps: Props = {
  title: "AI Builder optimized for e-commerce",
  subtitle: "Artificial intelligence that understands the needs of your business and creates optimized shopping experiences.",
  features: [
    {
      eyebrow: "DESIGN",
      title: "Brand consistency",
      description: "Unified design system that maintains its visual identity across all pages.",
      image: "https://placehold.co/426x322?text=Design+System",
    },
    {
      eyebrow: "BLOCKS",
      title: "Storefront components",
      description: "Pre-designed blocks optimized for conversion and boosting the shopping experience.",
      image: "https://placehold.co/425x322?text=Components",
    },
    {
      eyebrow: "PERFORMANCE",
      title: "Fast loading & performance",
      description: "Improved performance for an improved user experience and better SEO.",
      image: "https://placehold.co/426x322?text=Performance",
    },
  ],
  layout: "horizontal",
};

export default function VibeCodeFeatures({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  icon,
  features = defaultProps.features,
  layout = defaultProps.layout,
}: Props) {
  return (
    <div class="w-full bg-dc-900 py-16 md:py-24 lg:py-32">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="bg-dc-900 rounded-3xl flex flex-col justify-center items-center gap-16 md:gap-20 overflow-hidden">
          
          {/* Header */}
          <div class="w-full flex flex-col justify-center items-center gap-6 text-center">
            
            {/* Icon */}
            {icon ? (
              <img
                src={icon}
                alt="Section Icon"
                class="w-16 h-16 object-contain"
                loading="lazy"
              />
            ) : (
              <div class="w-16 h-16 relative">
                <div class="w-16 h-16 bg-dc-700 rounded-lg"></div>
                <div class="w-14 h-14 absolute left-1 top-1 bg-dc-800 rounded-lg"></div>
              </div>
            )}
            
            {/* Title */}
            <h2 class="text-dc-200 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
              {title}
            </h2>
            
            {/* Subtitle */}
            <p class="text-dc-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          </div>
          
          {/* Features */}
          <div class="w-full">
            <div class={`grid gap-6 md:gap-8 ${
              layout === "horizontal" 
                ? "grid-cols-1 lg:grid-cols-3" 
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}>
              {features?.map((feature, index) => (
                <div
                  key={index}
                  class="bg-dc-800 rounded-2xl flex flex-col justify-start items-start gap-6 overflow-hidden group hover:bg-dc-700/50 transition-all duration-300"
                >
                  {/* Content */}
                  <div class="p-6 flex flex-col justify-center items-start gap-4">
                    <div class="text-dc-500 text-sm font-bold uppercase tracking-wider">
                      {feature.eyebrow}
                    </div>
                    <h3 class="text-dc-200 text-xl md:text-2xl font-medium leading-tight">
                      {feature.title}
                    </h3>
                    <p class="text-dc-400 text-base md:text-lg font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Image */}
                  <div class="w-full h-48 md:h-64 lg:h-80 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fallback if no features */}
          {(!features || features.length === 0) && (
            <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  class="bg-dc-800 rounded-2xl flex flex-col justify-start items-start gap-6 overflow-hidden"
                >
                  <div class="p-6 flex flex-col justify-center items-start gap-4">
                    <div class="w-16 h-3 bg-dc-500 rounded"></div>
                    <div class="w-32 h-6 bg-dc-200 rounded"></div>
                    <div class="w-full h-16 bg-dc-400 rounded"></div>
                  </div>
                  <div class="w-full h-48 md:h-64 lg:h-80 bg-dc-600 opacity-30"></div>
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
  return <VibeCodeFeatures {...defaultProps} />;
} 