import React, { useState, useContext } from "react";
import Button from "../Button";
import { Container } from "./styles";
import { DrinksContext } from "../../Providers/Drinks";
import { ConfraternizationContext } from "../../Providers/Confraternization";
import { GraduationContext } from "../../Providers/Graduation";
import { WeddingContext } from "../../Providers/Wedding";

function SelectSales({ productId }) {
  const [eventAdd, setEventAdd] = useState("Confraternization");
  const { drinks } = useContext(DrinksContext);
  const { confraItems, setConfraItems } = useContext(ConfraternizationContext);
  const { graduationItems, setGraduationItems } = useContext(GraduationContext);
  const { weddingItems, setWeddingItems } = useContext(WeddingContext);

  function handleClick(e) {
    const productFiltered = drinks.find((drink) => drink.id === productId);

    if (e === "Confraternization") {
      const productFilteredInList = confraItems.find(
        (drink) => drink.id === productFiltered.id
      );
      if (!productFilteredInList) {
        setConfraItems([...confraItems, productFiltered]);
        const listSale = JSON.parse(localStorage.getItem("confraItems")) || [];
        if (!listSale.map((item) => item.id).includes(productId)) {
          const newList = [...listSale, productFiltered];
          localStorage.setItem("confraItems", JSON.stringify(newList));
        }
      }
    }

    if (e === "Wedding") {
      const productFilteredInList = weddingItems.find(
        (drink) => drink.id === productFiltered.id
      );
      if (!productFilteredInList) {
        setWeddingItems([...weddingItems, productFiltered]);
        const listSale = JSON.parse(localStorage.getItem("weddingItems")) || [];
        if (!listSale.map((item) => item.id).includes(productId)) {
          const newList = [...listSale, productFiltered];
          localStorage.setItem("weddingItems", JSON.stringify(newList));
        }
      }
    }

    if (e === "Graduation") {
      const productFilteredInList = graduationItems.find(
        (drink) => drink.id === productFiltered.id
      );
      if (!productFilteredInList) {
        setGraduationItems([...graduationItems, productFiltered]);
        const listSale =
          JSON.parse(localStorage.getItem("graduationItems")) || [];
        if (!listSale.map((item) => item.id).includes(productId)) {
          const newList = [...listSale, productFiltered];
          localStorage.setItem("graduationItems", JSON.stringify(newList));
        }
      }
    }
  }
  return (
    <Container>
      <select onChange={(e) => setEventAdd(e.target.value)}>
        <option>Confraternization</option>
        <option>Graduation</option>
        <option>Wedding</option>
      </select>
      <Button onClick={() => handleClick(eventAdd)}>Add</Button>
    </Container>
  );
}

export default SelectSales;
