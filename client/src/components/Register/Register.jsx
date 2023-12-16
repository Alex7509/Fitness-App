import "./Register.css";

import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext.jsx";
import { UseForm } from "../../hooks/useForm";

export const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = UseForm(registerSubmitHandler, {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
            <div className="conteiner min-vh-100 d-flex justify-content-center align-items-center form-control-lg">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <h2>Register</h2>
                        <label htmlFor="exampleInputUsername1">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputUsername1"
                            placeholder="Username"
                            name="username"
                            value={values.username}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
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
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword2"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={onChange}
                        />
                    </div>
                    <div className="text-center form-control-lg">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </div>
    );
};