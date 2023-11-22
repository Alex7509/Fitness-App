import * as request from "../lib/requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => request.post(`${baseUrl}/login`, {
    email,
    password,
});



export const register = (data) => request.post(`${baseUrl}/register`, data);