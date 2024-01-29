import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      onClick={handleNav}
      className={
        "w-full flex sm:min-h-[90px] md:min-h-[110px] items-center justify-around absolute text-cyan-800 bg-white/[0.75] font-medium"
      }
    >
      <div className="text-center sm:-ml-3 lg:ml-0">
        <Link to="/" className="font-calligra text-4xl font-semibold">
          Vila Marinella
        </Link>

        <div className="text-xs">Jericoacoara - Ceará - Brasil</div>
      </div>
      <div>
        <div>
          <ul className="hidden md:flex px-4 text-center">
            <li className="lg:px-10 md:px-3">
              <NavLink to="/Apousada" className="hover:underline">
                {t("nav.house")}
              </NavLink>
            </li>
            <li className="lg:px-10 md:px-3">
              <NavLink to="/Acomodacoes" className="hover:underline">
                {t("nav.accommodation")}
              </NavLink>
            </li>
            <li className="lg:px-10 md:px-3">
              <NavLink to="/Avila" className="hover:underline">
                {t("nav.village")}
              </NavLink>
            </li>
            <li className="lg:px-10 md:px-3">
              <Link
                to={"https://www.booking.com/hotel/br/villa-marinella"}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.reservation")}
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleChangeLanguage("en")}
                className="px-6 hover:underline"
              >
                EN
              </button>
            </li>
            <li>
              <button
                onClick={() => handleChangeLanguage("pt")}
                className="hover:underline"
              >
                PT
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="md:hidden z-10">
        <FontAwesomeIcon
          icon={faBars}
          size=""
          className="mr-4 cursor-pointer"
        />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-white left-0 top-0 h-screen w-3/4 bg-cyan-800/90 px-6 py-8 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-lg py-6">
            <NavLink to="/apousada">{t("nav1.house")}</NavLink>
          </li>
          <li className="text-lg py-6">
            <NavLink to="/acomodacoes">{t("nav2.accommodation")}</NavLink>
          </li>
          <li className="text-lg py-6">
            <NavLink to="/avila">{t("nav3.village")}</NavLink>
          </li>
          <li className="text-lg py-6">
            <NavLink to="/reservas">{t("nav4.reservation")}</NavLink>
          </li>
          <li>
            <button onClick={() => handleChangeLanguage("en")} className="px-6">
              EN
            </button>
          </li>
          <li>
            <button onClick={() => handleChangeLanguage("pt")} className="">
              PT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
