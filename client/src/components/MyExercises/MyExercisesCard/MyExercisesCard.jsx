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
        <div className="card mx-auto" style={{ maxWidth: 500 }}>
            <div className="card-body border">
                {name}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to={'/add-exercise'} className="btn btn-primary me-md-2 btn-sm" type="button">Create</Link>
                    <Link to={`/exercises/${_id}/details`} className="btn btn-primary btn-sm" type="button">Details</Link>
                    <Link to={`/exercises/${_id}/edit`} className="btn btn-primary btn-sm" type="button">Edit</Link>
                    <button className="btn btn-danger btn-sm" type="button" onClick={onDeleteClick} >Delete</button>
                </div>
            </div>
        </div>
    );
};