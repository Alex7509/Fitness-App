import * as request from "../lib/requester";

const baseUrl = 'http://localhost:3030/data/exercises';

export const getAll = async () => {
    const result = request.get(baseUrl);

    return result;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};

export const getOne = async (exerciseId) => {
    const result = await request.get(`${baseUrl}/${exerciseId}`);

    return result;
};