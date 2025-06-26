import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";

interface Props {
  /**
   * @title Título principal
   * @description Título da seção
   */
  title?: string;
  /**
   * @title Descrição
   * @description Texto explicativo da seção
   */
  description?: string;
  /**
   * @title URL do repositório
   * @description Link para o repositório GitHub
   */
  repositoryUrl?: string;
  /**
   * @title Nome do repositório
   * @description Nome que aparece no link
   */
  repositoryName?: string;
  /**
   * @title Número de estrelas
   * @description Quantidade de estrelas do repositório
   */
  stars?: number;
  /**
   * @title Imagem do código
   * @description Imagem que mostra o código/interface
   */
  codeImage?: ImageWidget;
  /**
   * @title Ícone do GitHub
   * @description Imagem do ícone do GitHub para o botão do repositório
   */
  githubIcon?: ImageWidget;
}

export default function NewHomeMCPTemplates({
  title = defaultProps.title,
  description = defaultProps.description,
  repositoryUrl = defaultProps.repositoryUrl,
  repositoryName = defaultProps.repositoryName,
  stars = defaultProps.stars,
  codeImage = defaultProps.codeImage,
  githubIcon = defaultProps.githubIcon,
}: Props) {
  return (
    <div class="w-full bg-dc-50 px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-40">
      <div class="w-full max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-14">
        {/* Header Content */}
        <div class="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Title */}
          <div class="flex-1">
            <h2 class="text-dc-800 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
              {title}
            </h2>
          </div>

          {/* Description and Repository Link */}
          <div class="flex-1 flex flex-col gap-6">
            <p class="text-dc-500 text-base md:text-lg leading-relaxed">
              {description}
            </p>

            {/* Repository Link */}
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex p-3 bg-dc-800 rounded-2xl border border-dc-700 transition-all duration-200 hover:bg-dc-700 max-w-fit"
            >
              <div class="flex items-center gap-10">
                {/* Repository Info */}
                <div class="flex items-center gap-2">
                  {/* GitHub Icon */}
                  <div class="w-8 h-8 flex items-center justify-center">
                    {githubIcon
                      ? (
                        <Image
                          src={githubIcon}
                          alt="GitHub"
                          width={32}
                          height={32}
                          class="w-8 h-8 object-contain"
                          loading="lazy"
                        />
                      )
                      : (
                        <div class="w-8 h-8 relative">
                          <div class="w-8 h-8 absolute bg-zinc-300 rounded">
                          </div>
                          <div class="w-6 h-6 absolute top-1 left-1 bg-dc-500 rounded">
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Repository Name */}
                  <span class="text-dc-300 text-base font-medium">
                    {repositoryName}
                  </span>

                  {/* External Link Icon */}
                  <Icon
                    name="open_in_new"
                    size="small"
                    class="text-dc-600"
                  />
                </div>

                {/* Stars */}
                <div class="flex items-center gap-0.5">
                  <span class="text-dc-300 text-base font-medium">
                    {stars}
                  </span>
                  {/* Star Icon */}
                  <Icon
                    name="star"
                    size="small"
                    class="text-primary-light"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Code Image Container */}
        <div class="w-full aspect-[2/1] p-4 bg-dc-100 rounded-2xl flex justify-center items-center overflow-hidden">
          {codeImage
            ? (
              <div class="w-full h-full relative">
                <Image
                  src={codeImage}
                  alt="MCP Template Code Example"
                  width={800}
                  height={400}
                  class="w-full h-auto object-contain object-center"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
            )
            : (
              <div class="w-full h-full bg-dc-200 rounded-lg flex items-center justify-center">
                <span class="text-dc-500 text-lg">Code Example</span>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "MCP Templates:\nIA que entende seus dados",
  description:
    "Conecte planilhas, CRMs e APIs via wrappers MCP que especificam exatamente o que o modelo pode ver, como interpretar e o que pode alterar.\n\nVocê escreve as regras em TypeScript; a plataforma executa com segurança e escala. Comece em minutos com nosso repositório open-source:",
  repositoryUrl: "https://github.com/deco-cx/mcp-template",
  repositoryName: "deco.cx/mcp-template",
  stars: 20,
  codeImage: "https://placehold.co/304x546?text=MCP+Code+Example",
  githubIcon: "https://placehold.co/32x32/333333/ffffff?text=GH",
};

export function Preview() {
  return <NewHomeMCPTemplates {...defaultProps} />;
}
