import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";
import Button from "../components/ui/Button.tsx";

interface NavItem {
  /**
   * @title Texto do item
   * @description Texto exibido no item de navegação
   */
  label: string;
  /**
   * @title Link
   * @description URL para onde o item irá direcionar (opcional)
   */
  href?: string;
  /**
   * @title Desabilitado
   * @description Se marcado, o item ficará desabilitado e sem link
   */
  disabled?: boolean;
}

interface Props {
  /**
   * @title Logo
   * @description Imagem da logo que será exibida no cabeçalho
   */
  logo: ImageWidget;
  /**
   * @title Itens de navegação
   * @description Lista de itens que serão exibidos no menu de navegação
   */
  navItems: NavItem[];
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

export default function Header({
  logo = defaultProps.logo,
  navItems = defaultProps.navItems,
  ctaText = defaultProps.ctaText,
  ctaHref = defaultProps.ctaHref,
}: Props) {
  return (
    <div className="w-full bg-dc-50">
      <div class="w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12 mx-auto">
        <div class="flex-1 p-2 sm:p-4 rounded-3xl outline outline-1 outline-offset-[-0.5px] outline-dc-200 flex justify-between items-center relative">
          <Image
            src={logo}
            alt="Logo"
            width={144}
            height={32}
            class="w-28 sm:w-36 h-6 sm:h-8"
          />

          {/* Desktop Navigation */}
          <div class="hidden md:flex justify-center items-center gap-2">
            {navItems.map((item) => (
              item.disabled
                ? (
                  <span class="px-3 sm:px-4 py-2 rounded-full flex justify-center items-center opacity-50 cursor-not-allowed select-none">
                    <div class="justify-center text-dc-800 text-sm sm:text-base font-medium font-main leading-tight">
                      {item.label}
                    </div>
                  </span>
                )
                : (
                  <a
                    href={item.href}
                    class="px-3 sm:px-4 py-2 rounded-full flex justify-center items-center hover:bg-dc-100 transition-colors"
                  >
                    <div class="justify-center text-dc-800 text-sm sm:text-base font-medium font-main leading-tight">
                      {item.label}
                    </div>
                  </a>
                )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="small"
              href={ctaHref}
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu - Simple Version */}
          <div class="block md:hidden">
            <style
              dangerouslySetInnerHTML={{
                __html: `
            /* Hide/show elements based on checkbox state */
            #mobile-menu:checked ~ .mobile-menu-panel { transform: translateX(0); }
            #mobile-menu:checked ~ .mobile-menu-backdrop { opacity: 1; pointer-events: auto; }
            #mobile-menu:checked ~ .menu-label .menu-icon { display: none; }
            #mobile-menu:checked ~ .menu-label .close-icon { display: block; }
            #mobile-menu:not(:checked) ~ .menu-label .menu-icon { display: block; }
            #mobile-menu:not(:checked) ~ .menu-label .close-icon { display: none; }
          `,
              }}
            />

            {/* Hidden checkbox for toggle */}
            <input type="checkbox" id="mobile-menu" class="hidden" />

            {/* Menu Toggle Button */}
            <label
              for="mobile-menu"
              class="menu-label cursor-pointer fixed right-6 top-10 z-[70] w-10 h-10 flex items-center justify-center"
            >
              <div class="menu-icon">
                <Icon name="menu" size="large" class="text-dc-800" />
              </div>
              <div class="close-icon">
                <Icon name="close" size="large" class="text-dc-800" />
              </div>
            </label>

            {/* Menu Backdrop */}
            <div class="mobile-menu-backdrop fixed inset-0 bg-black/50 backdrop-blur-sm z-[50] opacity-0 pointer-events-none transition-opacity duration-300">
              &nbsp;
            </div>

            {/* Menu Panel */}
            <div class="mobile-menu-panel fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-xl z-[60] transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto">
              <div class="flex flex-col p-6 pt-16">
                {/* Navigation Links */}
                <div class="flex flex-col gap-4 mb-8">
                  {navItems.map((item) => (
                    item.disabled
                      ? (
                        <span class="px-4 py-3 rounded-lg flex items-center opacity-50 cursor-not-allowed select-none">
                          <div class="text-dc-800 text-base font-medium font-main">
                            {item.label}
                          </div>
                        </span>
                      )
                      : (
                        <a
                          href={item.href}
                          class="px-4 py-3 rounded-lg flex items-center hover:bg-dc-100 transition-colors"
                        >
                          <div class="text-dc-800 text-base font-medium font-main">
                            {item.label}
                          </div>
                        </a>
                      )
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="medium"
                  href={ctaHref}
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  logo: "https://placehold.co/150x32",
  navItems: [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Use Cases",
      href: "/use-cases",
    },
    {
      label: "Agents",
      href: "/agents",
      disabled: true,
    },
    {
      label: "Integrations",
      href: "/integrations",
    },
  ],
  ctaText: "Book a Demo",
  ctaHref: "/demo",
};

export function Preview() {
  return <Header {...defaultProps} />;
}
