import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import FadeUp from "../components/ui/FadeUp.tsx";

/**
 * @titleBy name
 */
interface Platform {
  /**
   * @title Nome da plataforma
   * @description Nome da plataforma de comunicação
   */
  name: string;
  /**
   * @title Logo da plataforma
   * @description Logo da plataforma de comunicação
   */
  logo: ImageWidget;
}

interface Props {
  /**
   * @title Tag da seção
   * @description Tag que aparece no cartão esquerdo
   */
  tag?: string;
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
   * @title Imagem do telefone
   * @description Imagem do telefone no centro
   */
  phoneImage: ImageWidget;
  /**
   * @title Plataformas de comunicação
   * @description Lista de plataformas que se conectam ao telefone
   * @maxItems 5
   */
  platforms: Platform[];
}

export default function Communications({
  tag = "Communication",
  title,
  description,
  phoneImage,
  platforms,
}: Props) {
  const sectionId = `communications-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      id={sectionId}
      class="self-stretch px-4 md:px-8 lg:px-20 py-16 md:py-32 bg-dc-50 flex flex-col justify-center items-center gap-16 md:gap-32"
    >
      <FadeUp>
        <div class="self-stretch relative flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-2">
          {/* Left Card */}
          <div class="w-full lg:flex-1 h-auto lg:h-96 p-6 md:p-8 lg:pl-16 lg:pr-32 lg:py-16 bg-dc-100 rounded-2xl flex flex-col justify-between items-start gap-6 lg:gap-0">
            <div class="self-stretch flex flex-col justify-start items-start gap-6 lg:gap-10">
              <div class="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-6">
                <div class="px-4 py-1 bg-dc-200 rounded-full flex justify-center items-center gap-2">
                  <div class="justify-center text-dc-700 text-sm lg:text-base font-semibold font-manrope leading-tight">
                    {tag}
                  </div>
                </div>
                <h2 class="self-stretch justify-start text-dc-800 text-2xl md:text-3xl lg:text-5xl font-semibold font-manrope leading-tight lg:leading-normal">
                  {title}
                </h2>
              </div>
              <div class="self-stretch justify-start text-dc-500 text-base lg:text-lg font-normal font-switzer leading-relaxed lg:leading-snug">
                {description}
              </div>
            </div>
          </div>

          {/* Phone Image - Mobile: Below left card, Desktop: Absolutely positioned */}
          <div class="block lg:hidden w-full flex justify-center py-8">
            <Image
              src={phoneImage}
              alt="Phone"
              width={297}
              height={584}
              class="w-48 h-auto origin-center rotate-[10.51deg]"
              loading="lazy"
            />
          </div>

          {/* Right Card with Platforms */}
          <div class="w-full lg:flex-1 h-auto lg:h-[520px] p-6 md:p-8 lg:p-16 bg-primary-light rounded-2xl flex flex-col justify-center items-start gap-3 lg:gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                class="self-stretch flex justify-start items-center platform-integration"
                data-platform-index={index}
              >
                <div class="flex-1 h-0 outline outline-2 lg:outline-4 outline-offset-[-1px] lg:outline-offset-[-2px] outline-stone-50 connection-line">
                </div>
                <div class="px-3 lg:px-5 py-1.5 lg:py-2 bg-dc-50 rounded-full flex justify-center items-center gap-2 platform-pill">
                  <div class="w-6 h-6 lg:w-8 lg:h-8 relative overflow-hidden">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={32}
                      height={32}
                      class="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div class="justify-center text-dc-700 text-base lg:text-xl font-semibold font-manrope leading-tight">
                    {platform.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Image - Desktop: Absolutely positioned */}
          <div class="hidden lg:block absolute left-[577.59px] top-[-54.41px]">
            <Image
              src={phoneImage}
              alt="Phone"
              width={297}
              height={584}
              class="w-72 h-[584.45px] origin-top-left rotate-[10.51deg]"
              loading="lazy"
            />
          </div>
        </div>
      </FadeUp>

      {/* GSAP CDN Scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js">
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js">
      </script>

      {/* Platform Integration Animation Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", () => {
            console.log("Communications: DOM loaded, checking for GSAP...");
            
            // Wait for GSAP to be available
            function initializeGSAP() {
              if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                console.log("Communications: GSAP and ScrollTrigger are available, initializing...");
                
                // Register GSAP plugins
                gsap.registerPlugin(ScrollTrigger);
                
                let animationsStarted = false;
                
                // Platform integration animations
                function initializePlatformAnimations() {
                  const isMobile = window.innerWidth < 640;
                  
                  // Initially hide all connection lines and pills
                  gsap.set(".connection-line", { 
                    scaleX: 0, 
                    transformOrigin: "left center" 
                  });
                  gsap.set(".platform-pill", { 
                    opacity: 0, 
                    scale: 0.8 
                  });
                  
                  // Create timeline for sequential animation
                  const platformTimeline = gsap.timeline({
                    delay: isMobile ? 0.3 : 0.5
                  });
                  
                  // Animate each platform integration
                  const platforms = document.querySelectorAll(".platform-integration");
                  
                  platforms.forEach((platform, index) => {
                    const line = platform.querySelector(".connection-line");
                    const pill = platform.querySelector(".platform-pill");
                    
                    // Add line animation
                    platformTimeline.to(line, {
                      duration: isMobile ? 0.6 : 0.8,
                      scaleX: 1,
                      ease: "power2.out"
                    }, index * (isMobile ? 0.15 : 0.2))
                    
                    // Add pill animation right after line completes
                    .to(pill, {
                      duration: isMobile ? 0.4 : 0.5,
                      opacity: 1,
                      scale: 1,
                      ease: "back.out(1.4)"
                    }, index * (isMobile ? 0.15 : 0.2) + (isMobile ? 0.5 : 0.6));
                  });
                  
                  // Add subtle hover animations
                  platforms.forEach((platform) => {
                    const pill = platform.querySelector(".platform-pill");
                    
                    platform.addEventListener("mouseenter", () => {
                      gsap.to(pill, {
                        duration: 0.3,
                        scale: 1.05,
                        ease: "power2.out"
                      });
                    });
                    
                    platform.addEventListener("mouseleave", () => {
                      gsap.to(pill, {
                        duration: 0.3,
                        scale: 1,
                        ease: "power2.out"
                      });
                    });
                  });
                }
                
                // Setup intersection observer for viewport detection (like FadeUp.tsx)
                const communicationsSection = document.getElementById('${sectionId}');
                if (communicationsSection) {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting && !animationsStarted) {
                          console.log("Communications section entered viewport, starting platform animations...");
                          animationsStarted = true;
                          
                          // Start platform animations
                          setTimeout(() => {
                            initializePlatformAnimations();
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
                  
                  observer.observe(communicationsSection);
                }
                
              } else {
                console.log("Communications: GSAP not yet available, retrying in 100ms...");
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
  );
}

const defaultProps: Props = {
  tag: "Communication",
  title: "deco.chat fits right into your day",
  description:
    "Make your internal work more productive and efficient with AI agents.",
  phoneImage: "https://placehold.co/297x584",
  platforms: [
    { name: "Slack", logo: "https://placehold.co/32x32" },
    { name: "WhatsApp", logo: "https://placehold.co/32x32" },
    { name: "Microsoft Teams", logo: "https://placehold.co/32x32" },
    { name: "Discord", logo: "https://placehold.co/32x32" },
    { name: "Zoom", logo: "https://placehold.co/32x32" },
  ],
};

export function Preview() {
  return <Communications {...defaultProps} />;
}
