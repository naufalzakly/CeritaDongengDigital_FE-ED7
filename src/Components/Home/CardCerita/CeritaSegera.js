import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './style.css';
import db from '../../../Firestore';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle';

const Card_cerita_Segera = ({ title }) => {
  const [Thumbnail, setThumbnail] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'thumb_homepage'), where('category', '==', 'segera'));
    onSnapshot(q, (snapshot) => {
      setThumbnail(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <Container className="cerita-thumb">
      <SectionTitle title={title} />
      <Row className="Container_Card">
        <CardGroup>
          {Thumbnail.map((thumb, idx) => {
            return (
              <Col key={idx}>
                <Card border="light">
                  <div>
                    <img src={thumb.img} width={250} alt="pict"></img>
                  </div>
                  <Card.Body>
                    <Card.Title>{thumb.judul}</Card.Title>
                    <Card.Text>Pengarang: {thumb.pengarang}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </CardGroup>
      </Row>
    </Container>
  );
};
export default Card_cerita_Segera;
