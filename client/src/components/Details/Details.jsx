import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as exerciseService from "../../services/exercisesService";
import { AuthContext } from "../../contexts/authContext";
import { toast } from "react-toastify";
import { ExerciseContext } from "../../contexts/exerciseContext";

export const Details = () => {
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({});
    const [likes, setLikes] = useState([]);
    const { exerciseId } = useParams();
    const { userId, isAuth } = useContext(AuthContext);
    const { onDelete } = useContext(ExerciseContext);


    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then((result) => {
                setExercise(result);
                setLikes(result.likes);
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


    const onLikeClick = () => {
        if (!likes.includes(userId)) {
            likes.push(userId);
            exerciseService.like(exerciseId, exercise)
                .then((result) => {
                    setExercise(state => ({ ...state, likes: result.likes }))
                }).catch((error) => console.log(error))
        } else {
            toast.error('You liked this already');
        }
    };

    return (
        <div className="card mx-auto" style={{ maxWidth: 600 }}>
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
                            <Link to={`/exercises/${exerciseId}/edit`} className="btn btn-primary me-md-2">
                                Edit
                            </Link>
                            <button className="btn btn-danger" onClick={onDeleteClick}>
                                Delete
                            </button>
                        </div>
                    )}
                    {isAuth && (
                        <button className="btn btn-primary" onClick={onLikeClick}>
                            Like
                        </button>
                    )}
                </div>
                <h6 className="text-center">{likes.length} likes</h6>
            </div>
        </div>

    );
};