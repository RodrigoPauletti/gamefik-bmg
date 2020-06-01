import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/Home";
import Results from "./pages/Results";
import { GlobalStyle } from "./styles";

library.add(faUserCircle, faAngleLeft, faAngleRight, faAngleDown);

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/resultado">
        <Results />
      </Route>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
