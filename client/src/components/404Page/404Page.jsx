import "./404page.css";

import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
        <main id="errorPage">
            <div className="page">
                <p>404</p>
                <Link to={'/'} className="goHome">Go home</Link>
            </div>
        </main>
    );
};