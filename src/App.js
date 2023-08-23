import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Copyright from "./components/Copyright";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router className="app">
      <NavBar id="nav-bar" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/details/:id" exact component={MovieDetails} />
        <Route path="/contact" exact component={Contact} />
        <Route path="*" exact component={NotFound} />
      </Switch>
      <Copyright />
    </Router>
  );
}

export default App;
