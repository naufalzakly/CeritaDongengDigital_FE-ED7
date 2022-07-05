import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { addDoc, collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context';

const CardKancilBuaya = () => {
  const [cardKancilBuaya, setCardKancilBuaya] = useState([]);
  const { user } = useUserAuth();
  const Alert_login = () => {
    alert('Anda Belum Login');
  };
  const selectedNumber_1 = async () => {
    const IconCollection = collection(db, 'whislist');
    const payload = {
      IdIcons: 1,
      Judul: 'Kancil dan Buaya',
      pengarang: 'Kathy Morris, John Morris',
      img: 'https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_homepage%2Fhomepage_kancil_buaya.png?alt=media&token=4f98435f-38a7-4ec8-9595-1b77124f00ae'
    };
    await addDoc(IconCollection, payload);
    alert('Berhasil ditambahkan');
  };
  useEffect(() => {
    const q = query(
      collection(db, 'thumb_lib_dongeng'),
      where('cerita', '==', 'Kancil dan Buaya'),
      orderBy('index')
    );
    onSnapshot(q, (snapshot) => {
      setCardKancilBuaya(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
                  <Link to="/baca-cerita/kancil-buaya">
                    <img className="d-block" src={thumb.img} width="100%" alt="" />
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title>
            Kancil dan Buaya
            <button onClick={user ? selectedNumber_1 : Alert_login} className="btn-heart">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: Kathy Morris, John Morris</Card.Text>
        </Card.Body>
        <Card.Footer variant="danger">
          <Link to="/baca-cerita/kancil-buaya">
            <Button variant="primary">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardKancilBuaya;
