import type { ImageWidget } from "apps/admin/widgets.ts";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import Icon from "../components/ui/Icon.tsx";

/**
 * @titleBy name
 */
interface ColorOption {
  /**
   * @title Nome da cor
   * @description Nome da combinação de cores (ex: "Blue Slate", "Rose Stone")
   */
  name: string;
  /**
   * @title Valor da cor
   * @description Valor CSS da cor principal (ex: bg-blue-500)
   */
  colorClass: string;
  /**
   * @title Cor principal
   * @description Cor principal do Tailwind (ex: blue, rose, yellow, green)
   */
  primaryColor: string;
  /**
   * @title Cor neutra
   * @description Tom neutro do Tailwind (ex: slate, stone, zinc)
   */
  neutralTone: string;
}

interface Props {
  /**
   * @title Eyebrow
   * @description Texto pequeno que aparece acima do título
   */
  eyebrow?: string;
  /**
   * @title Título principal
   * @description Título principal da seção
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição da seção
   */
  description: string;
  /**
   * @title Opções de cor
   * @description Combinações de cor principal + neutro disponíveis para customização
   * @maxItems 8
   */
  colorOptions: ColorOption[];
  /**
   * @title Logo SVG
   * @description SVG do logo que muda de cor
   */
  logoSvg?: string;
  /**
   * @title Texto do botão GitHub
   * @description Texto que aparece no botão do GitHub
   */
  githubButtonText?: string;
  /**
   * @title Estrelas do GitHub
   * @description Número de estrelas do repositório
   */
  githubStars?: string;
}

export default function Whitelabel({
  eyebrow = "Whitelabel & Opensource",
  title,
  description,
  colorOptions = [],
  logoSvg,
  githubButtonText = "deco-cx/chat",
  githubStars = "15 stars",
}: Props) {
  return (
    <div class="self-stretch p-2 flex flex-col justify-start items-start gap-2.5">
      <div class="w-full max-w-[1440px] p-2 relative bg-primary-dark rounded-2xl flex flex-col lg:flex-row justify-start items-start gap-8 mx-auto overflow-hidden">
        {/* Left Content */}
        <div class="flex-1 lg:max-w-[500px] flex p-24 flex-col justify-center items-start gap-8 lg:gap-12 relative z-10">
          <div class="flex flex-col justify-start items-start gap-8 lg:gap-10">
            <div class="flex flex-col justify-start items-start gap-6">
              <FadeUp>
                <Eyebrow
                  variant="primary-light"
                  iconName="info"
                  text={eyebrow}
                />
              </FadeUp>
              <FadeUp delay={200}>
                <h2 class="text-dc-200 text-3xl md:text-4xl lg:text-5xl font-semibold font-manrope leading-tight">
                  {title}
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={400}>
              <div class="text-dc-200 text-lg md:text-xl font-medium font-manrope leading-relaxed">
                {description}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={600}>
            <div class="w-full max-w-sm p-4 bg-primary-light rounded-xl flex justify-start items-center gap-2 overflow-hidden">
              <Icon name="code" size="small" class="text-primary-dark" />
              <div class="flex-1 text-primary-dark text-base font-semibold font-manrope leading-none">
                {githubButtonText}
              </div>
              <div class="opacity-50 text-primary-dark text-base font-normal font-manrope leading-none">
                {githubStars}
              </div>
              <Icon name="open_in_new" size="small" class="text-primary-dark" />
            </div>
          </FadeUp>
        </div>

        {/* Right Product Preview Area */}
        <div class="flex-1 relative min-h-[400px] lg:min-h-[600px]">
          {/* Background gradient - positioned behind the interface */}
          <div
            id="bg-gradient-main"
            class="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl"
          >
          </div>
          <div
            id="bg-gradient-overlay"
            class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-800/50 to-transparent rounded-2xl"
          >
          </div>

          {/* Customization Panels - Top positioned with high z-index */}
          <div class="absolute top-4 right-4 flex flex-col gap-4 z-50">
            {/* Color Customization Panel */}
            {colorOptions && colorOptions.length > 0 && (
              <FadeUp delay={800}>
                <div class="p-4 bg-white rounded-md shadow-lg flex flex-col gap-2">
                  <div class="text-gray-600 text-base font-medium font-manrope leading-tight">
                    Color
                  </div>
                  <div class="flex justify-start items-center gap-1 flex-wrap">
                    {colorOptions.map((option, index) => (
                      <button
                        class={`w-6 h-6 ${option.colorClass} rounded-lg color-option ${
                          index === 0
                            ? "outline outline-2 outline-gray-700"
                            : ""
                        }`}
                        data-primary-color={option.primaryColor}
                        data-neutral-tone={option.neutralTone}
                        data-color={option.name}
                        type="button"
                        title={option.name}
                      />
                    ))}
                  </div>
                </div>
              </FadeUp>
            )}

            {/* Appearance Customization Panel */}
            <FadeUp delay={900}>
              <div class="p-4 bg-white rounded-md shadow-lg flex flex-col gap-2">
                <div class="text-gray-600 text-base font-medium font-manrope leading-tight">
                  Appearance
                </div>
                <div class="flex justify-start items-center gap-1">
                  <button
                    class="w-6 h-6 p-[3.20px] rounded-md outline outline-1 outline-gray-700 flex justify-center items-center gap-2 overflow-hidden appearance-option"
                    data-appearance="light"
                    type="button"
                  >
                    <Icon
                      name="light_mode"
                      size="small"
                      class="text-gray-600"
                    />
                  </button>
                  <button
                    class="w-6 h-6 p-[3.20px] rounded-md outline outline-1 outline-gray-200 flex justify-center items-center gap-2 overflow-hidden appearance-option"
                    data-appearance="dark"
                    type="button"
                  >
                    <Icon name="dark_mode" size="small" class="text-gray-600" />
                  </button>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Product Interface Container - Complete Chat Application */}
          <div class="relative z-10 w-full h-full pt-4 pl-4 md:pt-8 md:pl-8 flex justify-end items-end">
            <div
              id="product-interface"
              class="w-full max-w-[918px] h-[630px] bg-white rounded-lg shadow-2xl overflow-hidden flex border border-slate-200 transform translate-x-8 translate-y-8"
            >
              {/* Left Sidebar */}
              <div
                id="sidebar"
                class="w-40 flex flex-col justify-start items-start gap-[5px] bg-slate-50 border-r border-slate-200"
              >
                {/* Sidebar Header */}
                <div class="flex flex-col justify-start items-start w-full">
                  <div class="w-full h-9 px-2 flex justify-start items-center gap-[5px]">
                    <div class="flex-1 px-[5px] py-2 bg-slate-50 flex justify-start items-center gap-1">
                      <div class="flex justify-start items-center gap-0.5">
                        <div
                          id="logo-icon"
                          class="w-6 h-4 flex items-center justify-center"
                        >
                          <Icon
                            name="smart_toy"
                            size="small"
                            class="text-blue-500"
                          />
                        </div>
                      </div>
                      <div class="text-slate-900 text-[9px] font-medium">
                        AI Agents
                      </div>
                    </div>
                  </div>
                  <div class="w-40 px-2.5 py-[5px] flex flex-col justify-start items-start gap-1.5">
                    <div class="w-full h-0 border-b border-slate-200"></div>
                  </div>
                  <div class="w-full h-9 px-2 flex justify-start items-center gap-[5px]">
                    <div class="flex-1 h-6 px-2 py-[5px] bg-transparent rounded-lg flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div class="w-4 h-4 p-[5px] bg-green-950 rounded-full border border-black/5 flex justify-center items-center gap-[3px] overflow-hidden">
                        <div class="w-2 h-2 relative">
                          <div
                            id="deco-logo"
                            class="w-2 h-2 bg-lime-400 rounded-sm"
                          >
                          </div>
                        </div>
                      </div>
                      <div class="text-slate-900 text-[9px] font-medium">
                        deco.chat
                      </div>
                      <div class="w-2.5 h-2.5 flex items-center justify-center">
                        <Icon
                          name="expand_more"
                          size="small"
                          class="text-slate-600"
                        />
                      </div>
                    </div>
                    <div class="w-5 h-5 px-2.5 py-[5px] bg-transparent rounded-xl flex justify-center items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <Icon
                        name="more_horiz"
                        size="small"
                        class="text-slate-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div class="w-full px-2.5 flex flex-col justify-start items-start">
                  <div
                    id="nav-new-chat"
                    class="w-36 px-2 py-[5px] bg-slate-200 rounded-lg flex justify-start items-center gap-2 hover:bg-slate-300 transition-colors"
                  >
                    <Icon name="add" size="small" class="text-blue-600" />
                    <div class="flex-1 text-blue-600 text-[9px] font-medium">
                      New chat
                    </div>
                  </div>
                  <div
                    id="nav-agents"
                    class="w-36 px-2 py-[5px] rounded-lg flex justify-start items-center gap-2 hover:bg-slate-100 transition-colors"
                  >
                    <Icon
                      name="smart_toy"
                      size="small"
                      class="text-slate-500"
                    />
                    <div class="flex-1 text-slate-500 text-[9px] font-medium">
                      Agents
                    </div>
                  </div>
                  <div
                    id="nav-integration"
                    class="w-36 px-2 py-[5px] rounded-lg flex justify-start items-center gap-2 hover:bg-slate-100 transition-colors"
                  >
                    <Icon
                      name="extension"
                      size="small"
                      class="text-slate-500"
                    />
                    <div class="flex-1 text-slate-500 text-[9px] font-medium">
                      Integration
                    </div>
                  </div>
                  <div
                    id="nav-triggers"
                    class="w-36 px-2 py-[5px] rounded-lg flex justify-start items-center gap-2 hover:bg-slate-100 transition-colors"
                  >
                    <Icon name="bolt" size="small" class="text-slate-500" />
                    <div class="flex-1 text-slate-500 text-[9px] font-medium">
                      Triggers
                    </div>
                  </div>
                  <div
                    id="nav-knowledge"
                    class="w-36 px-2 py-[5px] rounded-lg flex justify-start items-center gap-2 hover:bg-slate-100 transition-colors"
                  >
                    <Icon name="storage" size="small" class="text-slate-500" />
                    <div class="flex-1 text-slate-500 text-[9px] font-medium">
                      Knowledge base
                    </div>
                  </div>
                </div>

                {/* Separator */}
                <div class="w-40 px-2.5 py-[5px] flex flex-col justify-start items-start gap-1.5">
                  <div class="w-full h-0 border-b border-slate-200"></div>
                </div>

                {/* Chat History - Today */}
                <div class="w-full px-2.5 flex flex-col justify-start items-start">
                  <div class="w-36 h-5 flex flex-col justify-center items-start gap-1.5">
                    <div class="w-full px-[5px] py-1 rounded-sm flex justify-between items-center">
                      <div class="text-slate-900 text-[8px] font-semibold">
                        Today
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex flex-col justify-start items-start gap-1.5">
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div
                        id="chat-dot-1"
                        class="w-2.5 h-2.5 bg-blue-500 rounded-sm"
                      >
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        Mangabeira Chat
                      </div>
                    </div>
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div class="w-2.5 h-2.5 relative bg-slate-100 rounded-sm shadow-sm border border-slate-300/20 overflow-hidden">
                        <div class="w-1.5 h-1.5 absolute top-[2px] left-[2px] bg-white shadow-sm overflow-hidden">
                        </div>
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        ideias de startups
                      </div>
                    </div>
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div class="w-2.5 h-2.5 relative bg-slate-100 rounded-sm shadow-sm border border-slate-300/20 overflow-hidden">
                        <div class="w-1.5 h-1.5 absolute top-[2px] left-[2px] bg-white shadow-sm overflow-hidden">
                        </div>
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        tradução de um texto
                      </div>
                    </div>
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div class="w-2.5 h-2.5 relative bg-slate-100 rounded-sm shadow-sm border border-slate-300/20 overflow-hidden">
                        <div class="w-1.5 h-1.5 absolute top-[2px] left-[2px] bg-white shadow-sm overflow-hidden">
                        </div>
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        localização das capitais
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat History - Yesterday */}
                <div class="w-full px-2.5 flex flex-col justify-start items-start">
                  <div class="w-36 h-5 flex flex-col justify-center items-start gap-1.5">
                    <div class="w-full px-[5px] py-1 rounded-sm flex justify-between items-center">
                      <div class="text-slate-900 text-[8px] font-semibold">
                        Yesterday
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex flex-col justify-start items-start gap-1.5">
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div
                        id="chat-dot-2"
                        class="w-2.5 h-2.5 bg-blue-500 rounded-sm"
                      >
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        Reembolso
                      </div>
                    </div>
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div
                        id="chat-dot-3"
                        class="w-2.5 h-2.5 bg-blue-500 rounded-sm"
                      >
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        Pesquisador de Leads
                      </div>
                    </div>
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div
                        id="chat-dot-4"
                        class="w-2.5 h-2.5 bg-blue-500 rounded-sm"
                      >
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        Sales Pope
                      </div>
                    </div>
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div
                        id="chat-dot-5"
                        class="w-2.5 h-2.5 bg-blue-500 rounded-sm"
                      >
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        Figma to deco.cx
                      </div>
                    </div>
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div
                        id="chat-dot-6"
                        class="w-2.5 h-2.5 bg-blue-500 rounded-sm"
                      >
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        Grain Explorer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat History - Previous 7 days */}
                <div class="w-full flex-1 px-2.5 flex flex-col justify-start items-start">
                  <div class="w-36 h-5 flex flex-col justify-center items-start gap-1.5">
                    <div class="w-full px-[5px] py-1 rounded-sm flex justify-between items-center">
                      <div class="text-slate-900 text-[8px] font-semibold">
                        Previous 7 days
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex flex-col justify-start items-start gap-1.5">
                    <div class="w-full px-[5px] py-1 rounded-[5px] flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                      <div
                        id="chat-dot-7"
                        class="w-2.5 h-2.5 bg-blue-500 rounded-sm"
                      >
                      </div>
                      <div class="flex-1 text-slate-700 text-[9px] font-normal">
                        Voucher agent
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Profile */}
                <div
                  id="sidebar-footer"
                  class="w-full px-2.5 py-[5px] flex justify-start items-center gap-[5px]"
                >
                  <div class="flex-1 h-6 px-2 py-[5px] bg-transparent rounded-lg flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors">
                    <div class="w-4 h-4 relative rounded-full bg-slate-300">
                    </div>
                    <div class="text-slate-900 text-[9px] font-medium">
                      Leandro Borges
                    </div>
                  </div>
                  <div class="w-5 h-5 px-2.5 py-[5px] bg-transparent rounded-xl flex justify-center items-center gap-[5px] hover:bg-slate-100 transition-colors">
                    <Icon name="settings" size="small" class="text-slate-600" />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div
                id="main-content"
                class="flex-1 flex flex-col justify-start items-start bg-slate-50"
              >
                {/* Header */}
                <div
                  id="main-header"
                  class="w-full h-9 px-[5px] py-2 flex justify-start items-center gap-[5px] bg-slate-50 border-b border-slate-200"
                >
                  <div class="flex-1 flex justify-start items-center gap-[5px]">
                    <div class="h-5 rounded-[5px] flex justify-center items-center gap-[5px]">
                      <div class="w-4 h-4 flex justify-center items-center gap-[5px]">
                        <Icon
                          name="smart_toy"
                          size="small"
                          class="text-slate-700"
                        />
                      </div>
                      <div class="text-slate-700 text-[9px] font-medium">
                        Agents
                      </div>
                    </div>
                  </div>
                  <div
                    id="create-agent-btn"
                    class="h-6 px-2.5 py-[5px] bg-lime-400 rounded-lg flex justify-center items-center gap-[5px] hover:bg-lime-500 transition-colors"
                  >
                    <div class="text-green-950 text-[9px] font-medium">
                      Create agent
                    </div>
                  </div>
                  <div class="w-5 h-5 p-[5px] rounded-lg flex justify-center items-center gap-[5px] hover:bg-slate-100 transition-colors">
                    <Icon
                      name="more_horiz"
                      size="small"
                      class="text-slate-700"
                    />
                  </div>
                </div>

                {/* Main Content Area */}
                <div class="w-full flex-1 px-[5px] pb-[5px] flex justify-center items-start gap-[5px]">
                  <div class="flex-1 h-full p-2.5 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    {/* Filter Tabs */}
                    <div class="w-full flex justify-start items-center gap-[5px]">
                      <div class="flex-1 flex justify-start items-center gap-[5px]">
                        <div
                          id="filter-all"
                          class="h-6 px-2.5 py-[5px] bg-slate-100 rounded-lg flex justify-start items-center gap-[5px] hover:bg-slate-200 transition-colors"
                        >
                          <div class="text-slate-700 text-[9px] font-normal">
                            All
                          </div>
                          <div class="text-slate-400 text-[8px] font-normal">
                            17
                          </div>
                        </div>
                        <div
                          id="filter-public"
                          class="h-6 px-2.5 py-[5px] rounded-lg flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors"
                        >
                          <Icon
                            name="public"
                            size="small"
                            class="text-slate-500"
                          />
                          <div class="text-slate-500 text-[9px] font-medium">
                            Public
                          </div>
                          <div class="text-slate-400 text-[8px] font-normal">
                            4
                          </div>
                        </div>
                        <div
                          id="filter-team"
                          class="h-6 px-2.5 py-[5px] rounded-lg flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors"
                        >
                          <Icon
                            name="group"
                            size="small"
                            class="text-slate-500"
                          />
                          <div class="text-slate-500 text-[9px] font-normal">
                            Team
                          </div>
                          <div class="text-slate-400 text-[8px] font-normal">
                            3
                          </div>
                        </div>
                        <div
                          id="filter-private"
                          class="h-6 px-2.5 py-[5px] rounded-lg flex justify-start items-center gap-[5px] hover:bg-slate-100 transition-colors"
                        >
                          <Icon
                            name="lock"
                            size="small"
                            class="text-slate-500"
                          />
                          <div class="text-slate-500 text-[9px] font-normal">
                            Private
                          </div>
                          <div class="text-slate-400 text-[8px] font-normal">
                            10
                          </div>
                        </div>
                      </div>
                      <div class="h-6 px-2.5 py-[5px] bg-white rounded-lg border border-slate-200 flex justify-start items-center gap-[3px] overflow-hidden">
                        <div class="w-44 text-slate-500 text-[9px] font-normal">
                          Search
                        </div>
                      </div>
                    </div>

                    {/* Agent Cards Grid - Responsive with minimum 2 columns */}
                    <div class="w-full flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 content-start overflow-auto min-h-0">
                      {/* Agent Card 1 - With custom SVG */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-start items-start">
                          <div
                            id="agent-icon-1"
                            class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-4 h-4 text-white"
                            >
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                              <path d="M2 17L12 22L22 17" />
                              <path d="M2 12L12 17L22 12" />
                            </svg>
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="agent-name w-full text-slate-800 text-[10px] font-medium">
                            Internal Rituals Agent
                          </div>
                          <div class="agent-desc w-full text-slate-500 text-[9px] font-normal">
                            Ensures alignment with the company's strategy in
                            internal meetings and chat forums, track OKRs, and
                            keep the culture alive.
                          </div>
                        </div>
                      </div>

                      {/* Agent Card 2 */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-start items-start">
                          <div
                            id="agent-icon-2"
                            class="w-8 h-8 bg-blue-500 rounded-lg"
                          >
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="w-full flex justify-start items-center gap-[5px]">
                            <div class="agent-name text-slate-800 text-[10px] font-medium">
                              HR Assistant
                            </div>
                            <Icon
                              name="public"
                              size="small"
                              class="text-blue-600"
                            />
                          </div>
                          <div class="agent-desc w-full text-slate-500 text-[9px] font-normal">
                            Automates routine tasks like sending birthday
                            messages, handling out-of-office requests, and
                            managing salaries and benefits
                          </div>
                        </div>
                      </div>

                      {/* Agent Card 3 */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-between items-start">
                          <div
                            id="agent-icon-3"
                            class="w-8 h-8 bg-blue-500 rounded-lg"
                          >
                          </div>
                          <div class="w-5 h-5 p-[5px] rounded-full flex justify-center items-center gap-[5px] hover:bg-slate-100 transition-colors">
                            <Icon
                              name="more_vert"
                              size="small"
                              class="text-slate-700"
                            />
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="agent-name w-full text-slate-800 text-[10px] font-medium">
                            Brandable
                          </div>
                          <div class="agent-desc w-full text-slate-500 text-[9px] font-normal">
                            Brandable interviews you, captures your identity,
                            and builds landing pages that are always on-brand.
                            All in one agent.
                          </div>
                        </div>
                      </div>

                      {/* Agent Card 4 */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-start items-start">
                          <div
                            id="agent-icon-4"
                            class="w-8 h-8 bg-blue-500 rounded-lg"
                          >
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="agent-name w-full text-slate-800 text-[10px] font-medium">
                            Research Buddy
                          </div>
                          <div class="agent-desc w-full text-slate-500 text-[9px] font-normal">
                            Synthesizes research findings from multiple sources.
                          </div>
                        </div>
                      </div>

                      {/* Agent Card 5 */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-start items-start">
                          <div
                            id="agent-icon-5"
                            class="w-8 h-8 bg-blue-500 rounded-lg"
                          >
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="agent-name w-full text-slate-800 text-[10px] font-medium">
                            Onboarding Coach
                          </div>
                          <div class="agent-desc w-full text-slate-500 text-[9px] font-normal">
                            Ensures new team members have an amazing first
                            experience. Schedules intro meetings, shares key
                            resources, and tracks progress throughout the first
                            weeks.
                          </div>
                        </div>
                      </div>

                      {/* Agent Card 6 */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-start items-start">
                          <div
                            id="agent-icon-6"
                            class="w-8 h-8 bg-blue-500 rounded-lg"
                          >
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="agent-name w-full text-slate-800 text-[10px] font-medium">
                            Meeting Summarizer
                          </div>
                          <div class="agent-desc w-full text-slate-500 text-[9px] font-normal">
                            Joins meetings silently, generates clear summaries,
                            highlights decisions and action items, and sends
                            everything to participants in real time.
                          </div>
                        </div>
                      </div>

                      {/* Agent Card 7 */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-start items-start">
                          <div
                            id="agent-icon-7"
                            class="w-8 h-8 bg-blue-500 rounded-lg"
                          >
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="agent-name w-full text-slate-800 text-[10px] font-medium">
                            Pulse Listener
                          </div>
                          <div class="agent-desc w-full text-slate-500 text-[9px] font-normal">
                            Monitors the company's emotional temperature.
                            Analyzes internal messages and feedback to detect
                            shifts in morale and flag potential culture or
                            engagement issues.
                          </div>
                        </div>
                      </div>

                      {/* Agent Card 8 */}
                      <div class="agent-card bg-white rounded-lg border border-slate-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5">
                        <div class="w-full flex justify-start items-start">
                          <div
                            id="agent-icon-8"
                            class="w-8 h-8 bg-blue-500 rounded-lg"
                          >
                          </div>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-[3px]">
                          <div class="agent-name w-full text-slate-800 text-[10px] font-medium">
                            Untitled
                          </div>
                          <div class="agent-desc w-full h-10 text-slate-500 text-[9px] font-normal">
                            Your AI agent is still a blank slate. Give it a
                            role, a goal, or just a cool name to get started.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client-side script for comprehensive theming */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", () => {
                const colorOptions = document.querySelectorAll(".color-option");
                const appearanceOptions = document.querySelectorAll(".appearance-option");
                
                let currentColor = "blue";
                let currentNeutral = "slate";
                let currentAppearance = "light";
                
                // Get initially selected values from the first color option
                const initialColorOption = document.querySelector(".color-option.outline");
                if (initialColorOption) {
                  currentColor = initialColorOption.getAttribute("data-primary-color") || "blue";
                  currentNeutral = initialColorOption.getAttribute("data-neutral-tone") || "slate";
                }

                function updateBackgroundColor() {
                  const bgGradientMain = document.getElementById("bg-gradient-main");
                  const bgGradientOverlay = document.getElementById("bg-gradient-overlay");
                  
                  if (bgGradientMain && bgGradientOverlay) {
                    bgGradientMain.className = \`absolute inset-0 rounded-2xl bg-gradient-to-br from-\${currentColor}-400 via-\${currentColor}-500 to-\${currentColor}-600\`;
                    bgGradientOverlay.className = \`absolute bottom-0 left-0 w-full h-1/2 rounded-2xl bg-gradient-to-t from-\${currentColor}-800/50 to-transparent\`;
                  }
                }

                function updateTheme() {
                  console.log("Updating theme:", { currentColor, currentNeutral, currentAppearance });
                  
                  // Update background first
                  updateBackgroundColor();
                  
                  // Update all agent icons
                  for (let i = 1; i <= 8; i++) {
                    const agentIcon = document.getElementById(\`agent-icon-\${i}\`);
                    if (agentIcon) {
                      agentIcon.className = \`w-8 h-8 bg-\${currentColor}-500 rounded-lg flex items-center justify-center\`;
                    }
                  }
                  
                  // Update all chat dots
                  for (let i = 1; i <= 7; i++) {
                    const chatDot = document.getElementById(\`chat-dot-\${i}\`);
                    if (chatDot) {
                      chatDot.className = \`w-2.5 h-2.5 bg-\${currentColor}-500 rounded-sm\`;
                    }
                  }
                  
                  // Update create agent button
                  const createAgentBtn = document.getElementById("create-agent-btn");
                  if (createAgentBtn) {
                    if (currentAppearance === "light") {
                      createAgentBtn.className = \`h-6 px-2.5 py-[5px] bg-\${currentColor}-400 rounded-lg flex justify-center items-center gap-[5px] hover:bg-\${currentColor}-500 transition-colors\`;
                      const btnText = createAgentBtn.querySelector('div');
                      if (btnText) btnText.className = \`text-\${currentNeutral}-900 text-[9px] font-medium\`;
                    } else {
                      createAgentBtn.className = \`h-6 px-2.5 py-[5px] bg-\${currentColor}-500 rounded-lg flex justify-center items-center gap-[5px] hover:bg-\${currentColor}-600 transition-colors\`;
                      const btnText = createAgentBtn.querySelector('div');
                      if (btnText) btnText.className = \`text-white text-[9px] font-medium\`;
                    }
                  }
                  
                  // Update navigation new chat button (active state)
                  const navNewChat = document.getElementById("nav-new-chat");
                  if (navNewChat) {
                    if (currentAppearance === "light") {
                      navNewChat.className = \`w-36 px-2 py-[5px] bg-\${currentColor}-500 rounded-lg flex justify-start items-center gap-2 hover:bg-\${currentColor}-600 transition-colors\`;
                    } else {
                      navNewChat.className = \`w-36 px-2 py-[5px] bg-\${currentColor}-600 rounded-lg flex justify-start items-center gap-2 hover:bg-\${currentColor}-700 transition-colors\`;
                    }
                    // Update text and icon to white
                    const navText = navNewChat.querySelector('div:last-child');
                    if (navText) navText.className = \`flex-1 text-white text-[9px] font-medium\`;
                    const navIcon = navNewChat.querySelector('span');
                    if (navIcon) navIcon.className = navIcon.className.replace(/text-\w+-\d+/g, 'text-white');
                  }
                  
                  // Update public/globe icons to match main color
                  const publicIcons = document.querySelectorAll('span[class*="text-blue-600"]');
                  publicIcons.forEach(icon => {
                    if (icon.textContent === 'public') {
                      icon.className = icon.className.replace(/text-\w+-\d+/g, \`text-\${currentColor}-600\`);
                    }
                  });
                  
                  // Update main interface colors based on appearance
                  const productInterface = document.getElementById("product-interface");
                  const sidebar = document.getElementById("sidebar");
                  const mainContent = document.getElementById("main-content");
                  const mainHeader = document.getElementById("main-header");
                  
                  if (currentAppearance === "light") {
                    if (productInterface) {
                      productInterface.className = \`w-full max-w-[918px] h-[630px] bg-white rounded-lg shadow-2xl overflow-hidden flex border border-\${currentNeutral}-200 transform translate-x-8 translate-y-8\`;
                    }
                    if (sidebar) {
                      sidebar.className = \`w-40 flex flex-col justify-start items-start gap-[5px] bg-\${currentNeutral}-50 border-r border-\${currentNeutral}-200\`;
                    }
                    if (mainContent) {
                      mainContent.className = \`flex-1 flex flex-col justify-start items-start bg-\${currentNeutral}-50\`;
                    }
                    if (mainHeader) {
                      mainHeader.className = \`w-full h-9 px-[5px] py-2 flex justify-start items-center gap-[5px] bg-\${currentNeutral}-50 border-b border-\${currentNeutral}-200\`;
                    }
                  } else {
                    if (productInterface) {
                      productInterface.className = \`w-full max-w-[918px] h-[630px] bg-\${currentNeutral}-900 rounded-lg shadow-2xl overflow-hidden flex border border-\${currentNeutral}-700 transform translate-x-8 translate-y-8\`;
                    }
                    if (sidebar) {
                      sidebar.className = \`w-40 flex flex-col justify-start items-start gap-[5px] bg-\${currentNeutral}-900 border-r border-\${currentNeutral}-700\`;
                    }
                    if (mainContent) {
                      mainContent.className = \`flex-1 flex flex-col justify-start items-start bg-\${currentNeutral}-800\`;
                    }
                    if (mainHeader) {
                      mainHeader.className = \`w-full h-9 px-[5px] py-2 flex justify-start items-center gap-[5px] bg-\${currentNeutral}-800 border-b border-\${currentNeutral}-700\`;
                    }
                  }
                  
                  // Update agent cards
                  const agentCards = document.querySelectorAll(".agent-card");
                  agentCards.forEach(card => {
                    if (currentAppearance === "light") {
                      card.className = \`agent-card bg-white rounded-lg border border-\${currentNeutral}-200 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5\`;
                    } else {
                      card.className = \`agent-card bg-\${currentNeutral}-800 rounded-lg border border-\${currentNeutral}-700 flex flex-col justify-start items-start gap-[5px] overflow-hidden hover:shadow-md transition-shadow p-2.5\`;
                    }
                  });
                  
                  // Update agent card content area
                  const agentCardsContainer = document.querySelector('.flex-1.h-full.p-2\\\\.5.bg-white');
                  if (agentCardsContainer) {
                    if (currentAppearance === "light") {
                      agentCardsContainer.className = \`flex-1 h-full p-2.5 bg-white rounded-lg shadow-sm border border-\${currentNeutral}-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden\`;
                    } else {
                      agentCardsContainer.className = \`flex-1 h-full p-2.5 bg-\${currentNeutral}-800 rounded-lg shadow-sm border border-\${currentNeutral}-700 flex flex-col justify-start items-start gap-2.5 overflow-hidden\`;
                    }
                  }
                  
                  // Update all text colors
                   const allElements = document.querySelectorAll('#product-interface *');
                   allElements.forEach(el => {
                     if (el.className && typeof el.className === 'string') {
                       if (currentAppearance === "light") {
                         el.className = el.className
                           .replace(/text-slate-900/g, \`text-\${currentNeutral}-900\`)
                           .replace(/text-slate-800/g, \`text-\${currentNeutral}-800\`)
                           .replace(/text-slate-700/g, \`text-\${currentNeutral}-700\`)
                           .replace(/text-slate-600/g, \`text-\${currentNeutral}-600\`)
                           .replace(/text-slate-500/g, \`text-\${currentNeutral}-500\`);
                       } else {
                         el.className = el.className
                           .replace(/text-slate-900/g, \`text-\${currentNeutral}-100\`)
                           .replace(/text-slate-800/g, \`text-\${currentNeutral}-100\`)
                           .replace(/text-slate-700/g, \`text-\${currentNeutral}-200\`)
                           .replace(/text-slate-600/g, \`text-\${currentNeutral}-300\`)
                           .replace(/text-slate-500/g, \`text-\${currentNeutral}-400\`);
                       }
                     }
                   });
                   
                   // Fix specific dark mode elements
                   if (currentAppearance === "dark") {
                     // Update navigation items for dark mode
                     const navItems = ["nav-agents", "nav-integration", "nav-triggers", "nav-knowledge"];
                     navItems.forEach(navId => {
                       const navItem = document.getElementById(navId);
                       if (navItem) {
                         navItem.className = \`w-36 px-2 py-[5px] rounded-lg flex justify-start items-center gap-2 hover:bg-\${currentNeutral}-800 transition-colors\`;
                         // Update nav text
                         const navText = navItem.querySelector('div:last-child');
                         if (navText) navText.className = \`flex-1 text-\${currentNeutral}-300 text-[9px] font-medium\`;
                         // Update nav icon
                         const navIcon = navItem.querySelector('span');
                         if (navIcon) navIcon.className = navIcon.className.replace(/text-\w+-\d+/g, \`text-\${currentNeutral}-400\`);
                       }
                     });
                     
                     // Update filter tabs for dark mode
                     const filterIds = ["filter-all", "filter-public", "filter-team", "filter-private"];
                     filterIds.forEach(filterId => {
                       const filter = document.getElementById(filterId);
                       if (filter) {
                         if (filterId === "filter-all") {
                           filter.className = \`h-6 px-2.5 py-[5px] bg-\${currentNeutral}-700 rounded-lg flex justify-start items-center gap-[5px] hover:bg-\${currentNeutral}-600 transition-colors\`;
                         } else {
                           filter.className = \`h-6 px-2.5 py-[5px] rounded-lg flex justify-start items-center gap-[5px] hover:bg-\${currentNeutral}-800 transition-colors\`;
                         }
                         // Update filter text
                         const filterTexts = filter.querySelectorAll('div');
                         filterTexts.forEach(text => {
                           if (text.className.includes('text-slate')) {
                             text.className = text.className.replace(/text-slate-\d+/g, \`text-\${currentNeutral}-300\`);
                           }
                         });
                         // Update filter icons
                         const filterIcon = filter.querySelector('span');
                         if (filterIcon) filterIcon.className = filterIcon.className.replace(/text-\w+-\d+/g, \`text-\${currentNeutral}-400\`);
                       }
                     });
                     
                     // Update search box for dark mode
                     const searchBox = document.querySelector('.h-6.px-2\\\\.5.py-\\\\[5px\\\\].bg-white.rounded-lg.border');
                     if (searchBox) {
                       searchBox.className = \`h-6 px-2.5 py-[5px] bg-\${currentNeutral}-800 rounded-lg border border-\${currentNeutral}-600 flex justify-start items-center gap-[3px] overflow-hidden\`;
                       const searchText = searchBox.querySelector('div');
                       if (searchText) searchText.className = \`w-44 text-\${currentNeutral}-400 text-[9px] font-normal\`;
                     }
                     
                     // Update header text for dark mode
                     const headerTexts = document.querySelectorAll('#main-header *');
                     headerTexts.forEach(el => {
                       if (el.className && el.className.includes('text-slate-700')) {
                         el.className = el.className.replace(/text-slate-700/g, \`text-\${currentNeutral}-200\`);
                       }
                     });
                     
                     // Update sidebar texts for dark mode
                     const sidebarTexts = document.querySelectorAll('#sidebar *');
                     sidebarTexts.forEach(el => {
                       if (el.className && typeof el.className === 'string') {
                         el.className = el.className
                           .replace(/text-slate-900/g, \`text-\${currentNeutral}-100\`)
                           .replace(/text-slate-700/g, \`text-\${currentNeutral}-200\`)
                           .replace(/text-slate-600/g, \`text-\${currentNeutral}-300\`);
                       }
                     });
                     
                   } else {
                     // Light mode specific fixes
                     const navItems = ["nav-agents", "nav-integration", "nav-triggers", "nav-knowledge"];
                     navItems.forEach(navId => {
                       const navItem = document.getElementById(navId);
                       if (navItem) {
                         navItem.className = \`w-36 px-2 py-[5px] rounded-lg flex justify-start items-center gap-2 hover:bg-\${currentNeutral}-100 transition-colors\`;
                         // Update nav text
                         const navText = navItem.querySelector('div:last-child');
                         if (navText) navText.className = \`flex-1 text-\${currentNeutral}-600 text-[9px] font-medium\`;
                         // Update nav icon
                         const navIcon = navItem.querySelector('span');
                         if (navIcon) navIcon.className = navIcon.className.replace(/text-\w+-\d+/g, \`text-\${currentNeutral}-500\`);
                       }
                     });
                     
                     // Update filter tabs for light mode
                     const filterIds = ["filter-all", "filter-public", "filter-team", "filter-private"];
                     filterIds.forEach(filterId => {
                       const filter = document.getElementById(filterId);
                       if (filter) {
                         if (filterId === "filter-all") {
                           filter.className = \`h-6 px-2.5 py-[5px] bg-\${currentNeutral}-100 rounded-lg flex justify-start items-center gap-[5px] hover:bg-\${currentNeutral}-200 transition-colors\`;
                         } else {
                           filter.className = \`h-6 px-2.5 py-[5px] rounded-lg flex justify-start items-center gap-[5px] hover:bg-\${currentNeutral}-100 transition-colors\`;
                         }
                         // Update filter text
                         const filterTexts = filter.querySelectorAll('div');
                         filterTexts.forEach(text => {
                           if (text.className.includes('text-slate')) {
                             if (text.className.includes('text-slate-700')) {
                               text.className = text.className.replace(/text-slate-700/g, \`text-\${currentNeutral}-700\`);
                             } else if (text.className.includes('text-slate-500')) {
                               text.className = text.className.replace(/text-slate-500/g, \`text-\${currentNeutral}-500\`);
                             } else if (text.className.includes('text-slate-400')) {
                               text.className = text.className.replace(/text-slate-400/g, \`text-\${currentNeutral}-400\`);
                             }
                           }
                         });
                         // Update filter icons
                         const filterIcon = filter.querySelector('span');
                         if (filterIcon) filterIcon.className = filterIcon.className.replace(/text-\w+-\d+/g, \`text-\${currentNeutral}-500\`);
                       }
                     });
                   }
                }

                // Color option handlers
                colorOptions.forEach((option) => {
                  option.addEventListener("click", () => {
                    const primaryColor = option.getAttribute("data-primary-color");
                    const neutralTone = option.getAttribute("data-neutral-tone");
                    
                    console.log("Color clicked:", { primaryColor, neutralTone });
                    
                    // Remove outline from all color options
                    colorOptions.forEach((opt) => {
                      opt.classList.remove("outline", "outline-2", "outline-gray-700");
                    });
                    
                    // Add outline to clicked option
                    option.classList.add("outline", "outline-2", "outline-gray-700");
                    
                    if (primaryColor && neutralTone) {
                      currentColor = primaryColor;
                      currentNeutral = neutralTone;
                      updateTheme();
                    }
                  });
                });

                // Appearance option handlers
                appearanceOptions.forEach((option) => {
                  option.addEventListener("click", () => {
                    const appearanceValue = option.getAttribute("data-appearance");
                    
                    console.log("Appearance clicked:", appearanceValue);
                    
                    // Remove outline from all appearance options
                    appearanceOptions.forEach((opt) => {
                      opt.classList.remove("outline-gray-700");
                      opt.classList.add("outline-gray-200");
                    });
                    
                    // Add outline to clicked option
                    option.classList.remove("outline-gray-200");
                    option.classList.add("outline-gray-700");
                    
                    if (appearanceValue) {
                      currentAppearance = appearanceValue;
                      updateTheme();
                    }
                  });
                });

                // Initialize with default values
                updateTheme();
                
                // Set initial appearance button states
                appearanceOptions.forEach((opt) => {
                  if (opt.getAttribute("data-appearance") === "light") {
                    opt.classList.remove("outline-gray-200");
                    opt.classList.add("outline-gray-700");
                  } else {
                    opt.classList.remove("outline-gray-700");
                    opt.classList.add("outline-gray-200");
                  }
                });
              });
            `,
          }}
        />
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Whitelabel & Opensource",
  title: "Your AI assistant,\nfully branded",
  description:
    "We take your data privacy and security seriously. You can choose to host it yourself or use our secure setup.",
  githubButtonText: "deco-cx/chat",
  githubStars: "15 stars",
  logoSvg:
    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7L12 12L22 7L12 2Z"/><path d="M2 17L12 22L22 17"/><path d="M2 12L12 17L22 12"/></svg>`,
  colorOptions: [
    {
      name: "Blue Slate",
      colorClass: "bg-blue-500",
      primaryColor: "blue",
      neutralTone: "slate",
    },
    {
      name: "Rose Stone",
      colorClass: "bg-rose-500",
      primaryColor: "rose",
      neutralTone: "stone",
    },
    {
      name: "Yellow Stone",
      colorClass: "bg-yellow-500",
      primaryColor: "yellow",
      neutralTone: "stone",
    },
    {
      name: "Green Zinc",
      colorClass: "bg-green-500",
      primaryColor: "green",
      neutralTone: "zinc",
    },
    {
      name: "Purple Slate",
      colorClass: "bg-purple-500",
      primaryColor: "purple",
      neutralTone: "slate",
    },
    {
      name: "Red Gray",
      colorClass: "bg-red-500",
      primaryColor: "red",
      neutralTone: "gray",
    },
  ],
};

export function Preview() {
  return <Whitelabel {...defaultProps} />;
}
