import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut, updateProfile
} from "firebase/auth";
import { clearCookie } from "../../api/auth";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        setLoding(true);
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const resetPassword = (email) => {
        setLoding(true);
        return sendPasswordResetEmail(auth, email);
    }
    const logOut =async () => {
        setLoding(true);
        await clearCookie();
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    // On auth state change...........
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoding(false);
        })
        return () => {
            return unSubscribe;
        }
    }, [auth]);

    const authInfo = {
        loding,
        user,
        setLoding,
        signInWithGoogle,
        createUser,
        signIn,
        resetPassword,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;