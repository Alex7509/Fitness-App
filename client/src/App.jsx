import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { AuthContext } from "./contexts/authContext";
import * as authService from "./services/authService";


function App() {
    const navigate = useNavigate();

    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate('/');
    }

    const contextValues = {
        loginSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuth: !!auth.username,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                <Footer />
            </AuthContext.Provider>
        </>
    )
}

export default App
