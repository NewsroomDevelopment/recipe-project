import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { useHistory } from "react-router-dom";

const Image = styled.div`
  width: 100vw;
  height: 63vw;
  /* (853 / 1280 * 100) */
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: hidden;
  @media ${device.mobile} {
    background-size: cover;
    background-repeat: no-repeat;
    width: 120%;
    height: 120vh;
    background-position: center;
  }
`;

const Recipe = ({ url }) => {
  let history = useHistory();

  if (url == null) history.push("/");
  return <Image url={url}></Image>;
};

export default Recipe;
