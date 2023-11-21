import { useState } from "react";


export const UseForm = (initialValues, submitHandler) => {
    const [values, setValues] = useState();

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,

        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit,
    };
};