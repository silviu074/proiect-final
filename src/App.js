import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import {
  Home,
  About,
  Services,
  SpecialOffers,
  Housing,
  Flights,
  // Calculator,
} from "./pages";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/flights" exact>
            <Flights />
          </Route>
          <Route path="/housing" exact>
            <Housing />
          </Route>
          <Route path="/specialoffers" exact>
            <SpecialOffers />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
