import "./SliderBacaCerita.css";
import { useEffect, useState } from "react";
// import dataSlider from "../dataSlider";
import {
  IoArrowUndoCircleSharp,
  IoArrowRedoCircleSharp,
} from "react-icons/io5";
import db from "../../Firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const BebekBurukRupa = () => {
  const [current, setCurrent] = useState(0);
  const [cerita, setCerita] = useState([]);
  const length = cerita.length;

  useEffect(() => {
    const q = query(collection(db, "bebek_buruk_rupa"), orderBy("index"));
    onSnapshot(q, (snapshot) => {
      setCerita(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

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
      {cerita.map((slide, index) => {
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
                <img src={slide.img} alt=" " className="image-baca-cerita" />
                <p className="text-cerita"> {slide.text}</p>
                <div className="btn-audio">
                  <audio controls>
                    <source src={slide.suara} type="audio/mpeg" />
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

export default BebekBurukRupa;
