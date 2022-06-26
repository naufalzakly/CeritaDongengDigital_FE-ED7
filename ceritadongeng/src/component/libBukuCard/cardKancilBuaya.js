import { Carousel, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./index.css";
import {collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import {useEffect,useState} from "react";
import db from '../../Firebase';
// import {Link} from "react-router-dom";

const CardKancilBuaya = () => {
    const [cardKancilBuaya, setCardKancilBuaya] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "thumb_lib_dongeng"), where("cerita", "==", "Kancil dan Buaya"), orderBy("index"));
        onSnapshot(q, (snapshot) => {
          setCardKancilBuaya(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      }, []);


  return (
    <div className="lib-buku-card mx-2">
      <Card>
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {cardKancilBuaya.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block"
                    src={thumb.img}
                    width="100%"
                    alt=""
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body className="d-flex">
          <Card.Title>
            Kancil dan Buaya
            <Button>
              <FaHeart size="1.5em" />
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardKancilBuaya;
