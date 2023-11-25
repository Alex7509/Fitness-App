import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { AddExercise } from "./components/AddExercise/AddExercise";
import { Exercises } from "./components/Exercises/Exercises";

import { AuthProvider } from "./contexts/authContext";

function App() {
    return (
        <AuthProvider>
            <>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/exercises" element={<Exercises />} />
                    <Route path="/add-exercise" element={<AddExercise />} />
                </Routes>
            </>
        </AuthProvider>
    );
};

export default App
