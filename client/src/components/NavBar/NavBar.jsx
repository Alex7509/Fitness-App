import "./NavBar.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext.jsx";

export const NavBar = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/exercises">Exercises</Link>
                </li>
                {isAuth && (
                    <>
                        <li>
                            <Link to="/add-exercise">Add exercise</Link>
                        </li>
                        <li>
                            <Link to="/my-exercises">My exercises</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </>
                )}

                {!isAuth && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav >
    );
};