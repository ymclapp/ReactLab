//import { createContext, useContext } from 'react'

//export const AuthContext = createContext();

export default function useAuth() {
    return {
    //user: { username: "Yvette"},
    user: null,

    //const auth = useContext(AuthContext);
   // if(!auth) throw new Error ("You forgot AuthProvider!");
   // return auth;
}

//export function AuthProvider(props) {
//    const state = {
//        user: {username:  "Yvette"}, 
        //proof of life - then change to just --> user, 
    //};
 //   }
   // return {
     //   <AuthContext.Provider value={state}>
     //   {props.children}
     //   </AuthContext.Provider>
   // }
}

