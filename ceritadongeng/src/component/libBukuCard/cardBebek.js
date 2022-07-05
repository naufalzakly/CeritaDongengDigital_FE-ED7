import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';

const CardBebek = () => {
  const [cardBebek, setCardBebek] = useState([]);
  // kalo file ini dan card lainnya sudah ngga dipake lagi, di delete saja
  useEffect(() => {
    const q = query(
      collection(db, 'thumb_lib_dongeng'),
      where('cerita', '==', 'Bebek Buruk Rupa'),
      orderBy('index')
    );
    onSnapshot(q, (snapshot) => {
      setCardBebek(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="lib-buku-card mx-2 mb-4">
      <Card className="no-outline">
        <div className="card-img d-flex">
          <Carousel className="carousel-size" data-interval="false">
            {cardBebek.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <Link to="/BacaCerita/BebekBurukRupa">
                    <img className="d-block" src={thumb.img} width="100%" alt="" />
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title>
            Bebek Buruk Rupa
            <button className="btn-heart">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: Hans Christian Andersen</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/BacaCerita/BebekBurukRupa">
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};
// ganti semua file name component yg berbentuk camelcase jadi PascalCase: referensi https://techterms.com/definition/pascalcase
export default CardBebek;
