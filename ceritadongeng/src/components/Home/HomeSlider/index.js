import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './style.css';
import db from '../../../firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { COLLECTION_THUMB_LANDS } from '../../../constants';

const Home = () => {
  const [Slider, setSlider] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, COLLECTION_THUMB_LANDS), (snapshot) =>
        setSlider(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <Carousel variant="dark">
      {Slider.map((slider, id) => {
        return (
          <Carousel.Item key={id}>
            <div>
              <img className="d-block w-100" src={slider.img} alt="First slide" />
            </div>

            <Carousel.Caption className="nav-dongeng">
              <Link to="/library-buku">
                <h2>
                  BACA DONGENG
                  <Button variant="success">
                    <AiOutlineArrowRight size="2.2em" />
                  </Button>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      ;
    </Carousel>
  );
};
export default Home;
