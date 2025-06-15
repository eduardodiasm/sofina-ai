
const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white shadow-lg md:hidden py-3 z-50 border-t border-gray-200">
      <div className="px-4">
        <a 
          href="#form"
          className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-sm transition-colors"
        >
          Plano grátis em 3 min
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
