import React from "react";
// import ReactDOM from "react-dom";
// import { Route, BrowserRouter as Router, useHistory, useRouteMatch } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Order from './components/Order';
import Home from "./components/Home";

const showHome = true;

// const noHome() => {showHome = false};
const App = () => {

  return (
  
    <>
    {/* <div>
      {showHome && <Home />}
    </div> */}
      
      <Route exact path="/" component={Home}/>
      <Route path="/order" component={Order}/>

    </>
  );
};
export default App;
