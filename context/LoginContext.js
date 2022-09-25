import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from '../firebase/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

const Context = createContext();

export const LoginContext = ({ children }) => {
  const [user, setUser] = useState({})

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const loginStatus = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  
    return () => {
      loginStatus();
    }
  }, [])
  

  return (
    <Context.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </Context.Provider>
  );
};
export const useLoginContext = () => useContext(Context);