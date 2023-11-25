import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as exerciseService from "../../services/exercisesService";

export const Details = () => {
    const [exercise, setExercise] = useState({});
    const { exerciseId } = useParams();

    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then(setExercise);
    }, [exerciseId]);

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
                    {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to={`/exercise/${exerciseId}/edit`} className="btn btn-primary me-md-2">
                            Edit
                        </Link>
                        <Link to={`/exercise/${exerciseId}/delete`} className="btn btn-danger" >
                            Delete
                        </Link>
                    </div> */}
                </div>
                {/* <Link to={"#"} className="btn btn-primary">Add to my program</Link> */}
            </div>
        </div>

    );
};