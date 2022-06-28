import React from 'react';
import NavbarHome from '../../component/navbar/index';
import Footer from '../../component/footer/index';
import { Accordion, Container } from 'react-bootstrap';
import SectionTitle from '../../component/sectionTitle/index';
import './index.css';

const Faq = () => {
  return (
    <>
      <NavbarHome />
      <Container className="faq">
        <SectionTitle title="frequently asked questions (FAQ)" />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bagaimana cara saya mendaftar akun baru</Accordion.Header>
            <Accordion.Body>
              Kamu dapat membuat akun baru dengan mengunjungi halaman register
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
};

export default Faq;
