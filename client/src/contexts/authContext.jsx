import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
            return;
        }

        const result = await authService.register(values.username, values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    };

    const logoutHandler = () => {
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
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};