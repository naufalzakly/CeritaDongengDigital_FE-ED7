import { Nav, Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaApple } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import useState from "react-hook-use-state";

const ButtonBergabung = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login or Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Nomor Telephone"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Masukan nomor telephone anda"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="passoword"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Masukan nomor telephone anda"
            />
          </FloatingLabel>

          <Button className="mx-3">Selanjutnya</Button>
          <Button variant="light">
            <AiOutlineMail size="1.5em" />
            Gunakan Email
          </Button>
          <div className="login-section d-flex mt-3">
            <hr width="20px" className="mx-2" />
            <p>atau gunakan ID</p>
            <hr width="230px" />
          </div>
          <Button className="mx-3">
            <FaFacebook size="1.5em" /> Facebook
          </Button>
          <Button className="mx-3">
            <FaApple size="1.5em" /> Apple ID
          </Button>
          <Button className="mx-3">
            <BsGoogle size="1.5em" />
            Google
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ButtonBergabung;