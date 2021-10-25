import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px auto;
  max-width: 1000px;
  text-align: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
  .description {
    color: black;
    font-size: 15px;
    white-space: wrap;
    width: 150px;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: none;
    padding-left: 15px;
    text-align: left;
  }

  .description::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #8257e5;
  width: 180px;
  border-radius: 15px;
  height: 170px;
  img {
    width: 45px;
    height: 150px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 15px;
  padding: 5px;
  width: 300px;
  height: 350px;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 60%) 0px 2px 9px 5px;
  p {
    margin-bottom: 5px;
  }
  h1 {
    font-size: 13px;
  }
`;
