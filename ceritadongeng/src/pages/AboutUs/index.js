import NavbarHome from '../../components/Navbar';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer';
import React from 'react';
import './index.css';
import TentangText from '../../components/TentangKami/TentangText';
import Reviews from '../../components/TentangKami/Reviews';

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
