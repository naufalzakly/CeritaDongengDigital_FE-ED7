import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { BsFillXCircleFill } from "react-icons/bs";
import db from "../../Firestore";
import { collection, addDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { setUlasan } from "../../redux/hooks/ulasanSlice";
import { Link } from "react-router-dom";
import NavbarHome from "../../component/navbar/index";
import SectionTitle from "../../component/sectionTitle";
import Footer from "../../component/footer/index";
import "./index.css";

const FormUlasan = () => {
  const ulasan = useSelector((state) => state.ulasan.value);
  const dispatch = useDispatch();
  const ulasanCollectionRef = collection(db, "ulasan");

  const addUlasan = async (e) => {
    e.preventDefault();
    await addDoc(ulasanCollectionRef, {
      email: ulasan.email,
      saran: ulasan.saran,
    });
    alert("Terima kasih atas ulasan anda!");
  };

  return (
    <>
      <NavbarHome />
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
                    dispatch(setUlasan({ email: e.target.value }));
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label> Kritik dan Saran </Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => {
                    dispatch(setUlasan({ saran: e.target.value }));
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
      </Container>
      <Footer />
    </>
  );
};

export default FormUlasan;