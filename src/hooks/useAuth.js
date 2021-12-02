import { createContext, useContext } from 'react'

export const AuthContext = createContext();

export default function useAuth() {
    //return {
    //proof of life
    //user: { username: "Yvette"},
    //user: null,

    const auth = useContext(AuthContext);
    if(!auth) throw new Error ("You forgot AuthProvider!");
    return auth;
}

export function AuthProvider(props) {
    const state = {
        user: null, 
        login,
    };

    async function login(loginData) {
        console.log(loginData);
    }

    return (
        <AuthContext.Provider value={state}>
        {props.children}
        </AuthContext.Provider>
    )
}

