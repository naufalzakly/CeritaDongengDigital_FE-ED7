import { Container, Row, CardGroup } from 'react-bootstrap';
import SectionTitle from '../../Components/SectionTitle';
import CardSegeraRilis from '../../Components/LibBukuCard/CardSegeraRilis';
import CardBebek from '../../Components/LibBukuCard/CardBebek';
import CardKancilBuaya from '../../Components/LibBukuCard/CardKancilBuaya';
import CardKancilHarimau from '../../Components/LibBukuCard/CardKancilHarimau';
import CardKelinciKura from '../../Components/LibBukuCard/CardKelinciKura';
import NavbarHome from '../../Components/Navbar';
import Footer from '../../Components/Footer';
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
