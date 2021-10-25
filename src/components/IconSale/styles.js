import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ContainerIcons = styled.div`
  display: flex;
  color: #e1e1e6;
  font-family: "Lobster", cursive;
  padding: 5px;
  cursor: pointer;
  align-items: center;
  font-size: 27px;
  :hover {
    filter: brightness(1.5);
  }
  :active {
    filter: brightness(2);
  }
  span {
    margin: 0px 10px 0px 5px;
    font-size: 15px;
    cursor: pointer;
    background-color: #04d361;
    border-radius: 50px;
    color: black;
    width: 20px;
    text-align: center;
  }
  @media (max-width: 525px) {
    padding: 0;

    span {
      width: 10px;
      padding: 0;
      font-size: 10px;
    }
  }
`;
