import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import Icon from "../components/ui/Icon.tsx";

/**
 * @titleBy title
 */
interface Benefit {
  /**
   * @title Título do benefício
   * @description Nome do benefício
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição do benefício
   */
  description: string;
  /**
   * @title Ícone
   * @description Ícone personalizado do benefício
   */
  icon?: ImageWidget;
  /**
   * @title Nome do ícone
   * @description Nome do ícone Material Design
   */
  iconName?: string;
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
   * @title Benefícios
   * @description Lista dos benefícios para os participantes
   * @maxItems 6
   */
  benefits: Benefit[];
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-dark" | "purple-dark";
}

export default function HackathonBenefits({
  eyebrow = defaultProps.eyebrow,
  title = defaultProps.title,
  description = defaultProps.description,
  benefits = defaultProps.benefits,
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
                {title.split("\n").map((line, index) => (
                  <>
                    {index > 0 && <br />}
                    {line}
                  </>
                ))}
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

        {/* Benefits Grid */}
        <FadeUp delay={400}>
          <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div class="flex items-start gap-6 group">
                {/* Icon */}
                <div
                  class={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    backgroundColor === "dc-50"
                      ? "bg-primary-light/10 border border-primary-light/30 group-hover:bg-primary-light/20"
                      : "bg-primary-light/20 border border-primary-light/40 group-hover:bg-primary-light/30"
                  }`}
                >
                  {benefit.icon
                    ? (
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={32}
                        height={32}
                        class="w-8 h-8 object-contain"
                        loading="lazy"
                      />
                    )
                    : (
                      <Icon
                        name={benefit.iconName || "star"}
                        size="medium"
                        class="text-primary-light"
                      />
                    )}
                </div>

                {/* Content */}
                <div class="flex-1 space-y-3">
                  <h3
                    class={`${textColor} text-xl md:text-2xl font-semibold font-manrope leading-tight`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    class={`${
                      backgroundColor === "dc-50"
                        ? "text-dc-600"
                        : "text-dc-400"
                    } text-base font-medium leading-relaxed`}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Call to Action */}
        <FadeUp delay={600}>
          <div
            class={`w-full max-w-2xl text-center p-8 rounded-3xl border-2 border-dashed ${
              backgroundColor === "dc-50"
                ? "border-primary-light/30 bg-primary-light/5"
                : "border-primary-light/40 bg-primary-light/10"
            } transition-all duration-300 hover:border-primary-light/50 hover:bg-primary-light/10`}
          >
            <div class="flex items-center justify-center gap-3 mb-4">
              <Icon
                name="emoji_events"
                size="large"
                class="text-primary-light"
              />
              <h3
                class={`${textColor} text-2xl md:text-3xl font-bold font-manrope`}
              >
                Pronto para começar?
              </h3>
            </div>
            <p
              class={`${
                backgroundColor === "dc-50" ? "text-dc-600" : "text-dc-400"
              } text-lg font-medium mb-6`}
            >
              Junte-se aos melhores desenvolvedores e crie o futuro dos agentes
              AI
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#registration"
                class="px-8 py-4 bg-primary-light text-primary-dark rounded-2xl font-semibold font-manrope hover:scale-105 transition-transform duration-200"
              >
                Inscrever Agora
              </a>
              <a
                href="#challenges"
                class={`px-8 py-4 border-2 border-primary-light/30 ${textColor} rounded-2xl font-semibold font-manrope hover:border-primary-light/50 hover:bg-primary-light/10 transition-all duration-200`}
              >
                Ver Desafios
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Benefícios para os Participantes",
  title:
    "Além da premiação, você ganha\nreconhecimento e oportunidades únicas na comunidade",
  description:
    "Participe e tenha acesso a benefícios exclusivos que vão além da competição",
  benefits: [
    {
      title: 'Badge oficial "Certified Agent Builder"',
      description: "Certificação reconhecida pela comunidade deco.chat",
      iconName: "verified",
    },
    {
      title: "Mentoria da equipe deco.chat",
      description: "Acesso direto aos especialistas da plataforma",
      iconName: "group",
    },
    {
      title: "Divulgação oficial",
      description: "Destaque no blog e redes sociais da deco.chat",
      iconName: "campaign",
    },
    {
      title: "Networking tech-first",
      description: "Conecte-se com outras agências inovadoras",
      iconName: "connect_without_contact",
    },
    {
      title: "Acesso exclusivo",
      description: "Early access a novas features da plataforma",
      iconName: "lock_open",
    },
    {
      title: "Oportunidades de carreira",
      description: "Destaque para oportunidades em empresas parceiras",
      iconName: "work",
    },
  ],
  backgroundColor: "dc-50",
};

export function Preview() {
  return <HackathonBenefits {...defaultProps} />;
}
