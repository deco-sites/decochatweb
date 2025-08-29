interface UseCase {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  /**
   * @title Section Title
   * @description Title for the use cases section
   */
  title?: string;
  /**
   * @title Use Cases
   * @description List of use cases
   */
  useCases?: UseCase[];
}

export default function CertifyUseCases({
  title = "Use Cases",
  useCases = [
    {
      title: "Bootcamps & Schools",
      description: "verified graduation certificates",
      icon: "🎓"
    },
    {
      title: "Events & Conferences", 
      description: "attendance/award certificates",
      icon: "🏆"
    },
    {
      title: "Communities & DAOs",
      description: "participation and contribution cred",
      icon: "🤝"
    }
  ],
}: Props) {
  return (
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} class="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div class="text-4xl mb-4">{useCase.icon}</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p class="text-gray-600">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}