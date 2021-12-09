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

  @media ${device.mobile} {
    padding-top: 176%;
    background-size: cover;
  }
`;

const Recipe = ({ url }) => {
  let history = useHistory();

  if (url == null) history.push("/");
  return <Image url={url}></Image>;
};

export default Recipe;
