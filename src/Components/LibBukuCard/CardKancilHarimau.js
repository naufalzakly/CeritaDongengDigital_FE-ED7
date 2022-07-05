import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { addDoc, collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context';

const CardKancilHarimau = () => {
  const [cardKancilHarimau, setCardKancilHarimau] = useState([]);
  const { user } = useUserAuth();
  const Alert_login = () => {
    alert('Anda Belum Login');
  };
  const selectedNumber_2 = async () => {
    const IconCollection = collection(db, 'whislist');
    const payload = {
      IdIcons: 2,
      Judul: 'Kancil dan Harimau',
      pengarang: 'Dhanny Larito',
      img: 'https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_homepage%2Fhomepage_kancil_harimau.png?alt=media&token=398dc282-a9e6-4252-8ee0-6ac8173549ab'
    };
    await addDoc(IconCollection, payload);
    alert('Berhasil ditambahkan');
  };

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
                  <Link to="/baca-cerita/kancil-harimau">
                    <img className="d-block" src={thumb.img} width="100%" alt="" />
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body>
          <Card.Title>
            Kancil dan Harimau{' '}
            <button onClick={user ? selectedNumber_2 : Alert_login} className="btn-heart">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: Dhanny Larito</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/baca-cerita/kancil-harimau">
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardKancilHarimau;
