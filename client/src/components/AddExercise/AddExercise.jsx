import { useContext } from "react";

import { UseForm } from "../../hooks/useForm";
import { ExerciseContext } from "../../contexts/exerciseContext.jsx";

export const AddExercise = () => {
    const { addExerciseSubmit } = useContext(ExerciseContext);
    const { values, onChange, onSubmit } = UseForm(addExerciseSubmit, {
        imageUrl: '',
        name: '',
        workingMuscles: '',
        description: '',
        likes: [],
    });

    return (
        <div className="conteiner min-vh-100 d-flex justify-content-center align-items-center form-control-lg">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <h2>Add exercise</h2>
                    <label htmlFor="formGroupExampleInput">Image Url</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Image Url"
                        name="imageUrl"
                        value={values.imageUrl}
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
                        value={values.name}
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
                        value={values.workingMuscles}
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
                        value={values.description}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};