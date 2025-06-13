import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";

/**
 * @titleBy name
 */
interface Partner {
  /**
   * @title Nome do parceiro
   * @description Nome da empresa parceira
   */
  name: string;
  /**
   * @title Logo
   * @description Logo da empresa
   */
  logo: ImageWidget;
  /**
   * @title URL
   * @description Link para o site da empresa (opcional)
   */
  url?: string;
}

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
   * @title Parceiros
   * @description Lista dos parceiros e patrocinadores
   */
  partners: Partner[];
}

export default function HackathonPartners({
  title = defaultProps.title,
  description = defaultProps.description,
  partners = defaultProps.partners,
}: Props) {
  return (
    <div class="w-full p-2 bg-dc-50 flex flex-col justify-start items-start gap-2.5">
      <div class="w-full px-4 md:px-16 py-16 md:py-24 bg-primary-light rounded-2xl flex flex-col justify-center items-center gap-10 lg:gap-20 overflow-hidden">
        {/* Header */}
        <div class="w-full flex flex-col justify-center items-center gap-10">
          <FadeUp>
            <h2 class="text-primary-dark text-2xl font-black font-main leading-tight text-center uppercase">
              {title}
            </h2>
          </FadeUp>
        </div>

        {/* Partners Grid */}
        <FadeUp delay={400}>
          <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl">
            {partners.map((partner, index) => {
              const PartnerComponent = partner.url ? "a" : "div";

              return (
                <PartnerComponent
                  {...(partner.url
                    ? {
                      href: partner.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                    : {})}
                  class="w-full h-24 md:h-32 p-6 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    class="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                </PartnerComponent>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "PARCEIROS E PATROCINADORES",
  description:
    "Empresas que acreditam no futuro da inteligência artificial e inovação",
  partners: [
    {
      name: "NVIDIA",
      logo: "https://placehold.co/160x80/00d2df/ffffff?text=NVIDIA",
      url: "https://nvidia.com",
    },
    {
      name: "AWS",
      logo: "https://placehold.co/120x60/ff9900/ffffff?text=AWS",
      url: "https://aws.amazon.com",
    },
    {
      name: "Google",
      logo: "https://placehold.co/120x60/4285f4/ffffff?text=Google",
      url: "https://google.com",
    },
    {
      name: "Alura",
      logo: "https://placehold.co/120x60/1c4ed8/ffffff?text=Alura",
      url: "https://alura.com.br",
    },
    {
      name: "Microsoft",
      logo: "https://placehold.co/120x60/00bcf2/ffffff?text=Microsoft",
      url: "https://microsoft.com",
    },
    {
      name: "OpenAI",
      logo: "https://placehold.co/120x60/412991/ffffff?text=OpenAI",
      url: "https://openai.com",
    },
  ],
};

export function Preview() {
  return <HackathonPartners {...defaultProps} />;
}
