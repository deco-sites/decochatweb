import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../../components/ui/Eyebrow.tsx";
import FadeUp from "../../components/ui/FadeUp.tsx";

/**
 * @titleBy title
 */
interface FeatureCard {
  /**
   * @title Título da funcionalidade
   * @description Título que aparece no cartão da funcionalidade
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição breve da funcionalidade
   */
  description: string;
  /**
   * @title Imagem da funcionalidade
   * @description Imagem que representa a funcionalidade
   */
  image: ImageWidget;
  /**
   * @title Badge (opcional)
   * @description Badge que aparece no cartão (ex: "Coming Soon")
   */
  badge?: string;
  /**
   * @title Tamanho do cartão
   * @description Define o tamanho do cartão no grid
   */
  size: "small" | "medium" | "large";
}

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
   * @title Funcionalidades
   * @description Lista das funcionalidades em destaque
   * @maxItems 6
   */
  features: FeatureCard[];
}

export default function FeaturesBento({
  eyebrow = "Features",
  title = "Everything you need to\nbuild powerful AI agents",
  description =
    "Discover the comprehensive toolkit that makes AI implementation simple, scalable, and secure for your organization.",
  features = [],
}: Props) {
  const getSizeClasses = (size: string, index: number) => {
    const baseClasses =
      "bg-dc-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-end relative";

    // 6x6 grid system with different spans for bento layout
    switch (size) {
      case "large":
        // Takes 3 columns x 3 rows (1/2 width, 1/2 height) - Top left
        return `${baseClasses} col-span-3 row-span-3`;
      case "medium":
        // Takes 3 columns x 3 rows (1/2 width, 1/2 height) - Top right, or 2 columns for bottom
        return index === 1
          ? `${baseClasses} col-span-3 row-span-3`
          : `${baseClasses} col-span-2 row-span-3`;
      case "small":
        // Takes 2 columns x 3 rows (1/3 width, 1/2 height) - Bottom cards
        return `${baseClasses} col-span-2 row-span-3`;
      default:
        return `${baseClasses} col-span-2 row-span-3`;
    }
  };

  return (
    <div class="self-stretch min-w-full px-8 md:px-16 py-16 md:py-32 bg-dc-50 flex flex-col justify-start items-center gap-8 md:gap-14">
      <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-6 md:gap-10">
        <FadeUp>
          <div class="self-stretch flex flex-col justify-start items-center gap-6">
            <Eyebrow variant="primary-light" iconName="info" text={eyebrow} />
            <h2 class="self-stretch text-center text-dc-800 text-3xl md:text-5xl font-semibold leading-normal">
              {title}
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={200}>
          <div class="self-stretch text-center text-dc-500 text-xl font-medium leading-normal">
            {description}
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={400}>
        <div class="w-full max-w-[1312px]">
          {/* 6x6 Bento Grid */}
          <div
            class="grid gap-6 h-[946px] max-h-[946px] 
                   grid-cols-2 grid-rows-10 md:grid-cols-4 md:grid-rows-8 lg:grid-cols-6 lg:grid-rows-6"
            style="grid-template-rows: repeat(6, minmax(0, 1fr)); grid-template-columns: repeat(6, minmax(0, 1fr));"
          >
            {features.map((feature, index) => (
              <div key={index} class={`${getSizeClasses(feature.size, index)}`}>
                {/* Image at top */}
                {feature.image && (
                  <div class="w-full aspect-[3/2] flex items-center justify-center overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      class="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Badge */}
                {feature.badge && (
                  <div class="absolute top-4 md:top-6 right-4 md:right-6 z-20 px-3 py-1 bg-primary-light text-primary-dark text-sm font-semibold rounded-full">
                    {feature.badge}
                  </div>
                )}

                {/* Content at bottom */}
                <div class="p-4 md:p-6 flex flex-col gap-2 md:gap-3">
                  <h3 class="text-dc-800 text-lg md:text-2xl font-semibold leading-tight">
                    {feature.title}
                  </h3>
                  <p class="text-dc-500 text-sm md:text-base font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Features",
  title: "Everything you need to\nbuild powerful AI agents",
  description:
    "Discover the comprehensive toolkit that makes AI implementation simple, scalable, and secure for your organization.",
  features: [
    {
      title: "Workflows com Cron e Webhook",
      description:
        "Automatize processos com triggers inteligentes que respondem a eventos em tempo real ou executam tarefas programadas.",
      image: "https://placehold.co/400x300/d0ec1a/07401a?text=Workflows",
      size: "large",
    },
    {
      title: "UI Generation",
      description:
        "Gere interfaces dinâmicas automaticamente com base em dados e contexto, acelerando o desenvolvimento.",
      image: "https://placehold.co/400x300/a595ff/151042?text=UI+Generation",
      size: "medium",
    },
    {
      title: "Observability",
      description:
        "Monitore performance, usage e comportamento dos seus agentes com dashboards e métricas em tempo real.",
      image: "https://placehold.co/400x300/ffc116/392b02?text=Observability",
      size: "small",
    },
    {
      title: "Agent Marketplace",
      description:
        "Explore e compartilhe agentes pré-construídos com a comunidade para acelerar sua implementação.",
      image: "https://placehold.co/400x300/d0ec1a/07401a?text=Marketplace",
      badge: "Coming Soon",
      size: "small",
    },
    {
      title: "Open Source",
      description:
        "Plataforma totalmente open source que permite a teams técnicos estender e customizar conforme necessário.",
      image: "https://placehold.co/400x300/a595ff/151042?text=Open+Source",
      size: "medium",
    },
  ],
};

export function Preview() {
  return <FeaturesBento {...defaultProps} />;
}
