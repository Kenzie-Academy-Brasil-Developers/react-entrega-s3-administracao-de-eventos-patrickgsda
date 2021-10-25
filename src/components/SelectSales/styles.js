import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  select {
    background-color: black;
    border: none;
    cursor: pointer;
    color: #ffffff;
    text-align: center;
    :hover {
      filter: brightness(1.5);
    }
    :active {
      filter: brightness(2);
    }
  }
`;
