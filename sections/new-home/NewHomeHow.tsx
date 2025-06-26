import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";

/**
 * @titleBy title
 */
interface Props {
  /**
   * @title Título da Seção
   * @description Título principal da seção
   */
  title?: string;
  /**
   * @title Descrição
   * @description Texto explicativo da abordagem
   */
  description?: string;
  /**
   * @title Imagem da Interface
   * @description Imagem da interface da plataforma
   */
  interfaceImage?: ImageWidget;
  /**
   * @title Integração 1
   * @description Imagem da primeira integração
   */
  integration1?: ImageWidget;
  /**
   * @title Integração 2
   * @description Imagem da segunda integração
   */
  integration2?: ImageWidget;
  /**
   * @title Integração 3
   * @description Imagem da terceira integração
   */
  integration3?: ImageWidget;
}

const defaultProps: Props = {
  title: "Nossa abordagem",
  description:
    "Usamos nossa plataforma open-source como base para integrar modelos aos seus sistemas, priorizando fluxos com maior potencial de impacto.\n\nTrabalhamos junto com seu time para configurar o ambiente, definir a arquitetura e resolver os primeiros casos críticos — enquanto capacitamos sua equipe para seguir com autonomia.",
  interfaceImage: "https://placehold.co/1000x600?text=Interface+Deco.cx",
  integration1: "https://placehold.co/96x96?text=Int1",
  integration2: "https://placehold.co/96x96?text=Int2",
  integration3: "https://placehold.co/96x96?text=Int3",
};

// Agent Icon Component using Icon component
function AgentIcon({ className = "" }: { className?: string }) {
  return (
    <div
      class={`w-24 h-24 p-4 bg-primary-dark/20 rounded-3xl border border-primary-light/30 flex items-center justify-center ${className}`}
    >
      <Icon name="smart_toy" size="xxl" class="text-primary-light" />
    </div>
  );
}

export default function NewHomeHow({
  title = defaultProps.title,
  description = defaultProps.description,
  interfaceImage = defaultProps.interfaceImage,
  integration1 = defaultProps.integration1,
  integration2 = defaultProps.integration2,
  integration3 = defaultProps.integration3,
}: Props) {
  // Generate unique ID for this section instance
  const sectionId = `how-section-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div class="w-full bg-dc-50 p-2 pt-0">
      <div
        id={sectionId}
        class="w-full bg-primary-dark rounded-3xl overflow-hidden relative"
      >
        <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 pt-16 lg:pt-32 pb-0">
          {/* Main Content */}
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-8 mb-16 lg:mb-20">
            {/* Left Content */}
            <div class="w-full lg:w-[648px] flex flex-col gap-6">
              <h2 class="text-primary-light text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
                {title}
              </h2>
              <div class="text-dc-50 text-lg md:text-xl lg:text-2xl font-normal leading-relaxed whitespace-pre-line">
                {description}
              </div>
            </div>
          </div>

          {/* Bottom Section - Interface Image */}
          <div class="relative -mx-8 md:-mx-16 lg:-mx-24">
            <div class="flex justify-end 2xl:justify-center relative">
              {/* Interface Image Container */}
              <div class="w-full max-w-[1000px] rounded-t-xl overflow-hidden border-8 border-b-0 border-white/20 relative translate-x-8 md:translate-x-16 lg:translate-x-24 2xl:translate-x-0 2xl:max-w-[1500px]">
                <div class="relative">
                  <Image
                    src={interfaceImage || defaultProps.interfaceImage!}
                    alt="Interface da plataforma deco.cx"
                    width={1440}
                    height={900}
                    class="w-full h-auto object-cover object-top"
                    loading="lazy"
                    fetchPriority="low"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <NewHomeHow {...defaultProps} />;
}
