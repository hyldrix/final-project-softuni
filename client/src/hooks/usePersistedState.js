import { useState } from 'react';

export default function usePersistedState(initialState) {

    const [state, setState] = useState(() => {

        const persistedAuth = localStorage.getItem('auth');
        if (!persistedAuth) {
            if (typeof initialState === 'function') {
                return initialState();
            } else {
                return initialState;
            }
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    });


    const updateState = (value) => {

        const newState = typeof value === 'function'
            ? value(state)
            : value;

        if (newState === null || newState === undefined) {
            localStorage.removeItem('auth');
        } else {
            localStorage.setItem('auth', JSON.stringify(newState));
        }

        setState(newState);

    };



    return [state, updateState];

}