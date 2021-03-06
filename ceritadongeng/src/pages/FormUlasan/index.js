import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { BsFillXCircleFill } from 'react-icons/bs';
import db from '../../firestore';
import { collection, addDoc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { setUlasan } from '../../redux/hooks/ulasanSlice';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import ModalComponent from '../../components/ModalComponent';
import { useState } from 'react';
import './index.css';
import { COLLECTION_ULASAN } from '../../constants';

const FormUlasan = () => {
  const ulasan = useSelector((state) => state.ulasan.value);
  const [isShow, setIsShow] = useState(false);
  const [pesan, setPesan] = useState('');
  const dispatch = useDispatch();
  const ulasanCollectionRef = collection(db, COLLECTION_ULASAN);

  const addUlasan = async (e) => {
    e.preventDefault();
    await addDoc(ulasanCollectionRef, {
      email: ulasan.email,
      nama: ulasan.nama,
      saran: ulasan.saran,
      relevan: ''
    });
    setPesan('Terima kasih atas ulasan anda!');
    setIsShow(true);
  };

  return (
    <>
      <Container className="form-ulasan">
        <SectionTitle title="Masukan Ulasan Anda" />
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    dispatch(setUlasan({ ...ulasan, email: e.target.value }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    dispatch(setUlasan({ ...ulasan, nama: e.target.value }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label> Kritik dan Saran </Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => {
                    dispatch(setUlasan({ ...ulasan, saran: e.target.value }));
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={addUlasan}>
                Submit
              </Button>

              <Link to="/">
                <Button variant="danger" type="submit" className="mx-2">
                  <BsFillXCircleFill /> Batal
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
        <ModalComponent isShow={isShow} setIsShow={setIsShow} pesan={pesan} />
      </Container>
    </>
  );
};

export default FormUlasan;
