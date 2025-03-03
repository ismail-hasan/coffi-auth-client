import React, { createContext, useState } from 'react';
import auth from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState({ name: "isamil" })
    const [loading, setLoading] = useState(true)


    // fireBase auth start 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        users,
        loading,
        createUser,
        SignInUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;