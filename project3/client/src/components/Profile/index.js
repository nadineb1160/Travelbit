import React from "react";
import { useUserContext } from "../../state/UserContext";
import { auth } from "../../firebase";

const ProfilePage = () => {
  const { user } = useUserContext();
  const {name, email} = user;
  console.log(user)
  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background:
                `url(https://img.icons8.com/metro/52/000000/user-male.png)  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className="border border-blue-300"
        ></div>
        <div className = "md:pl-4">
        <h2 className = "text-2xl font-semibold">{name}</h2>
        <h3 className = "italic">{email}</h3>
        </div>
      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white">Sign out</button>
    </div>
  ) 
};
export default ProfilePage;