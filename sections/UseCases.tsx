import type { ImageWidget } from "apps/admin/widgets.ts";
import type { BlogPost } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import Eyebrow from "../components/ui/Eyebrow.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";
import BlogAuthorTag from "../components/blog/BlogAuthorTag.tsx";
import Icon from "../components/ui/Icon.tsx";

/**
 * @titleBy title
 */
interface ChatMessage {
  /**
   * @title Tipo da mensagem
   * @description Tipo da mensagem no chat
   */
  type: "user" | "agent" | "system";
  /**
   * @title Conteúdo
   * @description Texto da mensagem
   */
  content: string;
  /**
   * @title Avatar
   * @description URL do avatar (opcional, para mensagens do agente)
   */
  avatar?: string;
}

/**
 * @titleBy title
 */
interface UseCase {
  /**
   * @title Tag do caso de uso
   * @description Tag que aparece no topo do cartão
   */
  tag: string;
  /**
   * @title Título
   * @description Título principal do caso de uso
   */
  title: string;
  /**
   * @title Descrição
   * @description Descrição do caso de uso
   */
  description: string;
  /**
   * @title Nome do agente
   * @description Nome que aparece no cabeçalho do chat
   */
  agentName: string;
  /**
   * @title Logo do agente
   * @description Logo que aparece no chat (ex: Google Drive, IPSUM Agent)
   */
  agentLogo?: ImageWidget;
  /**
   * @title Imagem do produto
   * @description Imagem do produto mostrada no chat (apenas para customer-facing)
   */
  productImage?: ImageWidget;
  /**
   * @title Mensagens do chat
   * @description Lista de mensagens que aparecem no chat
   */
  messages: ChatMessage[];
  /**
   * @title Status de conexão
   * @description Texto que aparece na barra de status (ex: "Connecting to Google Drive...")
   */
  connectionStatus?: string;
  /**
   * @title Ícone de status
   * @description URL do ícone que aparece na barra de status
   */
  statusIcon?: ImageWidget;
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
   * @title Tag do cartão interno
   * @description Tag que aparece no cartão de ferramentas internas
   */
  internalTag?: string;
  /**
   * @title Título do cartão interno
   * @description Título do cartão de ferramentas internas
   */
  internalTitle?: string;
  /**
   * @title Descrição do cartão interno
   * @description Descrição do cartão de ferramentas internas
   */
  internalDescription?: string;
  /**
   * @title Tag do cartão cliente
   * @description Tag que aparece no cartão voltado ao cliente
   */
  customerTag?: string;
  /**
   * @title Título do cartão cliente
   * @description Título do cartão voltado ao cliente
   */
  customerTitle?: string;
  /**
   * @title Descrição do cartão cliente
   * @description Descrição do cartão voltado ao cliente
   */
  customerDescription?: string;
  /**
   * @title Ícone do Google Drive
   * @description Ícone que aparece na conexão do Google Drive
   */
  googleDriveIcon?: ImageWidget;
  /**
   * @title Logo do IPSUM Agent
   * @description Logo que aparece no cabeçalho do chat do cliente
   */
  ipsumAgentLogo?: ImageWidget;
  /**
   * @title Imagem do produto
   * @description Imagem do produto mostrada no chat do cliente
   */
  productImage?: ImageWidget;
  /**
   * @title Posts do blog
   * @description Posts do blog (carregados automaticamente pelo loader)
   */
  posts?: BlogPost[] | null;
}

export default function UseCases({
  eyebrow = "Use Cases",
  title,
  description,
  internalTag = "Internal Tooling",
  internalTitle = "Internal work more productive",
  internalDescription =
    "Let AI handle routine tasks and break down complex work into simple steps.",
  customerTag = "Customer-facing",
  customerTitle = "Customer interactions AI chats",
  customerDescription =
    "Build better connections with customers by using easy chats, highly personal service and quick support.",
  googleDriveIcon,
  ipsumAgentLogo,
  productImage,
  posts = [],
}: Props) {
  // Show exactly 3 posts
  const displayPosts = posts?.length ? posts.slice(0, 3) : [];

  // Helper function to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch (e) {
      return dateString;
    }
  };

  // Helper function to render categories
  const renderCategories = (post: BlogPost) => {
    if (!post.categories?.length) return null;

    return (
      <div class="flex flex-wrap justify-start items-start gap-2">
        {post.categories.slice(0, 2).map((category, idx) => (
          <a
            key={idx}
            href={`/blog/${category.slug}`}
            class="px-4 py-1 bg-dc-50 rounded-full outline outline-1 outline-offset-[-1px] outline-dc-200 flex justify-center items-center hover:bg-dc-100 transition-colors"
          >
            <div class="justify-center text-dc-600 text-base font-semibold font-manrope leading-normal">
              {category.name}
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div class="self-stretch min-w-full px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-dc-50 flex flex-col justify-start items-center gap-8 md:gap-14">
      <div class="w-full max-w-[900px] flex flex-col justify-start items-center gap-6 md:gap-10">
        <FadeUp>
          <div class="self-stretch flex flex-col justify-start items-center gap-6">
            <Eyebrow variant="primary-light" iconName="info" text={eyebrow} />
            <h2 class="self-stretch text-center text-dc-800 text-3xl md:text-5xl font-semibold font-manrope leading-normal">
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

      <div class="self-stretch flex flex-col justify-start items-start gap-8">
        {/* Main Use Cases - Static Figma Code */}
        <FadeUp delay={400}>
          <div class="self-stretch inline-flex justify-start items-start gap-4">
            <div class="flex-1 h-[648px] p-10 bg-dc-100 rounded-2xl inline-flex flex-col justify-start items-start gap-14 overflow-hidden">
              <div class="self-stretch flex flex-col justify-start items-start gap-6">
                <div class="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div class="px-4 py-1 bg-dc-200 rounded-full inline-flex justify-center items-center gap-2">
                    <div class="justify-center text-dc-700 text-base font-semibold leading-tight">
                      {internalTag}
                    </div>
                  </div>
                  <div class="self-stretch justify-start text-dc-800 text-3xl font-semibold leading-10">
                    {internalTitle}
                  </div>
                </div>
                <div class="self-stretch justify-start text-dc-500 text-xl font-medium leading-normal">
                  {internalDescription}
                </div>
              </div>
              <div class="self-stretch h-[459px] p-6 bg-dc-50 rounded-t-3xl rounded-b-0 shadow-[0px_16px_34px_0px_rgba(0,0,0,0.10)] shadow-[0px_62px_62px_0px_rgba(0,0,0,0.09)] shadow-[0px_141px_84px_0px_rgba(0,0,0,0.05)] shadow-[0px_250px_100px_0px_rgba(0,0,0,0.01)] shadow-[0px_391px_109px_0px_rgba(0,0,0,0.00)] outline outline-1 outline-offset-[-1px] outline-dc-300 flex flex-col justify-start items-center gap-6">
                <div class="self-stretch inline-flex justify-start items-center gap-2.5">
                  <div class="justify-start text-dc-300 text-xl font-medium leading-normal">
                    New chat
                  </div>
                  <div class="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-dc-300">
                  </div>
                </div>
                <div class="self-stretch flex flex-col justify-start items-start gap-1">
                  <div class="self-stretch pl-12 inline-flex justify-end items-end gap-2.5">
                    <div class="flex-1 max-w-[500px] p-6 bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl inline-flex flex-col justify-center items-start">
                      <div class="self-stretch justify-start text-dc-600 text-xl font-medium leading-normal">
                        Can you analyze our social media performance and create
                        a report every Q1?
                      </div>
                    </div>
                  </div>
                  <div class="self-stretch pr-12 inline-flex justify-start items-end gap-2.5">
                    <div class="flex-1 max-w-[500px] p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl inline-flex flex-col justify-center items-start">
                      <div class="self-stretch justify-start text-dc-600 text-xl font-medium leading-normal">
                        I'll set up a trigger for this repetitive task. I just
                        need to connect the integrations, one moment.
                      </div>
                    </div>
                  </div>
                  <div class="self-stretch px-6 flex flex-col justify-start items-start gap-2">
                    <div class="self-stretch px-4 py-3.5 rounded-[51.81px] outline outline-1 outline-offset-[-1px] outline-dc-300 inline-flex justify-between items-center">
                      <div class="flex justify-start items-center gap-3">
                        {googleDriveIcon
                          ? (
                            <Image
                              src={googleDriveIcon}
                              alt="Google Drive"
                              width={24}
                              height={22}
                              class="w-6 h-6"
                            />
                          )
                          : (
                            <img
                              class="w-6 h-6"
                              src="https://placehold.co/25x22"
                            />
                          )}
                        <div class="justify-start text-dc-700 text-xl font-normal leading-relaxed">
                          Connecting to Google Drive...
                        </div>
                      </div>
                      <div
                        data-show-left-icon="false"
                        data-show-right-icon="false"
                        data-size="icon"
                        data-state="Default"
                        data-variant="Ghost"
                        class="w-10 h-10 p-2 bg-tailwind-colors-base-transparent/0 rounded-full flex justify-center items-center gap-2"
                      >
                        <Icon
                          name="sync"
                          size="medium"
                          class="text-dc-400 animate-spin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1 h-[648px] p-10 bg-dc-100 rounded-2xl inline-flex flex-col justify-start items-start gap-14 overflow-hidden">
              <div class="self-stretch flex flex-col justify-start items-start gap-6">
                <div class="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div class="px-4 py-1 bg-dc-200 rounded-full inline-flex justify-center items-center gap-2">
                    <div class="justify-center text-dc-700 text-base font-semibold leading-tight">
                      {customerTag}
                    </div>
                  </div>
                  <div class="self-stretch justify-start text-dc-800 text-3xl font-semibold leading-10">
                    {customerTitle}
                  </div>
                </div>
                <div class="self-stretch justify-start text-dc-500 text-xl font-medium leading-normal">
                  {customerDescription}
                </div>
              </div>
              <div class="self-stretch h-[459px] p-6 bg-dc-50 rounded-t-3xl rounded-b-0 shadow-[0px_16px_34px_0px_rgba(0,0,0,0.10)] shadow-[0px_62px_62px_0px_rgba(0,0,0,0.09)] shadow-[0px_141px_84px_0px_rgba(0,0,0,0.05)] shadow-[0px_250px_100px_0px_rgba(0,0,0,0.01)] shadow-[0px_391px_109px_0px_rgba(0,0,0,0.00)] outline outline-1 outline-offset-[-1px] outline-dc-300 flex flex-col justify-start items-start gap-2.5">
                <div class="self-stretch p-2 bg-dc-100 rounded-3xl inline-flex justify-between items-center">
                  <div class="flex justify-start items-center gap-4">
                    <div class="w-12 h-12 relative bg-tailwind-colors-blue-600 rounded-2xl overflow-hidden">
                      {ipsumAgentLogo
                        ? (
                          <Image
                            src={ipsumAgentLogo}
                            alt="IPSUM Agent"
                            width={48}
                            height={48}
                            class="w-full h-full object-contain"
                          />
                        )
                        : (
                          <>
                            <div class="w-5 h-4 left-[18px] top-[14.73px] absolute bg-tailwind-colors-blue-50">
                            </div>
                            <div class="w-5 h-4 left-[8.60px] top-[14.69px] absolute bg-tailwind-colors-blue-50">
                            </div>
                          </>
                        )}
                    </div>
                    <div class="justify-start text-blue-600 text-xl font-medium leading-normal">
                      IPSUM Agent
                    </div>
                  </div>
                  <div class="p-3 flex justify-start items-center gap-2.5">
                    <div class="w-3 h-3 bg-tailwind-colors-green-500 rounded-full">
                    </div>
                  </div>
                </div>
                <div class="self-stretch flex flex-col justify-start items-start gap-4">
                  <div class="self-stretch h-10 pl-12 relative inline-flex justify-end items-end gap-2.5 overflow-hidden">
                    {productImage
                      ? (
                        <Image
                          src={productImage}
                          alt="Product"
                          width={176}
                          height={244}
                          class="w-44 h-60 rounded-lg object-cover"
                        />
                      )
                      : (
                        <img
                          class="w-44 h-60 rounded-lg"
                          src="https://placehold.co/174x244"
                        />
                      )}
                    <div class="w-4 h-4 left-[496px] top-[14px] absolute overflow-hidden">
                      <div class="w-3 h-3 left-[2px] top-[2px] absolute bg-gray-200">
                      </div>
                    </div>
                  </div>
                  <div class="self-stretch pl-12 inline-flex justify-end items-end gap-2.5">
                    <div class="max-w-[500px] p-6 bg-dc-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl inline-flex flex-col justify-center items-start">
                      <div class="justify-start text-dc-600 text-xl font-medium leading-normal">
                        Do you have this shirt in size M?
                      </div>
                    </div>
                  </div>
                  <div class="self-stretch pr-12 inline-flex justify-start items-end gap-2.5">
                    <div class="w-12 h-12 relative bg-tailwind-colors-blue-600 rounded-2xl overflow-hidden">
                      {ipsumAgentLogo
                        ? (
                          <Image
                            src={ipsumAgentLogo}
                            alt="IPSUM Agent"
                            width={48}
                            height={48}
                            class="w-full h-full object-contain"
                          />
                        )
                        : (
                          <>
                            <div class="w-5 h-4 left-[18px] top-[14.73px] absolute bg-tailwind-colors-blue-50">
                            </div>
                            <div class="w-5 h-4 left-[8.60px] top-[14.69px] absolute bg-tailwind-colors-blue-50">
                            </div>
                          </>
                        )}
                    </div>
                    <div class="flex-1 max-w-[500px] p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl outline outline-1 outline-offset-[-1px] outline-dc-300 inline-flex flex-col justify-center items-start">
                      <div class="self-stretch justify-start text-dc-600 text-xl font-medium leading-normal">
                        Yes! The black cotton shirt is available in size M.
                        Would you like me to add it to your cart?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Blog Posts Section - exactly like RelatedBlogPosts but without heading */}
        {displayPosts.length > 0 && (
          <FadeUp delay={600}>
            <div class="w-full flex flex-col justify-start items-center">
              <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {displayPosts.map((post, index) => (
                  <div
                    key={index}
                    class="flex flex-col justify-start items-start gap-6"
                  >
                    <a href={`/blog/post/${post.slug}`} class="block w-full">
                      <div class="aspect-3/2 w-full bg-primary-light rounded-2xl overflow-hidden">
                        <Image
                          src={post.image || "https://placehold.co/416x256"}
                          alt={post.title || ""}
                          width={416}
                          height={256}
                          class="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </a>
                    <div class="w-full flex flex-col justify-start items-start gap-4">
                      {renderCategories(post)}

                      <a
                        href={`/blog/post/${post.slug}`}
                        class="block w-full hover:opacity-80 transition-opacity"
                      >
                        <h3 class="text-dc-800 text-xl md:text-2xl font-semibold font-manrope leading-normal">
                          {post.title}
                        </h3>
                      </a>

                      <div class="inline-flex justify-start items-center gap-3">
                        <BlogAuthorTag
                          authors={post.authors}
                          avatarSize={20}
                          showName={post.authors?.length === 1}
                          outlineColor="outline-dc-50"
                        />

                        {post.date && (
                          <>
                            <div class="w-1 h-1 bg-dc-500 rounded-[1px]"></div>
                            <div class="text-dc-500 text-sm font-medium font-manrope leading-normal">
                              {formatDate(post.date)}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
}

const defaultProps: Props = {
  eyebrow: "Use Cases",
  title: "Enterprise-Grade AI solutions\nfor your organization",
  description:
    "See how AI agents can help with your daily work and how you connect with customers.",
  internalTag: "Internal Tooling",
  internalTitle: "Internal work more productive",
  internalDescription:
    "Let AI handle routine tasks and break down complex work into simple steps.",
  customerTag: "Customer-facing",
  customerTitle: "Customer interactions AI chats",
  customerDescription:
    "Build better connections with customers by using easy chats, highly personal service and quick support.",
  googleDriveIcon: "https://developers.google.com/drive/images/drive_icon.png",
  ipsumAgentLogo: "https://placehold.co/48x48/2563eb/ffffff?text=AI",
  productImage: "https://placehold.co/176x240/ea580c/ffffff?text=Shirt",
};

export function Preview() {
  return <UseCases {...defaultProps} />;
}
