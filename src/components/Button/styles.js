import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: #04d361;
  border-radius: 0 0 14px 14px;
  border: none;
  padding: 10px;
  color: white;
  font-weight: bold;
  :hover {
    color: black;
    filter: brightness(1.5);
  }
  :active {
    filter: brightness(2);
  }
`;
