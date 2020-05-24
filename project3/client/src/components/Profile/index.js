import React, { useState } from "react";
import { useUserContext } from "../../state/UserContext";
import { auth } from "../../firebase";

const ProfilePage = () => {
  const [countryCount, setCountryCount] = useState(0);
  const [stateCount, setStateCount] = useState(0);

  const { user } = useUserContext();
  const { displayName, email } = user;
  console.log(user)

  const logoutHandler = () => {
    auth.signOut().then(function () {
      // Sign-out successful.
      console.log("Logged out")
      window.location.href = "/"
    }).catch(error => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border rounded shadow-md flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background:
              `url(https://img.icons8.com/metro/52/000000/user-male.png)  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className="border border-blue-300 rounded"
        ></div>
        <div className="md:pl-4 pt-1">
          <h2 className="text-2xl font-semibold">{displayName}</h2>
          <h3 className="italic pt-1 text-teal-800">{email}</h3>
          <br/>
          <h4># of countries visited: <span>{countryCount}</span></h4>
          <h4># of state visited: <span>{stateCount}</span></h4>
        </div>
      </div>
      <button onClick={logoutHandler} className="w-full shadow-md bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 mt-4 rounded">Sign out</button>
    </div>
  )
};
export default ProfilePage;