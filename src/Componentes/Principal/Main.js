/* import React from 'react';

const Main = (props) => {
    return (
        <div>
            <h2>{props.children}</h2>
            <div>{props.caixa}</div>
        </div>
    );
}

export default Main;
 */

import React from "react";
import styled from "styled-components";

const Main = ({ caixa, children }) => {
  return (
    <div>
      {children}
      <div>
        <h3> {caixa}</h3>
      </div>
    </div>
  );
};

export default Main;
