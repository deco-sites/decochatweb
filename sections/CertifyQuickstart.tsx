interface Props {
  /**
   * @title Section Title
   * @description Title for the quickstart section
   */
  title?: string;
  /**
   * @title Code Block
   * @description Code commands for quickstart
   */
  codeBlock?: string;
  /**
   * @title Caption
   * @description Caption text below the code block
   */
  caption?: string;
}

export default function CertifyQuickstart({
  title = "Quickstart",
  codeBlock = `# Install the CLI
npm i -g deco-cli

# Clone the starter
git clone https://github.com/deco-cx/certify
cd certify

# Install & run
npm install
npm run dev

# (Optional) Generate types after adding tools/workflows
npm run gen:self

# Deploy to the edge
npm run deploy`,
  caption = "Ship in minutes. Spend time shipping, not wiring tools.",
}: Props) {
  return (
    <section class="py-20 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
        </div>

        <div class="relative">
          <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <button 
                class="text-gray-400 hover:text-white transition-colors text-sm"
                onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.textContent)"
              >
                Copy
              </button>
            </div>
            <pre class="text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>{codeBlock}</code>
            </pre>
          </div>
          
          <p class="text-center text-gray-400 mt-6 text-sm">
            {caption}
          </p>
        </div>
      </div>
    </section>
  );
}