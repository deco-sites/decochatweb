import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";

/**
 * @titleBy name
 */
interface ColorOption {
  /**
   * @title Nome da cor
   * @description Nome da combinação de cores (ex: "Blue Slate", "Amber Stone")
   */
  name: string;
  /**
   * @title Cor principal
   * @description Cor principal do Tailwind (ex: blue, amber, red)
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
  githubButtonText = "deco-cx/chat",
  githubStars = "15 stars",
}: Props) {
  const sectionId = `whitelabel-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div id={sectionId} class="w-full bg-dc-50 py-16 md:py-24 lg:py-32">
      <div class="p-2">
        <div class="w-full bg-primary-dark rounded-2xl overflow-hidden min-h-[800px]">
          <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row">
            {/* Left Content */}
            <div class="flex-1 lg:max-w-[600px] p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              <div class="space-y-8 lg:space-y-12">
                {/* Eyebrow */}
                <div class="inline-flex items-center gap-2 bg-primary-light text-primary-dark px-4 py-2 rounded-full font-main font-semibold text-sm md:text-base">
                  <Icon name="info" size="small" class="text-primary-dark" />
                  {eyebrow}
                </div>

                {/* Title */}
                <h2 class="text-dc-200 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-main font-semibold leading-tight">
                  {title}
                </h2>

                {/* Description */}
                <p class="text-dc-200 text-lg md:text-xl font-main font-medium leading-relaxed max-w-md">
                  {description}
                </p>

                {/* GitHub Button */}
                <div class="bg-primary-light rounded-xl p-4 flex items-center gap-3 max-w-sm">
                  <Icon name="code" size="small" class="text-primary-dark" />
                  <div class="flex-1 text-primary-dark font-main font-semibold text-base">
                    {githubButtonText}
                  </div>
                  <div class="text-primary-dark/50 font-main text-base">
                    {githubStars}
                  </div>
                  <Icon
                    name="open_in_new"
                    size="small"
                    class="text-primary-dark"
                  />
                </div>
              </div>
            </div>

            {/* Right Preview Area */}
            <div class="flex-1 relative min-h-[500px] lg:min-h-[800px] p-4 md:p-8">
              {/* Background Gradient */}
              <div
                id="bg-gradient"
                class="absolute inset-4 md:inset-8 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600"
              >
                {/* Gradient overlay */}
                <div class="absolute inset-0 bg-gradient-to-t from-amber-800/50 to-transparent rounded-2xl">
                </div>
                {/* Additional overlay for depth */}
                <div class="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 rounded-2xl">
                </div>
              </div>

              {/* Customization Panels - Responsive positioning */}
              <div
                id="customization-panels"
                class="absolute top-8 md:top-16 lg:top-20 left-1/2 transform -translate-x-1/2 z-50 flex flex-col sm:flex-row gap-2 sm:gap-4"
              >
                {/* Color Panel */}
                {colorOptions && colorOptions.length > 0 && (
                  <div
                    id="color-panel"
                    class="bg-white rounded-lg shadow-lg p-3 sm:p-4 min-w-[120px] sm:min-w-[140px]"
                  >
                    <div class="text-dc-600 font-main font-medium text-sm sm:text-base mb-2 sm:mb-3">
                      Color
                    </div>
                    <div class="flex gap-1.5 sm:gap-2 flex-wrap">
                      {colorOptions.map((option, index) => {
                        const colorClassMap: Record<string, string> = {
                          "blue": "bg-blue-500",
                          "amber": "bg-amber-500",
                          "rose": "bg-rose-500",
                          "violet": "bg-violet-500",
                          "lime": "bg-lime-500",
                        };
                        const colorClass = colorClassMap[option.primaryColor] ||
                          "bg-gray-500";

                        return (
                          <button
                            type="button"
                            class={`w-6 h-6 sm:w-8 sm:h-8 ${colorClass} rounded-md sm:rounded-lg transition-all hover:scale-110 color-option ${
                              index === 1
                                ? "ring-2 ring-dc-700 ring-offset-1"
                                : ""
                            }`}
                            data-primary-color={option.primaryColor}
                            data-neutral-tone={option.neutralTone}
                            data-color={option.name}
                            title={option.name}
                          />
                        );
                      })}
                    </div>

                    {/* Hidden classes to ensure Tailwind generates them */}
                    <div class="hidden">
                      {/* Ring classes for color selection */}
                      <div class="ring-2 ring-dc-700 ring-offset-1"></div>
                      {/* Primary color backgrounds */}
                      <div class="bg-blue-500 bg-amber-500 bg-rose-500 bg-violet-500 bg-lime-500">
                      </div>
                      <div class="bg-blue-400 bg-amber-400 bg-rose-400 bg-violet-400 bg-lime-400">
                      </div>
                      <div class="bg-blue-600 bg-amber-600 bg-rose-600 bg-violet-600 bg-lime-600">
                      </div>
                      <div class="bg-blue-100 bg-amber-100 bg-rose-100 bg-violet-100 bg-lime-100">
                      </div>
                      <div class="bg-blue-900 bg-amber-900 bg-rose-900 bg-violet-900 bg-lime-900">
                      </div>

                      {/* Primary color text */}
                      <div class="text-blue-500 text-amber-500 text-rose-500 text-violet-500 text-lime-500">
                      </div>
                      <div class="text-blue-600 text-amber-600 text-rose-600 text-violet-600 text-lime-600">
                      </div>
                      <div class="text-blue-700 text-amber-700 text-rose-700 text-violet-700 text-lime-700">
                      </div>
                      <div class="text-blue-300 text-amber-300 text-rose-300 text-violet-300 text-lime-300">
                      </div>

                      {/* Hover states for primary colors */}
                      <div class="hover:bg-blue-500 hover:bg-amber-500 hover:bg-rose-500 hover:bg-violet-500 hover:bg-lime-500">
                      </div>

                      {/* Neutral tone backgrounds */}
                      <div class="bg-slate-50 bg-stone-50 bg-zinc-50"></div>
                      <div class="bg-slate-100 bg-stone-100 bg-zinc-100"></div>
                      <div class="bg-slate-200 bg-stone-200 bg-zinc-200"></div>
                      <div class="bg-slate-800 bg-stone-800 bg-zinc-800"></div>
                      <div class="bg-slate-900 bg-stone-900 bg-zinc-900"></div>

                      {/* Neutral tone borders */}
                      <div class="border-slate-200 border-stone-200 border-zinc-200">
                      </div>
                      <div class="border-slate-700 border-stone-700 border-zinc-700">
                      </div>

                      {/* Neutral tone text */}
                      <div class="text-slate-100 text-stone-100 text-zinc-100">
                      </div>
                      <div class="text-slate-200 text-stone-200 text-zinc-200">
                      </div>
                      <div class="text-slate-300 text-stone-300 text-zinc-300">
                      </div>
                      <div class="text-slate-400 text-stone-400 text-zinc-400">
                      </div>
                      <div class="text-slate-500 text-stone-500 text-zinc-500">
                      </div>
                      <div class="text-slate-600 text-stone-600 text-zinc-600">
                      </div>
                      <div class="text-slate-700 text-stone-700 text-zinc-700">
                      </div>
                      <div class="text-slate-800 text-stone-800 text-zinc-800">
                      </div>

                      {/* Hover states for neutral tones */}
                      <div class="hover:bg-slate-100 hover:bg-stone-100 hover:bg-zinc-100">
                      </div>
                      <div class="hover:bg-slate-700 hover:bg-stone-700 hover:bg-zinc-700">
                      </div>
                      <div class="hover:bg-slate-800 hover:bg-stone-800 hover:bg-zinc-800">
                      </div>

                      {/* Additional dark mode classes */}
                      <div class="bg-slate-750 bg-stone-750 bg-zinc-750"></div>
                      <div class="border-slate-600 border-stone-600 border-zinc-600">
                      </div>
                      <div class="border-slate-700 border-stone-700 border-zinc-700">
                      </div>
                      <div class="text-slate-100 text-stone-100 text-zinc-100">
                      </div>
                      <div class="text-slate-200 text-stone-200 text-zinc-200">
                      </div>
                      <div class="text-slate-300 text-stone-300 text-zinc-300">
                      </div>
                      <div class="text-slate-400 text-stone-400 text-zinc-400">
                      </div>

                      {/* Dark mode background variations */}
                      <div class="bg-blue-900 bg-amber-900 bg-rose-900 bg-violet-900 bg-lime-900">
                      </div>
                      <div class="text-blue-200 text-amber-200 text-rose-200 text-violet-200 text-lime-200">
                      </div>
                      <div class="text-blue-300 text-amber-300 text-rose-300 text-violet-300 text-lime-300">
                      </div>

                      {/* Agent card specific classes */}
                      <div class="bg-slate-800 bg-stone-800 bg-zinc-800"></div>
                    </div>
                  </div>
                )}

                {/* Appearance Panel */}
                <div
                  id="appearance-panel"
                  class="bg-white rounded-lg shadow-lg p-3 sm:p-4 min-w-[120px] sm:min-w-[140px]"
                >
                  <div class="text-dc-600 font-main font-medium text-sm sm:text-base mb-2 sm:mb-3">
                    Appearance
                  </div>
                  <div class="flex gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      class="w-6 h-6 sm:w-8 sm:h-8 border border-dc-200 rounded-md sm:rounded-lg flex items-center justify-center hover:bg-dc-100 transition-colors appearance-option ring-2 ring-dc-700"
                      data-appearance="light"
                    >
                      <Icon
                        name="light_mode"
                        size="small"
                        class="text-dc-600 w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </button>
                    <button
                      type="button"
                      class="w-6 h-6 sm:w-8 sm:h-8 border border-dc-200 rounded-md sm:rounded-lg flex items-center justify-center hover:bg-dc-100 transition-colors appearance-option"
                      data-appearance="dark"
                    >
                      <Icon
                        name="dark_mode"
                        size="small"
                        class="text-dc-600 w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Interface Preview - Responsive positioning */}
              <div class="relative z-10 overflow-hidden h-full flex items-end justify-center lg:justify-end pt-16 sm:pt-20 md:pt-24 lg:pt-20 px-2 sm:px-4 lg:pr-4">
                <div
                  id="chat-interface"
                  class="bg-white rounded-t-2xl lg:rounded-tl-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-5xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] shadow-2xl border border-slate-200 overflow-hidden flex transform translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-x-8 lg:translate-y-8"
                >
                  {/* Sidebar */}
                  <div
                    id="sidebar"
                    class="w-28 sm:w-36 lg:w-48 bg-slate-50 border-r border-slate-200 flex flex-col"
                  >
                    {/* Sidebar Header */}
                    <div class="p-2 sm:p-3 lg:p-4 border-b border-slate-200">
                      <div class="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 lg:mb-4">
                        <div
                          id="logo-container"
                          class="h-4 sm:h-5 lg:h-6 flex items-center justify-center"
                        >
                          <svg
                            id="app-logo"
                            class="h-3 sm:h-4 lg:h-4 text-amber-500"
                            fill="currentColor"
                            viewBox="0 0 166 28"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M24.7492 2.4951C25.347 1.87329 26.1587 1.52396 27.004 1.52396C30.8071 1.52396 34.3911 1.52396 37.9205 1.52397C45.0192 1.52398 48.5739 10.4526 43.5544 15.6744L32.6206 27.0489C32.1187 27.5711 31.2604 27.2012 31.2604 26.4627V16.4445L32.524 15.13C33.5279 14.0856 32.8169 12.2999 31.3971 12.2999H15.3243L24.7492 2.4951Z" />
                            <path d="M21.8356 26.2498C21.2379 26.8717 20.4262 27.221 19.5809 27.221C15.7778 27.221 12.1938 27.221 8.6644 27.221C1.56565 27.2209 -1.98906 18.2924 3.03049 13.0705L13.9643 1.69603C14.4662 1.17384 15.3245 1.54367 15.3245 2.28216L15.3243 12.2999L14.0609 13.6149C13.057 14.6593 13.768 16.445 15.1878 16.445L31.2604 16.4445L21.8356 26.2498Z" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M58.0282 2.59473V27.8312H51.2885V2.59473H58.0282Z"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M61.3981 2.59473H75.7199C80.3727 2.59473 84.1445 6.36098 84.1445 11.0069C84.1445 15.6528 80.3727 19.419 75.7199 19.419H68.1378V27.8312H61.3981V2.59473ZM68.1378 12.6893H75.7199C76.6505 12.6893 77.4049 11.9361 77.4049 11.0069C77.4049 10.0777 76.6505 9.32445 75.7199 9.32445H68.1378V12.6893Z"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M109.418 2.59473V15.6336C109.418 18.6534 111.87 21.1015 114.894 21.1015C117.918 21.1015 120.37 18.6534 120.37 15.6336V2.59473H127.11V15.6336C127.11 22.3702 121.641 27.8312 114.894 27.8312C108.148 27.8312 102.678 22.3702 102.678 15.6336V2.59473H109.418Z"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M86.6719 14.3717C86.6719 7.86746 91.9525 2.59473 98.4664 2.59473H100.151V9.32445H98.4664C95.6747 9.32445 93.4116 11.5842 93.4116 14.3717V15.213C93.4116 22.1818 87.7539 27.8312 80.7747 27.8312H79.9323V21.1015H80.7747C84.0317 21.1015 86.6719 18.4651 86.6719 15.213V14.3717Z"
                            />
                            <path d="M165.021 3.43673C165.021 4.8305 163.89 5.96038 162.493 5.96038C161.098 5.96038 159.966 4.8305 159.966 3.43673C159.966 2.04296 161.098 0.913086 162.493 0.913086C163.89 0.913086 165.021 2.04296 165.021 3.43673Z" />
                            <path d="M134.347 27.8317L137.563 14.3844L139.954 22.4744C141.379 27.2994 148.224 27.2994 149.65 22.4744L152.04 14.3844L155.257 27.8317H162.185L157.129 6.68656C155.926 1.65807 148.83 1.47189 147.364 6.43044L144.802 15.1013L142.239 6.43044C140.774 1.47192 133.677 1.65805 132.474 6.68655L127.418 27.8317H134.347Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Navigation */}
                      <div class="space-y-0.5 sm:space-y-1">
                        <div
                          id="nav-new-chat"
                          class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1.5 sm:py-2 bg-amber-100 rounded-md sm:rounded-lg text-amber-600"
                        >
                          <Icon
                            name="add"
                            size="small"
                            class="w-3 h-3 sm:w-4 sm:h-4"
                          />
                          <span class="text-xs font-main font-medium truncate">
                            New chat
                          </span>
                        </div>
                        <div
                          id="nav-agents"
                          class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-slate-600 hover:bg-slate-100"
                        >
                          <Icon
                            name="smart_toy"
                            size="small"
                            class="w-3 h-3 sm:w-4 sm:h-4"
                          />
                          <span class="text-xs font-main font-medium truncate">
                            Agents
                          </span>
                        </div>
                        <div
                          id="nav-connect"
                          class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-slate-600 hover:bg-slate-100"
                        >
                          <Icon
                            name="extension"
                            size="small"
                            class="w-3 h-3 sm:w-4 sm:h-4"
                          />
                          <span class="text-xs font-main font-medium truncate">
                            Connect
                          </span>
                        </div>
                        <div
                          id="nav-activity"
                          class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-slate-600 hover:bg-slate-100"
                        >
                          <Icon
                            name="forum"
                            size="small"
                            class="w-3 h-3 sm:w-4 sm:h-4"
                          />
                          <span class="text-xs font-main font-medium truncate">
                            Activity
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Chat History */}
                    <div class="flex-1 p-2 sm:p-3 lg:p-4 space-y-2 sm:space-y-3 lg:space-y-4 overflow-y-auto">
                      <div>
                        <div class="text-xs font-main font-semibold text-slate-600 mb-1 sm:mb-2 hidden sm:block">
                          Today
                        </div>
                        <div class="space-y-0.5 sm:space-y-1">
                          <div class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs text-slate-700">
                            <div
                              id="chat-dot-1"
                              class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 rounded-sm flex-shrink-0"
                            >
                            </div>
                            <span class="truncate text-xs">
                              Professor...
                            </span>
                          </div>
                          <div class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs text-slate-700">
                            <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-300 rounded-sm flex-shrink-0">
                            </div>
                            <span class="truncate text-xs">
                              Startups
                            </span>
                          </div>
                          <div class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs text-slate-700">
                            <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-300 rounded-sm flex-shrink-0">
                            </div>
                            <span class="truncate text-xs">
                              Poema
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div class="text-xs font-main font-semibold text-slate-600 mb-1 sm:mb-2 hidden sm:block">
                          Yesterday
                        </div>
                        <div class="space-y-0.5 sm:space-y-1">
                          <div class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs text-slate-700">
                            <div
                              id="chat-dot-2"
                              class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 rounded-sm flex-shrink-0"
                            >
                            </div>
                            <span class="truncate text-xs">
                              Travel
                            </span>
                          </div>
                          <div class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs text-slate-700">
                            <div
                              id="chat-dot-3"
                              class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 rounded-sm flex-shrink-0"
                            >
                            </div>
                            <span class="truncate text-xs">
                              Leads
                            </span>
                          </div>
                          <div class="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs text-slate-700">
                            <div
                              id="chat-dot-4"
                              class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 rounded-sm flex-shrink-0"
                            >
                            </div>
                            <span class="truncate text-xs">Sales</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Profile */}
                    <div class="p-2 sm:p-3 lg:p-4 border-t border-slate-200">
                      <div class="flex items-center gap-1 sm:gap-2">
                        <div class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-slate-300 rounded-full flex-shrink-0">
                        </div>
                        <span class="text-xs font-main font-medium text-slate-800 truncate">
                          L.B.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div class="flex-1 flex flex-col">
                    {/* Header */}
                    <div class="p-2 sm:p-3 lg:p-4 border-b border-slate-200 flex items-center justify-between">
                      <div class="flex items-center gap-1 sm:gap-2">
                        <Icon
                          name="smart_toy"
                          size="small"
                          class="text-slate-600 w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span class="font-main font-medium text-xs sm:text-sm text-slate-800">
                          Agents
                        </span>
                      </div>
                      <button
                        id="create-agent-btn"
                        type="button"
                        class="bg-amber-400 text-slate-800 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md lg:rounded-lg font-main font-medium text-xs sm:text-sm hover:bg-amber-500 transition-colors"
                      >
                        <span class="hidden sm:inline">Create agent</span>
                        <span class="sm:hidden">Create</span>
                      </button>
                    </div>

                    {/* Content Area */}
                    <div class="flex-1 p-2 sm:p-3 lg:p-4">
                      {/* Filter Tabs */}
                      <div class="flex gap-1 sm:gap-2 mb-2 sm:mb-3 lg:mb-4 overflow-x-auto">
                        <div class="bg-slate-100 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs font-main text-slate-700 whitespace-nowrap">
                          Marketplace{" "}
                          <span class="text-slate-500 hidden sm:inline">
                            2k
                          </span>
                        </div>
                        <div class="px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs font-main text-slate-600 hover:bg-slate-100 whitespace-nowrap">
                          Team{" "}
                          <span class="text-slate-500 hidden sm:inline">
                            04
                          </span>
                        </div>
                        <div class="px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs font-main text-slate-600 hover:bg-slate-100 whitespace-nowrap">
                          Private{" "}
                          <span class="text-slate-500 hidden sm:inline">
                            01
                          </span>
                        </div>
                      </div>

                      {/* Agent Cards Grid */}
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div class="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm">
                          <div class="flex items-start justify-between mb-1 sm:mb-2">
                            <div
                              id="agent-icon-1"
                              class="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-md sm:rounded-lg flex-shrink-0"
                            >
                            </div>
                          </div>
                          <div>
                            <div class="text-xs font-main font-medium text-slate-800 mb-1">
                              Mangabeira Chat
                            </div>
                            <div class="text-xs text-slate-600 leading-relaxed mb-1">
                              <span class="sm:hidden">Strategy alignment</span>
                              <span class="hidden sm:block">
                                Ensures alignment with the company's strategy in
                                internal meetings and chat forums, track OKRs.
                              </span>
                            </div>
                            <div class="flex items-center gap-1 mt-1 sm:mt-2 text-xs text-slate-500">
                              <Icon
                                name="public"
                                size="small"
                                class="w-3 h-3 flex-shrink-0"
                              />
                              <span>+3</span>
                              <span class="ml-auto text-xs truncate">
                                3m
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm">
                          <div class="flex items-start justify-between mb-1 sm:mb-2">
                            <div
                              id="agent-icon-2"
                              class="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-md sm:rounded-lg flex-shrink-0"
                            >
                            </div>
                          </div>
                          <div>
                            <div class="text-xs font-main font-medium text-slate-800 mb-1">
                              Internal Rituals Agent
                            </div>
                            <div class="text-xs text-slate-600 leading-relaxed mb-1">
                              <span class="sm:hidden">Team alignment</span>
                              <span class="hidden sm:block">
                                Ensures alignment with the company's strategy in
                                internal meetings and chat forums, track OKRs.
                              </span>
                            </div>
                            <div class="flex items-center gap-1 mt-1 sm:mt-2 text-xs text-slate-500">
                              <Icon
                                name="public"
                                size="small"
                                class="w-3 h-3 flex-shrink-0"
                              />
                              <span>+3</span>
                              <span class="ml-auto text-xs truncate">
                                3m
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm">
                          <div class="flex items-start justify-between mb-1 sm:mb-2">
                            <div
                              id="agent-icon-3"
                              class="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-md sm:rounded-lg flex-shrink-0"
                            >
                            </div>
                          </div>
                          <div>
                            <div class="text-xs font-main font-medium text-slate-800 mb-1">
                              Brandable
                            </div>
                            <div class="text-xs text-slate-600 leading-relaxed mb-1">
                              <span class="sm:hidden">Landing pages</span>
                              <span class="hidden sm:block">
                                Captures your identity, and builds landing pages
                                that are always on-brand.
                              </span>
                            </div>
                            <div class="flex items-center gap-1 mt-1 sm:mt-2 text-xs text-slate-500">
                              <Icon
                                name="public"
                                size="small"
                                class="w-3 h-3 flex-shrink-0"
                              />
                              <span>+3</span>
                              <span class="ml-auto text-xs truncate">
                                3m
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white border border-slate-200 rounded-lg p-2 sm:p-3 shadow-sm">
                          <div class="flex items-start justify-between mb-1 sm:mb-2">
                            <div
                              id="agent-icon-4"
                              class="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-md sm:rounded-lg flex-shrink-0"
                            >
                            </div>
                          </div>
                          <div>
                            <div class="text-xs font-main font-medium text-slate-800 mb-1">
                              Pulse Listener
                            </div>
                            <div class="text-xs text-slate-600 leading-relaxed mb-1">
                              <span class="sm:hidden">Team feedback</span>
                              <span class="hidden sm:block">
                                Monitors the company's emotional temperature.
                                Analyzes internal messages and feedback.
                              </span>
                            </div>
                            <div class="flex items-center gap-1 mt-1 sm:mt-2 text-xs text-slate-500">
                              <Icon
                                name="public"
                                size="small"
                                class="w-3 h-3 flex-shrink-0"
                              />
                              <span>+3</span>
                              <span class="ml-auto text-xs truncate">
                                3m
                              </span>
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

          {/* GSAP CDN Scripts */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js">
          </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js">
          </script>

          {/* Client-side Theming Script with GSAP */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.addEventListener("DOMContentLoaded", () => {
                console.log("DOM loaded, checking for GSAP...");
                
                // Wait for GSAP to be available
                function initializeGSAP() {
                  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                    console.log("GSAP and ScrollTrigger are available, initializing...");
                    
                    // Register GSAP plugins
                    gsap.registerPlugin(ScrollTrigger);
                    
                    let animationsStarted = false;
                    
                    const colorOptions = document.querySelectorAll(".color-option");
                    const appearanceOptions = document.querySelectorAll(".appearance-option");
                    
                    console.log("Found", colorOptions.length, "color options");
                    console.log("Found", appearanceOptions.length, "appearance options");
                    
                    let currentColor = "amber";
                    let currentNeutral = "stone";
                    let currentAppearance = "light";
                    
                    // GSAP Timeline for initial dashboard animations
                    const initTimeline = gsap.timeline();
                    
                    // Animate dashboard elements on load with mobile considerations
                    function initializeDashboardAnimations() {
                      const isMobile = window.innerWidth < 640;
                      const isTablet = window.innerWidth < 1024;
                      
                      // Animate chat interface entry with responsive values
                      gsap.from("#chat-interface", {
                        duration: isMobile ? 0.8 : 1.2,
                        y: isMobile ? 30 : 50,
                        opacity: 0,
                        ease: "power2.out",
                        delay: isMobile ? 0.2 : 0.3
                      });
                      
                      // Stagger animate agent cards with responsive timing
                      gsap.from("#chat-interface .shadow-sm", {
                        duration: isMobile ? 0.6 : 0.8,
                        y: isMobile ? 20 : 30,
                        opacity: 0,
                        stagger: isMobile ? 0.05 : 0.1,
                        ease: "power2.out",
                        delay: isMobile ? 0.6 : 0.8
                      });
                      
                      // Animate sidebar navigation items individually
                      gsap.from("#nav-new-chat", {
                        duration: isMobile ? 0.4 : 0.6,
                        x: isMobile ? -15 : -25,
                        opacity: 0,
                        ease: "power2.out",
                        delay: isMobile ? 0.4 : 0.6
                      });
                      
                      // Animate other navigation items with stagger
                      gsap.from("#nav-agents, #nav-connect, #nav-activity", {
                        duration: isMobile ? 0.4 : 0.6,
                        x: isMobile ? -10 : -20,
                        opacity: 0,
                        stagger: isMobile ? 0.05 : 0.1,
                        ease: "power2.out",
                        delay: isMobile ? 0.5 : 0.7
                      });
                      
                      // Animate chat history items with more specific selectors
                      gsap.from("#sidebar .overflow-y-auto > div", {
                        duration: isMobile ? 0.3 : 0.5,
                        x: isMobile ? -8 : -15,
                        opacity: 0,
                        stagger: isMobile ? 0.03 : 0.05,
                        ease: "power2.out",
                        delay: isMobile ? 0.8 : 1.0
                      });
                      
                      // Animate individual chat history items
                      gsap.from("#sidebar .overflow-y-auto .space-y-0\\.5 > div, #sidebar .overflow-y-auto [class*='space-y-'] > div", {
                        duration: isMobile ? 0.3 : 0.5,
                        x: isMobile ? -5 : -10,
                        opacity: 0,
                        stagger: isMobile ? 0.02 : 0.04,
                        ease: "power2.out",
                        delay: isMobile ? 1.0 : 1.2
                      });
                      
                      // Pulse animation for active elements
                      gsap.to("[id^='chat-dot-']", {
                        duration: 2,
                        scale: 1.1,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1,
                        stagger: 0.2
                      });
                      
                      // Animate customization panels with responsive values
                      gsap.from("#customization-panels > div", {
                        duration: isMobile ? 0.6 : 0.8,
                        y: isMobile ? -20 : -30,
                        opacity: 0,
                        stagger: isMobile ? 0.1 : 0.15,
                        ease: "back.out(1.2)",
                        delay: isMobile ? 1.0 : 1.2
                      });
                      
                      // Floating animation for customization panels (reduced on mobile)
                      gsap.to("#color-panel", {
                        duration: 3,
                        y: isMobile ? -4 : -8,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1
                      });
                      
                      gsap.to("#appearance-panel", {
                        duration: 3,
                        y: isMobile ? 4 : 8,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: 1.5
                      });
                    }
                    
                    // Add hover animations to agent cards and panels
                    function setupHoverAnimations() {
                      const agentCards = document.querySelectorAll("#chat-interface .shadow-sm");
                      
                      agentCards.forEach(card => {
                        card.addEventListener("mouseenter", () => {
                          gsap.to(card, {
                            duration: 0.3,
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            ease: "power2.out"
                          });
                        });
                        
                        card.addEventListener("mouseleave", () => {
                          gsap.to(card, {
                            duration: 0.3,
                            y: 0,
                            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                            ease: "power2.out"
                          });
                        });
                      });
                      
                      // Add hover animation to create agent button
                      const createBtn = document.getElementById("create-agent-btn");
                      if (createBtn) {
                        createBtn.addEventListener("mouseenter", () => {
                          gsap.to(createBtn, {
                            duration: 0.2,
                            scale: 1.05,
                            ease: "power2.out"
                          });
                        });
                        
                        createBtn.addEventListener("mouseleave", () => {
                          gsap.to(createBtn, {
                            duration: 0.2,
                            scale: 1,
                            ease: "power2.out"
                          });
                        });
                      }
                      
                      // Add hover animations to customization panels
                      const colorPanel = document.getElementById("color-panel");
                      const appearancePanel = document.getElementById("appearance-panel");
                      
                      [colorPanel, appearancePanel].forEach(panel => {
                        if (panel) {
                          panel.addEventListener("mouseenter", () => {
                            gsap.to(panel, {
                              duration: 0.3,
                              scale: 1.05,
                              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                              ease: "power2.out"
                            });
                          });
                          
                          panel.addEventListener("mouseleave", () => {
                            gsap.to(panel, {
                              duration: 0.3,
                              scale: 1,
                              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                              ease: "power2.out"
                            });
                          });
                        }
                      });
                      
                      // Add click animations to color options
                      const colorOptions = document.querySelectorAll('.color-option');
                      colorOptions.forEach(option => {
                        option.addEventListener("click", () => {
                          gsap.fromTo(option, {
                            scale: 1
                          }, {
                            duration: 0.1,
                            scale: 0.9,
                            ease: "power2.inOut",
                            yoyo: true,
                            repeat: 1
                          });
                        });
                      });
                      
                      // Add click animations to appearance options  
                      const appearanceOptions = document.querySelectorAll('.appearance-option');
                      appearanceOptions.forEach(option => {
                        option.addEventListener("click", () => {
                          gsap.fromTo(option, {
                            scale: 1
                          }, {
                            duration: 0.1,
                            scale: 0.9,
                            ease: "power2.inOut",
                            yoyo: true,
                            repeat: 1
                          });
                        });
                      });
                    }
                    
                    // Helper function to safely set classes on both HTML and SVG elements
                    function setElementClass(element, className) {
                      try {
                        if (element.setAttribute) {
                          element.setAttribute("class", className);
                        } else {
                          element.className = className;
                        }
                      } catch (e) {
                        console.error("Error setting class on element:", element, e);
                      }
                    }

                    // Helper function to apply all theme changes
                    function applyThemeChanges() {
                      // Update all theme elements here (keeping original theme logic)
                        const bgGradient = document.getElementById("bg-gradient");
                        if (bgGradient) {
                          setElementClass(bgGradient, \`absolute inset-4 md:inset-8 rounded-2xl bg-gradient-to-br from-\${currentColor}-400 via-\${currentColor}-500 to-\${currentColor}-600\`);
                          bgGradient.innerHTML = \`
                            <div class="absolute inset-0 bg-gradient-to-t from-\${currentColor}-800/50 to-transparent rounded-2xl"></div>
                            <div class="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 rounded-2xl"></div>
                          \`;
                        }
                        
                        // Update app logo color
                        const appLogo = document.getElementById("app-logo");
                        if (appLogo) {
                          setElementClass(appLogo, \`h-4 text-\${currentColor}-500\`);
                        }
                        
                        // Update navigation active state
                        const navNewChat = document.getElementById("nav-new-chat");
                        if (navNewChat) {
                          setElementClass(navNewChat, \`flex items-center gap-2 px-2 py-2 bg-\${currentColor}-100 rounded-lg text-\${currentColor}-600\`);
                        }
                        
                        // Update create agent button
                        const createAgentBtn = document.getElementById("create-agent-btn");
                        if (createAgentBtn) {
                          if (currentAppearance === "light") {
                            setElementClass(createAgentBtn, \`bg-\${currentColor}-400 text-\${currentNeutral}-800 px-4 py-2 rounded-lg font-main font-medium text-sm hover:bg-\${currentColor}-500 transition-colors\`);
                          } else {
                            setElementClass(createAgentBtn, \`bg-\${currentColor}-500 text-\${currentNeutral}-100 px-4 py-2 rounded-lg font-main font-medium text-sm hover:bg-\${currentColor}-600 transition-colors\`);
                          }
                        }
                        
                        // Update agent icons and chat dots
                        for (let i = 1; i <= 4; i++) {
                          const agentIcon = document.getElementById(\`agent-icon-\${i}\`);
                          if (agentIcon) {
                            setElementClass(agentIcon, \`w-8 h-8 bg-\${currentColor}-500 rounded-lg\`);
                          }
                          
                          const chatDot = document.getElementById(\`chat-dot-\${i}\`);
                          if (chatDot) {
                            setElementClass(chatDot, \`w-2 h-2 bg-\${currentColor}-500 rounded-sm\`);
                          }
                        }
                        
                        // Apply theme classes based on appearance
                        const chatInterface = document.getElementById("chat-interface");
                        const sidebar = document.getElementById("sidebar");
                        
                        if (chatInterface) {
                          if (currentAppearance === 'dark') {
                            setElementClass(chatInterface, \`bg-\${currentNeutral}-800 rounded-tl-2xl w-full max-w-5xl h-[600px] md:h-[700px] shadow-2xl border border-\${currentNeutral}-700 overflow-hidden flex transform translate-x-8 translate-y-8\`);
                          } else {
                            setElementClass(chatInterface, \`bg-white rounded-tl-2xl w-full max-w-5xl h-[600px] md:h-[700px] shadow-2xl border border-\${currentNeutral}-200 overflow-hidden flex transform translate-x-8 translate-y-8\`);
                          }
                        }
                        
                        if (sidebar) {
                          if (currentAppearance === 'dark') {
                            setElementClass(sidebar, \`w-48 bg-\${currentNeutral}-900 border-r border-\${currentNeutral}-700 flex flex-col\`);
                          } else {
                            setElementClass(sidebar, \`w-48 bg-\${currentNeutral}-50 border-r border-\${currentNeutral}-200 flex flex-col\`);
                          }
                        }
                        
                        // Update agent cards with proper theming
                        const agentCards = document.querySelectorAll('#chat-interface .shadow-sm');
                        agentCards.forEach((card) => {
                          if (currentAppearance === 'dark') {
                            setElementClass(card, \`bg-\${currentNeutral}-800 border border-\${currentNeutral}-700 rounded-lg p-3 shadow-sm\`);
                          } else {
                            setElementClass(card, \`bg-white border border-\${currentNeutral}-200 rounded-lg p-3 shadow-sm\`);
                          }
                        });
                        
                        // Update text elements throughout the interface
                        const allTextElements = document.querySelectorAll('#chat-interface *:not(.shadow-sm)');
                        allTextElements.forEach(el => {
                          if (!el.className) return;
                          
                          let className = el.className.toString();
                          let newClassName = className;
                          
                          // Text color updates
                          if (currentAppearance === 'dark') {
                            newClassName = newClassName
                              .replace(/text-(slate|stone|zinc)-800/g, \`text-\${currentNeutral}-100\`)
                              .replace(/text-(slate|stone|zinc)-700/g, \`text-\${currentNeutral}-200\`)
                              .replace(/text-(slate|stone|zinc)-600/g, \`text-\${currentNeutral}-300\`)
                              .replace(/text-(slate|stone|zinc)-500/g, \`text-\${currentNeutral}-400\`);
                          } else {
                            newClassName = newClassName
                              .replace(/text-(slate|stone|zinc)-100/g, \`text-\${currentNeutral}-800\`)
                              .replace(/text-(slate|stone|zinc)-200/g, \`text-\${currentNeutral}-700\`)
                              .replace(/text-(slate|stone|zinc)-300/g, \`text-\${currentNeutral}-600\`)
                              .replace(/text-(slate|stone|zinc)-400/g, \`text-\${currentNeutral}-500\`);
                          }
                          
                          // Background updates for elements that aren't the main containers
                          if (!el.id || (el.id !== 'chat-interface' && el.id !== 'sidebar')) {
                            if (currentAppearance === 'dark') {
                              newClassName = newClassName
                                .replace(/bg-(slate|stone|zinc)-50/g, \`bg-\${currentNeutral}-800\`)
                                .replace(/bg-(slate|stone|zinc)-100/g, \`bg-\${currentNeutral}-700\`)
                                .replace(/border-(slate|stone|zinc)-200/g, \`border-\${currentNeutral}-700\`)
                                .replace(/hover:bg-(slate|stone|zinc)-100/g, \`hover:bg-\${currentNeutral}-700\`);
                            } else {
                              newClassName = newClassName
                                .replace(/bg-(slate|stone|zinc)-800/g, \`bg-\${currentNeutral}-50\`)
                                .replace(/bg-(slate|stone|zinc)-700/g, \`bg-\${currentNeutral}-100\`)
                                .replace(/border-(slate|stone|zinc)-700/g, \`border-\${currentNeutral}-200\`)
                                .replace(/hover:bg-(slate|stone|zinc)-700/g, \`hover:bg-\${currentNeutral}-100\`);
                            }
                          }
                          
                          if (newClassName !== className) {
                            setElementClass(el, newClassName);
                          }
                        });
                    }
                    
                    // Helper function to maintain color option selection
                    function maintainColorSelection() {
                      // Find the currently selected color option and keep its ring
                      colorOptions.forEach((option) => {
                        const primaryColor = option.getAttribute("data-primary-color");
                        const neutralTone = option.getAttribute("data-neutral-tone");
                        
                        if (primaryColor === currentColor && neutralTone === currentNeutral) {
                          option.classList.add("ring-2", "ring-dc-700", "ring-offset-1");
                        } else {
                          option.classList.remove("ring-2", "ring-dc-700", "ring-offset-1");
                        }
                      });
                    }

                    // Main theme update function
                    function updateTheme(clickedElement = null) {
                      console.log("Updating theme:", { currentColor, currentNeutral, currentAppearance });
                      
                      if (animationsStarted) {
                        // Create smooth transition timeline for theme changes
                        const themeTimeline = gsap.timeline();
                        
                        // Much more subtle transition - just a gentle scale effect
                        themeTimeline.to("#chat-interface", {
                          duration: 0.15,
                          scale: 0.98,
                          ease: "power1.inOut"
                        })
                        .call(() => {
                          applyThemeChanges();
                        })
                        .to("#chat-interface", {
                          duration: 0.15,
                          scale: 1,
                          ease: "power1.inOut"
                        })
                        .call(() => {
                          // Very subtle bounce for updated elements - much less dramatic
                          gsap.from("[id^='agent-icon-']", {
                            duration: 0.3,
                            scale: 0.95,
                            ease: "power1.out",
                            stagger: 0.02
                          });
                          
                          gsap.from("[id^='chat-dot-']", {
                            duration: 0.2,
                            scale: 0.9,
                            ease: "power1.out",
                            stagger: 0.01
                          });
                        });
                      } else {
                        // Just apply theme changes instantly if animations haven't started
                        applyThemeChanges();
                      }
                      
                      // Always maintain color selection after theme update
                      setTimeout(() => {
                        maintainColorSelection();
                      }, 50);
                    }

                    // Create subtle pulse effect for color transitions
                    function createColorPulse(clickedElement) {
                      // Create a gentle pulse from the clicked element
                      gsap.fromTo(clickedElement, {
                        boxShadow: "0 0 0 0 rgba(208, 236, 26, 0.4)"
                      }, {
                        duration: 0.4,
                        boxShadow: "0 0 0 20px rgba(208, 236, 26, 0)",
                        ease: "power2.out"
                      });
                    }

                    // Color option handlers
                    colorOptions.forEach((option, index) => {
                      option.addEventListener("click", () => {
                        const primaryColor = option.getAttribute("data-primary-color");
                        const neutralTone = option.getAttribute("data-neutral-tone");
                        
                        // Remove ring from all color options
                        colorOptions.forEach((opt) => {
                          opt.classList.remove("ring-2", "ring-dc-700", "ring-offset-1");
                        });
                        
                        // Add ring to clicked option
                        option.classList.add("ring-2", "ring-dc-700", "ring-offset-1");
                        
                        if (primaryColor && neutralTone) {
                          // Create a subtle pulse effect from the clicked color
                          createColorPulse(option);
                          
                          currentColor = primaryColor;
                          currentNeutral = neutralTone;
                          
                          // Theme update works regardless of animation state
                          updateTheme(option);
                        }
                      });
                    });

                    // Appearance option handlers
                    appearanceOptions.forEach((option, index) => {
                      option.addEventListener("click", () => {
                        const appearanceValue = option.getAttribute("data-appearance");
                        
                        // Remove ring from all appearance options
                        appearanceOptions.forEach((opt) => {
                          opt.classList.remove("ring-2", "ring-dc-700");
                        });
                        
                        // Add ring to clicked option
                        option.classList.add("ring-2", "ring-dc-700");
                        
                        if (appearanceValue) {
                          currentAppearance = appearanceValue;
                          // Theme update works regardless of animation state
                          updateTheme();
                        }
                      });
                    });

                    // Setup intersection observer for viewport detection (like FadeUp.tsx)
                    const whitelabelSection = document.getElementById('${sectionId}');
                    if (whitelabelSection) {
                      const observer = new IntersectionObserver(
                        (entries) => {
                          entries.forEach((entry) => {
                            if (entry.isIntersecting && !animationsStarted) {
                              console.log("Whitelabel section entered viewport, starting animations...");
                              animationsStarted = true;
                              
                              // Initialize theme first
                              updateTheme();
                              
                              // Ensure color selection is properly shown
                              setTimeout(() => {
                                maintainColorSelection();
                              }, 100);
                              
                              // Start GSAP animations with a small delay
                              setTimeout(() => {
                                initializeDashboardAnimations();
                                setupHoverAnimations();
                              }, 200);
                              
                              // Unobserve after first trigger
                              observer.unobserve(entry.target);
                            }
                          });
                        },
                        {
                          threshold: 0.1,
                          rootMargin: '0px 0px -50px 0px',
                        }
                      );
                      
                      observer.observe(whitelabelSection);
                    }
                    
                  } else {
                    console.log("GSAP not yet available, retrying in 100ms...");
                    setTimeout(initializeGSAP, 100);
                  }
                }
                
                // Start GSAP initialization
                initializeGSAP();
              });
            `,
            }}
          />
        </div>
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
  colorOptions: [
    {
      name: "Blue Slate",
      primaryColor: "blue",
      neutralTone: "slate",
    },
    {
      name: "Amber Stone",
      primaryColor: "amber",
      neutralTone: "stone",
    },
    {
      name: "Rose Stone",
      primaryColor: "rose",
      neutralTone: "stone",
    },
    {
      name: "Violet Slate",
      primaryColor: "violet",
      neutralTone: "slate",
    },
    {
      name: "Lime Zinc",
      primaryColor: "lime",
      neutralTone: "zinc",
    },
  ],
};

export function Preview() {
  return <Whitelabel {...defaultProps} />;
}
