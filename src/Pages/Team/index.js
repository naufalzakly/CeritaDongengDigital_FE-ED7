import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import SectionTitle from '../../components/SectionTitle';
import NavbarHome from '../../components/Navbar/index';
import Footer from '../../components/Footer/index';
import './index.css';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../Firestore';
import './index.css';

const Team = () => {
  const [cardKelompok, setCardKelompok] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'anggota_kelompok'));
    onSnapshot(q, (snapshot) => {
      setCardKelompok(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div>
      <NavbarHome />
      <Container className="team-section">
        <Row>
          <Col lg={5}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/foto_anggota_kelompok%2Fkak%20dion.jfif?alt=media&token=5bde811d-9306-4719-b039-385cd2e8b719"
              alt="Mentor"
              width="400px"
              className="curve"
            />
          </Col>
          <Col lg={7}>
            <h1>Mentor</h1>
            <h2>Dion Edo Fananie</h2>
            <br />
            <p>
              Senang bisa bantu tim FE_ED7 untuk membangun website yang mereka rencanakan, tiap
              anggota tim memiliki semangat yang cukup besar utk bisa menyelesaikan website ini.
            </p>
            <p>
              Terlebih, saya sangat senang dengan perkembangan skill dan kerja sama tim selama
              mentoring. Tim juga mampu menyelesaikan kesulitan yang dihadapi selama pengembangan
              dengan cukup baik.
            </p>
          </Col>
        </Row>
        <Row>
          <SectionTitle title="Team Member" />
          <Row className="Container_Card">
            <CardGroup>
              {cardKelompok.map((anggota, idx) => {
                return (
                  <div className="lib-buku-card mx-2 mb-5 " key={idx}>
                    <Card className="no-outline">
                      <div className="card-img d-flex">
                        <img className="d-block" src={anggota.img} width="100%" alt="" />
                      </div>
                      <Card.Body>
                        <Card.Title>{anggota.nama}</Card.Title>
                        Tugas:
                        <ol type="1">
                          <li className="text-muted">{anggota.tugas1}</li>
                          <li className="text-muted">{anggota.tugas2}</li>
                        </ol>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </CardGroup>
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Team;
