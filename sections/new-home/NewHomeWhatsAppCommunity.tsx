import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { useScript } from "@deco/deco/hooks";

export interface Props {
  /**
   * @title Título principal
   * @description Título principal da seção (ex: WhatsApp Community)
   */
  title: string;
  /**
   * @title Descrição
   * @description Texto descritivo da seção
   */
  description: string;
  /**
   * @title Texto do QR Code
   * @description Texto que aparece ao lado do QR code
   */
  qrCodeText: string;
  /**
   * @title Imagem do QR Code
   * @description QR code para entrar na comunidade
   */
  qrCodeImage: ImageWidget;
  /**
   * @title Link da comunidade
   * @description URL para onde o botão/QR code deve direcionar
   */
  communityHref: string;
  /**
   * @title Imagem do celular
   * @description Imagem do WhatsApp no celular
   */
  phoneImage: ImageWidget;
}

export default function NewHomeWhatsAppCommunity({
  title = defaultProps.title,
  description = defaultProps.description,
  qrCodeText = defaultProps.qrCodeText,
  qrCodeImage = defaultProps.qrCodeImage,
  communityHref = defaultProps.communityHref,
  phoneImage = defaultProps.phoneImage,
}: Props) {
  const sectionId = `whatsapp-community-${
    Math.random().toString(36).substr(2, 9)
  }`;

  return (
    <section class="w-full bg-dc-50 py-16 lg:py-24">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="w-full max-w-[1312px] mx-auto pt-20 rounded-3xl lg:rounded-[48px] outline outline-4 lg:outline-[10px] outline-primary-dark flex flex-col overflow-hidden relative">
          {/* Dithering Animation Canvas - Behind everything, flows from right */}
          <canvas
            id={`dither-canvas-${sectionId}`}
            class="absolute top-0 left-0 w-full h-32 lg:h-40 pointer-events-none z-0"
            style={{ imageRendering: "pixelated" }}
          />

          {/* Tab Header */}
          <div class="relative flex justify-start items-center z-20">
            <div class="group relative rounded-t-3xl px-6 py-4 bg-primary-dark">
              {/* Left curved connection - following tutorial exactly */}
              <div class="absolute -bottom-2 -left-5 z-0 h-10 w-10 rounded-full bg-primary-dark">
              </div>
              <div class="absolute -left-10 bottom-3 z-10 h-10 w-10 rounded-full bg-primary-light">
              </div>

              <span class="relative z-20 text-primary-light text-base font-normal leading-none">
                Community
              </span>

              {/* Right curved connection - following tutorial exactly */}
              <div class="absolute -bottom-2 -right-5 z-0 h-10 w-10 rounded-full bg-primary-dark">
              </div>
              <div class="absolute -right-10 bottom-3 z-10 h-10 w-10 rounded-full bg-primary-light">
              </div>
            </div>
          </div>

          {/* Main Content Area - connects seamlessly to tab */}
          <div class="w-full bg-primary-dark flex flex-col lg:flex-row justify-end items-end gap-0 relative overflow-hidden z-10 -mt-3">
            {/* Content Section */}
            <div class="flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-start items-start gap-12 lg:gap-20 relative z-10">
              {/* Title and Description */}
              <div class="w-full flex flex-col justify-start items-start gap-6">
                <h2 class="w-full text-primary-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
                  {title}
                </h2>
                <p class="w-full text-dc-200 text-base md:text-lg font-normal leading-relaxed">
                  {description}
                </p>
              </div>

              {/* QR Code Section - Clickable */}
              <a
                href={communityHref}
                target="_blank"
                rel="noopener noreferrer"
                class="group p-2 rounded-2xl outline outline-1 outline-offset-[-1px] outline-primary-light flex flex-col justify-start items-start gap-2.5 transition-all duration-300 hover:outline-2 hover:shadow-lg cursor-pointer"
              >
                <div class="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-2.5">
                  {/* QR Code Container */}
                  <div class="p-4 bg-white rounded-2xl flex justify-center items-center overflow-hidden">
                    <Image
                      src={qrCodeImage}
                      alt="QR Code para entrar na comunidade WhatsApp"
                      width={112}
                      height={112}
                      class="w-20 h-20 md:w-28 md:h-28 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Text and Arrow */}
                  <div class="flex-1 p-4 flex flex-col justify-start items-start gap-4">
                    <span class="text-dc-200 text-base md:text-lg font-normal leading-snug group-hover:text-white transition-colors duration-300">
                      Entrar na<br />comunidade
                    </span>

                    <div class="w-10 h-10 px-2 py-2 bg-primary-light rounded-xl flex justify-center items-center group-hover:bg-white transition-colors duration-300">
                      <Icon
                        name="arrow_outward"
                        size="large"
                        class="text-primary-dark"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Phone Image - No spacing on right and bottom */}
            <div class="w-full lg:w-[400px] xl:w-[500px] 2xl:w-[652px] h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[560px] relative overflow-hidden flex-shrink-0">
              <Image
                src={phoneImage}
                alt="WhatsApp Community no celular"
                width={652}
                height={560}
                class="w-full h-full object-cover object-left-top"
                loading="lazy"
                fetchPriority="low"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dithering Animation Script */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript((sectionId: string) => {
            const canvas = document.getElementById(
              `dither-canvas-${sectionId}`,
            ) as HTMLCanvasElement;

            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            let animationRef: number;

            // Set canvas size to match container
            const resizeCanvas = () => {
              const rect = canvas.getBoundingClientRect();
              canvas.width = rect.width;
              canvas.height = rect.height;
            };

            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);

            // Bayer matrix 4x4 for performance (simpler than hero)
            const bayerMatrix4x4 = [
              [0, 8, 2, 10],
              [12, 4, 14, 6],
              [3, 11, 1, 9],
              [15, 7, 13, 5],
            ];

            let time = 0;
            const cellSize = 3; // Slightly larger cells for better performance

            const animate = () => {
              if (canvas.width === 0 || canvas.height === 0) return;

              ctx.clearRect(0, 0, canvas.width, canvas.height);

              // Create subtle dithering pattern
              const imageData = ctx.createImageData(
                canvas.width,
                canvas.height,
              );
              const data = imageData.data;

              for (let y = 0; y < canvas.height; y += cellSize) {
                for (let x = 0; x < canvas.width; x += cellSize) {
                  // Normalized coordinates
                  const nx = x / canvas.width;
                  const ny = y / canvas.height;

                  // No dithering on left side, smooth transition to dithering on right
                  let intensity;

                  if (nx < 0.4) {
                    // Left side - solid primary-light, no dithering at all
                    intensity = 1; // Always primary-light
                  } else {
                    // Right side - smooth fade-in of dithering from 40% onward
                    const fadeStart = 0.4;
                    const rightFade = Math.pow(
                      (nx - fadeStart) / (1 - fadeStart),
                      1.5,
                    );

                    // Add flowing waves that get stronger toward the right
                    const wave1 = Math.sin(ny * 8 + nx * 10 + time * 0.0003) *
                      0.3;
                    const wave2 = Math.cos(ny * 6 + nx * 8 + time * 0.0002) *
                      0.2;
                    const wave3 = Math.sin((ny + nx) * 4 + time * 0.0001) *
                      0.15;

                    // Blend between solid and dithered based on position
                    const solidIntensity = 1; // primary-light
                    const ditheredIntensity = 0.5 + wave1 + wave2 + wave3;

                    // Smooth transition from solid to dithered
                    intensity = solidIntensity * (1 - rightFade) +
                      ditheredIntensity * rightFade;
                  }

                  // Clamp intensity
                  intensity = Math.max(0, Math.min(1, intensity));

                  // Get Bayer matrix threshold
                  const matrixX = Math.floor(x / cellSize) % 4;
                  const matrixY = Math.floor(y / cellSize) % 4;
                  const threshold = bayerMatrix4x4[matrixY][matrixX] / 16;

                  // Apply dithering with primary colors (same as hero)
                  const ditherResult = intensity > threshold;
                  const r = ditherResult ? 0xd0 : 0x07; // primary-light : primary-dark
                  const g = ditherResult ? 0xec : 0x40;
                  const b = ditherResult ? 0x1a : 0x1a;

                  // Apply to pixel grid
                  for (
                    let dy = 0;
                    dy < cellSize && y + dy < canvas.height;
                    dy++
                  ) {
                    for (
                      let dx = 0;
                      dx < cellSize && x + dx < canvas.width;
                      dx++
                    ) {
                      const pixelIndex = ((y + dy) * canvas.width + (x + dx)) *
                        4;
                      data[pixelIndex] = r; // Red
                      data[pixelIndex + 1] = g; // Green
                      data[pixelIndex + 2] = b; // Blue
                      data[pixelIndex + 3] = 255; // Alpha
                    }
                  }
                }
              }

              ctx.putImageData(imageData, 0, 0);

              time += 16;
              animationRef = requestAnimationFrame(animate);
            };

            // Start animation
            animate();

            // Cleanup
            const cleanup = () => {
              window.removeEventListener("resize", resizeCanvas);
              if (animationRef) {
                cancelAnimationFrame(animationRef);
              }
            };

            window.addEventListener("beforeunload", cleanup);
            return cleanup;
          }, sectionId),
        }}
      />
    </section>
  );
}

const defaultProps: Props = {
  title: "WhatsApp Community",
  description:
    "Networking direto com líderes, demos reais de IA e boas práticas atuais.",
  qrCodeText: "Entrar na comunidade",
  qrCodeImage: "https://via.placeholder.com/112x112?text=QR+Code",
  communityHref: "https://whatsapp.com/community/example",
  phoneImage: "https://via.placeholder.com/652x560?text=WhatsApp+Phone",
};

export function Preview() {
  return <NewHomeWhatsAppCommunity {...defaultProps} />;
}
