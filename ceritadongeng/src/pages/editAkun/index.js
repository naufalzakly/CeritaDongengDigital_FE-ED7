import "./index.css";
import TentangAkun from "../../component/akun/tentangAkun/index";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import WelcomeText from "../../component/akun/welcomeText";
import { BsFillXCircleFill } from "react-icons/bs";

const EditAkun = () => {
  return (
    <div className="edit-akun-section">
      <Container>
        <Row>
          <Col md="4">
            <TentangAkun />
          </Col>
          <Col md="8">
            <WelcomeText />
            <div className="edit-akun-form">
              <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Tentang Saya</Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Buku Kesukaan</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Hobi</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <div className="form-footer">
                  <p className="text-muted mx-5">
                    Pelajari lebih lanjut mengenai kebijakan privasi kami
                  </p>
                  <div className="form-footer-button">
                    <Button variant="danger" type="submit" className="mx-2">
                      <BsFillXCircleFill /> Hapus
                    </Button>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditAkun;
