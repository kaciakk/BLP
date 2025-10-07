import React, { useEffect } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import { PiSolarPanelFill } from "react-icons/pi";
import { TbWind, TbPigMoney } from "react-icons/tb";
import { MdOutlineHeatPump } from "react-icons/md";

const OurDotationSection = () => {
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
    <div className="bg-white relative z-10">
      <div className="max-w-[80rem] px-6 py-16 sm:px-8 lg:px-10 lg:py-20 mx-auto">
        {/* Tytuł */}
        <div className="text-center max-w-3xl mx-auto fade-up opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Skorzystaj z dofinansowania – my zajmiemy się resztą
          </h1>
          <p className="mt-4 mb-2 text-gray-600 text-justify sm:text-center leading-relaxed max-w-2xl mx-auto">
            Planujesz skorzystać z dotacji na pompę ciepła, fotowoltaikę lub
            inne źródła OZE? Pomożemy Ci w całym procesie – od formalności po
            montaż i rozliczenie wsparcia. Ty zyskujesz czystą energię i niższe
            rachunki.
          </p>
        </div>

        {/* Kafelki */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          <Link
            to="/dotation"
            className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100"
          >
            <Card
              title="Pożyczka na OZE"
              icon={<TbPigMoney className="text-5xl text-[#7ed957]" />}
            />
          </Link>

          <Link
            to="/dotation"
            className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200"
          >
            <Card
              title="Moje Ciepło"
              icon={<MdOutlineHeatPump className="text-5xl text-red-500" />}
            />
          </Link>

          <Link
            to="/dotation"
            className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <Card
              title="Mój Prąd"
              icon={<PiSolarPanelFill className="text-5xl text-amber-500" />}
            />
          </Link>

          <Link
            to="/dotation"
            className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-400"
          >
            <Card
              title="Czyste Powietrze"
              icon={<TbWind className="text-5xl text-blue-600" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurDotationSection;
