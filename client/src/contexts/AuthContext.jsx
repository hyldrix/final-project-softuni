import { createContext, useContext } from 'react';
import usePersistedState from '../hooks/usePersistedState.js';



export const AuthContext = createContext({
    username: '',
    email: '',
    _id: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null,
}
);

export function AuthContextProvider(props) {

    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        setAuthState(state);
    };
    const logout = () => {
        setAuthState(null);
    };

    const contextData = {
        username: authState?.username,
        email: authState?.email,
        _id: authState?._id,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.isAuthenticated,
        changeAuthState,
        logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );


}

export function useAuthContext() {


    const authData = useContext(AuthContext);

    return authData;
}