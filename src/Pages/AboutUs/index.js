import { Container } from 'react-bootstrap';
import React from 'react';
import './index.css';
import TentangText from '../../components/TentangKami/TentangText';
import Reviews from '../../components/TentangKami/Reviews';

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <Container>
          <TentangText />
          <Reviews />
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
