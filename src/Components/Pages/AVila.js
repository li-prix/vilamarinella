import Divider from "../Concept/Divider";
import { useTranslation } from "react-i18next";
import Hero from "../Header/Hero";

const AVila = () => {
  const [t] = useTranslation("global");
  return (
    <div>
      <Hero
        img={
          "https://vilamarinellajeri.s3.sa-east-1.amazonaws.com/sebastien-goldberg--fN9KBLAZOg-unsplash.jpg"
        }
        alt={"praia"}
      />
      <Divider dividerHead={t("avila.soon")} />
    </div>
  );
};

export default AVila;
