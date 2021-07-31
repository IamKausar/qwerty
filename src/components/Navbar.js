import React from 'react'
import './Navbar.css';
import { Route, Switch, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="heading">JGEC E-LAB</h1>

            <Link to="/homepage" exact>Home</Link>


        </div>
    )
}

export default Navbar
