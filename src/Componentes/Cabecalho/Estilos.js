import styled from "styled-components";

export const Logo = styled.img`
  width: 10vw;
  border: solid;
  border-radius: 50%;
  cursor: pointer;
  background-color: pink;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  border: solid;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ff00ff;

  nav {
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    width: 83%;
  }

  li {
    width: 10vw;
    cursor: pointer;
  }
`;
