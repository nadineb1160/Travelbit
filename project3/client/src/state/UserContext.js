import React, {useContext, useState, useEffect} from "react";
import app from "../base.js"

const UserContext = React.createContext({
  id: 0,
  name: "",
  email: "",
  getUserToken: () => {},
  login: () => {}
});

function getUserToken() {
  return "SampleToken123";
}
function getLogin() {
  return "SampleToken123";
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: 0,
        name: "Bob",
        email: "bob@bob.com",
        getUserToken: getUserToken,
        login: getLogin
    });

    // useEffect(() => {
    //   app.auth().onAuthStateChanged(setUser);
    // }, []);
      
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext); 
// import {useUserContext} from "../UserContext.js"
// const {name, getUserToken} = useUserContext();