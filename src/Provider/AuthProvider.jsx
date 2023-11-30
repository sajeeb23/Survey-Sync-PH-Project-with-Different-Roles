/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photoURL, setPhotoURL] = useState(null);

  const createUser = (email, password, name, photoURL) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
       
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setPhotoURL(photoURL);
            return result;
          })
          .catch((error) => {
            console.error("Error updating photoURL: ", error);
            throw error;
          });
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
        throw error;
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    photoURL,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
