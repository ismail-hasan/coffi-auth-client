import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';

const Navbar = () => {
    // const { users } = useContext(AuthContext)
    // console.log(users)

    const links = <>
        <ul> <li><NavLink to={"/"}>Home</NavLink></li></ul>
        <><NavLink to={"/login"}>Login</NavLink></>
        <><NavLink to={"/signup"}>Sign Up</NavLink></>
        <><NavLink to={"/users"}>Users</NavLink></>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {links}
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;