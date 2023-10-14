import React, { useState, createContext } from 'react';
import { loginRequest, registerRequest,auth } from './authentication.service';
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const statedChanged = () => {
    onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  };

  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email.toLowerCase(), password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }
    setIsLoading(true);
    registerRequest(email.toLowerCase(), password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        logOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
