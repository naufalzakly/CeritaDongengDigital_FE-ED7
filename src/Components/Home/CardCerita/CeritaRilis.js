import React from 'react';
import { Card, CardGroup, Col, Container, Row, Button } from 'react-bootstrap';
import './style.css';
import db from '../../../Firestore';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../SectionTitle';
import { BsHeart } from 'react-icons/bs';
import { useUserAuth } from '../../../Context';

const Card_cerita_Rilis = ({ title }) => {
  const [Thumbnail, setThumbnail] = useState([]);
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
  const selectedNumber_3 = async () => {
    const IconCollection = collection(db, 'whislist');
    const payload = {
      IdIcons: 3,
      Judul: 'Bebek Buruk Rupa',
      pengarang: 'Hans Christian Andersen',
      img: 'https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_homepage%2Fhomepage_bebek_buruk_rupa.png?alt=media&token=32868af7-b01d-4663-ac88-655aae38e0fe'
    };
    await addDoc(IconCollection, payload);
    alert('Berhasil ditambahkan');
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

  useEffect(
    () =>
      onSnapshot(collection(db, 'thumb_homepage'), (snapshot) =>
        setThumbnail(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );

  return (
    <Container className="cerita-thumb">
      <SectionTitle title={title} />
      <Row className="Container_Card">
        <CardGroup>
          <Col>
            <Card border="light mx-2">
              <Link to="/baca-cerita/bebek-buruk-rupa">
                {Thumbnail.filter((thumb) => thumb.index === 3).map((thumb, id) => {
                  return (
                    <div key={id}>
                      <img src={thumb.img} width={250} alt="pict"></img>
                    </div>
                  );
                })}
              </Link>
              <Card.ImgOverlay>
                <button onClick={user ? selectedNumber_3 : Alert_login} className="right">
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Bebek Buruk Rupa</Card.Title>
                <Card.Text className="text-muted">Pengarang: Hans Christian Andersen</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="baca-cerita/bebek-buruk-rupa">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card border="light mx-2">
              <Link to="/baca-cerita/kelinci-kura">
                {Thumbnail.filter((thumb) => thumb.index === 4).map((thumb, id) => {
                  return (
                    <div key={id}>
                      <img src={thumb.img} width={250} alt="pict"></img>
                    </div>
                  );
                })}
              </Link>
              <Card.ImgOverlay>
                <button onClick={user ? selectedNumber_4 : Alert_login} className="right">
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Kelinci dan Kura Kura</Card.Title>
                <Card.Text className="text-muted">Pengarang: Aesop</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/baca-cerita/kelinci-kura">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card border="light mx-2">
              <Link to="/baca-cerita/kancil-harimau">
                {Thumbnail.filter((thumb) => thumb.index === 2).map((thumb, id) => {
                  return (
                    <div key={id}>
                      <img src={thumb.img} width={250} alt="pict"></img>
                    </div>
                  );
                })}
              </Link>
              <Card.ImgOverlay>
                <button onClick={user ? selectedNumber_2 : Alert_login} className="right">
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Kancil dan Harimau</Card.Title>
                <Card.Text className="text-muted">Pengarang: Dhanny Larito</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/baca-cerita/kancil-harimau">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card border="light mx-2">
              <Link to="/baca-cerita/kancil-buaya">
                {Thumbnail.filter((thumb) => thumb.index === 1).map((thumb, id) => {
                  return (
                    <div key={id}>
                      <img src={thumb.img} width={250} alt="pict"></img>
                    </div>
                  );
                })}
              </Link>
              <Card.ImgOverlay>
                <button onClick={user ? selectedNumber_1 : Alert_login} className="right">
                  <BsHeart size="2em" color="red" />
                </button>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Title>Kancil dan Buaya</Card.Title>
                <Card.Text className="text-muted">Pengarang: Kathy Morris John Morris</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/baca-cerita/kancil-buaya">
                  <Button variant="success">Baca</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </CardGroup>
      </Row>
    </Container>
  );
};
export default Card_cerita_Rilis;
