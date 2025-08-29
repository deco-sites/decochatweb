interface FooterLink {
  label: string;
  href: string;
}

interface Props {
  /**
   * @title Footer Links
   * @description Links to display in the footer
   */
  footerLinks?: FooterLink[];
  /**
   * @title Tagline
   * @description Tagline text for the footer
   */
  tagline?: string;
}

export default function CertifyFooter({
  footerLinks = [
    { label: "Docs", href: "#docs" },
    { label: "GitHub", href: "https://github.com/deco-cx/certify" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
  tagline = "Built for agentic engineers.",
}: Props) {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - Logo */}
          <div class="flex items-center space-x-2">
            <span class="text-lg font-bold">Certify</span>
            <span class="text-gray-400">•</span>
            <span class="text-gray-300">on</span>
            <span class="text-lg font-semibold text-primary-light">deco</span>
          </div>

          {/* Center - Links */}
          <nav class="flex items-center space-x-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                class="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right - Tagline */}
          <div class="text-gray-400 text-sm">
            {tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}