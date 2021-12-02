import React from "react";
import styled from "styled-components";

const RecipeButton = styled.button`
  position: absolute; 
  top: ${(props) => props.position[0]};
  left: ${(props) => props.position[1]};
  transform: rotate(${(props) => props.rotation});
  width: 15.6vw;
  height: 15.5vw;
`;

const Button = ({setUrl, position, rotation, url}) => {
  return (
    <RecipeButton position={position} rotation={rotation} onClick={()=>{setUrl(url)}}></RecipeButton>);
};

export default Button;
