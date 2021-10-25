import React from "react";
import { Container, ContainerCard, ContainerImg, Card } from "./styles";
import ButtonSelect from "../SelectSales";
import Button from "../Button";

function CardItems({ name, drinks, setDrinks, isProducts }) {
  function handleClick(productId) {
    const listDrinks = JSON.parse(localStorage.getItem(`${name}`)) || [];
    const productFiltered = drinks.filter((drink) => drink.id !== productId);
    const listSale = listDrinks.filter((item) => item.id !== productId);
    localStorage.setItem(`${name}`, JSON.stringify(listSale));
    setDrinks(productFiltered);
  }

  return (
    <Container>
      {isProducts
        ? drinks.map((drink, index) => {
            return (
              <Card key={index}>
                <h1>
                  {drink.name}, {drink.volume.value} {drink.volume.unit}
                </h1>
                <ContainerCard>
                  <ContainerImg>
                    <img src={drink.image_url} alt={drink.name} />
                  </ContainerImg>
                  <p className="description">{drink.description}</p>
                </ContainerCard>
                <p>
                  Manufacturing Start <b>{drink.first_brewed}</b>
                </p>
                <ButtonSelect productId={drink.id} />
              </Card>
            );
          })
        : drinks.map((drink, index) => {
            return (
              <Card key={index}>
                <h1>
                  {drink.name}, {drink.volume.value} {drink.volume.unit}
                </h1>
                <ContainerCard>
                  <ContainerImg>
                    <img src={drink.image_url} alt={drink.name} />
                  </ContainerImg>
                  <p className="description">{drink.description}</p>
                </ContainerCard>
                <p>
                  Manufacturing Start <b>{drink.first_brewed}</b>
                </p>
                <Button onClick={() => handleClick(drink.id)}>Remove</Button>
              </Card>
            );
          })}
    </Container>
  );
}

export default CardItems;
