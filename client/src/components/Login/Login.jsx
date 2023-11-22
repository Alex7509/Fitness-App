import { useContext } from "react";

import { UseForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/authContext";

export const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = UseForm(loginSubmitHandler, {
        email: '',
        password: '',
    });


    return (
        <div className="conteiner min-vh-100 d-flex justify-content-center align-items-center form-control-lg">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </div>
                <div className="text-center form-control-lg">
                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    );
};