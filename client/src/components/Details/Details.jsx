import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as exerciseService from "../../services/exercisesService";
import { AuthContext } from "../../contexts/authContext";

export const Details = () => {
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({});
    const { exerciseId } = useParams();
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then(setExercise);
    }, [exerciseId]);

    const isOwner = userId === exercise._ownerId;

    const onDeleteClick = async () => {
        await exerciseService.deleteExercise(exerciseId, exercise);

        setExercise(state => state.filter(exercise => exercise._id !== exerciseId));

        navigate('/exercises');
    };

    return (
        <div className="card mx-auto" style={{ maxWidth: 800 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={exercise.imageUrl} className="img-fluid rounded-start" alt={exercise.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{exercise.name}</h5>
                        <p className="card-text">
                            {exercise.description}
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary">Working muscles: {exercise.workingMuscles}</small>
                        </p>
                    </div>
                    {isOwner && (
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link to={`/exercise/${exerciseId}/edit`} className="btn btn-primary me-md-2">
                                Edit
                            </Link>
                            <button className="btn btn-danger" onClick={onDeleteClick} >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
                {/* <Link to={"#"} className="btn btn-primary">Add to my program</Link> */}
            </div>
        </div>

    );
};