import React, { useEffect } from "react";
import Card from "../Card";
import { MdOutlineChat, MdOutlineDesignServices } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";

const OurServicesSection = () => {
  // Dodanie animacji fade-up
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
    <section className="bg-white">
      <div className="max-w-[95rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        {/* Nagłówek */}
        <div className="text-center max-w-3xl mx-auto mb-14 fade-up opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-5">
            Nasze usługi
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify sm:text-center px-3">
            Oferujemy kompleksowe wsparcie na każdym etapie inwestycji – od
            doradztwa i projektowania, przez precyzyjny dobór urządzeń i montaż,
            aż po serwis gwarancyjny i pogwarancyjny. Naszym celem jest
            dostarczenie rozwiązań, które zapewniają komfort, oszczędność i
            niezawodność na lata.
          </p>
        </div>

        {/* Karty */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <Card
              title="Konsultacje"
              description="Indywidualne doradztwo już na pierwszym spotkaniu. Dojeżdżamy do klienta, oceniamy inwestycję i dobieramy najlepsze rozwiązania dopasowane do potrzeb."
              icon={<MdOutlineChat className="text-5xl text-[#7ed957]" />}
              className="bg-white shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6"
            />
          </div>

          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <Card
              title="Projektowanie"
              description="Tworzymy projekty instalacji na podstawie planów lub pomiarów. Obliczamy zapotrzebowanie na ciepło, chłód, wentylację i energię, by dobrać optymalne urządzenia."
              icon={
                <MdOutlineDesignServices className="text-5xl text-blue-600" />
              }
              className="bg-white shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6"
            />
          </div>

          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <Card
              title="Dobór"
              description="Dobieramy urządzenia pod kątem ekonomii, ekologii, komfortu i trwałości. To kluczowy etap decydujący o efektywności i żywotności całej instalacji."
              icon={<TbRulerMeasure className="text-5xl text-amber-500" />}
              className="bg-white shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6"
            />
          </div>

          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <Card
              title="Montaż"
              description="Wieloletnie doświadczenie w montażu instalacji chłodniczych, wentylacyjnych, pomp ciepła, klimatyzacji i fotowoltaiki. Pracują z nami certyfikowani inżynierowie."
              icon={<FaScrewdriverWrench className="text-5xl text-gray-700" />}
              className="bg-white shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6"
            />
          </div>

          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-500">
            <Card
              title="Serwis"
              description="Kompleksowa opieka serwisowa – przeglądy, naprawy i konserwacja. Autoryzowany serwis producentów, takich jak Mitsubishi i Panasonic."
              icon={
                <RiCustomerService2Line className="text-5xl text-[#0099ff]" />
              }
              className="bg-white shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
