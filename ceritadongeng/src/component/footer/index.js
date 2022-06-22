import React from "react";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiHeartFullOutline,
} from "react-icons/ti";
import { BiCopyright } from "react-icons/bi";
import {Container, Row, Col} from "react-bootstrap";
import "./index.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <Container fluid>
        <Row>
          {/* kolom 1 */}
          <Col md={3} sm={6}>
            <h6>Logo</h6>
            <ul className="list-unstyled">
              <img src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Flogo-yabb.png?alt=media&token=2cb7634f-803a-4a54-81a1-91b8975a582f" alt="logo-yabb" width="136" />
              <img src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/logo-yabb-gojek%2Flogo-goto.png?alt=media&token=e2605662-b87e-4b1a-829d-d2d21bb49bed" alt="goto" width="136" />
            </ul>
          </Col>
          {/* kolom 2 */}
          <Col md={3} sm={6}>
            <h6>Profile</h6>
            <ul className="list-unstyled">
              <li><a href="./index">About Us</a></li>
              <li><a href="./index">Legal Information</a></li>
              <li><a href="./index">Contact Us</a></li>
              <li><a href="./index">Team</a></li>
            </ul>
          </Col>
          {/* kolom 3 */}
          <Col md={3} sm={6}>
            <h6>Pusat Bantuan</h6>
            <ul className="list-unstyled">
              <li><a href="./index">Komunitas</a></li>
              <li><a href="./index">Referensi</a></li>
              <li><a href="./index">FAQs</a></li>
              <li><a href="./index">informasi Cerita</a></li>
            </ul>
          </Col>
          {/* kolom 4 */}
          <Col md={3} sm={6}>
            <h6>Kontak</h6>
            <ul className="list-unstyled">
              <li><a href="./index">WhatsApp</a></li>
              <li><a href="./index">Email:</a></li>
              <li><a href="./index">Lokasi:</a></li>
            </ul>
            <TiSocialFacebook size="2em" />
            <TiSocialInstagram size="2em" />
            <TiSocialTwitter size="2em" />
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
