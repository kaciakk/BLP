const DotationCard = ({ icon, tittle, children, className, href }) => {
  return (
    <div className="fade-up opacity-0 translate-y-10 group flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 rounded-2xl overflow-hidden transition-transform duration-300">
      {/* Ikona */}
      <div
        className={`flex justify-center items-center h-44 ${className} text-white text-6xl`}
      >
        {icon}
      </div>

      {/* Treść */}
      <div className="flex flex-col flex-grow p-6 text-center">
        <h3 className="text-xl font-semibold text-[#1d351c] mb-3">{tittle}</h3>
        <div className="text-gray-600 text-sm leading-relaxed text-justify sm:text-center">
          {children}
        </div>
      </div>

      {/* Przycisk */}
      <div className="mt-auto border-t border-gray-200">
        <a
          className="flex justify-center w-full py-3 text-sm font-semibold text-[#1d351c] bg-[#f6fdf2] hover:bg-[#e5f8da] transition-colors rounded-b-2xl"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Czytaj więcej
        </a>
      </div>
    </div>
  );
};

export default DotationCard;
