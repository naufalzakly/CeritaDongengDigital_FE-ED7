import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';

const CardKelinciKura = () => {
  const [cardKelinciKura, setCardKelinciKura] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'thumb_lib_dongeng'),
      where('cerita', '==', 'Kelinci dan Kura-Kura'),
      orderBy('index')
    );
    onSnapshot(q, (snapshot) => {
      setCardKelinciKura(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="lib-buku-card mx-2">
      <Card className="no-outline">
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {cardKelinciKura.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <Link to="/BacaCerita/KelinciKura">
                    <img className="d-block" src={thumb.img} width="100%" alt="" />
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title>
            Kelinci dan Kura Kura
            <button className="btn-heart-kura">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: Aesop</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/BacaCerita/KelinciKura">
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardKelinciKura;
