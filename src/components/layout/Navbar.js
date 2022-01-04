import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFileEarmarkTextFill } from "react-icons/bs";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-md w-50 m-auto">
            <div className="container">
                <a style={{ color: "#f0ad4e" }} className="navbar-brand" href="/">KlayLabs</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink style={{ color: "gray" }} className="nav-link" exact to="/">
                                Defi
                            </NavLink>
                        </li>

                        {/* <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">
                                About
                                </NavLink>
                        </li> */}
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">
                                Contact
                                </NavLink>
                        </li> */}
                    </ul>
                </div>

                <Link className="btn btn-outline-warning" to="/users/add"><BsFileEarmarkTextFill /></Link>

            </div>
        </nav>

    );
};

export default Navbar;