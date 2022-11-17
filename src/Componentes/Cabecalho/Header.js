import React, { Component } from "react";
import { Container, Div, Logo } from "./Estilos.js";

class Header extends Component {
  render() {
    return (
      <Container>
        <Div>
          <h1>{this.props.titulo}</h1>
          <Logo src={this.props.logo} alt="" />
          <nav>
            <ul>
              <li>{this.props.lista}</li>
              <li>{this.props.lista1}</li>
              <li>{this.props.lista2}</li>
            </ul>
          </nav>
        </Div>
      </Container>
    );
  }
}

export default Header;
