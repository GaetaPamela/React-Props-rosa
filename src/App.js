import React, { Component } from "react";
import Header from "./Componentes/Cabecalho/Header.js";
import Main from "./Componentes/Principal/Main";
import Logo from "./Componentes/Imagem/pngegg.png";
import { createGlobalStyle } from "styled-components";
import Meninas from "./Componentes/Imagem/Meninas.png";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F08080;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Photo = styled.img`
  width: 15vw;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header
          titulo="Vamos aprender sobre Props"
          lista="Inicio"
          lista1="Sobre"
          lista2="Contatos"
          logo={Logo}
        />
        <Main caixa="Girl Tech">
          <Photo src={Meninas} alt="Meninas" />
          <button>Botão Tech</button>
        </Main>
      </>
    );
  }
}

export default App;
