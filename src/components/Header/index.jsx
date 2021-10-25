import React from "react";
import { useHistory } from "react-router";
import IconSale from "../IconSale";

import { Container } from "./styles";

function Header() {
  const history = useHistory();
  function toHome() {
    history.push("/");
  }
  return (
    <Container>
      <h1 onClick={() => toHome()}>KenzieDrinks</h1>
      <IconSale />
    </Container>
  );
}

export default Header;
