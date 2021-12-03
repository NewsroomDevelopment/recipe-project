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
    background-image: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7Y7LS7K44RAIHPIIGG4OJIMC6U.png);
  }
`;

const Home = ({ url, setUrl }) => {
  let history = useHistory();
  console.log(url);
  const submit = (history, url) => {
    setUrl(url);
    console.log(history);
    history.push("/recipe");
  };
  console.log(url);
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
