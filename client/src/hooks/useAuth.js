import { login, logout, register } from '../api/auth-api.js';
import { useAuthContext } from '../contexts/AuthContext.jsx';

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();
    const loginHandler = async (email, password) => {
        const authData = await login(email, password);
        changeAuthState(authData);

        return authData;
    };


    return loginHandler;

};


export const useRegister = () => {

    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password, username) => {



        const authData = await register(email, password, username);
        authData.password = null;
        changeAuthState(authData)

        return authData;

    };

    return registerHandler;

};

export const useLogout = () => {

    const { changeAuthState } = useAuthContext();

    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        localLogout();
        await logout();
        
    };

    return logoutHandler;
};
