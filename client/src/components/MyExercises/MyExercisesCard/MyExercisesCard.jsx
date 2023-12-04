import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as exerciseService from "../../../services/exercisesService";


export const MyExercisesCard = ({
    name,
    _id,
}) => {
    const navigate = useNavigate();

    const onDeleteClick = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${name}`);

        if (isConfirmed) {
            try {
                await exerciseService.deleteExercise(_id);

                navigate('/my-exercises');
            } catch (error) {
                console.log(error);
                navigate('/my-exercises');
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
                    <button className="btn btn-danger btn-sm" type="button" onClick={onDeleteClick}>Delete</button>
                </div>
            </div>
        </div>
    );
};