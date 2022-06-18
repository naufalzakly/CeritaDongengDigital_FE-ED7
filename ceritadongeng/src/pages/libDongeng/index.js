import { Container } from "react-bootstrap";
import LibDongengCard from "../../component/libDongengCard/index";
import SectionTitle from "../../component/sectionTitle/index";
import "./index.css";
import slider1 from '../../img/kancil_buaya_prev.png';
import slider2 from '../../img/kelinci_kura_preview_1.png';
import slider3 from '../../img/kelinci_kura_preview_2.png';

const LibDongeng = () => {
  return (
    <Container>
      <div className="m-top">
        <SectionTitle title={"Dongeng"}/>
        <LibDongengCard
          cerita1={slider2}
          cerita2={slider1}
          cerita3={slider3}
        />
        <LibDongengCard
          cerita1={slider2}
          cerita2={slider1}
          cerita3={slider3}
        />
      </div>
    </Container>
  );
};

export default LibDongeng;
