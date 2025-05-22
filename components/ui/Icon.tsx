import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "QuestionMarkCircle"
  | "User"
  | "ShoppingCart"
  | "Bars3"
  | "Heart"
  | "MagnifyingGlass"
  | "XMark"
  | "Plus"
  | "Minus"
  | "MapPin"
  | "Phone"
  | "Elo"
  | "Mastercard"
  | "Visa"
  | "Pix"
  | "Logo"
  | "Facebook"
  | "Instagram"
  | "Tiktok"
  | "Truck"
  | "Discount"
  | "Return"
  | "CreditCard"
  | "Deco"
  | "Discord"
  | "Trash"
  | "FilterList"
  | "WhatsApp"
  | "ArrowsPointingOut"
  | "Linkedin"
  | "XTwitter"
  | "Link"
  | "LinkedinOutline"
  | "FacebookOutline"
  | "TwitterOutline";

interface IconProps {
  /**
   * @title Nome do ícone
   * @description O nome do ícone do Material Design a ser exibido
   */
  name: string;
  /**
   * @title Tamanho do ícone
   * @description Tamanho do ícone (small, medium, large)
   */
  size?: "small" | "medium" | "large";
  /**
   * @title Classes adicionais
   * @description Classes CSS adicionais para estilizar o ícone
   */
  class?: string;
}

export default function Icon({
  name,
  size = "medium",
  class: className = "",
}: IconProps) {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-3xl",
  };

  return (
    <span
      class={`material-symbols-rounded ${sizeClasses[size]} ${className}`}
      style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0;"
    >
      {name}
    </span>
  );
}

// Exemplo de utilização:
// <Icon name="home" size="medium" class="text-primary-dark" />
