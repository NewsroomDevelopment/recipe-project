import React from "react";
import styled from "styled-components";
import { device } from '../device';

const Image = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.url});
  background-size: cover;

  @media ${device.tablet} {
    display: block;
    width: 60%;
    height: 35rem;
  }
`;


const Recipe = ({url}) => {
  return (
    <Image src={url}></Image>
  );
}

export default Recipe;