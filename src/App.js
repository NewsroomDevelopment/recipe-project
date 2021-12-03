import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { device } from "./device";
import Recipe from "./components/Recipe";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";


const AppWrapper = () => {
  return (
    <Router>
      {" "}
      <App />
    </Router>
  );
};

function App() {
  const [url, setUrl] = useState(null);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home url={url} setUrl={setUrl} />} />
          <Route exact path="/recipe" render={() => <Recipe url={url} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppWrapper;
