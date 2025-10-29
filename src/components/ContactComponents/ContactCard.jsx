import React from "react";

const ContactCard = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 fade-up">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Formularz kontaktowy */}
        <div className="bg-white/90 border border-gray-200 shadow-md hover:shadow-lg transition rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Formularz kontaktowy
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7ed957] focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Adres e-mail"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7ed957] focus:outline-none transition"
              autoComplete="email"
            />
            <input
              type="text"
              placeholder="Numer telefonu"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7ed957] focus:outline-none transition"
            />
            <textarea
              rows="4"
              placeholder="Treść wiadomości"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7ed957] focus:outline-none transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#7ed957] hover:bg-[#6dc94a] text-white font-semibold rounded-xl py-3 transition transform active:scale-95 shadow-md"
            >
              Wyślij wiadomość
            </button>

            <p className="text-sm text-center text-gray-500">
              Odpowiemy tak szybko, jak to możliwe.
            </p>
          </form>
        </div>

        {/* Dane kontaktowe */}
        <div className="bg-white/80 border border-gray-200 shadow-sm rounded-2xl p-6 sm:p-8 space-y-8 hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            Dane kontaktowe
          </h3>

          {/* Adres */}
          <div className="flex items-start gap-4">
            <svg
              className="shrink-0 w-6 h-6 text-[#7ed957]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <div>
              <p className="font-medium text-gray-800">
                BLP BULEK BENEDYKT, LESYNG PIOTR SPÓŁKA CYWILNA
              </p>
              <address className="text-gray-600 not-italic text-sm mt-1">
                ul. Krakowska 31/209
                <br />
                32-065 Krzeszowice
                <br />
                NIP: 5130237105
                <br />
                REGON: 123062939
                <br />
                Alior Bank: 16 2490 0005 0000 4500 7694 3109
              </address>
            </div>
          </div>

          {/* Email i telefon */}
          <div className="grid sm:grid-cols-1 gap-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <svg
                className="shrink-0 w-6 h-6 text-[#7ed957]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div>
                <div>
                  <h2 className="text-gray-600 text-md mb-2">Email</h2>
                  <div>
                    <p className="text-gray-600 text-sm ">
                      Pompy ciepła, rekuperacja, fotowoltaika
                    </p>
                    <a
                      href="mailto:blp.oze@blp.com.pl"
                      className="text-gray-800 font-medium hover:text-[#7ed957] transition"
                    >
                      blp.oze@blp.com.pl
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mt-2">
                      Serwis i doradztwo techniczne
                    </p>
                    <a
                      href="mailto:biuro@blpklimatyzacja.pl"
                      className="text-gray-800 font-medium hover:text-[#7ed957] transition"
                    >
                      biuro@blpklimatyzacja.pl
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mt-2">
                      Klimatyzacja i wentylacja
                    </p>
                    <a
                      href="mailto:biuro4@blpklimatyzacja.pl"
                      className="text-gray-800 font-medium hover:text-[#7ed957] transition"
                    >
                      biuro4@blpklimatyzacja.pl
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="shrink-0 w-6 h-6 text-[#7ed957]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <div>
                  <p className="text-gray-600 text-sm mb-2">Telefon</p>
                  <a
                    href="tel:+48570304418"
                    className="block text-gray-800 font-medium hover:text-[#7ed957] transition"
                  >
                    +48 570 304 418
                  </a>
                  <a
                    href="tel:+48123073135"
                    className="block text-gray-800 font-medium hover:text-[#7ed957] transition"
                  >
                    +48 12 307 31 35
                  </a>
                  <a
                    href="tel:+48660263001"
                    className="block text-gray-800 font-medium hover:text-[#7ed957] transition"
                  >
                    +48 660 263 001
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
