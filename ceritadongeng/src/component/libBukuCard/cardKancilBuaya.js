import { Carousel, Card, Button } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import "./index.css";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../Firestore";
import { Link } from "react-router-dom";

const CardKancilBuaya = () => {
  const [cardKancilBuaya, setCardKancilBuaya] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "thumb_lib_dongeng"),
      where("cerita", "==", "Kancil dan Buaya"),
      orderBy("index")
    );
    onSnapshot(q, (snapshot) => {
      setCardKancilBuaya(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div className="lib-buku-card mx-2 mb-4">
      <Card className="no-outline">
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {cardKancilBuaya.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <Link to="/BacaCerita/KancilBuaya">
                    <img
                      className="d-block"
                      src={thumb.img}
                      width="100%"
                      alt=""
                    />
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title>
            Kancil dan Buaya
            <button className="btn-heart">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">
            Pengarang: Kathy Morris, John Morris
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/BacaCerita/KancilBuaya">
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardKancilBuaya;
