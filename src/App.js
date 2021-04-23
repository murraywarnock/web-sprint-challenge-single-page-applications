import React from "react";
// import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, useHistory, useRouteMatch } from 'react-router-dom';
import Order from './components/Order';
// import App from "./App";

const App = () => {

  
  return (
  
    <><header class="app-header">
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <button>Pizza?</button>
      </header>
      <Order />

      <Route exact path="/" component={App}/>
      <Route path="/order" component={Order} />


    </>
  );
};
export default App;
