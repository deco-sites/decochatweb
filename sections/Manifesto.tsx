import type { RichText } from "apps/admin/widgets.ts";
import FadeUp from "../components/ui/FadeUp.tsx";
import BodyText from "../components/ui/BodyText.tsx";
import { useScript } from "@deco/deco/hooks";

export interface Props {
  /**
   * @title Título principal
   * @description Título principal do manifesto
   */
  title?: string;
  /**
   * @title Subtítulo
   * @description Subtítulo do manifesto
   */
  subtitle?: string;
  /**
   * @title Tagline
   * @description Frase principal em destaque
   */
  tagline?: string;
  /**
   * @title Conteúdo principal
   * @description Texto principal do manifesto. Aceita HTML.
   */
  content?: RichText;
  /**
   * @title Promessas
   * @description Lista de promessas/benefícios
   */
  promises?: string[];
  /**
   * @title Frase de fechamento
   * @description Frase final de impacto
   */
  closingStatement?: string;
}

const defaultProps: Props = {
  title: "VIBECODE THE AUTONOMOUS FUTURE",
  subtitle: "Vibecode your agentic workforce.",
  tagline: "Instant value · Integrated control · Infinite extensibility",
  content: `<p>Software should serve ambition, not stall it. Yet building AI‑powered tools still feels gated by DevOps rituals, fragmented stacks and opaque costs. Businesses cross the 100‑person mark and hit a wall of backlog and bottlenecks. Non‑technical doers wait in ticket queues; developers fight YAML. It's 2025—this is theft of human momentum.</p>

<p>Anyone should be able to declare work and watch software materialise, safe, observable and affordable. We believe the next era is not <em>low‑code</em>; it's actually <strong>vibecoding</strong>—expressing intent in plain language while trusted agents wire the rest.</p>

<p>Deco is the open‑source operating system for autonomous companies. We mesh every tool, model and dataset into secure, observable MCPs, then let builders compose <strong>Agents, Workflows & Views</strong> in chat—no code, no ops. One click spins up logs, billing and guardrails; one line drops into code when you want to go wild.</p>

<p>Our promise is clear:</p>`,
  promises: [
    "Instant value — launch a ready‑to‑use AI solution in under 30 seconds.",
    "Integrated control — see every token, cost and decision in real time.",
    "Infinite extensibility — fork the repo, plug any MCP, contribute to the marketplace.",
  ],
  closingStatement: "State the work—watch it happen.",
};

export default function Manifesto({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  tagline = defaultProps.tagline,
  content = defaultProps.content,
  promises = defaultProps.promises,
  closingStatement = defaultProps.closingStatement,
}: Props) {
  const sectionId = `manifesto-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section
      id={sectionId}
      class="w-full bg-dc-50 py-16 lg:py-24"
    >
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="w-full max-w-4xl mx-auto">
          {/* Header */}
          <FadeUp delay={0}>
            <div class="flex flex-col items-center gap-8 text-center mb-16 lg:mb-24">
              <div class="flex flex-col items-center gap-4">
                <h1 class="text-dc-900 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                  {title}
                </h1>
                <p class="text-primary-dark text-lg md:text-xl lg:text-2xl font-medium italic">
                  {subtitle}
                </p>
              </div>
              <div class="w-full max-w-2xl h-px bg-dc-200"></div>
              <p class="text-dc-600 text-base md:text-lg font-semibold tracking-wide">
                {tagline}
              </p>
            </div>
          </FadeUp>

          {/* Main Content */}
          <FadeUp delay={200}>
            <div class="mb-12">
              <div
                class="text-dc-700 text-lg md:text-xl leading-relaxed space-y-6 [&>p]:mb-6 [&>em]:text-dc-600 [&>em]:font-medium [&>strong]:text-dc-900 [&>strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: content || "" }}
              />
            </div>
          </FadeUp>

          {/* Promises List */}
          {promises && promises.length > 0 && (
            <FadeUp delay={400}>
              <div class="mb-12">
                <ul class="space-y-4">
                  {promises.map((promise, index) => (
                    <li
                      key={index}
                      class="flex items-start gap-3 text-dc-700 text-lg md:text-xl leading-relaxed"
                    >
                      <span class="text-primary-dark font-bold text-xl mt-1">•</span>
                      <span class="font-medium">{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          )}

          {/* Additional Content */}
          <FadeUp delay={600}>
            <div class="mb-12">
              <BodyText
                size="lg"
                color="dc-700"
                lineHeight="relaxed"
                className="mb-6"
              >
                We speak from the future; it is our biggest moat. We build <em>in</em> public, <em>with</em> the public, so no one is locked out of progress.
              </BodyText>
              <BodyText
                size="lg"
                color="dc-700"
                lineHeight="relaxed"
                className="mb-6"
              >
                Whether you're a scrappy PM automating a workflow or a staff engineer seeking canvas‑wide leverage: jump in, vibecode an agent, and push humanity forward. Help us prove that autonomy isn't a luxury feature—it's the default state of work.
              </BodyText>
            </div>
          </FadeUp>

          {/* Dithering Shape - Visual Impact */}
          <FadeUp delay={800}>
            <div class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 flex items-center justify-center">
              {/* SVG Definitions for Mask */}
              <svg width="0" height="0" class="absolute">
                <defs>
                  <mask id={`dither-mask-${sectionId}`}>
                    <rect width="100%" height="100%" fill="black"/>
                    <g fill="white" transform="translate(50%, 50%) translate(-24.5, -10) scale(10)">
                      <path d="M29.6499 20C27.3536 20 25.8721 19.2593 24.835 18.4444C24.6128 18.5926 24.4647 18.7407 24.1684 18.8889C22.1684 19.9259 19.9462 20 19.1313 20C15.8721 20 14.1684 18.5926 13.3536 17.4074C13.2795 17.3333 13.2054 17.1852 13.1313 17.1111C11.6499 18.8889 9.72393 20 6.83504 20C4.31652 20 2.24245 19.037 1.05726 17.3333C-0.202 15.4815 -0.350148 12.963 0.686889 10.2963C2.0943 6.74074 5.27948 4.59259 9.20541 4.59259C9.27948 4.59259 9.27948 4.59259 9.35356 4.59259C9.35356 4.51852 9.35356 4.37037 9.35356 4.2963C9.27948 3.03704 10.0943 1.92593 11.2795 1.55556L14.761 0.222222C15.1313 0.0740741 15.5017 0 15.8721 0C16.9832 0 18.0202 0.592593 18.5387 1.62963L20.0202 4.66667C20.4647 4.59259 20.9091 4.59259 21.3536 4.59259C23.5017 4.59259 25.2054 5.33333 26.3165 6.66667C28.0202 5.33333 30.1684 4.59259 32.5387 4.59259C33.798 4.59259 34.9832 4.81481 35.8721 5.25926C36.1684 5.40741 36.4647 5.55556 36.6869 5.77778C38.0202 5.03704 39.5758 4.59259 41.2795 4.59259C43.7239 4.59259 45.798 5.55556 46.9832 7.25926C48.2424 9.03704 48.4647 11.4815 47.6499 13.9259C46.3165 17.6296 42.9091 20 38.9091 20C37.2054 20 35.6499 19.5556 34.4647 18.6667C34.2425 18.8889 33.9461 19.1111 33.6499 19.1852C32.5387 19.7037 31.1313 19.9259 29.7239 20H29.6499Z"/>
                    </g>
                  </mask>
                </defs>
              </svg>

              {/* Main Shape with Dithering Animation */}
              <div class="relative w-[490px] h-[200px] md:w-[700px] md:h-[280px] lg:w-[900px] lg:h-[360px]">
                {/* Visible SVG Shape */}
                <svg 
                  class="absolute inset-0 w-full h-full z-10" 
                  viewBox="0 0 49 20"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path 
                    d="M29.6499 20C27.3536 20 25.8721 19.2593 24.835 18.4444C24.6128 18.5926 24.4647 18.7407 24.1684 18.8889C22.1684 19.9259 19.9462 20 19.1313 20C15.8721 20 14.1684 18.5926 13.3536 17.4074C13.2795 17.3333 13.2054 17.1852 13.1313 17.1111C11.6499 18.8889 9.72393 20 6.83504 20C4.31652 20 2.24245 19.037 1.05726 17.3333C-0.202 15.4815 -0.350148 12.963 0.686889 10.2963C2.0943 6.74074 5.27948 4.59259 9.20541 4.59259C9.27948 4.59259 9.27948 4.59259 9.35356 4.59259C9.35356 4.51852 9.35356 4.37037 9.35356 4.2963C9.27948 3.03704 10.0943 1.92593 11.2795 1.55556L14.761 0.222222C15.1313 0.0740741 15.5017 0 15.8721 0C16.9832 0 18.0202 0.592593 18.5387 1.62963L20.0202 4.66667C20.4647 4.59259 20.9091 4.59259 21.3536 4.59259C23.5017 4.59259 25.2054 5.33333 26.3165 6.66667C28.0202 5.33333 30.1684 4.59259 32.5387 4.59259C33.798 4.59259 34.9832 4.81481 35.8721 5.25926C36.1684 5.40741 36.4647 5.55556 36.6869 5.77778C38.0202 5.03704 39.5758 4.59259 41.2795 4.59259C43.7239 4.59259 45.798 5.55556 46.9832 7.25926C48.2424 9.03704 48.4647 11.4815 47.6499 13.9259C46.3165 17.6296 42.9091 20 38.9091 20C37.2054 20 35.6499 19.5556 34.4647 18.6667C34.2425 18.8889 33.9461 19.1111 33.6499 19.1852C32.5387 19.7037 31.1313 19.9259 29.7239 20H29.6499Z" 
                    fill="#d0ec1a" 
                    stroke="#07401a" 
                    stroke-width="0.15"
                    filter="drop-shadow(0px 0px 40px rgba(208,236,26,0.4))"
                  />
                </svg>

                {/* Dithering Canvas - positioned behind the SVG */}
                <canvas
                  id={`dither-canvas-${sectionId}`}
                  class="absolute inset-0 w-full h-full cursor-none z-0"
                  style={{ 
                    imageRendering: "pixelated",
                    mask: `url(#dither-mask-${sectionId})`,
                    WebkitMask: `url(#dither-mask-${sectionId})`
                  }}
                />
              </div>

              {/* Message positioned inside the shape */}
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-full max-w-[300px] md:max-w-[420px] lg:max-w-[540px] p-4 md:p-6 lg:p-8 bg-dc-50/95 backdrop-blur-sm rounded-3xl border border-dc-200 z-30 shadow-lg">
                  <p class="text-dc-700 text-sm md:text-lg lg:text-xl font-medium leading-normal text-center">
                    "The future is autonomous by default"
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Closing Statement */}
          {closingStatement && (
            <FadeUp delay={1000}>
              <div class="text-center pt-8 border-t border-dc-200">
                <p class="text-primary-dark text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                  {closingStatement}
                </p>
              </div>
            </FadeUp>
          )}
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

            // Bayer matrix 8x8 for sophisticated dithering
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

            let mousePos = { x: 0, y: 0 };
            let isHovering = false;

            // Mouse tracking
            const handleMouseMove = (e: MouseEvent) => {
              const rect = canvas.getBoundingClientRect();
              mousePos = {
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height,
              };
            };

            const handleMouseEnter = () => {
              isHovering = true;
            };
            const handleMouseLeave = () => {
              isHovering = false;
            };

            canvas.addEventListener("mousemove", handleMouseMove);
            canvas.addEventListener("mouseenter", handleMouseEnter);
            canvas.addEventListener("mouseleave", handleMouseLeave);

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

                  // Create flowing dither pattern with organic movement
                  const centerX = 0.5;
                  const centerY = 0.5;
                  const distanceFromCenter = Math.sqrt(
                    Math.pow(nx - centerX, 2) + Math.pow(ny - centerY, 2),
                  );

                  // Base intensity - higher overall to create more solid filled areas
                  let baseIntensity = 0.75;

                  // Add organic flowing waves optimized for the blob shape
                  const wave1 = Math.sin(nx * 4 + ny * 3 + time * 0.0002) * 0.15;
                  const wave2 = Math.cos(nx * 6 + ny * 2 + time * 0.00015) * 0.12;
                  const wave3 = Math.sin((nx * 2 + ny * 4) + time * 0.0001) * 0.1;
                  
                  // Create gentle ripples that follow the organic shape
                  const ripple1 = Math.sin(distanceFromCenter * 8 - time * 0.0003) * 0.08;
                  const ripple2 = Math.cos((nx + ny) * 6 + time * 0.00025) * 0.06;

                  // Add edge enhancement to create more defined boundaries
                  const edgeEffect = Math.max(0, 1 - distanceFromCenter * 2.5) * 0.1;

                  // Add mouse interaction with organic spread
                  let mouseInfluence = 0;
                  if (isHovering) {
                    const dx = nx - mousePos.x;
                    const dy = ny - mousePos.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    mouseInfluence = Math.exp(-distance * 4) * 0.2;
                    
                    // Create organic ripples from mouse position
                    const mouseRipple = Math.sin(distance * 10 - time * 0.0005) * mouseInfluence;
                    baseIntensity += mouseRipple;
                  }

                  // Combine all effects for organic, flowing pattern
                  let intensity = baseIntensity + wave1 + wave2 + wave3 + ripple1 + ripple2 + edgeEffect + mouseInfluence;

                  // Clamp intensity to 0-1 range
                  intensity = Math.max(0, Math.min(1, intensity));

                  // Get Bayer matrix threshold
                  const matrixX = Math.floor(x / cellSize) % 8;
                  const matrixY = Math.floor(y / cellSize) % 8;
                  const threshold = bayerMatrix8x8[matrixY][matrixX] / 64;

                  // Apply dithering with design system colors
                  const ditherResult = intensity > threshold;
                  const r = ditherResult ? 0x07 : 0xd0; // primary-dark : primary-light
                  const g = ditherResult ? 0x40 : 0xec;
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
                      const pixelIndex = ((y + dy) * canvas.width + (x + dx)) * 4;
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
              canvas.removeEventListener("mousemove", handleMouseMove);
              canvas.removeEventListener("mouseenter", handleMouseEnter);
              canvas.removeEventListener("mouseleave", handleMouseLeave);
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

export function Preview() {
  return <Manifesto {...defaultProps} />;
} 