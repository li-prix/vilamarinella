import { useTranslation } from "react-i18next";
import Divider from "../Concept/Divider";
import Hero from "../Header/Hero";

const APousada = () => {
  const [t] = useTranslation("global");

  return (
    <div>
      <Hero
        img={"https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/sala.jpg"}
        alt={"sala"}
      />
      <div>
        <Divider
          dividerHead={t("pousada.title")}
          dividerDesc={t("pousada.desc")}
        />
      </div>
      <div className="w-full">
        <div className="grid-cols-3 md:px-20 md:py-28 bg-cyan-800 lg:space-y-0 lg:grid lg:grid-rows-1">
          <div className="w-full">
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/fachada.jpg"
              alt="fachada"
            />
          </div>
          <div className="w-full col-span-2 row-span-2">
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/jardim.jpg"
              alt="jardim"
            />
          </div>
          <div className="w-full">
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/terraco.jpg"
              alt="terraco"
            />
          </div>
          <div className="w-full">
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/salatv.jpg"
              alt="salatv"
            />
          </div>
          <div className="w-full">
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/suite.jpg"
              alt="suite"
            />
          </div>
          <div className="w-full">
            <img
              src="https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/apousada/sala.jpg"
              alt="sala"
            />
          </div>
        </div>
      </div>
      <div className="flex md:p-12 sm:p-5 justify-center w-full h-full">
        <video
          className="w-full h-dvh"
          src="/video.mp4#t=0.001"
          controls
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
};

export default APousada;
