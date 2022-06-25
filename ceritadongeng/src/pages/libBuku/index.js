import { Container, Row, CardGroup } from "react-bootstrap";
import LibBukuCard from "../../component/libBukuCard/index";
import SectionTitle from "../../component/sectionTitle/index";
import "./index.css";

const LibBuku = () => {
  return (
    <div className="lib-buku">
      <Container>
        <SectionTitle title={"Dongeng"} />
        <Row className="Container_Card">
          <CardGroup>
            <LibBukuCard
              judul="Kancil dan Buaya"
              cerita1="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fsegera_rilis%2Fdua_anak_ayam_thumbnail.png?alt=media&token=5b77fcd2-433d-4e84-9b8e-c7ef630b5653"
              cerita2= "https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fsegera_rilis%2Fdua_anak_ayam_thumbnail.png?alt=media&token=5b77fcd2-433d-4e84-9b8e-c7ef630b5653"
              cerita3="https://firebasestorage.googleapis.com/v0/b/cerita-dongeng-digital.appspot.com/o/thumbnail_lib_dongeng%2Fsegera_rilis%2Fdua_anak_ayam_thumbnail.png?alt=media&token=5b77fcd2-433d-4e84-9b8e-c7ef630b5653"
            />
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default LibBuku;