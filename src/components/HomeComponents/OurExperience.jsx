import React, { useEffect } from "react";
import { FaBolt, FaUserCog, FaHandHoldingUsd } from "react-icons/fa";

const OurExperience = () => {
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
    <div className="bg-gradient-to-b from-[#00264d] to-[#003366] text-white">
      <section className="py-20 px-6 text-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-12 text-[#7ed957] fade-up opacity-0 translate-y-10 transition-all duration-700">
          Dlaczego my?
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* --- 1 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100 flex flex-col items-center p-8 bg-white/5 rounded-2xl shadow-md border border-white/10 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <FaBolt className="text-5xl text-[#7ed957] mb-4 transition-transform duration-500 group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Szybka realizacja
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Realizujemy projekty terminowo i dynamicznie, dbając o każdy etap
              montażu. Nasz zespół działa sprawnie, nie tracąc na jakości.
            </p>
          </div>

          {/* --- 2 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200 flex flex-col items-center p-8 bg-white/5 rounded-2xl shadow-md border border-white/10 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <FaUserCog className="text-5xl text-[#7ed957] mb-4 transition-transform duration-500 group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Doświadczenie
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Od lat tworzymy i serwisujemy instalacje HVAC oraz fotowoltaiczne.
              Posiadamy wiedzę, certyfikaty i setki zadowolonych klientów.
            </p>
          </div>

          {/* --- 3 --- */}
          <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300 flex flex-col items-center p-8 bg-white/5 rounded-2xl shadow-md border border-white/10 cursor-pointer transform hover:scale-[1.03] hover:bg-[#7ed957]/10 hover:shadow-[#7ed957]/40 transition-all duration-500 ease-out">
            <FaHandHoldingUsd className="text-5xl text-[#7ed957] mb-4 transition-transform duration-500 group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Pomoc w dotacjach
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Pomagamy w formalnościach i uzyskaniu dotacji, aby Twoja
              inwestycja była jeszcze bardziej opłacalna i ekologiczna.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurExperience;
