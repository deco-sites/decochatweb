import { ComponentChildren } from "preact";

export interface BodyTextProps {
  /**
   * @title Conteúdo
   * @description Texto ou conteúdo a ser exibido
   */
  children: ComponentChildren;
  /**
   * @title Alinhamento
   * @description Alinhamento do texto
   */
  align?: "left" | "center" | "right";
  /**
   * @title Cor do texto
   * @description Escolha a cor do texto
   */
  color?:
    | "dc-500"
    | "dc-600"
    | "dc-700"
    | "dc-800"
    | "dc-900"
    | "primary-dark"
    | "purple-dark"
    | "yellow-dark";
  /**
   * @title Tamanho
   * @description Tamanho do texto
   */
  size?: "sm" | "base" | "lg" | "xl";
  /**
   * @title Peso da fonte
   * @description Peso da fonte do texto
   */
  weight?: "normal" | "medium" | "semibold" | "bold";
  /**
   * @title Altura da linha
   * @description Espaçamento entre linhas
   */
  lineHeight?: "tight" | "normal" | "relaxed" | "loose";
  /**
   * @title Classes adicionais
   * @description Classes CSS adicionais para personalização
   */
  className?: string;
  /**
   * @title Elemento HTML
   * @description Tipo de elemento HTML a ser renderizado
   */
  as?: "p" | "span" | "div";
}

export default function BodyText({
  children,
  align = "left",
  color = "dc-500",
  size = "xl",
  weight = "medium",
  lineHeight = "normal",
  className = "",
  as = "p",
}: BodyTextProps) {
  // Alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Color classes
  const colorClasses = {
    "dc-500": "text-dc-500",
    "dc-600": "text-dc-600",
    "dc-700": "text-dc-700",
    "dc-800": "text-dc-800",
    "dc-900": "text-dc-900",
    "primary-dark": "text-primary-dark",
    "purple-dark": "text-purple-dark",
    "yellow-dark": "text-yellow-dark",
  };

  // Size classes - 20px = text-xl in Tailwind
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl", // 20px
  };

  // Weight classes
  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  // Line height classes - 150% = leading-[1.5]
  const lineHeightClasses = {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  // Combine all classes
  const textClasses = `font-main ${alignClasses[align]} ${
    colorClasses[color]
  } ${sizeClasses[size]} ${weightClasses[weight]} ${
    lineHeightClasses[lineHeight]
  } ${className}`;

  // Render the appropriate HTML element
  const Component = as;

  return (
    <Component class={textClasses}>
      {children}
    </Component>
  );
}
