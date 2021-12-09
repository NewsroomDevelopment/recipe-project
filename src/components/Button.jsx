import React from "react";
import styled from "styled-components";
import { device } from "../device";


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
  @media ${device.mobile} {
    top: ${(props) => props.positionM[0]};
    left: ${(props) => props.positionM[1]};
    transform: rotate(${(props) => props.rotation});
    background: transparent;
    width: 7.6vh;
    height: 7.5vh;
  }
`;

const Button = ({
  submit,
  setUrl,
  position,
  rotation,
  desktopUrl,
  history,
  mobileUrl,
  positionM,
  rotationM,
}) => {

  return (
    <RecipeButton
      position={position}
      rotation={rotation}
      positionM={positionM}
      rotationM={rotationM}
      onClick={() => { if (window.innerWidth < 758) { submit(history, mobileUrl) } else submit(history, desktopUrl) }}
    ></RecipeButton>
  );
};

export default Button;
