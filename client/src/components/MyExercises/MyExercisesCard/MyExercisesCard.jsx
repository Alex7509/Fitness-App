import "./MyExercisesCard.css";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import * as exerciseService from "../../../services/exercisesService";
import { ExerciseContext } from "../../../contexts/exerciseContext";

export const MyExercisesCard = ({
    name,
    _id,
}) => {
    const navigate = useNavigate();
    const { onDelete } = useContext(ExerciseContext);

    const onDeleteClick = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${name}`);

        if (isConfirmed) {
            try {
                await exerciseService.deleteExercise(_id);

                onDelete(_id);

                navigate('/exercises');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="card mx-auto bg-dark" style={{ maxWidth: 600 }}>
            <div className="myExercises-card">
                <p>{name} </p>
                <div className="myExercises-buttons">
                    <Link to={'/add-exercise'} className="myExercises-create" type="button">Create</Link>
                    <Link to={`/exercises/${_id}/details`} className="myExercises-details" type="button">Details</Link>
                    <Link to={`/exercises/${_id}/edit`} className="myExercises-edit" type="button">Edit</Link>
                    <button className="myExercises-delete" type="button" onClick={onDeleteClick} >Delete</button>
                </div>
            </div>
        </div>
    );
};
