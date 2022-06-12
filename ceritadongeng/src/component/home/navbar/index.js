import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import PageHome from "../../../pages/homepages";
// import LibDongeng from "../../../pages/libDongeng/index";
import { Nav, ButtonGroup, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";
// import { FaBars, FaTimes } from 'react-icons/fa';
import useState from "react-hook-use-state";
import { Link } from "react-router-dom";

const NavbarHome = ({ logo, garis, profil }) => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    // <Router>
      <div className={color ? "header header-bg" : "header"}>
        <Container>
          <Row>
            <Col>
              <Nav className="justify-content-start">
                <Nav.Item>
                <Nav.Link href="#features">
                    <img
                      className="img_nav"
                      src={logo}
                      width={20}
                      height={20}
                      alt="pic"
                    />
                </Nav.Link>
                </Nav.Item>
              </Nav>

              <br />
            </Col>
            <Col>
              <Nav className="justify-content-end">

                <Nav.Item>
                  <Link to="/libDongeng">
                    <Button variant="outline-dark" className="button">
                      <h2 className="text_nav">Library Dongeng</h2>
                    </Button>
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#features">
                    <Button variant="outline-dark" className="button">
                      <h2 className="text_nav">Bergabung</h2>
                    </Button>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#memes">
                    <ButtonGroup>
                      <Button className="button" variant="outline-dark">
                        <img
                          className="img_nav"
                          src={garis}
                          height={15}
                          width={15}
                          alt="pict"
                        />
                      </Button>
                      <Button className="button" variant="outline-dark">
                        <img
                          className="img_nav"
                          src={profil}
                          width={15}
                          height={15}
                          alt="pic"
                        />
                      </Button>
                    </ButtonGroup>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>

       
      </div>
 

  );
};
export default NavbarHome;
