import { useEffect } from "react";

const ImageLeftCard = ({ title, description, img, children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f5faf7] to-[#eaf5ef] transition-colors duration-700">
      {/* Nagłówek i opis */}
      <div className="text-center max-w-3xl mx-auto mb-14 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d351c] mb-5">
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify sm:text-center">
          {description}
        </p>
      </div>

      {/* Sekcja zdjęcie + opis */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center fade-up opacity-0 translate-y-10 transition-all duration-700 delay-150">
        {/* Zdjęcie */}
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
          <img
            src={img}
            alt={title}
            className="w-full h-[420px] object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Dodatkowy opis */}
        <div className="text-gray-700 fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImageLeftCard;
