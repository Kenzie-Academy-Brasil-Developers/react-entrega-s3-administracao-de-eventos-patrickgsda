import { useContext } from "react";
import { FaGlassCheers, FaGraduationCap } from "react-icons/fa";
import { GiRingBox } from "react-icons/gi";
import { useHistory } from "react-router";
import { ConfraternizationContext } from "../../Providers/Confraternization";
import { GraduationContext } from "../../Providers/Graduation";
import { WeddingContext } from "../../Providers/Wedding";
import { Container, ContainerIcons } from "./styles";

function IconSale() {
  const { confraItems } = useContext(ConfraternizationContext);
  const { graduationItems } = useContext(GraduationContext);
  const { weddingItems } = useContext(WeddingContext);
  const history = useHistory();
  function toConfra() {
    history.push("/confraternization");
  }
  function toGraduation() {
    history.push("/graduation");
  }
  function toWedding() {
    history.push("/wedding");
  }
  return (
    <Container>
      <ContainerIcons onClick={() => toConfra()}>
        <FaGlassCheers />
        <span>{confraItems.length}</span>
      </ContainerIcons>

      <ContainerIcons onClick={() => toGraduation()}>
        <FaGraduationCap />
        <span>{graduationItems.length}</span>
      </ContainerIcons>

      <ContainerIcons onClick={() => toWedding()}>
        <GiRingBox />
        <span>{weddingItems.length}</span>
      </ContainerIcons>
    </Container>
  );
}

export default IconSale;
