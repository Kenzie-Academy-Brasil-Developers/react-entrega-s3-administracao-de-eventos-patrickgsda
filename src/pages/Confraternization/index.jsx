import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardItems from "../../components/Card";
import Header from "../../components/Header";
import { ConfraternizationContext } from "../../Providers/Confraternization";
import { Container } from "./styles";

// import { Container } from './styles';

function Confraternization() {
  const { confraItems, setConfraItems } = useContext(ConfraternizationContext);
  return (
    <Container>
      <Header />
      {confraItems.length > 0 && <h2>Confraternization</h2>}
      <CardItems
        drinks={confraItems}
        name="confraItems"
        setDrinks={setConfraItems}
      />
      {confraItems.length === 0 && (
        <h1 className="title">
          Seu carrinho está vazio, <Link to="/">voltar ao inicio!</Link>
        </h1>
      )}
    </Container>
  );
}

export default Confraternization;
