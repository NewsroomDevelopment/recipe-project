import React, { useState } from "react";
import styled from 'styled-components';
import './App.css';
import { device } from './device';
import WebsiteVersion from './img/WebsiteVersion-01.png';
import Recipe from "./components/Recipe";
import Button from "./components/Button"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Buttons } from './data/Buttons';


const MainImage = styled.div`
  width: 100vw;
  height: 110vh;
  background-image: url(${(props) => props.url});
  background-size: cover;

  @media ${device.tablet} {
    display: block;
    width: 60%;
    height: 35rem;
  }
`;

function App() {
  const [url, setUrl] = useState(null)
  console.log(url)
  return (
    <div className="App">
      <MainImage url={WebsiteVersion} />
      {
        Buttons.map(button => (
          <Button setUrl={setUrl} name={button.name} position={button.position} rotation={button.rotation} url={button.url}/> 
        ))
      }
      <Router>
        <Routes>
          <Route exact path='/recipe' element={() => <Recipe url={url}/>}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
