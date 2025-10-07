import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const OurCommentsSection = () => {
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
    <section className="bg-gradient-to-b from-[#E6F5EE] via-[#F1F7F9] to-[#F8FAFB] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Tytuł */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800 fade-up opacity-0 translate-y-10 transition-all duration-700">
          Opinie klientów
        </h2>

        {/* Opinie */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Opinia 1 */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1 text-left">
            <FaQuoteLeft className="text-[#7ed957] text-3xl mb-3" />
            <p className="italic text-gray-700 leading-relaxed">
              Profesjonalne i bardzo uczciwe podejście do klienta. W trakcie
              instalacji pompy ciepła pojawiły się komplikacje (niebanalne ale
              też nie całkiem z ich winy). Sposób w jaki je ogarnęli jest
              najlepszym świadectwem, że Pan Benedykt z BLP jest porządnym i
              uczciwym profesjonalistą. Polecam montaż pompy ciepła z BLP.
            </p>
            <p className="mt-4 font-semibold text-[#003366] text-sm">
              – Witold
            </p>
          </div>

          {/* Opinia 2 */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1 text-left">
            <FaQuoteLeft className="text-[#7ed957] text-3xl mb-3" />
            <p className="italic text-gray-700 leading-relaxed">
              Zdecydowanie polecam firmę BLP. Panowie bardzo skrupulatnie
              wykonują swoją pracę. Kontakt i terminowość na najwyższym
              poziomie. Posiadają dużą wiedzę w temacie pomp ciepła i służą
              poradą. Mitsubishi Zubadan zamontowany u mnie pracuje bez
              zarzutów. Cena jak najbardziej ok. Fachowcy godni polecenia.
            </p>
            <p className="mt-4 font-semibold text-[#003366] text-sm">– Tomek</p>
          </div>

          {/* Opinia 3 */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1 text-left">
            <FaQuoteLeft className="text-[#7ed957] text-3xl mb-3" />
            <p className="italic text-gray-700 leading-relaxed">
              Robią swoje tak, jak trzeba. Solidnie, fachowo i terminowo – bez
              zbędnych obietnic, za to z konkretnym efektem.
            </p>
            <p className="mt-4 font-semibold text-[#003366] text-sm">
              – Bartłomiej
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommentsSection;
