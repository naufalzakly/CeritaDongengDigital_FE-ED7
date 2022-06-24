import "../SliderBacaCerita.css";
import { useState } from "react";
import dataSlider from "../dataSlider";
import {
  IoArrowUndoCircleSharp,
  IoArrowRedoCircleSharp,
} from "react-icons/io5";
// import {GiSpeaker} from "react-icons/gi";

const KelinciKura = () => {
  const [current, setCurrent] = useState(0);
  const length = dataSlider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider-baca-cerita">
      <IoArrowUndoCircleSharp
        className="left-arrow-baca-cerita"
        onClick={prevSlide}
      />
      <IoArrowRedoCircleSharp
        className="right-arrow-baca-cerita"
        onClick={nextSlide}
      />
      {dataSlider.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "slide-baca-cerita active"
                : "slide-baca-cerita"
            }
            key={index}
          >
            {index === current && (
              <div>
                <img src={slide.image} alt=" " className="image-baca-cerita" />
                <p className="text-cerita"> haiiiiiiiiiii</p>
                <div className="btn-audio">
                  <audio controls>
                    <source
                      src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/kancil_buaya_suara%2Fkancil_buaya_11.mp4?alt=media&token=6eb222b4-15ac-4077-aaf1-68bce6da9f98"
                      type="audio/mpeg"
                    />
                  </audio>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default KelinciKura;
