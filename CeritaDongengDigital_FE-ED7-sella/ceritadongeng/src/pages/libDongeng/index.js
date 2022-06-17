import { Container } from "react-bootstrap";
import CardCerita from "../../component/home/card_cerita/index";
import "./index.css";
import slider1 from '../../img/bebek_buruk_rupa_thumbnail.png';
import slider2 from '../../img/kancil_buaya_thumbnail.png';
import slider3 from '../../img/Kancil_dan_harimau_thumbnail.png';

const LibDongeng = () => {
  return (
    <Container>
      <div className="m-top">
        <CardCerita
          title={"Dongeng"}
          cerita1={slider2}
          cerita2={slider1}
          cerita3={slider3}
        />
      </div>
    </Container>
  );
};

export default LibDongeng;
