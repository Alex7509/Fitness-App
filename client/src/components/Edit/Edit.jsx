import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as exerciseService from "../../services/exercisesService";

export const Edit = () => {
    const navigate = useNavigate();
    const { exerciseId } = useParams();
    const [exercise, setExercise] = useState({
        imageUrl: '',
        name: '',
        workingMuscles: '',
        description: '',
    });

    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then(result => {
                setExercise(result);
            });
    }, [exerciseId]);

    const onEditSubmit = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        await exerciseService.edit(exerciseId, values);

        navigate(`/exercises/${exerciseId}/details`);
    };

    const onChange = (e) => {
        setExercise(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="conteiner min-vh-100 d-flex justify-content-center align-items-center form-control-lg">
            <form onSubmit={onEditSubmit}>
                <div className="form-group">
                    <h2>Edit exercise</h2>
                    <label htmlFor="formGroupExampleInput">Image Url</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Image Url"
                        name="imageUrl"
                        value={exercise.imageUrl}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Exercise name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Name"
                        name="name"
                        value={exercise.name}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Working muscles</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Working muscles"
                        name="workingMuscles"
                        value={exercise.workingMuscles}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={5}
                        placeholder="Description"
                        name="description"
                        value={exercise.description}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    );
};