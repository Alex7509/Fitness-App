import { useNavigate } from "react-router-dom";

import * as exerciseService from "../../services/exercisesService";

export const AddExercise = () => {
    const navigate = useNavigate();

    const addExerciseSubmit = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await exerciseService.create(data);

            navigate('/exercises');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="conteiner min-vh-100 d-flex justify-content-center align-items-center form-control-lg">
            <form onSubmit={addExerciseSubmit}>
                <div className="form-group">
                    <h2>Add exercise</h2>
                    <label htmlFor="formGroupExampleInput">Image Url</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Image Url"
                        name="imageUrl"
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
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};