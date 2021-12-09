import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Recipe from "./components/Recipe";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  // useEffect(() => {
  //   const urls = [
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MNI36JYE2JEE7NE5JASDAAP6OM.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/HZRHV4JZ7NFPFBSBVEY2GICCLY.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/IBHY6M5FYZEK7KJD4ZFYJAZKZM.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/AP2JXVRR7BDEDMXDYCNGWDX3M4.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/PGNGLV2VK5CDZGK7YDWACWSYWM.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TSZUOFBOQRGT3PXXT2DCRXHHPY.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ZKCU3PJAWZGCLDMCGHGNGBYVQU.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/23Z7IA5AOJCATPEZNAHSMGOCR4.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XSOL2K4YMFE3DATPWZ2EMKWR4I.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/4OPRGHDBRFENJFZE5PXZHM44W4.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TG5LAQYTHZC5PPPLDQHOWIMRK4.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TB3TY6U5FNAKHOYMQSCTTM6SW4.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ECEOGZ7A5BDLPAEFUAZSW5GWBI.png",
  //     "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ZYNL5RLLRBEIHP2RJLJICUQ4SA.png",
  //   ];

  //   cacheImages(urls);
  // });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home url={url} setUrl={setUrl} />}
          />
          <Route exact path="/recipe" render={() => <Recipe url={url} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppWrapper;
