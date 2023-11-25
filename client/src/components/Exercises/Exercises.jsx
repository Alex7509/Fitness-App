import { useEffect, useState } from "react";

import { ExerciseCard } from "./ExerciseCard/ExerciseCard";
import * as exercisesService from "../../services/exercisesService";

export const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        exercisesService.getAll()
            .then((result) => setExercises(result));
    }, []);

    return (
        <div className="row">
            {exercises.map(exercise => (
                <ExerciseCard key={exercise._id} {...exercise} />
            ))}

            {exercises.length === 0 && (
                <p className="text-center fs-1">There are no added exercises yet.</p>
            )}
        </div>
    );
};