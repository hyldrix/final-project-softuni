export const getAccessToken = () => {
    const authJSON = localStorage.getItem('auth');

    if (!authJSON) {
        return '';
    } else {
        return JSON.parse(authJSON).accessToken;
    }



};

export const isAdmin = () => {
    const authJSON = localStorage.getItem('auth');

    let result = false;

    if (!authJSON) {
        result = false;
    } else {
        result = JSON.parse(authJSON)._id;
    }
    console.log(result === '60f0cf0b-34b0-4abd-9769-8c42f830dffc');
    return result === '60f0cf0b-34b0-4abd-9769-8c42f830dffc';

};