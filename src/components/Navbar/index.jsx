import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Navbar(){
    return(
        <nav className="navbar">
            <h2>
                <Link to={'/'}>Blog</Link>
            </h2>

            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/usuarios'}>Usuarios</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar