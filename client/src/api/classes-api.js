import requester from './requester.js';

const BASE_URL = 'http://localhost:3030/data/';


export const create = async (data) => {

    const authData = await requester.post(BASE_URL + 'classes', { ...data });
    return authData;
};

export const edit = async (id, data) => {

    const authData = await requester.put(`${BASE_URL}classes/${id}`, { ...data });
    return authData;
};
export const del = async (id) => {

    const authData = await requester.del(`${BASE_URL}classes/${id}`);
    return authData;
};



export const getAllClasses = async () => {
    const urlParams = new URLSearchParams({
        sortBy: 'date, timestart',
    });
    const classes = await requester.get(`${BASE_URL}classes?${urlParams.toString()}`);
    const returnClasses = Object.values(classes);
    return returnClasses;
};

export const getSignedClasses = async (userId) => {
    const urlParams = new URLSearchParams({
        sortBy: 'date, timestart',
    });
    const classes = await requester.get(`${BASE_URL}myclasses?${urlParams.toString()}`);
    const returnClasses = Object.values(classes);

      
    const filteredClases = returnClasses.filter(
        (c) => {return userId === c._ownerId}
    );

    return filteredClases;
};
export const getAllSignedClasses = async () => {
    const urlParams = new URLSearchParams({
        sortBy: 'date, timestart',
    });
    const classes = await requester.get(`${BASE_URL}myclasses?${urlParams.toString()}`);

    const returnClasses = Object.values(classes);
    
    return returnClasses;
};

export const cancelClass = async (id) => {
    const authData = await requester.del(`${BASE_URL}myclasses/${id}`);
    return authData;
}


export const getClassById = async (id) => {
    const classData = await requester.get(`${BASE_URL}classes/${id}`);
    return classData;
};

export const registerToClass = async (userid, classData) => {

    const authData = await requester.post(BASE_URL + 'myclasses/', { ...classData });
    return authData;
};

export const isSignedForClass = async (userid, classid) => {
    const classes = await requester.get(BASE_URL + 'myclasses/');
  
    const filteredClases = classes.some(
        (c) => {return userid === c._ownerId && c.classId === classid}
    );
    console.log(filteredClases)
    return filteredClases;

};