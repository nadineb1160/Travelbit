import React, { useContext, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../firebase";

const UserContext = React.createContext({
  // id: 0,
  // name: "",
  // email: "",
  // getUserToken: () => { },
  // login: () => { }

  user: null
});

function getUserToken() {
  return "SampleToken123";
}
function getLogin() {
  return "SampleToken123";
}

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    // id: 0,
    // name: "Bob",
    // email: "bob@bob.com",
    // getUserToken: getUserToken,
    // login: getLogin
    user: null
  });

  // useEffect(() => {
  //   app.auth().onAuthStateChanged(setUser);
  // }, []);

  useEffect(async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      setUser({ user: user});
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
// const {name, getUserToken} = useUserContext();