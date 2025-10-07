const Card = ({ title, description, icon, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer group flex flex-col h-full rounded-2xl p-6 text-center
        transition-all duration-300 transform 
        ${
          isActive
            ? "border-2 border-[#7ed957] bg-gradient-to-b from-[#f7fcf5] to-white shadow-md scale-[1.02]"
            : "border border-[#e1f5e0] bg-white hover:shadow-xl hover:scale-[1.03] hover:border-[#7ed957]/60"
        }
      `}
    >
      {/* Dekoracyjny efekt świetlny przy hoverze */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[#7ed957]/5 blur-2xl"></div>

      {/* Ikona */}
      <div className="relative z-10 flex justify-center mb-4 text-6xl text-[#7ed957] group-hover:text-[#6bc34c] transition-colors duration-300">
        {icon}
      </div>

      {/* Tytuł */}
      <h3 className="relative z-10 text-xl font-semibold text-[#1d351c] mb-3 group-hover:text-[#4c9c3b] transition-colors duration-300">
        {title}
      </h3>

      {/* Opis */}
      {description && (
        <p className="relative z-10 text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default Card;
