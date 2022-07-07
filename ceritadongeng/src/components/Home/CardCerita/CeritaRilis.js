import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import './style.css';
import SectionTitle from '../../SectionTitle';
import CardCerita from './CardCerita';
import db from '../../../firestore';
import { COLLECTION_THUMB_HOMEPAGE, RILIS, BARU } from '../../../constants';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const CardBaruRilis = () => {
  const [cardCerita, setCardCerita] = useState([]);

  useEffect(() => {
    const q = query(collection(db, COLLECTION_THUMB_HOMEPAGE), where(RILIS, '==', BARU));
    onSnapshot(q, (snapshot) => {
      setCardCerita(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <Container className="cerita-thumb">
      <SectionTitle title={'Baru Rilis'} />
      <Row className="Container_Card">
        <CardGroup>
          {cardCerita.map((item) => {
            return <CardCerita item={item} key={item.id} />;
          })}
        </CardGroup>
      </Row>
    </Container>
  );
};
export default CardBaruRilis;
