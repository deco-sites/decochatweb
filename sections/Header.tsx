import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";
import Button from "../components/ui/Button.tsx";
import { useScript } from "@deco/deco/hooks";

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
   * @title Link da Logo
   * @description URL para onde a logo irá direcionar quando clicada (opcional)
   */
  logoHref?: string;
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
  logoHref = defaultProps.logoHref,
  navItems = defaultProps.navItems,
  ctaText = defaultProps.ctaText,
  ctaHref = defaultProps.ctaHref,
}: Props) {
  const sectionId = "header-section";

  return (
    <div className="w-full bg-dc-50 fixed top-0 left-0 right-0 z-40 lg:relative lg:z-auto">
      <div class="max-w-[1440px] flex items-center justify-center px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 mx-auto">
        <div
          class="w-full lg:w-fit p-2 bg-dc-800 rounded-2xl flex justify-between items-center gap-4 lg:gap-12 relative"
          id={sectionId}
        >
          {/* Logo */}
          <div class="px-2 flex flex-col justify-start items-start gap-2.5 logo-container lg:opacity-0">
            {logoHref
              ? (
                <a href={logoHref} class="block">
                  <Image
                    src={logo}
                    alt="deco.chat Logo"
                    width={111}
                    height={24}
                    class="w-28 h-6"
                  />
                </a>
              )
              : (
                <Image
                  src={logo}
                  alt="deco.chat Logo"
                  width={111}
                  height={24}
                  class="w-28 h-6"
                />
              )}
          </div>

          {/* Desktop Navigation */}
          <div
            id="nav-container"
            class="hidden lg:flex justify-start items-center gap-2 overflow-hidden"
          >
            {navItems.map((item, index) => (
              <div
                class="nav-item lg:opacity-0"
                key={index}
              >
                {item.disabled
                  ? (
                    <span class="px-4 py-2 rounded-full flex justify-center items-center gap-2 opacity-50 cursor-not-allowed select-none">
                      <div class="text-dc-50 text-base font-normal leading-tight">
                        {item.label}
                      </div>
                    </span>
                  )
                  : (
                    <a
                      href={item.href}
                      class="px-4 py-2 rounded-full flex justify-center items-center gap-2 hover:bg-dc-700 transition-colors"
                    >
                      <div class="text-dc-50 text-base font-normal leading-tight">
                        {item.label}
                      </div>
                    </a>
                  )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block cta-container lg:opacity-0">
            <Button
              variant="primary"
              size="medium"
              href={ctaHref}
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div class="block lg:hidden">
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
              class="menu-label cursor-pointer fixed right-4 top-4 z-[70] w-14 h-14 flex items-center justify-center"
            >
              <div class="menu-icon">
                <Icon name="menu" size="xl" class="text-dc-50" />
              </div>
              <div class="close-icon">
                <Icon name="close" size="xl" class="text-dc-50" />
              </div>
            </label>

            {/* Menu Backdrop */}
            <label
              for="mobile-menu"
              class="mobile-menu-backdrop fixed inset-0 bg-black/50 backdrop-blur-sm z-[50] opacity-0 pointer-events-none transition-opacity duration-300"
            />

            {/* Menu Panel */}
            <div class="mobile-menu-panel fixed inset-y-0 right-0 w-3/4 max-w-sm bg-dc-800 shadow-xl z-[60] transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto rounded-l-2xl">
              <div class="flex flex-col p-6 pt-14">
                {/* Navigation Links */}
                <div class="flex flex-col gap-4 mb-8">
                  {navItems.map((item) => (
                    item.disabled
                      ? (
                        <span class="px-4 py-3 rounded-lg flex items-center opacity-50 cursor-not-allowed select-none">
                          <div class="text-dc-50 text-base font-normal font-main">
                            {item.label}
                          </div>
                        </span>
                      )
                      : (
                        <a
                          href={item.href}
                          class="px-4 py-3 rounded-lg flex items-center hover:bg-dc-700 transition-colors"
                        >
                          <div class="text-dc-50 text-base font-normal font-main">
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

      {/* GSAP CDN Scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js">
      </script>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((sectionId: string) => {
            function initializeNavbarAnimation() {
              // @ts-ignore - GSAP loaded via CDN
              if (typeof gsap === "undefined") {
                setTimeout(initializeNavbarAnimation, 100);
                return;
              }

              // Only run on desktop (check if lg breakpoint is active)
              const isDesktop = window.innerWidth >= 1024;
              if (!isDesktop) return;

              const logoContainer = document.querySelector(".logo-container");
              const navContainer = document.getElementById("nav-container");
              const navItems = document.querySelectorAll(".nav-item");
              const ctaContainer = document.querySelector(".cta-container");

              if (
                !logoContainer || !navContainer || navItems.length === 0 ||
                !ctaContainer
              ) return;

              // Set initial transforms for desktop only
              // @ts-ignore - GSAP loaded via CDN
              gsap.set([logoContainer, ctaContainer], { y: 20 });
              // @ts-ignore - GSAP loaded via CDN
              gsap.set(navItems, { y: 20 });

              // Calculate final height to prevent content shift
              // @ts-ignore - GSAP loaded via CDN
              gsap.set(navContainer, { width: "auto" });
              const finalHeight = navContainer.offsetHeight;
              // @ts-ignore - GSAP loaded via CDN
              gsap.set(navContainer, {
                width: "1px",
                height: finalHeight + "px",
                opacity: 1,
              });

              // Create timeline for the entire animation sequence
              // @ts-ignore - GSAP loaded via CDN
              const tl = gsap.timeline({ delay: 0.5 });

              // Step 1: Animate logo
              tl.to(logoContainer, {
                duration: 0.6,
                opacity: 1,
                y: 0,
                ease: "power2.out",
              })
                // Step 2: Expand nav container from center
                .to(navContainer, {
                  duration: 0.8,
                  width: "auto",
                  ease: "power2.out",
                }, "-=0.2")
                // Step 3: Animate nav items sliding up with stagger
                .to(navItems, {
                  duration: 0.6,
                  opacity: 1,
                  y: 0,
                  stagger: 0.1,
                  ease: "power2.out",
                }, "-=0.3")
                // Step 4: Animate CTA button
                .to(ctaContainer, {
                  duration: 0.6,
                  opacity: 1,
                  y: 0,
                  ease: "power2.out",
                }, "-=0.3");

              // Handle window resize to restart animation if needed
              let resizeTimeout: number | undefined;
              window.addEventListener("resize", () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                  const newIsDesktop = window.innerWidth >= 1024;
                  if (newIsDesktop && !isDesktop) {
                    // Switched to desktop - restart animation
                    location.reload();
                  }
                }, 200);
              });
            }

            if (document.readyState === "loading") {
              document.addEventListener(
                "DOMContentLoaded",
                initializeNavbarAnimation,
              );
            } else {
              initializeNavbarAnimation();
            }
          }, sectionId),
        }}
      />
    </div>
  );
}

const defaultProps: Props = {
  logo: "https://placehold.co/111x24/D0EC1A/07401A?text=deco.chat",
  logoHref: "/",
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
  ctaText: "Testar grátis",
  ctaHref: "/demo",
};

export function Preview() {
  return <Header {...defaultProps} />;
}
