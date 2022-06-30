import "./SliderBacaCerita.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import {
  IoArrowUndoCircleSharp,
  IoArrowRedoCircleSharp,
} from "react-icons/io5";
import db from "../../Firestore";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const KancilHarimau = () => {
  const [current, setCurrent] = useState(0);
  const [cerita, setCerita] = useState([]);
  const length = cerita.length;

  useEffect(() => {
    const q = query(collection(db, "kancil_harimau"), orderBy("index"));
    onSnapshot(q, (snapshot) => {
      setCerita(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
      <Link to="/LibBuku">
        <RiCloseCircleFill color="red" className="close-cerita" />
      </Link>
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
                <div className="text-cerita">
                  <p> {slide.text}</p>
                </div>
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

export default KancilHarimau;
