import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <>

        <Link to="/"></Link>
        <Link className="navabout" to="/about">About</Link>
        </>
    )
}