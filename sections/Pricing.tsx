import Eyebrow from "../components/ui/Eyebrow.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useScript } from "deco/hooks/useScript.ts";
import Button from "../components/ui/Button.tsx";

/**
 * @titleBy name
 */
interface PricingTier {
  /**
   * @title Nome do plano
   * @description Nome identificador do plano de preços
   */
  name: string;
  /**
   * @title Descrição do plano
   * @description Breve descrição do que o plano oferece
   */
  description: string;
  /**
   * @title Faixa de usuários mínima
   * @description Número mínimo de usuários para este plano
   */
  minUsers: number;
  /**
   * @title Faixa de usuários máxima
   * @description Número máximo de usuários para este plano (null = ilimitado)
   */
  maxUsers: number | null;
  /**
   * @title Preço por usuário/mês
   * @description Preço em dólares por usuário por mês
   */
  pricePerUser: number;
  /**
   * @title Features
   * @description Lista de funcionalidades incluídas
   */
  features: string[];
  /**
   * @title Texto do botão
   * @description Texto a ser exibido no botão CTA
   */
  buttonText: string;
  /**
   * @title É popular
   * @description Marca este plano como mais popular
   */
  isPopular?: boolean;
  /**
   * @title É customizado
   * @description Indica se este plano tem preço customizado
   */
  isCustom?: boolean;
}

/**
 * @titleBy name
 */
interface AddOn {
  /**
   * @title Nome do add-on
   */
  name: string;
  /**
   * @title Descrição
   */
  description: string;
  /**
   * @title Ícone
   */
  icon: string;
  /**
   * @title Tipo de preço
   */
  pricingType: "fixed" | "calculator" | "coming-soon";
  /**
   * @title Preço fixo
   * @description Para add-ons com preço fixo
   */
  fixedPrice?: number;
  /**
   * @title Unidade base incluída
   * @description Ex: "1M requests"
   */
  baseUnit?: string;
  /**
   * @title Preço por unidade extra
   * @description Ex: "$80 per 1M requests"
   */
  extraUnitPrice?: string;
}

/**
 * @titleBy title
 */
interface PlanBox {
  /** @title Título */
  /** @description Título do box/plano */
  title: string;
  /** @title Subtítulo */
  /** @description Subtítulo ou descrição curta do plano */
  subtitle: string;
  /** @title Lista de features */
  /** @description Lista de features ou benefícios do plano */
  features: string[];
  /** @title Texto do botão */
  /** @description Texto do botão de ação */
  cta: string;
}

interface ProfessionalServicesBox {
  /** @title Título */
  title: string;
  /** @title Itens do checklist */
  /** @description Lista de serviços oferecidos */
  checklist: string[];
  /** @title Texto do botão */
  cta: string;
}

interface Props {
  /**
   * @title Eyebrow
   * @description Texto pequeno que aparece acima do título
   */
  eyebrow?: string;
  /**
   * @title Título principal
   * @description Título principal da seção de preços
   */
  title?: string;
  /**
   * @title Descrição
   * @description Descrição da seção de preços
   */
  description?: string;
  /**
   * @title Team size inicial
   * @description Tamanho inicial da equipe no input
   */
  defaultTeamSize?: number;
  /**
   * @title Preço por seat (Business)
   * @description Preço por seat para o plano Business
   */
  businessPricePerSeat?: number;
  /**
   * @title Cor de fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: "dc-50" | "primary-light" | "purple-light" | "yellow-light";
  /** @title Plano Business */
  business: PlanBox;
  /** @title Plano Enterprise */
  enterprise: PlanBox;
  /** @title Serviços Profissionais */
  professionalServices: ProfessionalServicesBox;
}

const defaultProps: Props = {
  business: {
    title: "Business",
    subtitle: "Up to 500 seats",
    features: [
      "All of our features",
      "Pay-as-you-go based on model consumption",
      "US$80 per 1M requests, US$1 per extra 1 GB",
      "Email & chat support",
      "API access",
      "Analytics dashboard",
    ],
    cta: "Get started",
  },
  enterprise: {
    title: "Enterprise",
    subtitle: "500+ seats",
    features: [
      "All in Business",
      "Option to use your own API tokens",
      "Option to self-host",
      "Dedicated account manager",
      "Priority support",
      "Custom SLA",
      "Advanced security features",
    ],
    cta: "Contact sales",
  },
  professionalServices: {
    title: "Professional Services",
    checklist: [
      "Discovery & AI use case mapping",
      "Environment set-up",
      "Integration with legacy systems via MCPs",
      "Custom agent design & deployment",
      "Support and iteration",
    ],
    cta: "Request consultation",
  },
  backgroundColor: "dc-50",
  defaultTeamSize: 5,
};

export default function Pricing({
  eyebrow = "Pricing",
  title = "Simple, transparent pricing\nfor every team size",
  description =
    "Choose the plan that fits your business needs. No hidden fees, no surprises.",
  defaultTeamSize = 5,
  businessPricePerSeat = 20,
  backgroundColor = "dc-50",
  business = defaultProps.business,
  enterprise = defaultProps.enterprise,
  professionalServices = defaultProps.professionalServices,
}: Props) {
  const bgColorMap = {
    "dc-50": "bg-dc-50",
    "primary-light": "bg-primary-light",
    "purple-light": "bg-purple-light",
    "yellow-light": "bg-yellow-light",
  };

  const bgColor = bgColorMap[backgroundColor];

  return (
    <div
      class={`w-full ${bgColor} py-16 md:py-32`}
    >
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-start items-center gap-8 md:gap-14">
        <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-6 md:gap-10">
          <FadeUp>
            <div class="self-stretch flex flex-col justify-start items-center gap-6">
              <Eyebrow variant="primary-light" iconName="info" text={eyebrow} />
              <h2 class="self-stretch text-center text-dc-800 text-3xl md:text-5xl font-semibold font-main leading-normal whitespace-pre-line">
                {title}
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <BodyText align="center" color="dc-500" size="xl">
              {description}
            </BodyText>
          </FadeUp>
        </div>

        {/* Team Size Input */}
        <FadeUp delay={300}>
          <div class="flex items-center gap-4 bg-white rounded-2xl shadow-lg border border-dc-200 px-6 py-4">
            <label class="text-dc-800 font-semibold font-main text-lg">
              Team size:
            </label>
            <input
              id="team-size-input"
              type="number"
              min="1"
              max="1000"
              value={defaultTeamSize}
              class="w-24 px-3 py-2 text-center border border-dc-300 rounded-lg font-semibold text-dc-800 focus:border-primary-dark focus:outline-none"
            />
            <span class="text-dc-600 font-medium">seats</span>
          </div>
        </FadeUp>

        {/* Main Pricing Plans */}
        <FadeUp delay={400}>
          <div class="w-full max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Business Plan */}
              <div class="relative p-8 bg-dc-50 rounded-3xl shadow-lg border-2 border-dc-200 flex flex-col gap-6">
                {/* Plan Header */}
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-2">
                    <h3 class="text-dc-800 text-3xl font-bold font-main">
                      {business.title}
                    </h3>
                    <p class="text-dc-500 text-lg font-medium font-main">
                      {business.subtitle}
                    </p>
                  </div>
                  {/* Pricing */}
                  <div class="flex flex-col gap-2">
                    <div class="flex items-baseline gap-2">
                      <span
                        id="business-price"
                        class="text-dc-800 text-4xl font-bold font-main"
                      >
                        $--
                      </span>
                      <span class="text-dc-500 text-lg font-medium font-main">
                        /month
                      </span>
                    </div>
                    <p
                      id="business-seat-price"
                      class="text-dc-500 text-base font-medium font-main"
                    >
                      --
                    </p>
                  </div>
                  {/* Features */}
                  <ul class="flex flex-col gap-3 mt-2">
                    {business.features.map((feature) => (
                      <li
                        key={feature}
                        class="flex items-center gap-3 text-dc-700 text-base font-medium font-main"
                      >
                        <Icon
                          name="check_circle"
                          size="small"
                          class="text-primary-dark"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    size="large"
                    className="mt-4 w-full"
                  >
                    {business.cta}
                  </Button>
                </div>
              </div>
              {/* Enterprise Plan */}
              <div class="relative p-8 bg-dc-50 rounded-3xl shadow-lg border-2 border-dc-200 flex flex-col gap-6">
                <div class="flex flex-col gap-6">
                  {/* Plan Header */}
                  <div class="flex flex-col gap-2">
                    <h3 class="text-dc-800 text-3xl font-bold font-main">
                      {enterprise.title}
                    </h3>
                    <p class="text-dc-500 text-lg font-medium font-main">
                      {enterprise.subtitle}
                    </p>
                  </div>
                  {/* Pricing */}
                  <div class="flex flex-col gap-2">
                    <div class="text-dc-800 text-4xl font-bold font-main">
                      Custom
                    </div>
                    <p class="text-dc-500 text-base font-medium font-main">
                      Flexible pricing options
                    </p>
                  </div>
                  {/* Features */}
                  <ul class="flex flex-col gap-3 mt-2">
                    {enterprise.features.map((feature) => (
                      <li
                        key={feature}
                        class="flex items-center gap-3 text-dc-700 text-base font-medium font-main"
                      >
                        <Icon
                          name="check_circle"
                          size="small"
                          class="text-primary-dark"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    size="large"
                    className="mt-4 w-full"
                  >
                    {enterprise.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Professional Services - Brand Box */}
        <FadeUp delay={600}>
          <div class="w-full max-w-5xl mx-auto mt-12">
            <div class="bg-dc-100 rounded-3xl border border-dc-200 px-8 py-10 flex flex-col items-center gap-6 shadow-md">
              <h3 class="text-dc-800 text-2xl md:text-3xl font-semibold font-main text-center">
                {professionalServices.title}
              </h3>
              <ul class="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-3xl mx-auto">
                {professionalServices.checklist.map((service) => (
                  <li
                    key={service}
                    class="flex items-center gap-2 text-dc-700 text-base font-medium font-main bg-dc-50 rounded-xl px-4 py-2"
                  >
                    <Icon
                      name="check_circle"
                      size="small"
                      class="text-primary-dark"
                    />
                    {service}
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="large" className="mt-2">
                {professionalServices.cta}
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Pricing Script */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((data) => {
            function getSeatPrice(seats: number) {
              if (seats === 1) return 30;
              if (seats >= 2 && seats <= 499) return 20;
              if (seats === 500) return 10;
              return null;
            }
            function updateBusinessPrice() {
              const teamSizeInput = document.getElementById(
                "team-size-input",
              ) as HTMLInputElement;
              const businessPrice = document.getElementById("business-price");
              const businessSeatPrice = document.getElementById(
                "business-seat-price",
              );
              if (teamSizeInput && businessPrice && businessSeatPrice) {
                let teamSize = Math.max(
                  1,
                  Math.min(parseInt(teamSizeInput.value) || 1, 1000),
                );
                let seatPrice = getSeatPrice(teamSize);
                if (teamSize > 500) {
                  businessPrice.textContent = "Contact us";
                  businessSeatPrice.textContent =
                    "For teams over 500 seats, contact sales for custom pricing.";
                } else if (seatPrice !== null) {
                  businessPrice.textContent = `$${seatPrice * teamSize}`;
                  businessSeatPrice.textContent = `${teamSize} seat${
                    teamSize > 1 ? "s" : ""
                  } × $${seatPrice} per seat/month`;
                } else {
                  businessPrice.textContent = "-";
                  businessSeatPrice.textContent = "-";
                }
                // Cap input at 1000
                if (parseInt(teamSizeInput.value) > 1000) {
                  teamSizeInput.value = "1000";
                }
              }
            }
            const teamSizeInput = document.getElementById("team-size-input");
            if (teamSizeInput) {
              teamSizeInput.addEventListener("input", updateBusinessPrice);
            }
            updateBusinessPrice();
          }, {}),
        }}
      />
    </div>
  );
}

export function Preview() {
  return <Pricing {...defaultProps} />;
}
