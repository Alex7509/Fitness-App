import { Routes, Route, useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";

import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { AddExercise } from "./components/AddExercise/AddExercise";
import { Details } from "./components/Details/Details";
import { Exercises } from "./components/Exercises/Exercises";
import { Edit } from "./components/Edit/Edit";
import { MyExercises } from "./components/MyExercises/MyExercises";
import { ErrorPage } from "./components/404Page/404Page";

import { AuthProvider } from "./contexts/authContext";
import * as exerciseService from "./services/exercisesService";

function App() {
    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        exerciseService.getAll()
            .then((result) => setExercises(result))
    }, [])


    const addExerciseSubmit = async (values) => {
        try {
            const newExercise = await exerciseService.create(values)
    
            setExercises(state => [...state, newExercise]);

            navigate('/exercises');
        } catch (error) {
            console.log(error);
        }
    };

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
                    <Route path="/add-exercise" element={<AddExercise addExerciseSubmit={addExerciseSubmit} />} />
                    <Route path="/exercises/:exerciseId/details" element={<Details />} />
                    <Route path="/exercises/:exerciseId/edit" element={<Edit />} />
                    <Route path="/my-exercises" element={<MyExercises />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </>
        </AuthProvider>
    );
};

export default App
