import { createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as exerciseService from "../services/exercisesService";

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
    const navigate = useNavigate();
    const { exerciseId } = useParams();
    const [exercise, setExercise] = useState({});

    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then(setExercise);
    }, [exerciseId]);

    const onEditSubmit = async (values) => {
        await exerciseService.edit(values._id, values);

        navigate(`exercises/${values._id}/details`);
    }

    const contextValues = {
        onEditSubmit,
    };

    return (
        <ExerciseContext.Provider value={contextValues}>
            {children}
        </ExerciseContext.Provider>
    );
}