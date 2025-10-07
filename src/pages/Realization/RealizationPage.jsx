import React, { useEffect } from "react";
import realizacja1 from "../../assets/realizacja1.jpg";
import realizacja2 from "../../assets/realizacja2.jpg";
import realizacja3 from "../../assets/realizacja3.jpg";
import realizacja4 from "../../assets/realizacja1.jpg";
import realizacja5 from "../../assets/realizacja4.jpg";
import realizacja6 from "../../assets/realizacja3.jpg";
import realizacja7 from "../../assets/realizacja2.jpg";
import realizacja8 from "../../assets/realizacja3.jpg";
import realizacja9 from "../../assets/realizacja4.jpg";
import realizacja10 from "../../assets/realizacja4.jpg";
import useScrollToTop from "../../hooks/useScrollToTop";
const RealizationPage = () => {
  useScrollToTop();
  const images = [
    { src: realizacja1, alt: "Klimatyzacja – dom jednorodzinny" },
    { src: realizacja2, alt: "Montaż jednostki zewnętrznej" },
    { src: realizacja3, alt: "Klimatyzacja biurowa – Kraków" },
    { src: realizacja4, alt: "Klimatyzacja biurowa – Kraków" },
    { src: realizacja5, alt: "Klimatyzacja – dom jednorodzinny" },
    { src: realizacja6, alt: "Montaż jednostki zewnętrznej" },
    { src: realizacja7, alt: "System multisplit – dom parterowy, Wieliczka" },
    {
      src: realizacja8,
      alt: "Realizacja dla wspólnoty mieszkaniowej – Bochnia",
    },
    { src: realizacja9, alt: "Klimatyzacja biurowa – Kraków" },
    { src: realizacja10, alt: "Montaż jednostki zewnętrznej – Rzeszów" },
  ];

  // Efekt fade-up z opóźnieniem per element
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up-seq");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");
            }, index * 120); // każde zdjęcie wchodzi po sobie co 120ms
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-[#f5faf7] to-[#eaf5ef] min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Nagłówek */}
      <section className="text-center max-w-3xl mx-auto mb-14 fade-up-seq opacity-0 translate-y-10 transition-all duration-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Nasze realizacje
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify sm:text-center">
          Przekonaj się, jak pracujemy! Zobacz zdjęcia z naszych montaży i
          realizacji, które wykonaliśmy dla domów, firm i instytucji na terenie
          całej Małopolski.
        </p>
      </section>

      {/* Galeria */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="fade-up-seq opacity-0 translate-y-10 transition-all duration-700 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1"
            style={{ transitionDelay: `${i * 100}ms` }} // dodatkowy delay dla każdego zdjęcia
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-white text-sm mb-3 px-3 py-1 bg-[#7ed957]/80 rounded-full">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Info dolne */}
      <div className="text-center mt-16 fade-up-seq opacity-0 translate-y-10 transition-all duration-700 delay-400">
        <h3 className="text-xl sm:text-2xl font-medium text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Aktualne realizacje znajdziesz także na naszym{" "}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7ed957] font-semibold hover:underline"
          >
            profilu Facebook.
          </a>
        </h3>
      </div>
    </div>
  );
};

export default RealizationPage;
