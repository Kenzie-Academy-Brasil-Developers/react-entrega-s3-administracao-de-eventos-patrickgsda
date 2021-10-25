import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardItems from "../../components/Card";
import Header from "../../components/Header";
import { GraduationContext } from "../../Providers/Graduation";
import { Container } from "./styles";

function Graduation() {
  const { graduationItems, setGraduationItems } = useContext(GraduationContext);
  return (
    <Container>
      <Header />
      {graduationItems.length > 0 && <h2>Graduation</h2>}
      <CardItems
        drinks={graduationItems}
        name="graduationItems"
        setDrinks={setGraduationItems}
      />
      {graduationItems.length === 0 && (
        <h1 className="title">
          Seu carrinho está vazio, <Link to="/">voltar ao inicio!</Link>
        </h1>
      )}
    </Container>
  );
}

export default Graduation;
