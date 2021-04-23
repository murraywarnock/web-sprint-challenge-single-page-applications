import React from 'react';
import { Link } from 'react-router-dom';


export default function Pizza(props)  {

    const { values, disabled, change, submit, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };
    
      const onChange = (evt) => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target;
        const valueToUse = (type === "checkbox" ? checked : value);
        change(name, valueToUse);
      };
    

    return (
        <>
        <form action="" className="pizza-form">
            <label>
            Name:&nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                />
            </label>
            {/* if not validating, show error */}
            <div className="errors">{errors.name}</div>
            {/* SIZE DROPDOWN */}
            <div>
            <select value={values.size} name="size" onChange={onChange}>
                <option value="">Size:</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            {/* if not validating, show error */}
            <div className="errors">{errors.size}</div>
            </div>
            {/* ////////// CHECKBOXES ////////// */}
            <div><label>
            Pepperoni
                <input
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni && (values.pepperoni !== "no") ? true :false}
                    onChange={onChange}
                />
            </label></div>
            <div><label>
            Onion
                <input
                    type="checkbox"
                    name="onion"
                    checked={values.onion && (values.onion !== "no") ? true :false}
                    onChange={onChange}
                />
            </label></div>
            <div><label>
            Peppers
                <input
                    type="checkbox"
                    name="peppers"
                    checked={values.peppers && (values.peppers !== "no") ? true :false}
                    onChange={onChange}
                />
            </label></div>
            <div><label>
            Anchovies
                <input
                    type="checkbox"
                    name="anchovies"
                    checked={values.anchovies && (values.anchovies !== "no") ? true :false}
                    onChange={onChange}
                />
            </label></div>
            <label>
            Special instructions:&nbsp;
                <input
                    value={values.special}
                    onChange={onChange}
                    name="special"
                    type="text"
                />
            </label>
            <div><button 
                id="order-button" 
                disabled={disabled}
                onClick={onSubmit}>Add an order 
            </button></div>
        </form>         
        
        </>

    )
};
