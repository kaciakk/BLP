import { useState, useEffect } from "react";
import { TbAirConditioning } from "react-icons/tb";
import { PiSolarPanelFill, PiFan } from "react-icons/pi";
import { MdOutlineHeatPump } from "react-icons/md";
import ImageLeftCard from "../ImageLeftCard";
import ImageRightCard from "../ImageRightCard";
import air_condition_1 from "../../assets/air_condition_1.jpg";
import air_heat_pump_1 from "../../assets/air_heat_pump_1.jpg";
import heat_recovery_vent_1 from "../../assets/heat_recovery_vent_1.jpg";
import solar_panels_1 from "../../assets/realizacja1.jpg";

const ForHouseCard = () => {
  const [active, setActive] = useState("Klimatyzacja");
  const [displayedCard, setDisplayedCard] = useState("Klimatyzacja");
  const [fade, setFade] = useState(true);

  const cards = [
    {
      id: "Klimatyzacja",
      icon: <TbAirConditioning className="text-sky-500" />,
      title: "Klimatyzacja",
      description:
        "Klimatyzacja to gwarancja komfortu przez cały rok – nie tylko latem, ale i zimą. Nowoczesne systemy nie tylko chłodzą, ale również ogrzewają i filtrują powietrze.",
      img: air_condition_1,
      layout: "left",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Komfort przez cały rok
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Dzięki technologii inwerterowej klimatyzatory działają cicho,
            energooszczędnie i niezawodnie. Zapewniają zdrowy klimat w Twoim
            domu przez cały rok.
          </p>
        </>
      ),
    },
    {
      id: "PompyCiepla",
      icon: <MdOutlineHeatPump className="text-orange-500" />,
      title: "Pompy ciepła",
      description:
        "Pompy ciepła to ekologiczne rozwiązanie grzewcze, które pozwala obniżyć rachunki za ogrzewanie i dbać o środowisko.",
      img: air_heat_pump_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Ciepło z natury
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Pompy ciepła wykorzystują energię z powietrza, gruntu lub wody.
            Dzięki temu są przyjazne dla środowiska i bardzo ekonomiczne.
          </p>
        </>
      ),
    },
    {
      id: "Rekuperacja",
      icon: <PiFan className="text-cyan-600" />,
      title: "Rekuperacja",
      description:
        "Rekuperacja to system wentylacji z odzyskiem ciepła. Gwarantuje świeże powietrze bez strat energii cieplnej.",
      img: heat_recovery_vent_1,
      layout: "left",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Oddychaj czystym powietrzem
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            System rekuperacji usuwa zanieczyszczenia i wilgoć, jednocześnie
            odzyskując nawet 90% energii cieplnej. Idealne rozwiązanie dla
            zdrowego domu.
          </p>
        </>
      ),
    },
    {
      id: "Fotowoltaika",
      icon: <PiSolarPanelFill className="text-yellow-500" />,
      title: "Fotowoltaika",
      description:
        "Fotowoltaika to darmowa energia ze słońca – oszczędność i niezależność energetyczna dla Twojego domu.",
      img: solar_panels_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Darmowy prąd z natury
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Instalacja fotowoltaiczna pozwala obniżyć rachunki i chronić
            środowisko. W połączeniu z pompą ciepła tworzy nowoczesny,
            ekologiczny system.
          </p>
        </>
      ),
    },
  ];

  // 🔹 Łagodne przejście: najpierw znika, potem pojawia się nowa karta
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
      {/* 🔹 Przyciski */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-up opacity-0 translate-y-10 transition-all duration-700">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActive(card.id)}
            className={`cursor-pointer flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl overflow-hidden p-6 shadow-sm transition-all duration-500 ${
              active === card.id
                ? "border-[#7ed957] bg-[#f4fbf2] shadow-md scale-105"
                : "hover:shadow-md hover:bg-[#f9fdf7]"
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

      {/* 🔹 Karta (fade-out / fade-in) */}
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

export default ForHouseCard;
