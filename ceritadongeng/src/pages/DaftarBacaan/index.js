import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../components/SectionTitle';
import CardBacaaan from '../../components/CardDaftarBacaan';

const DaftarBacaan = () => {
  return (
    <>
      <div className="daftar-bacaan">
        <Container>
          <SectionTitle title={'Daftar Bacaan'} />
          <CardBacaaan />
        </Container>
      </div>
    </>
  );
};

export default DaftarBacaan;
