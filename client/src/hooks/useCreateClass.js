import { create, edit } from '../api/classes-api.js';

export const useCreateClass = () => {

    const createHandler = async (data) => {
       create(data);
    };

    return createHandler;
};
export const useEditClass = () => {

    const editHandler = async (id,data) => {
       edit(id,data);
    };

    return editHandler;
};