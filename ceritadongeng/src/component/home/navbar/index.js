import {
  Nav,
  Container,
  Row,
  Col,
  Button,
  Modal,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import "./style.css";
import useState from "react-hook-use-state";
import { BsList, BsFillPersonFill, BsGoogle } from "react-icons/bs";
import { FaFacebook, FaApple } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const NavbarHome = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Container>
        <Row>
          <Col>
            <Nav className="justify-content-start">
              <Nav.Item>
                <Nav.Link href="./home">
                  <h4>Cerita Dongeng</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <br />
          </Col>

          <Col>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link>
                  <Button
                    variant="outline-dark"
                    className="button"
                    onClick={handleShow}
                  >
                    <h5 className="text_nav">BERGABUNG</h5>
                  </Button>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#features">
                  <Button variant="outline-dark" className="button">
                    <BsList size="1.5em" className="mx-2" />
                    <BsFillPersonFill size="1.5em" />
                  </Button>
                </Nav.Link>
              </Nav.Item>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Login or Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Nomor Telephone"
                    className="mb-3">
                    <Form.Control type="number" placeholder="Masukan nomor telephone anda" />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="passoword"
                    className="mb-3">
                    <Form.Control type="password" placeholder="Masukan nomor telephone anda" />
                  </FloatingLabel>

                  <Button className="mx-3">Selanjutnya</Button>
                  <Button variant="light"><AiOutlineMail  size="1.5em"/>Gunakan Email</Button>
                  <div className="login-section d-flex mt-3">
                    <hr width="20px" className="mx-2"/> 
                    <p>atau gunakan ID</p> 
                    <hr width="230px"/>
                  </div>
                  <Button className="mx-3"><FaFacebook size="1.5em"/> Facebook</Button>
                  <Button className="mx-3"><FaApple  size="1.5em"/> Apple ID</Button>
                  <Button className="mx-3"><BsGoogle  size="1.5em"/>Google</Button>
                 
                </Modal.Body>
              </Modal>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavbarHome;
