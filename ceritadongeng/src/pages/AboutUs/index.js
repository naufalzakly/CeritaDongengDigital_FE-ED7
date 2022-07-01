import NavbarHome from '../../Component/Navbar/index';
import { Container } from 'react-bootstrap';
import Footer from '../../Component/Footer/index';
import React from 'react';
import './index.css';
import TentangText from '../../Component/TentangKami/TentangText';
import Reviews from '../../Component/TentangKami/Reviews';

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
