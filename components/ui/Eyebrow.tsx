import Icon from "./Icon.tsx";

export interface EyebrowProps {
  /**
   * @title Texto do Eyebrow
   * @description Texto que aparece ao lado do ícone
   */
  text: string;
  /**
   * @title Ícone
   * @description Nome do ícone a ser exibido
   */
  iconName?: string;
  /**
   * @title Variante de cor
   * @description Escolha a variante de cor do eyebrow
   */
  variant?: "primary-light" | "purple-light" | "dc-50" | "yellow-light";
}

export default function Eyebrow({
  text,
  iconName = "info",
  variant = "dc-50",
}: EyebrowProps) {
  const variantStyles = {
    "primary-light": {
      bg: "bg-primary-light",
      text: "text-primary-dark",
      outline: "outline-primary-dark/20",
    },
    "purple-light": {
      bg: "bg-purple-light",
      text: "text-purple-dark",
      outline: "outline-purple-dark/20",
    },
    "dc-50": {
      bg: "bg-dc-50",
      text: "text-dc-600",
      outline: "outline-dc-200",
    },
    "yellow-light": {
      bg: "bg-yellow-light",
      text: "text-yellow-dark",
      outline: "outline-yellow-dark/20",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      class={`px-4 py-1 ${styles.bg} rounded-full outline outline-1 outline-offset-[-1px] ${styles.outline} inline-flex justify-center items-center gap-2`}
    >
      <Icon name={iconName} size="xl" class={` ${styles.text}`} />
      <div
        class={`justify-center ${styles.text} text-base font-semibold font-main leading-tight`}
      >
        {text}
      </div>
    </div>
  );
}
