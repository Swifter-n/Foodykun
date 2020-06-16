import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary sticky-top">
        <Link to='/' className="navbar-brand mb-0 h1">Foodykun</Link>
    </nav>
)

export default Navbar;