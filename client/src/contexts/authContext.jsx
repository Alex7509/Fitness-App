import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

import * as authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');


    };

    const registerSubmitHandler = async (values) => {
        if (values.password !== values.confirmPassword) {
            return toast.error('Passwords missmatch');
        }

        if (values.username === '' ||
            values.email === '' ||
            values.password === '' ||
            values.confirmPassword === '') {
            toast.error('All fields are required');
        }

        if (values.username.length < 4) {
            toast.error('Username must be 4 characters long')
        }

        if (values.password.length < 5) {
            toast.error('Password must be 5 characters long')
        }

        const result = await authService.register(values.username, values.email, values.password);

        try {
            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate('/');
        } catch (error) {
            console.log(error);
        }

    };

    const logoutHandler = (e) => {
        setAuth({});

        localStorage.removeItem('accessToken');

        navigate('/');
    };

    const contextValues = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        userId: auth._id,
        username: auth.username,
        email: auth.email,
        isAuth: !!auth.username,
        userData: auth,
        token: auth.accessToken,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};