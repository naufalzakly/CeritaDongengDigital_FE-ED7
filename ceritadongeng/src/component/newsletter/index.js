import { AiOutlineSend } from "react-icons/ai";
import "./index.css";
import { Row, Col, Button } from "react-bootstrap";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <Row>
        <Col md="4">
          <h4>Newsletter</h4>
          <p>stay Up to Date</p>
        </Col>
        <Col md="10">
          <form className="newsletter-form">
            <input
              type="text"
              placeholder="Email Kamu..."
            />
            <Button variant="primary" className="rounded">
              <AiOutlineSend/>
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Newsletter;
