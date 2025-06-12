import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import Icon from "../components/ui/Icon.tsx";

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
   * @title Tipo de parceria
   * @description Categoria da parceria
   */
  type: "principal" | "cloud" | "technology" | "educational" | "supporter";
  /**
   * @title URL
   * @description Link para o site da empresa (opcional)
   */
  url?: string;
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
   * @title Parceiros
   * @description Lista dos parceiros e patrocinadores
   */
  partners: Partner[];
  /**
   * @title Texto CTA
   * @description Texto do call-to-action para se tornar patrocinador
   */
  ctaText?: string;
  /**
   * @title Link CTA
   * @description Link para contato para patrocínio
   */
  ctaLink?: string;
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-dark" | "purple-dark";
}

export default function HackathonPartners({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  partners = defaultProps.partners,
  ctaText = defaultProps.ctaText,
  ctaLink = defaultProps.ctaLink,
  backgroundColor = defaultProps.backgroundColor,
}: Props) {
  const bgColorMap = {
    "dc-50": "bg-dc-50",
    "primary-dark": "bg-primary-dark",
    "purple-dark": "bg-purple-dark",
  };

  const textColorMap = {
    "dc-50": "text-dc-800",
    "primary-dark": "text-dc-200",
    "purple-dark": "text-dc-200",
  };

  const eyebrowVariantMap = {
    "dc-50": "primary-light" as const,
    "primary-dark": "primary-light" as const,
    "purple-dark": "purple-light" as const,
  };

  const bgColor = bgColorMap[backgroundColor || "dc-50"];
  const textColor = textColorMap[backgroundColor || "dc-50"];
  const eyebrowVariant = eyebrowVariantMap[backgroundColor || "dc-50"];

  // Group partners by type
  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.type]) {
      acc[partner.type] = [];
    }
    acc[partner.type].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  const getPartnerTypeLabel = (type: string) => {
    const labels = {
      principal: "Patrocinador Principal",
      cloud: "Patrocinador Cloud",
      technology: "Patrocinador Tecnologia",
      educational: "Apoiador Educacional",
      supporter: "Apoiadores",
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getPartnerTypeSize = (type: string) => {
    const sizes = {
      principal: "w-48 h-24", // Larger for main sponsor
      cloud: "w-40 h-20",
      technology: "w-40 h-20",
      educational: "w-36 h-18",
      supporter: "w-32 h-16",
    };
    return sizes[type as keyof typeof sizes] || "w-32 h-16";
  };

  return (
    <div
      class={`w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 ${bgColor} flex flex-col justify-start items-center gap-14`}
    >
      <div class="w-full max-w-[1440px] flex flex-col justify-start items-center gap-14">
        {/* Header */}
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-10">
          <FadeUp>
            <div class="flex flex-col justify-start items-center gap-6">
              <Eyebrow
                variant={eyebrowVariant}
                iconName="info"
                text={eyebrow || ""}
              />
              <h2
                class={`text-center ${textColor} text-3xl md:text-5xl font-semibold font-manrope leading-tight`}
              >
                {title}
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <BodyText
              align="center"
              color="dc-500"
              size="lg"
              weight="medium"
              lineHeight="relaxed"
              className="max-w-4xl"
            >
              {description}
            </BodyText>
          </FadeUp>
        </div>

        {/* Partners by Category */}
        <div class="w-full space-y-12 md:space-y-16">
          {Object.entries(groupedPartners).map((
            [type, typePartners],
            groupIndex,
          ) => (
            <FadeUp delay={400 + groupIndex * 100}>
              <div class="w-full flex flex-col items-center gap-8">
                {/* Category Title */}
                <div class="text-center">
                  <h3
                    class={`${textColor} text-xl md:text-2xl font-semibold font-manrope mb-2`}
                  >
                    {getPartnerTypeLabel(type)}
                  </h3>
                  <div class="w-16 h-1 bg-primary-light rounded-full mx-auto">
                  </div>
                </div>

                {/* Partners Grid */}
                <div
                  class={`w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 ${
                    type === "principal" ? "max-w-2xl" : "max-w-4xl"
                  }`}
                >
                  {typePartners.map((partner, index) => {
                    const sizeClass = getPartnerTypeSize(type);
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
                        class={`${sizeClass} ${
                          backgroundColor === "dc-50"
                            ? "bg-white border border-dc-200 hover:border-primary-light/50"
                            : "bg-dc-50/10 border border-dc-50/20 hover:border-primary-light/50"
                        } rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                          partner.url ? "cursor-pointer" : ""
                        } group`}
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={type === "principal" ? 160 : 120}
                          height={type === "principal" ? 80 : 60}
                          class="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                          loading="lazy"
                        />
                      </PartnerComponent>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        {ctaText && ctaLink && (
          <FadeUp delay={800}>
            <div class="w-full max-w-2xl text-center">
              <div
                class={`p-8 md:p-12 rounded-3xl border-2 border-dashed ${
                  backgroundColor === "dc-50"
                    ? "border-primary-light/30 bg-primary-light/5 hover:bg-primary-light/10"
                    : "border-primary-light/40 bg-primary-light/10 hover:bg-primary-light/20"
                } transition-all duration-300 hover:border-primary-light/50`}
              >
                <div class="flex items-center justify-center gap-3 mb-6">
                  <Icon
                    name="handshake"
                    size="large"
                    class="text-primary-light"
                  />
                  <h3
                    class={`${textColor} text-2xl md:text-3xl font-bold font-manrope`}
                  >
                    {ctaText}
                  </h3>
                </div>
                <p
                  class={`${
                    backgroundColor === "dc-50" ? "text-dc-600" : "text-dc-400"
                  } text-lg font-medium mb-8`}
                >
                  Junte-se aos líderes da indústria que acreditam no futuro da
                  IA
                </p>
                <a
                  href={ctaLink}
                  class="inline-flex items-center gap-3 px-8 py-4 bg-primary-light text-primary-dark rounded-2xl font-semibold font-manrope hover:scale-105 transition-transform duration-200"
                >
                  <Icon name="email" size="medium" class="text-primary-dark" />
                  Entre em contato
                </a>
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Nossos parceiros",
  title: "Patrocinadores e Apoiadores",
  description:
    "Empresas que acreditam no futuro da inteligência artificial e inovação",
  partners: [
    {
      name: "NVIDIA",
      logo: "https://placehold.co/160x80/00d2df/ffffff?text=NVIDIA",
      type: "principal",
      url: "https://nvidia.com",
    },
    {
      name: "AWS",
      logo: "https://placehold.co/120x60/ff9900/ffffff?text=AWS",
      type: "cloud",
      url: "https://aws.amazon.com",
    },
    {
      name: "Google",
      logo: "https://placehold.co/120x60/4285f4/ffffff?text=Google",
      type: "technology",
      url: "https://google.com",
    },
    {
      name: "Alura",
      logo: "https://placehold.co/120x60/1c4ed8/ffffff?text=Alura",
      type: "educational",
      url: "https://alura.com.br",
    },
  ],
  ctaText: "Quer se tornar um patrocinador?",
  ctaLink: "mailto:partnerships@deco.chat",
  backgroundColor: "dc-50",
};

export function Preview() {
  return <HackathonPartners {...defaultProps} />;
}
