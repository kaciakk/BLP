import { useEffect } from "react";
import { PiSolarPanelFill } from "react-icons/pi";
import { TbWind, TbPigMoney } from "react-icons/tb";
import { MdOutlineHeatPump } from "react-icons/md";
import DotationCard from "../../components/DotationComponents/DotationCard";
import useScrollToTop from "../../hooks/useScrollToTop";
const DotationPage = () => {
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
      {/* Nagłówek */}
      <div className="text-center max-w-3xl mx-auto mb-14 fade-up opacity-0 translate-y-10 transition-all duration-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-5">
          Dotacje
        </h1>
        <p className="text-gray-600 leading-relaxed text-justify sm:text-center text-base sm:text-lg">
          Wspieramy naszych klientów w pozyskiwaniu dotacji na montaż
          ekologicznych źródeł energii odnawialnej. Zajmujemy się formalnościami
          — od przygotowania dokumentów po złożenie wniosku w imieniu klienta.
        </p>
      </div>

      {/* Siatka kart */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100">
          <DotationCard
            icon={<TbPigMoney />}
            tittle="Pożyczka na OZE"
            className="bg-[#7ed957]"
            href="https://www.bgk.pl/produkty/pozyczka-na-oze-dla-mieszkancow/malopolskie/"
          >
            <p>
              <strong>Pożyczka OZE dla mieszkańców – FEMP</strong> umożliwia
              finansowanie inwestycji w ekologiczne źródła energii dla
              właścicieli budynków jednorodzinnych w Małopolsce.
            </p>
            <ul className="mt-3 text-sm list-disc list-inside">
              <li>Kwota pożyczki: do 250 000 zł</li>
              <li>Oprocentowanie: 0%</li>
              <li>Okres spłaty: do 15 lat</li>
              <li>Brak prowizji</li>
            </ul>
          </DotationCard>
        </div>

        <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <DotationCard
            icon={<MdOutlineHeatPump />}
            tittle="Moje Ciepło"
            className="bg-red-500"
            href="https://mojecieplo.gov.pl/"
          >
            <p>
              Dotacja NFOŚiGW na <strong>pompy ciepła w nowych domach</strong> –
              od 7 do 21 tys. zł, w zależności od rodzaju urządzenia.
            </p>
            <p className="mt-2">
              <strong>Nabór:</strong> do 31 grudnia 2026 r.
              <br />
              <strong>Budżet programu:</strong> 600 mln zł
            </p>
          </DotationCard>
        </div>

        <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <DotationCard
            icon={<PiSolarPanelFill />}
            tittle="Mój Prąd"
            className="bg-amber-500"
            href="https://mojprad.gov.pl/"
          >
            <p>
              Program wsparcia dla prosumentów na zakup i montaż{" "}
              <strong>fotowoltaiki, magazynów energii i ciepła</strong>.
            </p>
            <p className="mt-2">
              <strong>Maksymalne dofinansowanie:</strong> do 28 000 zł
            </p>
          </DotationCard>
        </div>

        <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <DotationCard
            icon={<TbWind />}
            tittle="Czyste Powietrze"
            className="bg-blue-600"
            href="https://czystepowietrze.gov.pl/"
          >
            <p>
              Program dla właścicieli domów jednorodzinnych — wymiana źródeł
              ciepła, termomodernizacja i audyt energetyczny.
            </p>
            <p className="mt-2">
              <strong>Wsparcie:</strong> nawet do 136 200 zł w zależności od
              poziomu dochodów.
            </p>
          </DotationCard>
        </div>
      </div>
    </div>
  );
};

export default DotationPage;
