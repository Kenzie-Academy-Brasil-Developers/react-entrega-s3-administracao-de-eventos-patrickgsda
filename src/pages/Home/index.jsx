import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import CardItems from "../../components/Card";
import { DrinksContext } from "../../Providers/Drinks";
import api from "../../services/api";
import { Container } from "./styles";

function Home() {
  const { drinks, setDrinks } = useContext(DrinksContext);
  useEffect(() => {
    api
      .get("/beers")
      .then((res) => setDrinks(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <Container>
      <h2 className="title">Drinks</h2>
      <Header />
      <CardItems isProducts={true} drinks={drinks} />
    </Container>
  );
}

export default Home;
