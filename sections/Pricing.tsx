import type { ImageWidget } from "apps/admin/widgets.ts";
import Button from "../components/ui/Button.tsx";

/**
 * @titleBy name
 */
export interface PricingFeature {
  /**
   * @title Nome da funcionalidade
   * @description Nome da funcionalidade incluída no plano
   */
  name: string;
  /**
   * @title Destaque
   * @description Se a funcionalidade deve ser destacada (ex: com badge)
   */
  highlight?: boolean;
  /**
   * @title Texto do destaque
   * @description Texto para exibir no destaque (ex: "5% markup")
   */
  highlightText?: string;
}

/**
 * @titleBy name
 */
export interface PricingTier {
  /**
   * @title Nome do plano
   * @description Nome do plano (ex: Starter, Growth, Scale)
   */
  name: string;
  /**
   * @title Preço
   * @description Preço mensal do plano (ex: 500, 2500, 7500)
   */
  price: number;
  /**
   * @title Descrição
   * @description Descrição do plano (ex: "Small product teams ready for launch")
   */
  description: string;
  /**
   * @title Funcionalidades
   * @description Lista de funcionalidades incluídas no plano
   */
  features: PricingFeature[];
  /**
   * @title Destaque
   * @description Se este plano deve ser destacado
   */
  featured?: boolean;
  /**
   * @title Cor de fundo
   * @description Cor de fundo do card do plano
   */
  backgroundColor?: "primary" | "secondary" | "light";
}

/**
 * @titleBy name
 */
export interface FreeTierFeature {
  /**
   * @title Nome da funcionalidade
   * @description Nome da funcionalidade do plano gratuito
   */
  name: string;
}

export interface FreeTier {
  /**
   * @title Nome do plano
   * @description Nome do plano gratuito
   */
  name: string;
  /**
   * @title Funcionalidades
   * @description Lista de funcionalidades do plano gratuito
   */
  features: FreeTierFeature[];
}

/**
 * @titleBy name
 */
export interface CustomPlanFeature {
  /**
   * @title Nome da funcionalidade
   * @description Nome da funcionalidade do plano customizado
   */
  name: string;
}

export interface CustomPlan {
  /**
   * @title Título
   * @description Título do plano customizado
   */
  title: string;
  /**
   * @title Subtítulo
   * @description Subtítulo do plano customizado
   */
  subtitle: string;
  /**
   * @title Funcionalidades
   * @description Lista de funcionalidades do plano customizado
   */
  features: CustomPlanFeature[];
  /**
   * @title Texto do botão
   * @description Texto do botão de ação
   */
  buttonText: string;
  /**
   * @title URL do botão
   * @description URL para onde o botão direciona
   */
  buttonUrl?: string;
}

export interface ModelPricing {
  /**
   * @title ID do modelo
   * @description Identificador único do modelo
   */
  id: string;
  /**
   * @title Nome do modelo
   * @description Nome descritivo do modelo
   */
  name: string;
  /**
   * @title Custo de entrada
   * @description Custo por 1M tokens de entrada (em USD)
   */
  inputCost: number;
  /**
   * @title Custo de saída
   * @description Custo por 1M tokens de saída (em USD)
   */
  outputCost: number;
  /**
   * @title Provedor
   * @description Nome do provedor do modelo
   */
  provider: string;
}

export interface Props {
  /**
   * @title Título da seção
   * @description Título principal da seção de preços
   */
  sectionTitle?: string;
  /**
   * @title Plano gratuito
   * @description Configuração do plano gratuito
   */
  freeTier: FreeTier;
  /**
   * @title Planos pagos
   * @description Lista de planos pagos disponíveis
   */
  pricingTiers: PricingTier[];
  /**
   * @title Plano customizado
   * @description Configuração do plano customizado
   */
  customPlan: CustomPlan;
  /**
   * @title Modelos a exibir
   * @description Lista de IDs de modelos para exibir na tabela de preços
   */
  modelsToShow?: string[];
  /**
   * @title Título da tabela de modelos
   * @description Título da seção de preços dos modelos
   */
  modelsTableTitle?: string;
  /**
   * @title Descrição da tabela de modelos
   * @description Descrição explicativa da tabela de modelos
   */
  modelsTableDescription?: string;
}

// Cache for models data
let cachedModelsData: any = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// Helper function to process models data
function processModelsData(data: any, modelsToShow: string[]): ModelPricing[] {
  const allModels: ModelPricing[] = [];
  const seenModels = new Set<string>(); // Track models to prevent duplicates

  for (const [providerKey, providerData] of Object.entries(data)) {
    const provider = providerData as any;
    if (provider.models) {
      for (const [modelKey, modelData] of Object.entries(provider.models)) {
        const model = modelData as any;
        if (model.cost && model.id && !seenModels.has(model.id)) {
          // Add to seen set to prevent duplicates
          seenModels.add(model.id);

          allModels.push({
            id: model.id,
            name: model.name,
            inputCost: model.cost.input || 0,
            outputCost: model.cost.output || 0,
            provider: provider.name,
          });
        }
      }
    }
  }

  // Filter models based on the ones we want to show (maintain order)
  const filteredModels: ModelPricing[] = [];
  for (const modelId of modelsToShow) {
    const model = allModels.find((m) => m.id === modelId);
    if (model) {
      filteredModels.push(model);
    }
  }

  return filteredModels;
}

// Loader function to fetch models data with caching
export async function loader(props: Props, _req: Request) {
  const now = Date.now();

  // Check if we need to fetch fresh data
  if (!cachedModelsData || now - lastFetchTime > CACHE_DURATION) {
    try {
      console.log("Fetching fresh models data from API...");
      const response = await fetch("https://models.dev/api.json");
      cachedModelsData = await response.json();
      lastFetchTime = now;
    } catch (error) {
      console.error("Failed to fetch models pricing:", error);
      // If we have cached data, use it; otherwise return empty array
      if (!cachedModelsData) {
        return {
          ...props,
          modelsPricing: [],
        };
      }
    }
  } else {
    console.log("Using cached models data...");
  }

  // Process the cached data
  const modelsToShow = props.modelsToShow || [
    "gpt-4.1-mini",
    "gemini-2.5-pro",
    "gemini-2.5-flash-lite-preview-06-17",
    "claude-sonnet-4-20250514",
    "claude-3-7-sonnet-20250219",
    "gpt-4.1",
    "gpt-4.1-nano",
    "o3-mini",
    "grok-4",
  ];

  const filteredModels = processModelsData(cachedModelsData, modelsToShow);

  return {
    ...props,
    modelsPricing: filteredModels,
  };
}

const defaultProps: Props = {
  sectionTitle: "Pricing",
  freeTier: {
    name: "Free",
    features: [
      { name: "1 builder seat" },
      { name: "$2 in initial AI credits" },
    ],
  },
  pricingTiers: [
    {
      name: "Starter",
      price: 500,
      description: "Small product teams ready for launch",
      backgroundColor: "primary",
      features: [
        { name: "Up to 10 Builder Seats" },
        {
          name: "Optimized AI Usage Rate",
          highlight: true,
          highlightText: "15% markup",
        },
        { name: "Community Support via Chat" },
        { name: "Weekly Office Hours" },
      ],
    },
    {
      name: "Growth",
      price: 2500,
      description: "For businesses growing AI operations",
      backgroundColor: "primary",
      features: [
        { name: "Up to 50 Builder Seats" },
        {
          name: "Better AI Usage Rate",
          highlight: true,
          highlightText: "10% markup",
        },
        { name: "Dedicated Account Manager" },
        { name: "1h / week of Technical Advisory" },
      ],
    },
    {
      name: "Scale",
      price: 7500,
      description: "For organizations deploying AI at scale",
      backgroundColor: "primary",
      features: [
        { name: "Up to 100 Builder Seats" },
        {
          name: "Best AI Usage Rate",
          highlight: true,
          highlightText: "5% markup",
        },
        { name: "Dedicated Success Team" },
        { name: "3h / week of Dev Support" },
        { name: "Priority Support" },
      ],
    },
  ],
  customPlan: {
    title: "Custom Plan?",
    subtitle: "Let's talk!",
    features: [
      { name: "500+ Builder Seats" },
      { name: "Self-hosting options" },
      { name: "Custom integrations" },
      { name: "BYOT (Bring Your Own Token)" },
    ],
    buttonText: "Contact Sales",
    buttonUrl: "/contact",
  },
  modelsToShow: [
    "gpt-4.1-mini",
    "gemini-2.5-pro",
    "claude-sonnet-4-20250514",
    "claude-3-7-sonnet-20250219",
    "gpt-4.1",
    "gpt-4.1-nano",
    "o3-mini",
    "grok-4",
  ],
  modelsTableTitle: "AI Models Pricing",
  modelsTableDescription:
    "Transparent pricing for all AI models. Pay only for what you use.",
};

export default function Pricing({
  sectionTitle = defaultProps.sectionTitle,
  freeTier = defaultProps.freeTier,
  pricingTiers = defaultProps.pricingTiers,
  customPlan = defaultProps.customPlan,
  modelsTableTitle = defaultProps.modelsTableTitle,
  modelsTableDescription = defaultProps.modelsTableDescription,
  modelsPricing = [],
}: Props & { modelsPricing?: ModelPricing[] }) {
  return (
    <div className="w-full bg-dc-50 py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Title */}
        {sectionTitle && (
          <div className="mb-8 lg:mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-light text-primary-dark rounded-full text-sm font-medium">
              $ {sectionTitle}
            </div>
          </div>
        )}

        {/* Free Tier */}
        <div className="bg-primary-light rounded-2xl p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4 italic">
                {freeTier.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {freeTier.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-dark rounded-full"></div>
                    <span className="text-primary-dark text-sm lg:text-base">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Paid Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-primary-dark rounded-2xl p-6 lg:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 italic">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-primary-light">
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className="text-primary-light/80 text-lg ml-2">
                    / month
                  </span>
                </div>
                <p className="text-white/90 text-sm lg:text-base mb-6 italic">
                  {tier.description}
                </p>
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-light rounded-full mt-2 flex-shrink-0">
                      </div>
                      <div className="flex-1">
                        <span className="text-white text-sm lg:text-base">
                          {feature.name}
                        </span>
                        {feature.highlight && feature.highlightText && (
                          <span className="inline-block ml-2 px-2 py-1 bg-primary-light text-primary-dark text-xs rounded-full font-medium">
                            {feature.highlightText}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan */}
        <div className="bg-primary-dark rounded-2xl p-6 lg:p-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 italic">
                {customPlan.title}
              </h3>
              <p className="text-3xl lg:text-4xl font-bold text-primary-light mb-4">
                {customPlan.subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {customPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-light rounded-full">
                    </div>
                    <span className="text-white text-sm lg:text-base">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button
                variant="primary"
                size="large"
                href={customPlan.buttonUrl}
                className="w-full lg:w-auto"
              >
                {customPlan.buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Models Pricing Table */}
        {modelsPricing && modelsPricing.length > 0 && (
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-dc-900 mb-2">
                {modelsTableTitle}
              </h3>
              <p className="text-dc-600 text-sm lg:text-base">
                {modelsTableDescription}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dc-200">
                    <th className="text-left py-4 px-2 text-dc-900 font-medium text-sm lg:text-base">
                      Model
                    </th>
                    <th className="text-center py-4 px-2 text-dc-900 font-medium text-sm lg:text-base">
                      Input tokens
                    </th>
                    <th className="text-center py-4 px-2 text-dc-900 font-medium text-sm lg:text-base">
                      Output tokens
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {modelsPricing.map((model, index) => (
                    <tr
                      key={index}
                      className="border-b border-dc-100 hover:bg-dc-50"
                    >
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-dc-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-dc-600">
                              {model.provider.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-dc-900 text-sm lg:text-base">
                              {model.name}
                            </div>
                            <div className="text-xs text-dc-500">
                              {model.provider}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-center">
                        <span className="text-dc-900 text-sm lg:text-base">
                          {model.inputCost.toFixed(2)}¢ / 1M tokens
                        </span>
                      </td>
                      <td className="py-4 px-2 text-center">
                        <span className="text-dc-900 text-sm lg:text-base">
                          {model.outputCost.toFixed(2)}¢ / 1M tokens
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-dc-50 rounded-lg">
              <p className="text-xs text-dc-600 leading-relaxed">
                ℹ️ Pricing applies only to our API product. Chat and Assistants,
                when purchased including AI models, have no usage-based cost
                component. deco.chat charges 15% on top of the model provider's
                price. Model prices origin from the model providers in USD. All
                prices excl. VAT.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Preview() {
  return <Pricing {...defaultProps} />;
}
