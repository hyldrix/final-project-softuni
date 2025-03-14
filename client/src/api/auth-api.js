import requester from './requester.js';

const BASE_URL = 'http://localhost:3030/users/';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */

export const login = async (email, password) => {

    const authData = await requester.post(BASE_URL + 'login', { email, password });
    return authData;
};

export const register = async (email, password, username) => {

    console.log(username)
    const authData = await requester.post(BASE_URL + 'register', { email, password, username });
    return authData;
};

export const logout = () => requester.get(BASE_URL + 'logout')