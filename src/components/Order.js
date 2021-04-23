import React from 'react';
import { Link } from 'react-router-dom';

// showHome = false;

export default function Order()  {

    return (
        <>
        <p>Order component</p>            
        <Link to="/">
        <div><button>Home</button></div>
        </Link>
        </>

    )
};
