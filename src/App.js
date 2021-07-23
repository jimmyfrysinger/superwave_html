//react
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CSS
import "./reset.css";
import "./fonts.css";
import "./App.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div id="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/:id" component={About} />
          <Route exact path="/work/" component={Work} />
          <Route exact path="/work/:id" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
