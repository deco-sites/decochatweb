import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import { useScript } from "deco/hooks/useScript.ts";

/**
 * @titleBy name
 */
interface Logo {
  /**
   * @title Nome do logo
   * @description Nome identificador do logo
   */
  name: string;
  /**
   * @title Imagem do logo
   * @description Logo da integração
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
   * @title Logos das integrações
   * @description Lista de logos que aparecerão nas marquees
   * @minItems 10
   */
  logos: Logo[];
}

export default function Integrations({
  eyebrow = "Integrations",
  title,
  description,
  logos,
}: Props) {
  // Split logos into 3 groups for the marquees
  const logosPerRow = Math.ceil(logos.length / 3);
  const topLogos = logos.slice(0, logosPerRow);
  const middleLogos = logos.slice(logosPerRow, logosPerRow * 2);
  const bottomLogos = logos.slice(logosPerRow * 2);

  const LogoCard = ({ logo }: { logo: Logo }) => (
    <div class="w-24 h-24 bg-white rounded-3xl outline outline-[1.51px] outline-offset-[-1.51px] outline-dc-200 flex justify-center items-center gap-5 overflow-hidden flex-shrink-0">
      <div class="w-16 h-16 relative bg-white overflow-hidden">
        <Image
          src={logo.image}
          alt={logo.name}
          width={64}
          height={64}
          class="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <div class="self-stretch px-4 md:px-8 lg:px-20 py-16 md:py-32 bg-dc-50 flex flex-col justify-center items-center gap-16 md:gap-32">
      <div class="self-stretch flex flex-col justify-start items-center gap-8 md:gap-14">
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-6 md:gap-10">
          <FadeUp>
            <div class="self-stretch flex flex-col justify-start items-center gap-6">
              <Eyebrow variant="primary-light" iconName="info" text={eyebrow} />
              <h2 class="self-stretch text-center text-dc-800 text-3xl md:text-5xl font-semibold font-manrope leading-normal">
                {title}
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <BodyText align="center" color="dc-500" size="xl">
              {description}
            </BodyText>
          </FadeUp>
        </div>

        <FadeUp delay={400}>
          <div class="self-stretch flex flex-col justify-center items-center gap-4 relative">
            {/* Top Row */}
            <div class="w-full overflow-hidden relative">
              <div class="marquee-left flex gap-4 w-max">
                {[...topLogos, ...topLogos, ...topLogos].map((logo, index) => (
                  <LogoCard key={`top-${index}`} logo={logo} />
                ))}
              </div>
              {/* Left gradient */}
              <div class="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-dc-50 to-transparent pointer-events-none z-10">
              </div>
              {/* Right gradient */}
              <div class="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-dc-50 to-transparent pointer-events-none z-10">
              </div>
            </div>

            {/* Middle Row */}
            <div class="w-full overflow-hidden relative">
              <div class="marquee-right flex gap-4 w-max">
                {[...middleLogos, ...middleLogos, ...middleLogos].map((
                  logo,
                  index,
                ) => <LogoCard key={`middle-${index}`} logo={logo} />)}
              </div>
              {/* Left gradient */}
              <div class="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-dc-50 to-transparent pointer-events-none z-10">
              </div>
              {/* Right gradient */}
              <div class="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-dc-50 to-transparent pointer-events-none z-10">
              </div>
            </div>

            {/* Bottom Row */}
            <div class="w-full overflow-hidden relative">
              <div class="marquee-left flex gap-4 w-max">
                {[...bottomLogos, ...bottomLogos, ...bottomLogos].map((
                  logo,
                  index,
                ) => <LogoCard key={`bottom-${index}`} logo={logo} />)}
              </div>
              {/* Left gradient */}
              <div class="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-dc-50 to-transparent pointer-events-none z-10">
              </div>
              {/* Right gradient */}
              <div class="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-dc-50 to-transparent pointer-events-none z-10">
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(() => {
            const style = document.createElement("style");
            style.textContent = `
              @keyframes marquee-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
              }
              @keyframes marquee-right {
                0% { transform: translateX(-33.333%); }
                100% { transform: translateX(0); }
              }
              .marquee-left {
                animation: marquee-left 30s linear infinite;
              }
              .marquee-right {
                animation: marquee-right 30s linear infinite;
              }
              /* Ensure smooth infinite loop */
              .marquee-left, .marquee-right {
                will-change: transform;
              }
            `;
            document.head.appendChild(style);
          }),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Integrations",
  title: "Connect all your data and bring\nAI into your everyday work",
  description:
    "Gather all your data using our web-based MCP servers and a central knowledge base. This lets your AI agents use the same information and work towards company goals.",
  logos: [
    { name: "Google", image: "https://placehold.co/64x64" },
    { name: "Slack", image: "https://placehold.co/64x64" },
    { name: "Microsoft", image: "https://placehold.co/64x64" },
    { name: "GitHub", image: "https://placehold.co/64x64" },
    { name: "Notion", image: "https://placehold.co/64x64" },
    { name: "Figma", image: "https://placehold.co/64x64" },
    { name: "Zoom", image: "https://placehold.co/64x64" },
    { name: "Trello", image: "https://placehold.co/64x64" },
    { name: "Asana", image: "https://placehold.co/64x64" },
    { name: "Discord", image: "https://placehold.co/64x64" },
    { name: "WhatsApp", image: "https://placehold.co/64x64" },
    { name: "Teams", image: "https://placehold.co/64x64" },
  ],
};

export function Preview() {
  return <Integrations {...defaultProps} />;
}
