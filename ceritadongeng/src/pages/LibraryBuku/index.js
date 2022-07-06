import { Container, Row, CardGroup } from 'react-bootstrap';
import SectionTitle from '../../components/SectionTitle';
import CardSegeraRilis from '../../components/LibBukuCard/CardSegeraRilis';
import CardStory from '../../components/LibBukuCard/CardStory';
import { dataCard } from '../../data/card';
import './index.css';

const LibBuku = () => {
  return (
    <div className="lib-buku">
      <Container>
        <SectionTitle title={'Dongeng'} />
        <Row className="Container_Card">
          <CardGroup>
            {dataCard.map((item) => {
              return <CardStory item={item} key={item.id} />;
            })}
          </CardGroup>
        </Row>
        <SectionTitle title={'Tunggu Cerita Lainnya Segera...'} />
        <CardSegeraRilis />
      </Container>
    </div>
  );
};

export default LibBuku;
