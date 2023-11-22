import { useContext } from "react";
import { Link } from "react-router-dom";


import { AuthContext } from "../contexts/authContext";


export const NavBar = () => {
    const { isAuth, username } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {isAuth && (
                    <span class=" text-white">
                        Welcome {username}
                    </span>
                )}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">
                                Catalog
                            </Link>
                        </li>
                        {!isAuth && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}

                        {isAuth && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add-exercise">
                                        Add exercises
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        My program
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
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