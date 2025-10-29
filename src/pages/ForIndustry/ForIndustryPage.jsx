import { useEffect } from "react";
import ForIndustryCard from "../../components/ForIndustryComponents/ForIndustryCard";
import useScrollToTop from "../../hooks/useScrollToTop";
const ForHousePage = () => {
  useScrollToTop();
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
    <div className="bg-gradient-to-b from-white via-[#f5faf7] to-[#eaf5ef] min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 🔹 Nagłówek (styl identyczny jak w DotationPage) */}
      <div className="text-center max-w-3xl mx-auto mb-14 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-5">
          Oferta dla przemysłu
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Zanieczyszczenia powietrza w przemyśle wpływają na zdrowie ludzi, stan
          maszyn i bezpieczeństwo pracy. Oferujemy instalacje wentylacyjne,
          które eliminują zagrożenia i utrzymują stabilne warunki w obiektach
          przemysłowych.
        </p>
      </div>

      {/* 🔹 Karty ofertowe */}
      <ForIndustryCard />
    </div>
  );
};

export default ForHousePage;
