import Icon from "./Icon.tsx";

interface Props {
  /**
   * @title Texto do anúncio
   * @description Texto principal que aparece no banner de anúncio
   */
  text: string;
  /**
   * @title Link do anúncio
   * @description URL para onde o banner deve direcionar quando clicado
   */
  href?: string;
  /**
   * @title Ícone
   * @description Nome do ícone do Material Design para exibir (ex: navigate_next, arrow_forward)
   */
  icon?: string;
  /**
   * @title Abrir em nova aba
   * @description Se verdadeiro, o link será aberto em uma nova aba
   */
  openInNewTab?: boolean;
}

export default function AnnouncementBanner({
  text,
  href,
  icon = "navigate_next",
  openInNewTab = false,
}: Props) {
  const content = (
    <div class="px-4 py-2 bg-dc-100 rounded-2xl inline-flex items-center gap-2 transition-all duration-200 hover:bg-dc-200">
      <span class="text-dc-600 text-sm font-normal leading-tight">
        {text}
      </span>
      <Icon
        name={icon}
        size="small"
        class="text-dc-600"
      />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        class="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
}
