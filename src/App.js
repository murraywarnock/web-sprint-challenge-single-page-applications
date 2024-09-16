import React, { useState, useEffect, useHistory } from "react";
// import ReactDOM from "react-dom";
// import { Route, BrowserRouter as Router, useHistory, useRouteMatch } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Pizza from './components/Pizza';
import Home from "./components/Home";
import Success from "./components/Success";
import axios from "axios";
import schema from "./validation/pizzaSchema";
import * as yup from "yup";


const App = () => {

  const initialFormValues = {
      name: "",
      size: "",
      pepperoni: false,
      onion: false,
      peppers: false,
      anchovies: false,
      special: "",
  }
  const initialFormErrors = {
    name: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);

  // This is where we would record a new pizza order
  // 
  const postNewPizza = (newPizza) => {
    console.log("Post newPizza order:", newPizza);
    //    POST] `newPizza` to `https://reqres.in/api/orders`
    axios
      .post("https://reqres.in/api/orders", newPizza)
      .then((res) => {
        console.log("Post response:", res)
      })
      .catch((err) => {
        console.log(err);
        debugger;
      })
    };


  const inputChange = (name, value) => {
       // RUN VALIDATION WITH YUP
    yup
      .reach(schema, name) // get to this part of the schema
      //we can then run validate using the value
      .validate(value) // validate this value
      .then(() => {
        // happy path and clear the error
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      pepperoni: formValues.pepperoni,
      onion: formValues.onion,
      peppers: formValues.peppers,
      anchovies: formValues.anchovies,
      special: formValues.special,
    };
    // console.log("newPizza:",newPizza)
    // 🔥 STEP 8- POST NEW USER USING HELPER
    postNewPizza(newPizza);
    // if postNewPizz successful, change URL to /success
    // useHistory().push('/success');

  };

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return ( 
    <>
    <header>
      <Link to="/">
        <div><button>Home</button></div>
      </Link>
    </header>
      {/* Routing to Home and Order components */}
      <Route exact path="/">
        <Home />
      </Route> 
      <Route  path="/pizza">
        <Pizza  
          values={formValues} 
          disabled = {disabled} 
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
        />
      </Route> 
      <Route path="/success">
        <Success />
      </Route> 
      
 
      {/* <Route path="/pizza" component={Pizza values = {formValues} } disabled = {disabled}} /> */}

      {/* <Route path="/pizza" component={Pizza} /> */}

    </>
  );
};
export default App;
