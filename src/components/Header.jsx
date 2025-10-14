import React from 'react';
import { NavLink } from 'react-router';


const Header = () => {
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>LogIN</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal space-x-5 font-bold">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;