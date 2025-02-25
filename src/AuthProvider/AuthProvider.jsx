import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null)
const  provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [lodging, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password)
  }
  const loginwithpopup = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
    
  } 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false)
      console.log(currentUser)
      setUser(currentUser);
    });
    return () => {
      unsubscribe()
    }
  },[])

  const authInfo = {
    createNewUser,
    user,
    loginwithpopup,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
