import { useEffect, useReducer, useState } from 'react';
import { getAllSignedClasses, getSignedClasses } from '../api/classes-api.js';
function classesReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL_MY_CLASSES':
            return action.payload;
        case 'DELETE_CLASS': {
            let newState = state.filter((classItem) => classItem.classId !== action.payload.id);
            return [...newState];
            if (newState) {
                return [...state];
            }

            return newState;
        };
        
        default:
            return state;
    }
}
export function useGetMyClasses(userId) {

    const [isLoading, setIsLoading] = useState(false);

       const [classes, dispatch] = useReducer(classesReducer, []);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const classes = await getSignedClasses(userId);
                console.log(classes);
                dispatch({ type: 'GET_ALL_MY_CLASSES', payload: classes });
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => setIsLoading(false), 1500);

            }
        })();

    }, [userId]);

    return [classes, dispatch, isLoading];

}
export function useGetAllClasses() {

    const [isLoading, setIsLoading] = useState(false);

   

    const [classes, dispatch] = useReducer(classesReducer, []);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const classes = await getAllSignedClasses();
                console.log(classes);
                dispatch({ type: 'GET_ALL_MY_CLASSES', payload: classes });
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => setIsLoading(false), 1500);

            }
        })();

    }, []);

    return [classes, dispatch, isLoading];

}