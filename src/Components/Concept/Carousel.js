import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-80`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => {
          return <img src={s} alt={s} key={index} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between item-center flex text-white">
        <button onClick={previousSlide}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
