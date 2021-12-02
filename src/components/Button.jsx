import React from "react";
import styled from "styled-components";

const RecipeButton = styled.button`
  position: absolute; 
  top: ${(props) => props.position[0]};
  left: ${(props) => props.position[1]};
  transform: rotate(${(props) => props.rotation});
  width: 15.6vw;
  height: 15.5vw;
  background: transparent;
  border: none !important; 
`;

const Button = ({setUrl, position, rotation, desktopurl}) => {
  return (
    <RecipeButton position={position} rotation={rotation} onClick={()=>{setUrl(desktopurl)}}></RecipeButton>);
};

export default Button;
