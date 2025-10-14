import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal space-x-5 font-bold">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/login'}>Google Log-IN</NavLink>
                    <NavLink to={'/github'}>GitHub Log-IN</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;