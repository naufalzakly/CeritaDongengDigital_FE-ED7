import { Container } from "react-bootstrap";
import "./index.css";

const SectionTitle = ({title}) => {
  return (
    <div class="title-section">
      <Container>
        <br />
        <h3>{title}</h3>
        <hr width={90} />
      </Container>
    </div>
  );
};

export default SectionTitle;
