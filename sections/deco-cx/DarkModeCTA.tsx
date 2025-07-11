import { useScript } from "@deco/deco/hooks";

export interface Props {
  /**
   * @title Título principal
   * @description Texto principal do CTA
   */
  title: string;
  /**
   * @title Descrição
   * @description Texto descritivo do CTA
   */
  description: string;
  /**
   * @title Placeholder do email
   * @description Texto placeholder para o input de email
   */
  emailPlaceholder: string;
  /**
   * @title Texto do botão
   * @description Texto do botão de submit
   */
  buttonText: string;
  /**
   * @title URL de ação
   * @description URL para onde o formulário deve ser enviado
   */
  actionUrl: string;
}

export default function NewHomeCTA({
  title = defaultProps.title,
  description = defaultProps.description,
  emailPlaceholder = defaultProps.emailPlaceholder,
  buttonText = defaultProps.buttonText,
  actionUrl = defaultProps.actionUrl,
}: Props) {
  const sectionId = `new-home-cta-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section class="w-full bg-dc-900">
      <div class="relative z-10 pt-20 md:pt-40 px-4 md:px-8 lg:px-16 mb-[-100px]">
        <div class="w-full max-w-[1440px] mx-auto">
          <div class="bg-primary-light rounded-[20px] md:rounded-[40px] flex flex-col justify-center items-start overflow-hidden relative">
            {/* Main Content */}
            <div class="w-full p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-28 relative z-10">
              {/* Left Content - Title and Description */}
              <div class="flex-1 flex flex-col justify-start items-start gap-6 lg:gap-10">
                <h2 class="text-primary-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight lg:leading-[56px]">
                  {title.split("deco.cx").map((part, index) => (
                    index === 0 ? part : (
                      <>
                        <span class="italic underline decoration-primary-dark decoration-4 underline-offset-4">
                          deco.cx
                        </span>
                        {part}
                      </>
                    )
                  ))}
                </h2>
                <p class="text-primary-dark text-base md:text-lg font-normal leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Right Content - Email Form */}
              <div class="flex-1 flex flex-col justify-start items-start gap-2 w-full">
                <form method="POST" action={actionUrl} class="w-full flex flex-col gap-2">
                  {/* Email Input */}
                  <div class="w-full p-2 bg-dc-50 rounded-2xl shadow-[0px_3px_7px_0px_rgba(39,37,36,0.12)] shadow-[0px_12px_12px_0px_rgba(39,37,36,0.10)] shadow-[0px_27px_16px_0px_rgba(39,37,36,0.06)] shadow-[0px_49px_19px_0px_rgba(39,37,36,0.02)] shadow-[0px_76px_21px_0px_rgba(39,37,36,0.00)] outline outline-1 outline-offset-[-0.50px] outline-dc-200 flex justify-start items-center">
                    <input
                      type="email"
                      name="email"
                      placeholder={emailPlaceholder}
                      required
                      class="flex-1 px-4 py-2 rounded-full bg-transparent border-none outline-none text-dc-900 text-base placeholder:text-dc-400 placeholder:font-normal font-normal leading-tight"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    class="w-full h-12 px-4 py-2 bg-primary-dark rounded-xl flex justify-center items-center gap-2 hover:bg-primary-dark/90 transition-colors duration-300"
                  >
                    <span class="text-primary-light text-base font-medium leading-tight">
                      {buttonText}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Dithering Animation at Bottom */}
            <div class="w-full h-16 md:h-20 relative overflow-hidden">
              <canvas
                id={`dither-canvas-${sectionId}`}
                class="absolute inset-0 w-full h-full pointer-events-none"
                style={{ imageRendering: "pixelated" }}
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

            // Bayer matrix 8x8 for sophisticated dithering (same as hero)
            const bayerMatrix8x8 = [
              [0, 32, 8, 40, 2, 34, 10, 42],
              [48, 16, 56, 24, 50, 18, 58, 26],
              [12, 44, 4, 36, 14, 46, 6, 38],
              [60, 28, 52, 20, 62, 30, 54, 22],
              [3, 35, 11, 43, 1, 33, 9, 41],
              [51, 19, 59, 27, 49, 17, 57, 25],
              [15, 47, 7, 39, 13, 45, 5, 37],
              [63, 31, 55, 23, 61, 29, 53, 21],
            ];

            let time = 0;
            const cellSize = 2;

            const animate = () => {
              if (canvas.width === 0 || canvas.height === 0) return;

              ctx.clearRect(0, 0, canvas.width, canvas.height);

              // Create noise texture for dithering base
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

                  // Create extremely subtle dithering with gentle flowing movement
                  // Animated edge position - gently moves up and down
                  const edgeOffset = Math.sin(nx * 2 + time * 0.0002) * 0.05; // Gentle wave in edge position
                  const animatedEdgeStart = 0.8 + edgeOffset; // Edge moves between 75% and 85%

                  const bottomEdge = Math.max(
                    0,
                    (ny - animatedEdgeStart) / 0.2,
                  );
                  const bottomFocus = Math.pow(bottomEdge, 4); // Very sharp falloff

                  // Flowing waves that create organic movement
                  const wave1 = Math.sin(nx * 3 + time * 0.0003) * 0.06 *
                    bottomFocus;
                  const wave2 = Math.cos(nx * 5 + time * 0.0002) * 0.04 *
                    bottomFocus;
                  const wave3 = Math.sin((nx + ny) * 2 + time * 0.0001) * 0.03 *
                    bottomFocus;

                  // Minimal base intensity with gentle organic flow
                  let intensity = 0.94 + (bottomFocus * 0.12) + wave1 + wave2 +
                    wave3;

                  // Clamp intensity to 0-1 range
                  intensity = Math.max(0, Math.min(1, intensity));

                  // Get Bayer matrix threshold
                  const matrixX = Math.floor(x / cellSize) % 8;
                  const matrixY = Math.floor(y / cellSize) % 8;
                  const threshold = bayerMatrix8x8[matrixY][matrixX] / 64;

                  // Apply dithering with design system colors (same as hero)
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

            // Cleanup on page unload
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
  title: "Be one of the first to use the new deco.cx",
  description: "Join the waiting list to gain early access to the platform that will transform how you create online stores.",
  emailPlaceholder: "Enter your email",
  buttonText: "I want early access",
  actionUrl: "#waitlist",
};

export function Preview() {
  return <NewHomeCTA {...defaultProps} />;
}
