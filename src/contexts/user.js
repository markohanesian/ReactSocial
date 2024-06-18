import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase"; 
import firebase from 'firebase/app';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Set persistence to local
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                // Add the auth state listener
                auth.onAuthStateChanged((user) => {
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
