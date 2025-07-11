import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";
import Button from "../../components/ui/Button.tsx";

interface Props {
  /**
   * @title Logo
   * @description Imagem da logo que será exibida no cabeçalho
   */
  logo: ImageWidget;
  /**
   * @title Texto do botão CTA
   * @description Texto que será exibido no botão de chamada para ação
   */
  ctaText: string;
  /**
   * @title Link do botão CTA
   * @description URL para onde o botão de chamada para ação irá direcionar
   */
  ctaHref: string;
}

export default function DarkModeHeader({
  logo = defaultProps.logo,
  ctaText = defaultProps.ctaText,
  ctaHref = defaultProps.ctaHref,
}: Props) {
  return (
    <div className="w-full bg-dc-900">
      <div class="max-w-[1440px] flex items-center justify-center px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 mx-auto">
        <div class="w-full max-w-4xl p-2 bg-dc-800 rounded-2xl flex justify-between items-center gap-4 lg:gap-12 relative">
          {/* Logo */}
          <div class="px-2 flex flex-col justify-start items-start gap-2.5">
            <Image
              src={logo}
              alt="deco.chat Logo"
              width={111}
              height={24}
              class="w-28 h-6"
            />
          </div>

          {/* Desktop CTA */}
          <div class="flex items-center">
            <Button
              variant="primary"
              size="medium"
              href={ctaHref}
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile CTA - Since there's only CTA, no need for complex menu */}
          <div class="block lg:hidden">
            <Button
              variant="primary"
              size="small"
              href={ctaHref}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  logo: "https://placehold.co/111x24/D0EC1A/07401A?text=deco.chat",
  ctaText: "Testar grátis",
  ctaHref: "/demo",
};

export function Preview() {
  return <DarkModeHeader {...defaultProps} />;
} 