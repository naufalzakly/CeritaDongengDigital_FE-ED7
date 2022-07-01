import { Container, Row, CardGroup } from 'react-bootstrap';
import CardBebek from '../../Component/LibBukuCard/cardBebek';
import SectionTitle from '../../Component/SectionTitle/index';
import CardKancilBuaya from '../../Component/LibBukuCard/cardKancilBuaya';
import CardSegeraRilis from '../../Component/LibBukuCard/CardSegeraRilis';
import './index.css';
import NavbarHome from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import CardKancilHarimau from '../../Component/LibBukuCard/cardKancilHarimau';
import CardKelinciKura from '../../Component/LibBukuCard/cardKelinciKura';

const LibBuku = () => {
  return (
    <>
      <NavbarHome />
      <div className="lib-buku">
        <Container>
          <SectionTitle title={'Dongeng'} />
          <Row className="Container_Card">
            <CardGroup>
              <CardBebek />
              <CardKancilHarimau />
              <CardKelinciKura />
              <CardKancilBuaya />
            </CardGroup>
          </Row>
          <SectionTitle title={'Tunggu Cerita Lainnya Segera...'} />
          <CardSegeraRilis />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LibBuku;
