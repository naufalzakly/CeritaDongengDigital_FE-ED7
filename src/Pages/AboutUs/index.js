import NavbarHome from '../../Components/Navbar';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import React from 'react';
import './index.css';
import TentangText from '../../Components/TentangKami/TentangText';
import Reviews from '../../Components/TentangKami/Reviews';

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
