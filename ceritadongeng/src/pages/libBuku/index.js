import { Container, Row, CardGroup } from 'react-bootstrap';
import SectionTitle from '../../components/SectionTitle';
import CardSegeraRilis from '../../components/LibBukuCard/CardSegeraRilis';
import CardBebek from '../../components/LibBukuCard/CardBebek';
import CardKancilBuaya from '../../components/LibBukuCard/CardKancilBuaya';
import CardKancilHarimau from '../../components/LibBukuCard/CardKancilHarimau';
import CardKelinciKura from '../../components/LibBukuCard/CardKelinciKura';
import NavbarHome from '../../components/Navbar';
import Footer from '../../components/Footer';
import './index.css';

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
