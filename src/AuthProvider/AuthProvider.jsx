import { createUserWithEmailAndPassword } from "firebase/auth";
import {  createContext, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [lodging, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password)
  }
  const authInfo = {
    createNewUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
