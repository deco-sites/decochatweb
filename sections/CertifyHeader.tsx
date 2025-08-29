import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "../components/ui/Button.tsx";

interface NavItem {
  label: string;
  href?: string;
}

interface Props {
  /**
   * @title Navigation Items
   * @description Navigation links for the header
   */
  navItems?: NavItem[];
  /**
   * @title Primary CTA Text
   * @description Text for the primary call-to-action button
   */
  ctaText?: string;
  /**
   * @title Primary CTA Link
   * @description URL for the primary call-to-action button
   */
  ctaHref?: string;
}

export default function CertifyHeader({
  navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Docs", href: "#docs" },
    { label: "GitHub", href: "https://github.com/deco-cx/certify" },
  ],
  ctaText = "Start for free with $5 credit",
  ctaHref = "https://deco.cx/start",
}: Props) {
  return (
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo */}
          <div class="flex items-center">
            <a href="/" class="flex items-center space-x-2">
              <span class="text-xl font-bold text-gray-900">Certify</span>
              <span class="text-gray-400">•</span>
              <span class="text-lg text-gray-600">on</span>
              <span class="text-lg font-semibold text-primary">deco</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                href={item.href}
                class="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div class="hidden md:block">
            <Button variant="primary" href={ctaHref}>
              {ctaText}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div class="md:hidden">
            <button
              type="button"
              class="text-gray-600 hover:text-gray-900"
              onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" class="hidden md:hidden pb-4">
          <div class="space-y-2">
            {navItems.map((item) => (
              <a
                href={item.href}
                class="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <div class="pt-2">
              <Button variant="primary" href={ctaHref} className="w-full">
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}