import NavbarHome from '../../component/navbar/index';
import { Container } from 'react-bootstrap';
import Footer from '../../component/footer/index';
import React from 'react';
import './index.css';
import TentangText from '../../component/TentangKami/TentangText';
import Reviews from '../../component/TentangKami/Reviews';

const AboutUs = () => {
  return (
    <>
      <NavbarHome />
      <div className="about-us">
        <Container>
          <TentangText />
          <Reviews />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
