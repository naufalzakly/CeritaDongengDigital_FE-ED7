import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { addDoc, collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firestore';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context';

const CardBebek = () => {
  const [cardBebek, setCardBebek] = useState([]);
  const { user } = useUserAuth();
  const Alert_login = () => {
    alert('Anda Belum Login');
  };

  const selectedNumber_3 = async () => {
    const IconCollection = collection(db, 'whislist');
    const payload = { IdIcons: 3, Judul: 'Bebek Buruk Rupa', dbCollection: 'bebek_buruk_rupa' };
    await addDoc(IconCollection, payload);
    alert('Berhasil ditambahkan');
  };

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
                  <Link to="/baca-cerita/bebek_buruk_rupa">
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
            <button onClick={user ? selectedNumber_3 : Alert_login} className="btn-heart">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: Hans Christian Andersen</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/baca-cerita/bebek_buruk_rupa">
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardBebek;
