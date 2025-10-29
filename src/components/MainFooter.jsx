import { Link } from "react-router-dom";
import logo from "../assets/logo_reverse.png";
const MainFooter = () => {
  return (
    <footer className="bg-[#003366] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo i opis */}
        <div>
          <img
            src={logo}
            alt="LogoBLP"
            className="w-[150px] lg:w-[220px] transition-all duration-300 mb-4"
          />
          <div>
            <p>ul. Krakowska 31/209</p>
            <p>32-065 Krzeszowice</p>
            <p>NIP: 5130237105</p>
            <p>REGON: 123062939</p>
            <p>Alior Bank: 16 2490 0005 0000 4500 7694 3109</p>
          </div>
        </div>

        {/* Linki */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Szybkie linki
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/realization">Realizacje</Link>
            </li>
            <li>
              <Link to="/dotation">Dotacje</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div className="felx flex-row">
          <h3 className="text-lg font-semibold text-white mb-3">Kontakt</h3>
          <p>📞 +48 570 304 418</p>
          <p>📞 +48 12 307 31 35</p>
          <p>📞 +48 660 263 001</p>
          <p>✉️ blp.oze@blp.com.pl</p>
          <p>✉️ biuro@blpklimatyzacja.pl</p>
          <p>✉️ biuro4@blpklimatyzacja.pl</p>
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
