import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { Fragment, useState } from "react";

const Footer = () => {
  const [t] = useTranslation("global");
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="absolute w-full bg-sky-700  text-white">
        <div className="flex md:flex-row sm:flex-col justify-around py-5 px-4">
          <div className="sm:mb-4 lg:mb-0">
            <h1 className="text-2xl font-medium mb-3">
              {t("footer.location")}
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.13334776681666!2d-40.512215908695694!3d-2.796541658847949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7e987002f8636b5%3A0x14b0daff3c6bc36!2sPousada%20Vila%20Marinella!5e0!3m2!1sen!2sus!4v1705445122308!5m2!1sen!2sus"
              width=""
              height=""
              title="map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="text-xs">
              Rua da Escola, s/n, Jericoacoara-CE, Brasil
            </div>
          </div>

          <div className="sm:mb-4 lg:mb-0">
            <h1 className="text-2xl font-medium mb-3">{t("footer.contact")}</h1>
            <div>
              <div className="mb-2">
                <a
                  href="https://wa.me/5588988408923?text=Gostaria%20de%20fazer%20uma%20reserva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="1x" />

                  <span className="ms-2">+55 88 988408923</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:contato@vilamarinellajeri.com.br"
                  className="hover:underline"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-2">contato@vilamarinellajeri.com.br</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-medium mb-3">{t("footer.follow")}</h1>
            <div className="flex flex-row">
              <div className="me-3">
                <a
                  href="https://www.instagram.com/vilamarinellajeri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs ms-2">
          <button
            className="hover:underline"
            onClick={() => setShowModal(true)}
          >
            {t("footer.privacy")}
          </button>
        </div>
        <div className="text-xs ms-2">
          <a
            href="https://www.linkedin.com/in/ligia-prix-32ab5868/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Coded by Ligia Prix
          </a>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        text={t("footer.privacyPTEN")}
      ></Modal>
    </Fragment>
  );
};

export default Footer;
