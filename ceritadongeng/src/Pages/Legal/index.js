import React from 'react';
import NavbarHome from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import './index.css';

const Legal = () => {
  return (
    <>
      <NavbarHome />
      <div className="legal-information">
        <SectionTitle title="Legal Information" />
        <Container>
          <Row>
            <Col>
              <b>Landasan Hukum :</b>
              <ol type="1">
                <li>UU Hak Cipta No.28 Tahun 2014</li>
                <li>PP No.56 Tahun 2021 Tentang Pengelolaan Loyalti Hak Cipta Lagu / Musik</li>
              </ol>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Informasi Konten : </b>

              <ol type="1">
                <li>
                  Sumber informasi terkait konten tercantum sebagai landasan / dasar hukum dalam
                  sebuah klaim ataupun pengakuan suatu produk dalam lindungan Undang - Undang.
                </li>
                <li>
                  Himpunan data yang digunakan dan sumber data serta berbagai macam jenis data yang
                  terdapat dalam situs ini merupakan bahan atau konten yang dilindungi oleh undang -
                  undang secara hukum.
                </li>
              </ol>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Credits :</b>
              </p>
              <b>Team Oepak</b>
              <ul>
                <li>Suara</li>
                <li>Design</li>
                <li>Element gambar</li>
                <li>Jenis / Tata Letak</li>
                <li>Gambaran Utuh</li>
              </ul>
              <b>
                <a href="https://www.freepik.com/" target="_blank" rel="noreferrer">
                  Freepik
                </a>
              </b>
              <ul>
                <li>Component</li>
                <li>Element</li>
                <li>Icon</li>
                <li>Vektor</li>
                <li>Ilustration</li>
              </ul>
              <b>Design</b>
              <p>Canva Design</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Legal;
