import { useEffect } from "react";
import { Link } from "react-router-dom";
import realizacja1 from "../../assets/realizacja1.jpg";
import realizacja3 from "../../assets/realizacja3.jpg";
import realizacja4 from "../../assets/realizacja4.jpg";
import realizacja5 from "../../assets/Obraz1.jpg";
import realizacja6 from "../../assets/Obraz2.jpg";
import realizacja7 from "../../assets/Obraz3.jpg";
import realizacja8 from "../../assets/Obraz4.jpg";

const slides = [
  realizacja1,
  realizacja3,
  realizacja4,
  realizacja5,
  realizacja6,
  realizacja7,
  realizacja8,
];

const OurRealizationSection = () => {
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

      {/* Siatka zdjęć z animacjami wchodzącymi pojedynczo */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`fade-up opacity-0 translate-y-10 transition-all duration-700`}
            style={{
              transitionDelay: `${index * 120}ms`, // każdy element wchodzi z opóźnieniem 120ms
            }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 group">
              <img
                src={img}
                alt={`realizacja-${index}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-end justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm mb-3 px-3 py-1 bg-[#7ed957]/80 rounded-full">
                  Zobacz szczegóły
                </span>
              </div>
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
