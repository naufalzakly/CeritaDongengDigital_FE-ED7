import { Container, Row, CardGroup } from 'react-bootstrap';
import SectionTitle from '../../Component/SectionTitle/index';
import CardSegeraRilis from '../../Component/LibBukuCard/CardSegeraRilis';
import './index.css';
import NavbarHome from '../../Component/Navbar';
import Footer from '../../Component/Footer';

import { dataCard } from '../../data/card';
import CardStory from '../../Component/LibBukuCard/CardStory';
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
