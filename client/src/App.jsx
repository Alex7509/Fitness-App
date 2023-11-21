import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { About } from "./components/About";
import { Login } from "./components/Login";

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

    return (
        <>
            <AuthContext.Provider value={{ loginSubmitHandler }}>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <Footer />
            </AuthContext.Provider>
        </>
    )
}

export default App
