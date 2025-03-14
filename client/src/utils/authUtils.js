export const getAccessToken = () => {
    const authJSON = localStorage.getItem('accessToken');

    if (!authJSON) {
        return '';
    }

    

    return authJSON;
};