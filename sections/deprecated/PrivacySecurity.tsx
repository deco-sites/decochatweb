import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../../components/ui/Eyebrow.tsx";
import BodyText from "../../components/ui/BodyText.tsx";
import FadeUp from "../../components/ui/FadeUp.tsx";

/**
 * @titleBy title
 */
interface SecurityCard {
  /**
   * @title Título do cartão
   * @description Título do cartão de segurança
   */
  title: string;
  /**
   * @title Imagem do cartão
   * @description Imagem que aparece no cartão
   */
  image: ImageWidget;
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
   * @title Imagem de fundo
   * @description Imagem de fundo que aparece à esquerda
   */
  backgroundImage?: ImageWidget;
  /**
   * @title Cartões de segurança
   * @description Lista dos cartões de funcionalidades de segurança
   * @maxItems 3
   */
  securityCards: SecurityCard[];
}

export default function PrivacySecurity({
  eyebrow = "Privacy-first",
  title,
  description,
  backgroundImage,
  securityCards,
}: Props) {
  return (
    <div class="w-full bg-dc-50 py-16 md:py-32">
      <div class="p-2">
        <div class="w-full bg-primary-dark rounded-2xl overflow-hidden">
          <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-32 relative flex flex-col justify-center items-center gap-12 md:gap-20">
            {/* Background Image */}
            {backgroundImage && (
              <div class="w-[1030px] h-[1030px] left-[-515px] top-[-0.44px] absolute">
                <Image
                  src={backgroundImage}
                  alt="Background"
                  width={1030}
                  height={1030}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-6 md:gap-10 relative z-10">
              <FadeUp>
                <div class="self-stretch flex flex-col justify-start items-center gap-6">
                  <Eyebrow
                    variant="primary-light"
                    iconName="info"
                    text={eyebrow}
                  />
                  <h2 class="self-stretch text-center text-dc-200 text-3xl md:text-5xl font-semibold font-main leading-normal">
                    {title}
                  </h2>
                </div>
              </FadeUp>
              <FadeUp delay={200}>
                <div class="self-stretch text-center text-dc-200 text-xl font-medium font-main leading-normal">
                  {description}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={400}>
              <div class="self-stretch flex flex-col justify-start items-start relative z-10">
                <div class="self-stretch flex flex-col lg:flex-row justify-start items-start gap-4">
                  {securityCards.map((card, index) => (
                    <div
                      key={index}
                      class="flex-1 h-96 bg-dc-50 rounded-2xl flex flex-col justify-end items-start overflow-hidden"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={421}
                        height={254}
                        class="w-full object-cover"
                        loading="lazy"
                      />
                      <div class="self-stretch p-6 md:p-10 flex flex-col justify-start items-start gap-2.5">
                        <div class="self-stretch flex flex-col justify-start items-start gap-2.5">
                          <h3 class="self-stretch text-dc-800 text-xl md:text-2xl font-semibold font-main leading-7">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Privacy-first",
  title: "Secure, governed, and\nunder your control",
  description:
    "We take your data privacy and security seriously.\nYou can choose to host it yourself or use our secure setup.",
  backgroundImage: "https://placehold.co/1030x1030",
  securityCards: [
    {
      title: "Track spendings and set budgets by user or team",
      image: "https://placehold.co/421x284",
    },
    {
      title: "Set granular permissions, content rules and audit usage logs",
      image: "https://placehold.co/421x255",
    },
    {
      title:
        "Privacy-first AI for your team: self-hosted or on our infrastructure",
      image: "https://placehold.co/422x255",
    },
  ],
};

export function Preview() {
  return <PrivacySecurity {...defaultProps} />;
}
