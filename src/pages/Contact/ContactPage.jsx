import { useEffect } from "react";
import ContactCard from "../../components/ContactComponents/ContactCard";
import useScrollToTop from "../../hooks/useScrollToTop";

const ContactPage = () => {
  useScrollToTop();

  // Efekt fade-up przy scrollowaniu
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
          Zapytaj nas o ofertę
        </h1>
        <p className="text-gray-600 leading-relaxed text-justify sm:text-center text-base sm:text-lg">
          Chętnie porozmawiamy o tym, jak możemy Ci pomóc w doborze
          najkorzystniejszego rozwiązania dla Twojego domu lub firmy.
        </p>
      </div>

      {/* Karta kontaktowa */}
      <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100">
        <ContactCard />
      </div>

      {/* Mapa Google */}
      <div className="max-w-5xl mx-auto mt-12 fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300">
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.5092715632536!2d19.637251277109964!3d50.132904071533154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716f0d65518d4cb%3A0xcb48085e7c71f3ad!2sBLP%20s.c%20Pompy%20ciep%C5%82a%2C%20Klimatyzacja%2C%20wentylacja%2C%20fotowoltaika!5e0!3m2!1spl!2spl!4v1748964247317!5m2!1spl!2spl"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa lokalizacji BLP"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
