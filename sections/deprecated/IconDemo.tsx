import Icon from "../../components/ui/Icon.tsx";

interface IconExample {
  /**
   * @title Nome do ícone
   * @description O nome do ícone do Material Design a ser exibido
   */
  name: string;
  /**
   * @title Descrição
   * @description Descrição do ícone e seu uso
   */
  description: string;
}

interface Props {
  /**
   * @title Título da seção
   * @description Título principal da seção de demonstração de ícones
   */
  title: string;
  /**
   * @title Exemplos de ícones
   * @description Lista de exemplos de ícones do Material Design
   */
  examples: IconExample[];
}

export default function IconDemo({
  title = defaultProps.title,
  examples = defaultProps.examples,
}: Props) {
  return (
    <div class="w-full py-16 bg-dc-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-dc-900 mb-8 text-center font-main">
          {title}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {examples.map((example) => (
            <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <Icon
                name={example.name}
                size="large"
                class="text-primary-dark mb-4"
              />
              <h3 class="text-xl font-semibold text-dc-800 mb-2 font-main">
                {example.name}
              </h3>
              <p class="text-dc-600 text-center font-main">
                {example.description}
              </p>
            </div>
          ))}
        </div>

        <div class="bg-white p-8 rounded-xl shadow-sm">
          <h3 class="text-2xl font-bold text-dc-900 mb-4 font-main">
            Como usar os ícones
          </h3>

          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-semibold text-dc-800 mb-2 font-main">
                Utilizando o componente Icon
              </h4>
              <div class="bg-dc-100 p-4 rounded-lg">
                <code class="text-dc-800 font-mono text-sm">
                  &lt;Icon name="home" size="medium" class="text-primary-dark"
                  /&gt;
                </code>
              </div>
              <div class="mt-4 flex items-center gap-4">
                <span>Resultado:</span>
                <Icon name="home" size="medium" class="text-primary-dark" />
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dc-800 mb-2 font-main">
                Utilizando diretamente a classe
              </h4>
              <div class="bg-dc-100 p-4 rounded-lg">
                <code class="text-dc-800 font-mono text-sm">
                  &lt;span class="material-symbols-rounded text-2xl
                  text-purple-dark"&gt;favorite&lt;/span&gt;
                </code>
              </div>
              <div class="mt-4 flex items-center gap-4">
                <span>Resultado:</span>
                <span
                  class="material-symbols-rounded text-2xl text-purple-dark"
                  style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0;"
                >
                  favorite
                </span>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dc-800 mb-2 font-main">
                Tamanhos disponíveis
              </h4>
              <div class="flex items-center gap-8 mt-4">
                <div class="flex flex-col items-center">
                  <Icon name="star" size="small" class="text-yellow-dark" />
                  <span class="text-sm text-dc-600 mt-2">small</span>
                </div>
                <div class="flex flex-col items-center">
                  <Icon name="star" size="medium" class="text-yellow-dark" />
                  <span class="text-sm text-dc-600 mt-2">medium</span>
                </div>
                <div class="flex flex-col items-center">
                  <Icon name="star" size="large" class="text-yellow-dark" />
                  <span class="text-sm text-dc-600 mt-2">large</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "Material Design Icons",
  examples: [
    {
      name: "home",
      description:
        "Ícone de casa, utilizado para botões ou links que levam à página inicial",
    },
    {
      name: "shopping_cart",
      description:
        "Ícone de carrinho, utilizado para botões que levam ao carrinho de compras",
    },
    {
      name: "person",
      description:
        "Ícone de pessoa, utilizado para áreas relacionadas a perfil de usuário",
    },
    {
      name: "search",
      description: "Ícone de lupa, utilizado para campos de busca",
    },
    {
      name: "favorite",
      description:
        "Ícone de coração, utilizado para marcar itens como favoritos",
    },
    {
      name: "settings",
      description: "Ícone de engrenagem, utilizado para áreas de configurações",
    },
  ],
};

export function Preview() {
  return <IconDemo {...defaultProps} />;
}
