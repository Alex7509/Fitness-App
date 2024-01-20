import "./ExerciseCard.css";

import { Link } from "react-router-dom";

export const ExerciseCard = ({
    imageUrl,
    name,
    workingMuscles,
    _id,
}) => {

    return (
            <div className="exercise">
                <div className="exercise-img">
                    <img src={imageUrl} />
                </div>
                <div className="exercise-info">
                    <h1>{name}</h1>
                    <p>
                        <span>Working Muscles: </span>{workingMuscles}
                    </p>
                </div>
                <Link to={`${_id}/details`} className="btn-details">
                    Details
                </Link>
            </div>
    );
};
