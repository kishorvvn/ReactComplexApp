import React from "react";
import ReactDOM from "react-dom";
// to export these react libraries to the user install webpack, webpack=cli and webpack-dev-server
// create a file 'webpack.config.js'
// add a text in row format

// to have routes working
import { BrowserRouter, Switch, Route } from "react-router-dom";

// My components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
// install react-router-dom for fixing the routes
import About from "./components/About";
import Terms from "./components/Terms";

function Main() {
  return (
    // empty react tags to avoid unnecessary divs
    // <>
    <BrowserRouter>
      {/* calling Header component */}
      <Header />
      {/* seting up routes within Switch tags */}
      <Switch>
        {/* exact keyword will redirect to home page when '/' is typed in */}
        <Route path="/" exact>
          <HomeGuest />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
     
      {/* calling Footer component */}
      <Footer />
      {/* </>  closing react tag*/}
    </BrowserRouter>
  );
}

// render an empty div with an id "app" with "ExampleComponent"
ReactDOM.render(<Main />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
