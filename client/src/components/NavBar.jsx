import { Link } from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">
                                Logout
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">
                                Catalog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-exercise">
                                Add exercises
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                My program
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};