import { Link } from "react-router-dom";

export const ExerciseCard = ({
    imageUrl,
    name,
    _id,
}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={imageUrl} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    To see more information about the exercise, press the details button.
                </p>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to={`${_id}/details`} className="btn btn-primary">
                        Details
                    </Link>
                    <a href="#" className="btn btn-primary">
                            Edit
                        </a>
                        <a href="#" className="btn btn-danger">
                            Delete
                        </a>
                </div>
            </div>
            <a href="#" className="btn btn-primary">
                    Add to my program
                </a>
        </div>
    );
};
