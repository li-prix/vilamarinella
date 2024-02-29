import Divider from "../Concept/Divider";
import { useTranslation } from "react-i18next";
import Hero from "../Header/Hero";

const AVila = () => {
  const [t] = useTranslation("global");
  return (
    <div>
      <Hero
        img={
          "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/avila/barco.jpg"
        }
        alt={"Barco em uma praia"}
      />
      <Divider dividerHead={t("avila.title")} dividerDesc={t("avila.desc")} />
      <div className="w-full">
        <div className="grid-cols-6 lg:grid lg:grid-rows-1 lg:px-10 py-20 bg-sky-700">
          <div className="w-full row-span-2 col-span-2 relative block group bg-gray-900">
            <img
              className="lg:h-full inset-0 object-cover group-hover:opacity-50"
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/avila/horsesbeach.jpg"
              alt="Cavalos na duna"
            />
            <div className="absolute top-1/2 ml-2 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-white text-lg font-medium">
                {t("avila.horses")}
              </p>
            </div>
          </div>
          <div className="w-full row-span-2 col-span-2 relative block group bg-gray-900">
            <img
              className="lg:h-full inset-0 object-cover group-hover:opacity-50"
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/avila/dune.jpg"
              alt="Pessoas andando em duna de areia"
            />
            <div className="absolute top-1/2 ml-2 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-white text-lg font-medium">
                {t("avila.duna")}
              </p>
            </div>
          </div>

          <div className="w-full row-span-2 col-span-2 relative block group bg-gray-900">
            <img
              className="lg:h-full inset-0 object-cover group-hover:opacity-50"
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/avila/jerivila1.jpg"
              alt="Vila de Jericoacoara"
            />
            <div className="absolute top-1/2 ml-2 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-white text-lg font-medium">
                {t("avila.main")}
              </p>
            </div>
          </div>
          <div className="w-full col-span-3 relative block group bg-gray-900">
            <img
              className="lg:h-full inset-o object-cover group-hover:opacity-50"
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/avila/pedrafurada.jpg"
              alt="Formação rochosa em Jeicoacoara com buraco no meio"
            />
            <div className="absolute top-1/2 ml-2 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-white text-lg font-medium">
                {t("avila.furada")}
              </p>
            </div>
          </div>
          <div className="w-full col-span-3 relative block group bg-gray-900">
            <img
              className="lg:h-full inset-0 object-cover group-hover:opacity-50"
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/jeri.jpg"
              alt="Praia de Jericoacoara"
            />
            <div className="absolute top-1/2 ml-2 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-white text-lg font-medium">
                {t("avila.praia")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider
        dividerHead={t("avila.title2")}
        dividerDesc={t("avila.arrive")}
      />
    </div>
  );
};

export default AVila;
