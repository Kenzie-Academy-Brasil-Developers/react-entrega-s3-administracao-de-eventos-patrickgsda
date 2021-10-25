import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardItems from "../../components/Card";
import Header from "../../components/Header";
import { WeddingContext } from "../../Providers/Wedding";
import { Container } from "./styles";

function Wedding() {
  const { weddingItems, setWeddingItems } = useContext(WeddingContext);
  return (
    <Container>
      <Header />
      {weddingItems.length > 0 && <h2>Wedding</h2>}
      <CardItems
        drinks={weddingItems}
        name="weddingItems"
        setDrinks={setWeddingItems}
      />
      {weddingItems.length === 0 && (
        <h1 className="title">
          Seu carrinho está vazio, <Link to="/">voltar ao inicio!</Link>
        </h1>
      )}
    </Container>
  );
}

export default Wedding;
