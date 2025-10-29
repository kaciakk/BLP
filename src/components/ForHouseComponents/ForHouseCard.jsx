import { useState, useEffect } from "react";
import { TbAirConditioning } from "react-icons/tb";
import { PiSolarPanelFill, PiFan } from "react-icons/pi";
import { MdOutlineHeatPump } from "react-icons/md";
import ImageLeftCard from "../ImageLeftCard";
import ImageRightCard from "../ImageRightCard";
import air_condition_1 from "../../assets/air_condition_1.jpg";
import air_heat_pump_1 from "../../assets/air_heat_pump_1.jpg";
import heat_recovery_vent_1 from "../../assets/Obraz20.JPG";
import solar_panels_1 from "../../assets/Fotowoltaika1.jpg";
import { Link } from "react-router-dom";
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
        "Zapewniamy komfort cieplny przez cały rok nowoczesne systemy klimatyzacji chłodzą latem, ogrzewają zimą i dbają o czyste powietrze w domu.",
      img: air_condition_1,
      layout: "left",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Komfort i czyste powietrze w Twoim domu
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Klimatyzacja domowa to nie tylko chłodzenie w upalne dni. Nowoczesne
            urządzenia zapewniają również ogrzewanie w chłodniejszych
            miesiącach, filtrują powietrze i utrzymują jego optymalną
            wilgotność. Dzięki temu w pomieszczeniach panuje przyjazny
            mikroklimat sprzyjający odpoczynkowi, pracy i zdrowiu.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Dobieramy systemy klimatyzacji{" "}
            <strong>split, multisplit i kanałowe</strong>
            dopasowane do wielkości i charakteru pomieszczeń. Stosujemy
            energooszczędne technologie inwerterowe, które automatycznie
            dostosowują moc do aktualnych warunków, zapewniając cichą i
            ekonomiczną pracę.
          </p>
        </>
      ),
    },
    {
      id: "PompyCiepla",
      icon: <MdOutlineHeatPump className="text-orange-500" />,
      title: "Pompy ciepła",
      description:
        "Ogrzewanie przyszłości – ekologiczne, oszczędne i bezobsługowe. Pompy ciepła wykorzystują darmową energię z powietrza, gruntu lub wody, zapewniając komfort cieplny przez cały rok.",
      img: air_heat_pump_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Nieograniczony dostęp do bezpłatnej energii
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Pompy ciepła to nowoczesne i ekologiczne rozwiązanie do ogrzewania
            domów oraz przygotowania ciepłej wody użytkowej. Wykorzystują
            energię zawartą w powietrzu, gruncie lub wodzie, znacząco obniżając
            koszty eksploatacji. Nie wymagają kotłowni ani komina, są ciche,
            bezobsługowe i mogą być sterowane zdalnie – również z poziomu
            aplikacji mobilnej.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Dobieramy i instalujemy pompy <strong>powietrze–woda</strong>,
            <strong> gruntowe</strong> i <strong>monoblok</strong>, dopasowane
            do charakteru budynku i istniejącej instalacji. Nasze systemy
            gwarantują komfort cieplny, niskie zużycie energii i niezawodność na
            lata.
          </p>
        </>
      ),
    },
    {
      id: "Rekuperacja",
      icon: <PiFan className="text-cyan-600" />,
      title: "Rekuperacja",
      description:
        "Świeże powietrze przez cały rok rekuperator to płuca Twojego domu. Wentylacja z odzyskiem ciepła zapewnia komfort, zdrowie i oszczędność energii.",
      img: heat_recovery_vent_1,
      layout: "left",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Oddychaj świeżym powietrzem – odzyskaj ciepło
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Rekuperacja to nowoczesna wentylacja mechaniczna z odzyskiem ciepła,
            która zapewnia stały dopływ świeżego, filtrowanego powietrza przy
            jednoczesnym ograniczeniu strat energii. Rekuperator działa jak
            płuca domu usuwa zużyte powietrze i nawiewa świeże, odzyskując nawet
            <strong> 90% ciepła</strong> z powietrza wywiewanego.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            W przeciwieństwie do wentylacji grawitacyjnej, rekuperacja działa
            niezależnie od warunków pogodowych i przez cały rok utrzymuje
            optymalny poziom wilgotności i CO₂. To gwarancja zdrowego
            mikroklimatu, lepszego samopoczucia oraz realnych oszczędności na
            ogrzewaniu.
          </p>
        </>
      ),
    },
    {
      id: "Fotowoltaika",
      icon: <PiSolarPanelFill className="text-yellow-500" />,
      title: "Fotowoltaika",
      description:
        "Własna energia ze słońca oszczędzaj i zyskaj niezależność. Montujemy instalacje fotowoltaiczne dla domów i firm, które przekształcają promienie słoneczne w darmowy prąd.",
      img: solar_panels_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Darmowa energia prosto ze słońca
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Fotowoltaika to nowoczesny sposób na obniżenie rachunków za prąd i
            uniezależnienie się od rosnących cen energii. Systemy PV
            wykorzystują promieniowanie słoneczne do produkcji energii
            elektrycznej, którą można wykorzystać do zasilania urządzeń,
            ogrzewania domu lub ładowania pojazdów elektrycznych.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Projektujemy i montujemy instalacje dopasowane do indywidualnych
            potrzeb od mikroinstalacji dla domów jednorodzinnych po większe
            systemy dla firm. Stosujemy nowoczesne panele i falowniki o wysokiej
            sprawności, gwarantując maksymalne uzyski energii, bezpieczeństwo
            oraz niezawodne działanie przez długie lata.
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
      <div className="flex justify-center fade-up opacity-0 translate-y-10 transition-all duration-700 delay-500">
        <Link to="/contact">
          <button className="bg-[#7ed957] rounded-2xl px-6 py-3 text-white font-semibold hover:bg-[#6dc94a] transition transform active:scale-95 duration-150 shadow-md">
            Skontaktuj się z nami
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForHouseCard;
