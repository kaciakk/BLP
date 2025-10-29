import { useState, useEffect } from "react";
import { TbAirConditioning, TbWind } from "react-icons/tb";
import { MdOutlineFactory } from "react-icons/md";
import { PiFan, PiThermometerLight } from "react-icons/pi";
import ImageLeftCard from "../ImageLeftCard";
import ImageRightCard from "../ImageRightCard";
import { Link } from "react-router-dom";
import industry_vent_1 from "../../assets/Wentylacja1.jpg";
import industry_ac_1 from "../../assets/Klimatyzacja3.jpg";
import industry_factory from "../../assets/Wentylacja2.jpg";

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
        "Projektujemy i wykonujemy systemy wentylacji nawiewno-wywiewnej dla hal produkcyjnych i obiektów przemysłowych.",
      img: industry_vent_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Skuteczna wentylacja i komfort
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Zapewniamy utrzymanie odpowiednich parametrów powietrza od czystości
            i ilości wymian, po komfort cieplny pracowników. Nasze rozwiązania
            wspierają prawidłowy przebieg procesów technologicznych oraz
            poprawiają bezpieczeństwo i efektywność pracy.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Dzięki precyzyjnemu sterowaniu i odpowiednio dobranym urządzeniom
            utrzymujemy stabilne warunki środowiskowe wymagane przy procesach
            technologicznych, poprawiając jakość i bezpieczeństwo pracy.
          </p>
        </>
      ),
    },
    {
      id: "Odpylanie",
      icon: <PiThermometerLight className="text-amber-500" />,
      title: "Wentylacja miejscowa i odpylanie",
      description:
        "Projektujemy systemy, które eliminują pyły, mgły i gazy bezpośrednio u źródła ich powstawania.",
      img: industry_factory,
      layout: "left",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Bezpieczne i czyste powietrze
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Oferujemy nowoczesne instalacje odpylania i wentylacji miejscowej,
            które wychwytują pyły, dymy i opary bezpośrednio w miejscu ich
            powstawania. Chronimy zdrowie pracowników, zwiększamy bezpieczeństwo
            procesów i ograniczamy ryzyko wybuchu.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Projektujemy i montujemy systemy odciągów stanowiskowych, filtracji
            i odpylania dostosowane do rodzaju zanieczyszczeń i specyfiki
            zakładu. Nasze rozwiązania spełniają wymagania norm BHP i ATEX,
            zapewniając niezawodną i energooszczędną pracę.
          </p>
        </>
      ),
    },
    {
      id: "KlimatyzacjaPrzemyslowa",
      icon: <TbAirConditioning className="text-blue-400" />,
      title: "Klimatyzacja przemysłowa",
      description:
        "Wykonujemy montaże systemów klimatyzacji split, multisplit, kanałowych i VRF dla obiektów przemysłowych.",
      img: industry_ac_1,
      layout: "right",
      children: (
        <>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d351c] mb-4">
            Komfort i niezawodność
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Projektujemy i instalujemy systemy klimatyzacji przeznaczone do
            obiektów przemysłowych, biur technicznych oraz pomieszczeń
            produkcyjnych. Dobieramy rozwiązania zapewniające stabilne parametry
            temperatury i wilgotności, nawet w trudnych warunkach
            środowiskowych.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Montujemy systemy <strong>split, multisplit, kanałowe i VRF</strong>
            , dostosowane do wielkości i charakteru obiektu. Każda realizacja
            obejmuje kompletny proces od projektu i doboru urządzeń, poprzez
            montaż zgodny z zasadami BHP, po szkolenie personelu z obsługi
            systemu.
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

export default ForIndustryCard;
