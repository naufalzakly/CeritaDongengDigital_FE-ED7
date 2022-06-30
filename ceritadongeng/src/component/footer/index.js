import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <Container fluid>
        <Row>
          {/* kolom 1 */}
          <Col md={4} sm={6}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Flogo-web.png?alt=media&token=e1f0218a-7fc3-446f-adc9-ad6758fc05c5"
              alt="logo"
              className="mb-2 mx-4"
            />
            <h6 className="mb-3 mx-4">Supported By:</h6>
            <ul className="list-unstyled">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Flogo-yabb.png?alt=media&token=2cb7634f-803a-4a54-81a1-91b8975a582f"
                alt="logo-yabb"
                width="136"
                className="mx-4"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Flogo-goto.png?alt=media&token=e2605662-b87e-4b1a-829d-d2d21bb49bed"
                alt="goto"
                width="136"
              />
            </ul>
          </Col>
          {/* kolom 2 */}
          <Col md={2} sm={6}>
            <h6>Profile</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="">Legal Information</Link>
              </li>
              <li>
                <Link to="/Team">Team</Link>
              </li>
            </ul>
          </Col>
          {/* kolom 3 */}
          <Col md={2} sm={6}>
            <h6>Pusat Bantuan</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/Faq">FAQs</Link>
              </li>
            </ul>
          </Col>
          {/* kolom 4 */}
          <Col md={4} sm={6}>
            <h6>Kontak</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index">WhatsApp: +62 832-293-2932</a>
              </li>
              <li className="mb-2">
                <a href="./index">Email: care@mail.ed7.my.id</a>
              </li>
              <li className="mb-2">
                Lokasi: Graha Handaya, Unit Q-S, Jl. Raya Perjuangan No. 12A,
                Kebon Jeruk, Kota Jakarta, DKI Jakarta
              </li>
            </ul>
            <FaFacebookSquare size="2em" className="mx-2" />
            <BsTwitter size="2em" className="mx-2" />
            <BsInstagram size="2em" className="mx-2" />
            <BsLinkedin size="2em" className="mx-2" />
          </Col>
        </Row>

        {/* footer bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            <BiCopyright /> 2022 | All rights reserved
          </p>
          <p className="text-xs-center">
            Created with <TiHeartFullOutline /> by Team ED_7
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
