import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import MovieDetails from "../MovieDetails/MovieDetails";

class App extends React.Component {
   render() {
      return (
         <Router>
            <Header />

            <Route exact path='/' component={Home} />
            <Route path='/search/:title' component={SearchResults} />
            <Route path='/film/:id' component={MovieDetails} />
         </Router>
      );
   }
}

export default App;
