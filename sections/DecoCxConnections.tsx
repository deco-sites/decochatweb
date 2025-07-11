import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy title
 */
interface ConnectionIcon {
  /**
   * @title Nome da plataforma
   * @description Nome da plataforma de conexão
   */
  title: string;
  /**
   * @title Ícone
   * @description Ícone da plataforma
   */
  icon: ImageWidget;
  /**
   * @title Cor de fundo
   * @description Cor de fundo do ícone
   */
  backgroundColor?: string;
}

interface Props {
  /**
   * @title Título principal
   * @description Título da seção
   */
  title?: string;
  /**
   * @title Descrição
   * @description Texto descritivo da seção
   */
  description?: string;
  /**
   * @title Ícones de conexão
   * @description Lista de plataformas de conexão
   * @maxItems 6
   */
  connectionIcons?: ConnectionIcon[];
}

export default function DecoCxConnections({
  title = defaultProps.title,
  description = defaultProps.description,
  connectionIcons = defaultProps.connectionIcons,
}: Props) {
  const sectionId = `connections-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section class="w-full bg-dc-900">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
        {/* Header */}
        <div class="w-full flex flex-col items-center gap-14 mb-16 lg:mb-20">
          <div class="w-full flex flex-col items-center gap-6 text-center">
            {/* Title */}
            <h2 class="text-dc-50 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl">
              {title}
            </h2>
            
            {/* Description */}
            <p class="text-dc-300 text-base md:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {/* Connection Icons Grid */}
        <div class="w-full flex justify-center">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-14">
            {connectionIcons?.map((connection, index) => (
              <ConnectionCard
                key={index}
                connection={connection}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Connection Card Component
function ConnectionCard({
  connection,
  index,
}: {
  connection: ConnectionIcon;
  index: number;
}) {
  return (
    <div class="group">
      <div class="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-dc-800 rounded-2xl lg:rounded-3xl outline outline-1 outline-offset-[-1px] outline-dc-700 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:outline-dc-600 group-hover:bg-dc-700">
        <div class="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Image
            src={connection.icon}
            alt={connection.title}
            width={80}
            height={80}
            class="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "Connect to any platform with one click",
  description: "No code. No friction.",
  connectionIcons: [
    {
      title: "Shopify",
      icon: "https://placehold.co/80x80/dc2626/ffffff?text=S",
    },
    {
      title: "WooCommerce",
      icon: "https://placehold.co/80x80/84cc16/ffffff?text=W",
    },
    {
      title: "Figma",
      icon: "https://placehold.co/80x80/7c3aed/ffffff?text=F",
    },
    {
      title: "Adobe",
      icon: "https://placehold.co/80x80/dc2626/ffffff?text=A",
    },
    {
      title: "Slack",
      icon: "https://placehold.co/80x80/3b82f6/ffffff?text=SL",
    },
    {
      title: "API",
      icon: "https://placehold.co/80x80/10b981/ffffff?text=API",
    },
  ],
};

export function Preview() {
  return <DecoCxConnections {...defaultProps} />;
} 