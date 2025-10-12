import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Google Log-IN</NavLink>
            <NavLink to={'/github'}>GitHub Log-IN</NavLink>
            
        </nav>
    );
};

export default Header;