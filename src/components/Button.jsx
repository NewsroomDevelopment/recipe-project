import React from "react";
import styled from "styled-components";

const recipeButton = styled.button`
  position: relative; 
  top: ${(props) => props.position[0]};
  left: ${(props) => props.position[1]};
  transform: rotate(${(props) => props.rotation});
`;

const Button = ({setUrl, name, position, rotation, url}) => {
  return (<button onClick={()=>{setUrl("hello")}}></button>);
};

export default Button;
