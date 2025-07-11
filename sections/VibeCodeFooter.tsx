import type { ImageWidget } from "apps/admin/widgets.ts";

interface FooterLink {
  /**
   * @title Texto do Link
   * @description Texto exibido no link
   */
  label: string;
  /**
   * @title URL
   * @description URL do link
   */
  href: string;
}

interface FooterColumn {
  /**
   * @title Título da Coluna
   * @description Título/categoria da coluna
   */
  title: string;
  /**
   * @title Links
   * @description Lista de links da coluna
   */
  links: FooterLink[];
}

interface Props {
  /**
   * @title Logo
   * @description Logo da empresa no footer
   */
  logo?: ImageWidget;
  /**
   * @title Colunas de Links
   * @description Colunas organizadas de links do footer
   */
  columns?: FooterColumn[];
  /**
   * @title Texto de Copyright
   * @description Texto de copyright e direitos (opcional)
   */
  copyright?: string;
  /**
   * @title Links Sociais
   * @description Links para redes sociais (opcional)
   */
  socialLinks?: FooterLink[];
}

const defaultProps: Props = {
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "AI Agents", href: "/solutions/ai-agents" },
        { label: "Enterprise", href: "/solutions/enterprise" },
        { label: "Agencies", href: "/solutions/agencies" },
        { label: "AI Chatbots", href: "/solutions/chatbots" },
        { label: "Internal Tools", href: "/solutions/internal-tools" },
        { label: "Whitelabel", href: "/solutions/whitelabel" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Pricing", href: "/pricing" },
        { label: "Documentation", href: "/docs" },
        { label: "Tutorials", href: "/tutorials" },
        { label: "Status Page", href: "/status" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Affiliate Program", href: "/affiliate" },
        { label: "Deco Camp", href: "/deco-camp" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "SOC 2 Report", href: "/soc2" },
        { label: "OpenAI DPA", href: "/openai-dpa" },
        { label: "Anthropic DPA", href: "/anthropic-dpa" },
      ],
    },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/company/deco" },
    { label: "YouTube", href: "https://youtube.com/@deco" },
    { label: "Twitter", href: "https://twitter.com/deco" },
  ],
  copyright: "© 2024 Deco.cx. All rights reserved.",
};

export default function VibeCodeFooter({
  logo,
  columns = defaultProps.columns,
  copyright = defaultProps.copyright,
  socialLinks = defaultProps.socialLinks,
}: Props) {
  return (
    <div class="w-full bg-dc-900 py-8">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="bg-primary-dark rounded-2xl overflow-hidden">
          
          {/* Main Footer Content */}
          <div class="px-8 md:px-12 lg:px-16 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-16 lg:pb-20">
            <div class="flex flex-col gap-16 md:gap-20">
              
              {/* Links Section */}
              <div class="flex flex-col gap-8">
                
                {/* Main Columns */}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                  {columns?.map((column, index) => (
                    <div key={index} class="flex flex-col gap-4">
                      <h3 class="text-primary-light text-lg font-semibold leading-relaxed">
                        {column.title}
                      </h3>
                      <div class="flex flex-col">
                        {column.links?.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.href}
                            class="py-2 text-dc-300 text-base font-normal leading-normal hover:text-primary-light transition-colors duration-200"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Social Links - Mobile/Tablet */}
                {socialLinks && socialLinks.length > 0 && (
                  <div class="lg:hidden flex flex-col gap-4">
                    <h3 class="text-primary-light text-lg font-semibold leading-relaxed">
                      Social
                    </h3>
                    <div class="flex flex-col">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="py-2 text-dc-300 text-base font-normal leading-normal hover:text-primary-light transition-colors duration-200"
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Logo Section */}
              <div class="flex flex-col items-center gap-12 md:gap-16 lg:gap-28 px-6 md:px-12 lg:px-24">
                {logo ? (
                  <img
                    src={logo}
                    alt="Company Logo"
                    class="max-w-full h-auto max-h-32 md:max-h-48 lg:max-h-72 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div class="relative">
                    <div class="w-64 md:w-96 lg:w-[500px] h-32 md:h-48 lg:h-72 bg-primary-light rounded-2xl"></div>
                    <div class="absolute inset-4 md:inset-8 lg:inset-12 bg-primary-dark rounded-xl"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div class="border-t border-dc-700 px-8 md:px-12 lg:px-16 py-6 md:py-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div class="text-dc-400 text-sm md:text-base text-center md:text-left">
                {copyright}
              </div>
              
              {/* Social Links - Desktop */}
              {socialLinks && socialLinks.length > 0 && (
                <div class="hidden lg:flex items-center gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-dc-300 text-base font-normal hover:text-primary-light transition-colors duration-200"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <VibeCodeFooter {...defaultProps} />;
} 