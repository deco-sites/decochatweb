import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";

/**
 * @titleBy name
 */
interface Platform {
  /**
   * @title Nome da plataforma
   * @description Nome da plataforma de comunicação
   */
  name: string;
  /**
   * @title Logo da plataforma
   * @description Logo da plataforma de comunicação
   */
  logo: ImageWidget;
}

interface Props {
  /**
   * @title Tag da seção
   * @description Tag que aparece no cartão esquerdo
   */
  tag?: string;
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
   * @title Imagem do telefone
   * @description Imagem do telefone no centro
   */
  phoneImage: ImageWidget;
  /**
   * @title Plataformas de comunicação
   * @description Lista de plataformas que se conectam ao telefone
   * @maxItems 5
   */
  platforms: Platform[];
}

export default function Communications({
  tag = "Communication",
  title,
  description,
  phoneImage,
  platforms,
}: Props) {
  return (
    <div class="self-stretch px-4 md:px-8 lg:px-20 py-16 md:py-32 bg-dc-50 flex flex-col justify-center items-center gap-16 md:gap-32">
      <FadeUp>
        <div class="self-stretch relative flex flex-col lg:flex-row justify-start items-center gap-2">
          {/* Left Card */}
          <div class="flex-1 h-96 pl-8 md:pl-16 pr-8 md:pr-40 py-16 bg-dc-100 rounded-2xl flex flex-col justify-between items-start">
            <div class="self-stretch flex flex-col justify-start items-start gap-10">
              <div class="self-stretch flex flex-col justify-start items-start gap-6">
                <div class="px-4 py-1 bg-dc-200 rounded-full flex justify-center items-center gap-2">
                  <div class="justify-center text-dc-700 text-base font-semibold font-manrope leading-tight">
                    {tag}
                  </div>
                </div>
                <h2 class="self-stretch justify-start text-dc-800 text-3xl md:text-5xl font-semibold font-manrope leading-normal">
                  {title}
                </h2>
              </div>
              <div class="self-stretch justify-start text-dc-500 text-lg font-normal font-switzer leading-snug">
                {description}
              </div>
            </div>
          </div>

          {/* Right Card with Platforms */}
          <div class="flex-1 h-[520px] p-8 md:p-16 bg-primary-light rounded-2xl flex flex-col justify-center items-start gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                class="self-stretch flex justify-start items-center"
              >
                <div class="flex-1 h-0 outline outline-4 outline-offset-[-2px] outline-stone-50">
                </div>
                <div class="px-5 py-2 bg-dc-50 rounded-full flex justify-center items-center gap-2">
                  <div class="w-8 h-8 relative overflow-hidden">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={32}
                      height={32}
                      class="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div class="justify-center text-dc-700 text-xl font-semibold font-manrope leading-tight">
                    {platform.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Image - Positioned Absolutely */}
          <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-[577.59px] lg:top-[-54.41px] lg:transform-none">
            <Image
              src={phoneImage}
              alt="Phone"
              width={297}
              height={584}
              class="w-72 h-[584.45px] origin-top-left rotate-[10.51deg]"
              loading="lazy"
            />
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

const defaultProps: Props = {
  tag: "Communication",
  title: "deco.chat fits right into your day",
  description:
    "Make your internal work more productive and efficient with AI agents.",
  phoneImage: "https://placehold.co/297x584",
  platforms: [
    { name: "Slack", logo: "https://placehold.co/32x32" },
    { name: "WhatsApp", logo: "https://placehold.co/32x32" },
    { name: "Microsoft Teams", logo: "https://placehold.co/32x32" },
    { name: "Discord", logo: "https://placehold.co/32x32" },
    { name: "Zoom", logo: "https://placehold.co/32x32" },
  ],
};

export function Preview() {
  return <Communications {...defaultProps} />;
}
