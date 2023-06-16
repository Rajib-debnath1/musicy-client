/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { MainApi } from "../Pages/Shared/MainApi";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [mode, setMode] = useState(false)

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password);
    }


    
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    const providers = new GoogleAuthProvider()

    const googleSign = () => {
      return signInWithPopup(auth, providers);
    };


    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])


    const [roleData,setRoleData] = useState("")

    useEffect(()=>{
        fetch(`${MainApi}/checkRole/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setRoleData(data?.role))
    },[user?.email])

    console.log(roleData, 'role data from check role');

    const authInfo = {

        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSign,
        roleData,
        mode, 
        setMode
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;