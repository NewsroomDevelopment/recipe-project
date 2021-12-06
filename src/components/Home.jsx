import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../device";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { Buttons } from "../data/Buttons";

const MainImage = styled.div`
  width: 100vw;
  height: 0;
  padding-top: 66.64%; /* (img-height / img-width * container-width) */
  /* (853 / 1280 * 100) */
  background-image: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/EYNMNBNHTBEHHCGGH65JFXMOD4.png);
  background-size: cover;

  @media ${device.mobile} {
    padding-top: 176%;
    width: 100vw;
    background-image: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7Y7LS7K44RAIHPIIGG4OJIMC6U.png);
    background-size: cover;
  }
`;

const Home = ({ url, setUrl }) => {
  let history = useHistory();

  const submit = (history, url) => {
    setUrl(url);
    history.push("/recipe");
  };

  return (
    <>
      <MainImage/>
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
