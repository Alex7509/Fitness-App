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
        <>
            <div className="text-center">
                <h1>My program</h1>
            </div>
            {userExercises.map(x => (
                <MyExercisesCard key={x._id} {...x} />
            ))}

            {userExercises.length === 0 && (
                <p className="text-center fs-1">There are no added exercises yet.</p>
            )}
        </>
    );
};