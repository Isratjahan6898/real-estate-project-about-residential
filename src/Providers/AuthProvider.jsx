import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confiq";


 export const AuthContext = createContext (null);
 const auth =getAuth(app)

 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    console.log(user)
    const [loading, setLoading]= useState(true);
 
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth,email,password);
    }


    const updateUserProfile = (name,image)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut= ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = ()=>{
        setLoading(true);
         return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = ()=>{
        setLoading(true);
        return  signInWithPopup(auth, githubProvider)
    }

    useEffect(()=>{
     const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
         unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        logOut,
        signIn,
        googleLogin, 
        githubLogin,
        updateUserProfile 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
