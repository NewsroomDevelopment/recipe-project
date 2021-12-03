import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { useHistory } from "react-router-dom";

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

const Recipe = ({ url }) => {
  let history = useHistory();

  if (url == null) history.push("/");
  return <Image url={url}></Image>;
};

export default Recipe;
