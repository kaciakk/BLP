import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import realizacja1 from "../../assets/realizacja101.jpg";
import realizacja2 from "../../assets/realizacja102.jpg";
import realizacja3 from "../../assets/realizacja103.jpg";
import realizacja4 from "../../assets/realizacja104.jpg";
import realizacja5 from "../../assets/realizacja105.jpg";
import realizacja6 from "../../assets/realizacja106.jpg";

const slides = [
  realizacja1,
  realizacja2,
  realizacja3,
  realizacja4,
  realizacja5,
  realizacja6,
];

// 🔹 Hook do wykrywania urządzenia mobilnego
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const OurRealizationSection = () => {
  const isMobile = useIsMobile();

  // 🔹 Efekt fade-up (zostaje bez zmian)
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

  // 🔹 Ograniczenie liczby zdjęć na mobilu
  const displayedSlides = isMobile ? slides.slice(0, 6) : slides;

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Nagłówek */}
      <div className="text-center max-w-2xl mx-auto mb-12 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Nasze realizacje
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify sm:text-center">
          Przekonaj się, jak pracujemy! Sprawdź zdjęcia z naszych montażów i
          zobacz, jak może wyglądać Twoja przyszła instalacja.
        </p>
      </div>

      {/* Siatka zdjęć */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {displayedSlides.map((img, index) => (
          <div
            key={index}
            className="fade-up opacity-0 translate-y-10 transition-all duration-700"
            style={{
              transitionDelay: `${index * 120}ms`,
            }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 group">
              <img
                src={img}
                alt={`realizacja-${index}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Przycisk */}
      <div className="flex justify-center mt-12 fade-up opacity-0 translate-y-10 transition-all duration-700 delay-500">
        <Link to="/realization">
          <button className="bg-[#7ed957] rounded-2xl px-6 py-3 text-white font-semibold hover:bg-[#6dc94a] transition transform active:scale-95 duration-150 shadow-md">
            Zobacz więcej naszych realizacji
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurRealizationSection;
