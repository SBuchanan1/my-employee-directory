
import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from './components/NavBar';
// import MainPage from "./containers/MainPage";

// Will need:
// Router
// NavBar
// Route for home "/", whic will be the directory

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}

export default App;
