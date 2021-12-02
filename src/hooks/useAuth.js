import { createContext, useContext, useState, useMemo } from 'react'
import jwt from 'jsonwebtoken'

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

    const auth = useMemo(() => ({
        //user: null,
        user,

        login,
        logout,
    }), [user]);

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
        console.log(resultBody)

        if (result.ok) {
            let user = processUser(resultBody)
            setUser(user);
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

function processUser(user) {
    if (!user) return null;

    try {
        const payload = jwt.decode(user.token);
        if(payload) {
            //Copy everything from the payload into user
            Object.assign(user, payload);

            console.log(user)
            return user;
        }
    }
    catch(e) {
        console.warn(e);
    }

    return null;
}

