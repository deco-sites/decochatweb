import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "../components/ui/Button.tsx";

interface NavigationItem {
  /**
   * @title Texto do Link
   * @description Texto exibido no link de navegação
   */
  label: string;
  /**
   * @title URL do Link
   * @description URL para onde o link deve direcionar
   */
  href: string;
}

interface Props {
  /**
   * @title Logo
   * @description Logo da empresa
   */
  logo?: ImageWidget;
  /**
   * @title Itens de Navegação
   * @description Links de navegação do header
   */
  navigation?: NavigationItem[];
  /**
   * @title Texto do Botão CTA
   * @description Texto do botão de call-to-action
   */
  ctaText?: string;
  /**
   * @title URL do Botão CTA
   * @description URL do botão de call-to-action
   */
  ctaHref?: string;
}

const defaultProps: Props = {
  navigation: [
    { label: "Blog", href: "/blog" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Agents", href: "/agents" },
    { label: "Integrations", href: "/integrations" },
  ],
  ctaText: "Testar grátis",
  ctaHref: "/signup",
};

export default function VibeCodeHeader({
  logo,
  navigation = defaultProps.navigation,
  ctaText = defaultProps.ctaText,
  ctaHref = defaultProps.ctaHref,
}: Props) {
  return (
    <div class="w-full bg-dc-900 py-6 lg:py-12">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="p-2 bg-dc-800 rounded-2xl flex justify-between items-center">
          
          {/* Logo */}
          <div class="flex items-center px-2 py-2">
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                class="w-20 h-6"
                loading="lazy"
              />
            ) : (
              <div class="w-20 h-6 relative">
                <div class="w-20 h-6 bg-primary-light rounded-sm"></div>
                <div class="w-16 h-4 absolute left-1 top-1 bg-primary-dark rounded-sm"></div>
              </div>
            )}
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav class="hidden lg:flex items-center gap-2">
            {navigation?.map((item, index) => (
              <a
                key={index}
                href={item.href}
                class="px-4 py-2 rounded-full text-dc-50 text-base font-normal hover:bg-dc-700 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div class="hidden md:block">
            <Button
              href={ctaHref}
              variant="primary"
              size="medium"
              className="bg-primary-light text-primary-dark hover:bg-primary-light/90 rounded-xl font-medium"
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button class="block lg:hidden p-2 text-dc-50">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Hidden by default */}
        <div class="lg:hidden mt-4 p-4 bg-dc-800 rounded-2xl hidden" id="mobile-menu">
          <nav class="flex flex-col gap-2">
            {navigation?.map((item, index) => (
              <a
                key={index}
                href={item.href}
                class="px-4 py-2 rounded-full text-dc-50 text-base font-normal hover:bg-dc-700 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <div class="mt-4">
              <Button
                href={ctaHref}
                variant="primary"
                size="medium"
                className="w-full bg-primary-light text-primary-dark hover:bg-primary-light/90 rounded-xl font-medium"
              >
                {ctaText}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <VibeCodeHeader {...defaultProps} />;
} 