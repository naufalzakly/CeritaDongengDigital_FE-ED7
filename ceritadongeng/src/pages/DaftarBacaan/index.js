import './index.css';
import { Container, CardGroup, Col, Row } from 'react-bootstrap';
import Footer from '../../Component/Footer';
import SectionTitle from '../../Component/SectionTitle/index';
import CardBacaaan from '../../Component/CardDaftarBacaan/daftarbacaan';
import NavbarHome from '../../Component/Navbar';
import db from '../../Firestore';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
const DaftarBacaan = () => {
  const [Whislist, setWhislist] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'whislist'), (snapshot) =>
        setWhislist(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  );
  return (
    <>
      <NavbarHome />

      <div>
        <Container>
          <SectionTitle title={'Daftar Bacaan'} />
          <CardGroup>
            <Col>
              <CardBacaaan />
            </Col>
          </CardGroup>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DaftarBacaan;
