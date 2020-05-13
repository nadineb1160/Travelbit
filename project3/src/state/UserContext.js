import React, {useContext, useState} from "react";

const UserContext = React.createContext({
  name: "",
  getUserToken: () => {},
  login: () => {}
});

function getUserToken() {
  return "SampleToken123";
}
function getLogin() {
  return "SampleToken123";
}

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        name: "Bob",
        getUserToken: getUserToken,
        login: getLogin
    });

      
    return (
       
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext); 
// import {useUserContext} from "../UserContext.js"
// const {name, getUserToken} = useUserContext();