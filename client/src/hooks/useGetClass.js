import { useState, useEffect } from 'react';
import { getAllClasses, getClassById } from '../api/classes-api.js';

export function useGetAllClasses() {
    let [classes, setClasses] = useState([]);
    let [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setisLoading(true);
            try {
                getAllClasses()
                    .then(result => setClasses(result))
                    
            
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => setisLoading(false), 1500)
            }
            
        })();
    }, []);

    return [classes, isLoading];

}export function useGetClasssById(id) {
    let [classes, setClasses] = useState([]);
    let [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setisLoading(true);
            try {
                getClassById(id)
                    .then(result => setClasses(result))
                    
            
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => setisLoading(false), 1500)
            }
            
        })();
    }, []);

    return [classes, isLoading];

}