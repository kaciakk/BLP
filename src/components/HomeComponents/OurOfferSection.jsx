import React, { useEffect } from "react";
import { TbTools, TbBuildingFactory, TbHome } from "react-icons/tb";
import Card from "../Card";
import { Link } from "react-router-dom";

const OurOfferSection = () => {
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
    <div className="bg-gradient-to-b from-[#E6F5EE] via-[#F1F7F9] to-[#F8FAFB]">
      <div className="max-w-[80rem] px-6 py-16 sm:px-8 lg:px-10 lg:py-20 mx-auto">
        {/* Tytuł */}
        <div className="text-center max-w-3xl mx-auto fade-up opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Nasza oferta
          </h1>
          <p className="mt-4 mb-2 text-gray-600 text-justify sm:text-center leading-relaxed max-w-2xl mx-auto">
            Sprawdź, co możemy dla Ciebie zrobić – niezależnie, czy potrzebujesz
            instalacji w domu, w firmie, czy profesjonalnego wsparcia
            technicznego. Nasze rozwiązania dopasowujemy indywidualnie do
            potrzeb każdego klienta.
          </p>
        </div>

        {/* Kafelki */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-12">
          <Link
            to="/for-house"
            className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100"
          >
            <Card
              title="Dla domu"
              description="Kompleksowe instalacje dla domów i mieszkań: klimatyzacja, pompy ciepła, wentylacja z odzyskiem ciepła oraz fotowoltaika."
              icon={<TbHome className="text-5xl text-[#7ed957]" />}
            />
          </Link>

          <Link
            to="/for-industry"
            className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200"
          >
            <Card
              title="Dla przemysłu"
              description="Zaawansowane systemy VRF, wentylacja przemysłowa, instalacje chłodnicze i energetyczne dla firm i zakładów."
              icon={<TbBuildingFactory className="text-5xl text-blue-600" />}
            />
          </Link>

          <Link
            to="/dotation"
            className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <Card
              title="Serwis i dotacje"
              description="Pomoc w uzyskaniu dotacji, regularna konserwacja, przeglądy i naprawy urządzeń – zawsze z gwarancją jakości."
              icon={<TbTools className="text-5xl text-gray-700" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurOfferSection;
