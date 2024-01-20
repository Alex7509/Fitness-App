import "./Details.css";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as exerciseService from "../../services/exercisesService";
import { AuthContext } from "../../contexts/authContext";
import { ExerciseContext } from "../../contexts/exerciseContext";

export const Details = () => {
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({});
    const { exerciseId } = useParams();
    const { userId } = useContext(AuthContext);
    const { onDelete } = useContext(ExerciseContext);


    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then((result) => {
                setExercise(result);
            })
    }, [exerciseId]);

    const isOwner = userId === exercise._ownerId;

    const onDeleteClick = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${exercise.name}`);

        if (isConfirmed) {
            try {
                await exerciseService.deleteExercise(exerciseId);

                onDelete(exerciseId);

                navigate('/exercises');
            } catch (error) {
                console.log(error);
            }
        }
    };


    return (
        <main id="details">
            <section id="details-info">
                <div className="exercise-image">
                    <img src={exercise.imageUrl} />
                </div>
                <div className="exercise">
                    <div className="exercise-text">
                        <h1 id="name">{exercise.name}</h1>
                        <p id="muscle">
                            <span>Working muscles: {exercise.workingMuscles}</span>
                        </p>
                        <p id="description">
                            {exercise.description}
                        </p>
                    </div>
                    {isOwner && (
                        <div className="product-btn">
                            <div className="author">
                                <Link to={`/exercises/${exerciseId}/edit`} className="btn-edit">
                                    Edit
                                </Link>
                                <button className="btn-delete" onClick={onDeleteClick}>
                                    Delete
                                </button>
                            </div>
                        </div>)} 
                </div>
            </section>
        </main>
    );
};