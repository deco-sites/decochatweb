import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Button from "../components/ui/Button.tsx";

export interface ButtonProps {
  /**
   * @title Texto do botão
   * @description Texto a ser exibido no botão
   */
  text: string;
  /**
   * @title URL do botão
   * @description Link para onde o botão deve direcionar
   */
  url: string;
}

export interface Props {
  /**
   * @title Título principal
   * @description Texto principal do CTA
   */
  title: string;
  /**
   * @title Botão
   * @description Configuração do botão de chamada à ação
   */
  button: ButtonProps;
  /**
   * @title Imagem de fundo
   * @description Imagem exibida no fundo do CTA
   */
  backgroundImage?: ImageWidget;
  /**
   * @title Imagem capy
   * @description Imagem exibida acima do texto
   */
  capyImage?: ImageWidget;
}

export default function CTASection({
  title = defaultProps.title,
  button = defaultProps.button,
  backgroundImage = defaultProps.backgroundImage,
  capyImage = defaultProps.capyImage,
}: Props) {
  return (
    <div className="w-full bg-dc-50">
      <div className="relative z-10 pt-20 md:pt-40 px-4 md:px-8 lg:px-16 mb-[-100px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="px-4 sm:px-6 md:px-56 md:pt-16 md:pb-12 bg-primary-light rounded-[20px] md:rounded-[40px] flex flex-col justify-center items-center relative">
            {/* Background Image */}
            {backgroundImage && (
              <div className="absolute rounded-[20px] md:rounded-[40px] inset-0 w-full h-full overflow-hidden">
                <Image
                  src={backgroundImage}
                  alt=""
                  width={1314}
                  height={345}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex gap-6 md:gap-12 flex-col justify-start items-center relative z-10">
              {/* Background Image */}
              {capyImage && (
                <Image
                  src={capyImage}
                  alt=""
                  width={500}
                  height={500}
                  className="h-24 md:h-52 w-fit object-cover absolute -top-24 md:-top-56"
                  loading="lazy"
                />
              )}
              <h2 className="text-center text-primary-dark text-2xl md:text-4xl lg:text-5xl font-semibold font-main leading-tight md:leading-[1.2]">
                {title}
              </h2>

              <Button
                variant="secondary"
                size="large"
                href={button.url}
              >
                {button.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "Finally, your team leveraging AI productivity without the risks",
  button: {
    text: "Book a Demo",
    url: "#",
  },
  backgroundImage: "https://placehold.co/1314x345",
  capyImage: "https://placehold.co/1314x345",
};

export function Preview() {
  return <CTASection {...defaultProps} />;
}
