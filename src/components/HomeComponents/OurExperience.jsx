import React, { useEffect } from "react";
import { MdOutlineChat, MdOutlineDesignServices } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";

const OurServicesSection = () => {
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
    <div className="bg-gradient-to-b from-white via-[#f5faf7] to-[#eaf5ef] text-[#1d351c]">
      <section className="py-20 px-6 text-center overflow-hidden">
        {/* 🔹 Nagłówek */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-[#1d351c] fade-up opacity-0 translate-y-10 transition-all duration-700">
          Nasze usługi
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg mb-16 fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100 leading-relaxed">
          Oferujemy kompleksowe wsparcie na każdym etapie inwestycji — od
          doradztwa i projektowania, przez precyzyjny dobór urządzeń i montaż,
          aż po serwis gwarancyjny i pogwarancyjny. Naszym celem jest
          dostarczenie rozwiązań, które zapewniają komfort, oszczędność i
          niezawodność na lata.
        </p>

        {/* 🔹 Karty */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* --- 1 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100 flex flex-col items-center p-8 bg-white/60 rounded-2xl shadow-md border border-[#7ed957]/20 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <MdOutlineChat className="text-5xl text-[#7ed957] mb-4 transition-transform duration-500 group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-2">Konsultacje</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Indywidualne doradztwo już na pierwszym spotkaniu. Dojeżdżamy do
              klienta, oceniamy inwestycję i dobieramy najlepsze rozwiązania.
            </p>
          </div>

          {/* --- 2 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200 flex flex-col items-center p-8 bg-white/60 rounded-2xl shadow-md border border-[#7ed957]/20 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <MdOutlineDesignServices className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Projektowanie</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Tworzymy projekty instalacji w oparciu o plany i pomiary.
              Obliczamy zapotrzebowanie, by dobrać idealne rozwiązania.
            </p>
          </div>

          {/* --- 3 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300 flex flex-col items-center p-8 bg-white/60 rounded-2xl shadow-md border border-[#7ed957]/20 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <TbRulerMeasure className="text-5xl text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dobór</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Dobieramy urządzenia pod kątem efektywności, ekologii i trwałości.
              Kluczowy etap każdej inwestycji.
            </p>
          </div>

          {/* --- 4 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-col items-center p-8 bg-white/60 rounded-2xl shadow-md border border-[#7ed957]/20 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <FaScrewdriverWrench className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Montaż</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Doświadczeni instalatorzy i certyfikowani inżynierowie gwarantują
              niezawodność i bezpieczeństwo montażu.
            </p>
          </div>

          {/* --- 5 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-500 flex flex-col items-center p-8 bg-white/60 rounded-2xl shadow-md border border-[#7ed957]/20 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <RiCustomerService2Line className="text-5xl text-[#0099ff] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Serwis</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Kompleksowa opieka serwisowa – przeglądy, naprawy i konserwacja
              urządzeń czołowych producentów.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServicesSection;
