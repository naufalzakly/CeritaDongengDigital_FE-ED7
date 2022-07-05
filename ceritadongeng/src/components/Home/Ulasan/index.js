import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import SectionTitle from '../../SectionTitle';
import { Link } from 'react-router-dom';
import './index.css';

const Ulasan = () => {
  return (
    <div className="ulasan">
      <Container>
        <SectionTitle title="Ulasan" />
        <Row>
          <Col>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/feedback.png?alt=media&token=eeff9fe3-22c4-4301-b470-5e810a45666f"
              alt="ulasan"
            />
            <Link to="/form-ulasan">
              <Button variant="success">Masukan Ulasan Anda</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ulasan;
