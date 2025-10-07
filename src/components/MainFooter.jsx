import logo from "../assets/logo_blp.png";
const MainFooter = () => {
  return (
    <footer className="bg-[#003366] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo i opis */}
        <div>
          <img
            src={logo}
            alt="LogoBLP"
            className="w-[150px] lg:w-[220px] transition-all duration-300"
          />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            perspiciatis delectus culpa modi possimus nihil, vitae, quibusdam
            mollitia consequatur facere illum commodi. Ipsam quod perspiciatis
            unde totam, ducimus consequatur necessitatibus.
          </p>
        </div>

        {/* Linki */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Szybkie linki
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#oferta"
                className="hover:text-[#7ed957] transition-colors"
              >
                Nasza oferta
              </a>
            </li>
            <li>
              <a
                href="#realizacje"
                className="hover:text-[#7ed957] transition-colors"
              >
                Realizacje
              </a>
            </li>
            <li>
              <a
                href="#dotacje"
                className="hover:text-[#7ed957] transition-colors"
              >
                Finansowanie i dotacje
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="hover:text-[#7ed957] transition-colors"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontakt</h3>
          <p>.</p>
          <p>📞 +48 .</p>
          <p>✉️ .</p>
          <div className="flex space-x-4 mt-3">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#7ed957] transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#7ed957] transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#7ed957] transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Linia dolna */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BLP. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default MainFooter;
