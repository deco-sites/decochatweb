import { ComponentChildren } from "preact";

export interface FadeUpProps {
  /**
   * @title Conteúdo
   * @description Conteúdo que receberá a animação de fade-up
   */
  children: ComponentChildren;
  /**
   * @title Delay da animação
   * @description Delay em milissegundos antes da animação começar
   */
  delay?: number;
  /**
   * @title Classe adicional
   * @description Classes CSS adicionais para o elemento
   */
  class?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  class: className = "",
}: FadeUpProps) {
  const animationId = `fade-up-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <div
        id={animationId}
        class={`opacity-0 translate-y-8 transition-all duration-500 ease-out ${className}`}
      >
        {children}
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const element = document.getElementById('${animationId}');
              if (!element) return;

              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      setTimeout(() => {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                      }, ${delay});
                      observer.unobserve(entry.target);
                    }
                  });
                },
                {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px',
                }
              );

              observer.observe(element);
            })();
          `,
        }}
      />
    </>
  );
}
