import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';

const CardKancilHarimau = () => {
  const [cardKancilHarimau, setCardKancilHarimau] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'thumb_lib_dongeng'),
      where('cerita', '==', 'Kancil dan Harimau'),
      orderBy('index')
    );
    onSnapshot(q, (snapshot) => {
      setCardKancilHarimau(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="lib-buku-card mx-2 mb-4">
      <Card className="no-outline">
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {cardKancilHarimau.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img className="d-block" src={thumb.img} width="100%" alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title>
            Kancil dan Harimau{' '}
            <button className="btn-heart">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: Dhanny Larito</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/BacaCerita/KancilHarimau">
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardKancilHarimau;
