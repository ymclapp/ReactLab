import { createContext, useContext, useState } from 'react'
//import jwt from 'json'

//Normally get this from our environment
const usersAPI = 'https://deltav-todo.azurewebsites.net/api/v1/Users';

//React Magic!
export const AuthContext = createContext();

export default function useAuth() {
    //return {
    //proof of life
    //user: { username: "Yvette"},
    //user: null,

    const auth = useContext(AuthContext);
    if (!auth) throw new Error("You forgot AuthProvider!");
    return auth;
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null);

    const auth = {
        //user: null,
        user,

        login,
        logout,
    };

    async function login(loginData) {
        //console.log(loginData);

        const result = await fetch(`${usersAPI}/Login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        const resultBody = await result.json();
        //console.log(resultBody)

        if (result.ok) {
            setUser(resultBody);
        } else {
            console.warn('auth failed', resultBody);
        }
      //console.log(resultBody)
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

