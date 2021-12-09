import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../device";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { Buttons } from "../data/Buttons";

const MainImage = styled.div`
  width: 100vw;
  height: 63vw;
  background-image: url("/images/main.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media ${device.mobile} {
    width: 450px;
    height:100vh;
    background-image: url("/images/main-mobile.png");
    background-size: cover;
    background-position:center;
  } ;
`;

const Home = ({ url, setUrl }) => {
  let history = useHistory();
  const submit = (history, url) => {
    setUrl(url);
    history.push("/recipe");
  };

  return (
    <>
      <MainImage />
      {Buttons.map((button) => (
        <Button
          submit={submit}
          history={history}
          setUrl={setUrl}
          name={button.name}
          position={button.position}
          rotation={button.rotation}
          desktopUrl={button.desktopUrl}
          mobileUrl={button.mobileUrl}
          positionM={button.positionM}
          rotationM={button.rotationM}
        />
      ))}
    </>
  );
};

export default Home;
