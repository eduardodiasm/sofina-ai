
const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white shadow-lg md:hidden py-2 z-50 border-t border-gray-200">
      <div className="px-4">
        <div className="text-center mb-2">
          <p className="text-xs text-slate-600">
            Seu copiloto financeiro 24/7
          </p>
        </div>
        <a 
          href="#hero-subtitle"
          className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-semibold rounded-lg shadow-sm transition-colors"
        >
          Quero agora
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
