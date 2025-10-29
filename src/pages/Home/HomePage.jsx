import { useState, useEffect } from "react";
import heroImg1 from "../../assets/hero_blp.png";
import heroImg2 from "../../assets/heat_recovery_vent_1.jpg";
import OurServicesSection from "../../components/HomeComponents/OurServicesSection";
import OurDotationSection from "../../components/HomeComponents/OurDotationSection";
import OurOfferSection from "../../components/HomeComponents/OurOfferSection";
import OurRealizationSection from "../../components/HomeComponents/OurRealizationSection";
import OurCommentsSection from "../../components/HomeComponents/OurCommentsSection";
import OurExperience from "../../components/HomeComponents/OurExperience";
import useScrollToTop from "../../hooks/useScrollToTop";
const images = [heroImg1, heroImg2];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useScrollToTop();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 15000); // szybsza zmiana dla lepszego rytmu
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero section */}
      <div className="relative h-screen w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[8000ms] ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        {/* Overlay z gradientem */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/15 via-black/22 to-black/32 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-5xl">
            Komfort i Technologia
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 max-w-4xl drop-shadow">
            Dla domu i przemysłu – nowoczesne rozwiązania energetyczne
          </h2>

          <div className="mt-10">
            <a
              href="#offer"
              className="bg-[#7ed957] hover:bg-[#6bc34c] text-white font-semibold px-8 py-3 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              Poznaj naszą ofertę
            </a>
          </div>
        </div>

        {/* Subtelny dolny gradient do przejścia w kolejną sekcję */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#ECF8F1] to-transparent" />
      </div>

      <OurServicesSection />

      <OurExperience />
      <OurDotationSection />
      <section id="offer">
        <OurOfferSection />
      </section>
      <OurRealizationSection />

      <OurCommentsSection />
    </div>
  );
};

export default HomePage;
