export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Home
                </a>
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
                            <a className="nav-link" href="#">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Register
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Logout
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Catalog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                My program
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Add exercise
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};