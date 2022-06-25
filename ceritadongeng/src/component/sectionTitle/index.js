import { Container } from "react-bootstrap";

const SectionTitle = ({title}) => {
  return (
    <div className="title-section">
      <Container>
        <br />
        <h3>{title}</h3>
        <hr width={90} />
      </Container>
    </div>
  );
};

export default SectionTitle;
