import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy title
 */
export interface FooterLink {
  /**
   * @title Texto do link
   * @description Texto a ser exibido no link
   */
  text: string;
  /**
   * @title URL do link
   * @description Link para onde o usuário será direcionado
   */
  url?: string;
  /**
   * @title Desabilitado
   * @description Se o link está desabilitado
   * @default false
   */
  disabled?: boolean;
}

/**
 * @titleBy title
 */
export interface LinkColumn {
  /**
   * @title Título da coluna
   * @description Título que aparecerá no topo da coluna de links
   */
  title: string;
  /**
   * @title Links
   * @description Lista de links a serem exibidos nesta coluna
   */
  links: FooterLink[];
}

export interface Props {
  /**
   * @title Colunas de links
   * @description Colunas com categorias de links no rodapé
   * @minItems 1
   * @maxItems 5
   */
  columns: LinkColumn[];
  /**
   * @title Logo
   * @description Imagem exibida na parte inferior do rodapé
   */
  logo?: ImageWidget;
}

export default function Footer({
  columns = defaultProps.columns,
  logo = defaultProps.logo,
}: Props) {
  return (
    <div className="w-full bg-dc-50">
      <div className="p-2">
        <div className="w-full bg-primary-dark pt-32 pb-0 px-4 md:px-8 lg:px-16 rounded-2xl">
          <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-start items-center gap-10 md:gap-20">
            {/* Links Columns */}
            <div className="self-stretch grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start gap-4"
                >
                  <h3 className="text-primary-light text-lg font-semibold font-manrope leading-relaxed">
                    {column.title}
                  </h3>
                  <div className="w-full flex flex-col justify-start items-start">
                    {column.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="w-full py-2">
                        {link.url && !link.disabled
                          ? (
                            <a
                              href={link.url}
                              className="text-dc-200 text-base font-manrope hover:text-primary-light/80 transition-colors"
                            >
                              {link.text}
                            </a>
                          )
                          : (
                            <span
                              className={`text-dc-200 text-base font-manrope ${
                                link.disabled
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              {link.text}
                            </span>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Logo */}
            {logo && (
              <div className="w-full overflow-hidden h-1/2">
                <Image
                  src={logo}
                  alt="Logo"
                  width={1296}
                  height={186}
                  className="w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  columns: [
    {
      title: "Solutions",
      links: [
        { text: "AI Agents", url: "#" },
        { text: "Enterprise", url: "#" },
        { text: "Agencies", url: "#" },
        { text: "AI Chatbots", url: "#" },
        { text: "Internal Tools", url: "#" },
        { text: "Whitelabel", url: "#", disabled: true },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "LinkedIn", url: "#" },
        { text: "Youtube", url: "#" },
        { text: "Coming Soon", disabled: true },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Pricing", url: "#" },
        { text: "Documentation", url: "#" },
        { text: "Tutorials", url: "#" },
        { text: "Status Page", url: "#" },
        { text: "Changelog", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Afilliate Program", url: "#" },
        { text: "Deco Camp", url: "#" },
        { text: "Security", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy", url: "#" },
        { text: "Terms", url: "#" },
        { text: "SOC 2 Report", url: "#" },
        { text: "OpenAI DPA", url: "#" },
        { text: "Anthropic DPA", url: "#" },
      ],
    },
  ],
  logo: "https://placehold.co/1296x186",
};

export function Preview() {
  return <Footer {...defaultProps} />;
}
