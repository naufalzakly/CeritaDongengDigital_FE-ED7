import { Carousel, Card, Button } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import './index.css';
import { addDoc, collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../Context';

const CardKelinciKura = () => {
  const [cardKelinciKura, setCardKelinciKura] = useState([]);
  const { user } = useUserAuth();
  const Alert_login = () => {
    alert('Anda Belum Login');
  };
  const selectedNumber_4 = async () => {
    const IconCollection = collection(db, 'whislist');
    const payload = {
      IdIcons: 4,
      Judul: 'Kelinci dan Kura Kura',
      pengarang: ' Aesop',
      img: 'https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_homepage%2Fhomepage_kelinci_kura.png?alt=media&token=7feb26dc-3f0b-45ae-b17b-c3b55e51c0c3'
    };
    await addDoc(IconCollection, payload);
    alert('Berhasil ditambahkan');
  };
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
                  <Link to="/baca-cerita/kelinci-kura">
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
            <button onClick={user ? selectedNumber_4 : Alert_login} className="btn-heart-kura">
              <BsHeart size="1.5em" color="red" />
            </button>
          </Card.Title>
          <Card.Text className="text-muted">Pengarang: Aesop</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/baca-cerita/kelinci-kura">
            <Button variant="success">Baca</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardKelinciKura;
