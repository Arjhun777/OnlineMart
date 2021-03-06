import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes"

// parent component for admin
class App extends Component {
  render() {
    return (
      <Router>
        {routes}
      </Router>
    );
  }
}

export default App;
