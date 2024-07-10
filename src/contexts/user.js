import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user: [user, setUser] }}>
      {props.children}
    </UserContext.Provider>
  );
};
