import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext.jsx";

export const NavBar = () => {
    const { isAuth, username } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                {isAuth && (
                    <span className="text-dark">
                        Welcome {username}
                    </span>
                )}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/exercises">
                                Exercises
                            </Link>
                        </li>
                        {!isAuth && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}

                        {isAuth && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/add-exercise">
                                        Add exercise
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/my-program">
                                        My program
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/logout">
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav >
    );
};