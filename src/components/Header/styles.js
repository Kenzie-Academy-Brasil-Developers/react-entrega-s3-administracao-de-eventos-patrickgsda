import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #121214;
  padding: 20px 50px 20px 50px;
  box-shadow: rgb(0 0 0 / 60%) 0px 2px 10px 5px;
  @media (max-width: 525px) {
    padding: 20px 0 20px 0;
  }

  h1 {
    color: #e1e1e6;
    font-family: "Lobster", cursive;
    cursor: pointer;
    :hover {
      filter: brightness(1.5);
    }
    :active {
      filter: brightness(2);
    }
  }
`;
