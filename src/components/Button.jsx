import React from "react";
import styled from "styled-components";

const RecipeButton = styled.button`
  position: absolute;
  top: ${(props) => props.position[0]};
  left: ${(props) => props.position[1]};
  transform: rotate(${(props) => props.rotation});
  width: 15.6vw;
  height: 15.5vw;
  cursor: pointer;
  background: transparent;
  border: none !important;
`;

const Button = ({
  submit,
  setUrl,
  position,
  rotation,
  desktopUrl,
  history,
  mobileUrl,
}) => {
  console.log(desktopUrl);
  return (
    <RecipeButton
      position={position}
      rotation={rotation}
      onClick={() => {if(window.innerWidth < 758) {submit(history, mobileUrl)} else submit(history, desktopUrl)}}
    ></RecipeButton>
  );
};

export default Button;
