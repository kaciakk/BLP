import { useState, useEffect } from "react";
import { TbAirConditioning, TbWind } from "react-icons/tb";
import { MdOutlineFactory } from "react-icons/md";
import { PiFan, PiThermometerLight } from "react-icons/pi";
import ImageLeftCard from "../ImageLeftCard";
import ImageRightCard from "../ImageRightCard";

import industry_vent_1 from "../../assets/heat_recovery_vent_1.jpg";
import industry_ac_1 from "../../assets/air_condition_1.jpg";
import industry_factory from "../../assets/realizacja1.jpg";

const ForIndustryCard = () => {
  const [active, setActive] = useState("WentylacjaHali");
  const [displayedCard, setDisplayedCard] = useState("WentylacjaHali");
  const [fade, setFade] = useState(true);

  const cards = [
    {
      id: "WentylacjaHali",
      icon: <TbWind className="text-sky-500" />,
      title: "Wentylacja hal przemysłowych",
      description:
        "Projektujemy i wykonujemy instalacje wentylacji nawiewno-wywiewnej hal produkcyjnych z zachowaniem parametrów powietrza i komfortu cieplnego pracowników.",
      img: industry_vent_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Utrzymanie jakości powietrza w halach
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Nasze instalacje zapewniają odpowiedni poziom czystości powietrza,
            utrzymanie właściwego ciśnienia i komfort cieplny w strefach pracy.
            Projektujemy systemy indywidualnie dla specyfiki danej produkcji.
          </p>
        </>
      ),
    },
    {
      id: "Odpylanie",
      icon: <PiThermometerLight className="text-amber-500" />,
      title: "Wentylacja miejscowa i odpylanie",
      description:
        "W procesach produkcyjnych często powstają lokalne źródła emisji pyłów, mgieł czy gazów – projektujemy systemy, które je eliminują.",
      img: industry_factory,
      layout: "left",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Bezpieczne środowisko pracy
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Oferujemy systemy odpylania i wentylacji miejscowej, które
            skutecznie eliminują pyły i opary. Chronimy pracowników oraz sprzęt
            przed skutkami długotrwałego kontaktu z zanieczyszczeniami.
          </p>
        </>
      ),
    },
    {
      id: "KlimatyzacjaPrzemyslowa",
      icon: <TbAirConditioning className="text-blue-400" />,
      title: "Klimatyzacja przemysłowa",
      description:
        "Wykonujemy montaże klimatyzacji w obiektach przemysłowych – systemy split, multisplit, kanałowe i VRF. Zapewniamy kompleksowy dobór, montaż i serwis.",
      img: industry_ac_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Komfort i kontrola temperatury
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Wdrażamy rozwiązania dopasowane do wymagań obiektów przemysłowych.
            Zapewniamy odpowiedni klimat dla ludzi i maszyn – nawet w trudnych
            warunkach produkcyjnych.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Oferujemy projekt, montaż, szkolenie z obsługi, serwis gwarancyjny i
            pogwarancyjny. Działamy na terenie Małopolski i Śląska.
          </p>
        </>
      ),
    },
  ];

  // 🔹 Fade transition logic
  useEffect(() => {
    if (active !== displayedCard) {
      setFade(false);
      const timeout = setTimeout(() => {
        setDisplayedCard(active);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [active, displayedCard]);

  return (
    <div className="max-w-[85rem] mx-auto">
      {/* 🔹 Przyciski wyboru */}
      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-16 fade-up opacity-0 translate-y-10 transition-all duration-700">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActive(card.id)}
            className={`cursor-pointer flex flex-col items-center justify-center h-full bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden p-6 transition-all duration-500 ${
              active === card.id
                ? "border-[#7ed957] bg-[#f4fbf2] shadow-md scale-105"
                : "hover:shadow-md hover:border-[#7ed957]/50"
            }`}
          >
            <div className="flex justify-center items-center text-5xl mb-4 transition-transform duration-300">
              {card.icon}
            </div>
            <h3
              className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                active === card.id ? "text-[#1d351c]" : "text-gray-700"
              }`}
            >
              {card.title}
            </h3>
          </button>
        ))}
      </div>

      {/* 🔹 Wyświetlana karta */}
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {cards
          .filter((card) => card.id === displayedCard)
          .map((card) =>
            card.layout === "right" ? (
              <ImageRightCard
                key={card.id}
                title={card.title}
                description={card.description}
                img={card.img}
              >
                {card.children}
              </ImageRightCard>
            ) : (
              <ImageLeftCard
                key={card.id}
                title={card.title}
                description={card.description}
                img={card.img}
              >
                {card.children}
              </ImageLeftCard>
            )
          )}
      </div>
    </div>
  );
};

export default ForIndustryCard;
