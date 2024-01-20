import "./MyExercises.css";

import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/authContext";
import * as exerciseService from "../../services/exercisesService";
import { MyExercisesCard } from "./MyExercisesCard/MyExercisesCard"


export const MyExercises = () => {
    const { userId } = useContext(AuthContext);
    const [userExercises, setUserExercises] = useState([]);

    useEffect(() => {
        exerciseService.getExerciseByOwner(userId)
            .then((result) => setUserExercises(result))
            .catch((error) => console.log(error))
    }, []);

    return (
        <main id="myExercise">
            <div className="myExercise-text">
                <h1>My Exercises</h1>
            </div>
            {userExercises.map(x => (
                <MyExercisesCard key={x._id} {...x} />
            ))}

            {userExercises.length === 0 && (
                <div className="no-exercises">
                    <p>There are no added exercises yet!</p>
                </div>
            )}
        </main>
    );
};