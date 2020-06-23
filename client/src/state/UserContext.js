import React, { useContext, useState, useEffect, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";

const UserContext = createContext({

  user: null
});


export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
  
    user: null
  });

  

  useEffect(() => {
    
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      setUser({ user });
    });
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
// import {useUserContext} from "../UserContext.js"
// const {name} = useUserContext();