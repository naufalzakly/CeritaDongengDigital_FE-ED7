import { Container, Row, CardGroup } from "react-bootstrap";
import LibBukuCard from "../../component/libBukuCard/index";
import SectionTitle from "../../component/sectionTitle/index";
import "./index.css";
import slider1 from "../../img/kancil_buaya_prev.png";
import slider2 from "../../img/kelinci_kura_preview_1.png";
import slider3 from "../../img/kelinci_kura_preview_2.png";

const LibDongeng = () => {
  return (
    <div className="lib-buku">
      <Container>
        <SectionTitle title={"Dongeng"} />
        <Row className="Container_Card">
          <CardGroup>
            <LibBukuCard
              judul="Kancil dan Buaya"
              cerita1={slider2}
              cerita2={slider1}
              cerita3={slider3}
            />
            <LibBukuCard
            judul="Kancil dan Buaya"
              cerita1={slider2}
              cerita2={slider1}
              cerita3={slider3}
            />
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default LibDongeng;
