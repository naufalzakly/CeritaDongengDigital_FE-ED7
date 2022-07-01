import { Container, Row, CardGroup } from 'react-bootstrap';
import CardBebek from '../../component/libBukuCard/cardBebek';
import SectionTitle from '../../component/sectionTitle/index';
import CardKancilBuaya from '../../component/libBukuCard/cardKancilBuaya';
import CardSegeraRilis from '../../component/libBukuCard/CardSegeraRilis';
import './index.css';
import NavbarHome from '../../component/navbar';
import Footer from '../../component/footer';
import CardKancilHarimau from '../../component/libBukuCard/cardKancilHarimau';
import CardKelinciKura from '../../component/libBukuCard/cardKelinciKura';
import { dataCard } from '../../data/card';
import CardStory from '../../component/libBukuCard/CardStory';
const LibBuku = () => {
  return (
    <>
      <NavbarHome />
      <div className="lib-buku">
        <Container>
          <SectionTitle title={'Dongeng'} />
          <Row className="Container_Card">
            <CardGroup>
              {dataCard.map((item) => (
                <CardStory item={item} key={item.id} />
              ))}
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
