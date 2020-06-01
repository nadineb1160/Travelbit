import React, { useState, useEffect } from "react";
import { useUserContext } from "../../state/UserContext";
import { auth } from "../../firebase";
import API from "../../utils/API";
const userInstagram = require("user-instagram");


function userJSON(user, profilePic) {
  return (
    {
      "email": user.email,
      "displayName": user.displayName,
      "uid": user.uid,
      "img": profilePic
    }
  )
}

const ProfilePage = () => {
  const { user } = useUserContext();
  const { displayName, email, img } = user;
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(img);
  const [countryCount, setCountryCount] = useState(0);
  // const [stateCount, setStateCount] = useState(0);

  useEffect(() => {
    API.getUserByUid(user.uid)
    .then((res) => {
      setProfilePic(res.data.img);

      API.getCountries(res.data.id) 
      .then((res) => {
        setCountryCount(res.data.length)
      })
    })
    .catch(error => {
      console.log(error)
    });
  }, [])


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

  const clickButtonHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { id } = event.currentTarget;

    if (id === "update") {
      setShowModal(true);
    }
  }

  const getInstagramPic = (username) => {
    console.log(username)
    userInstagram(username)
      .then(res => {
        console.log(res);
        setProfilePic(res.profilePicHD)

        API.getUserByUid(user.uid)
          .then((id) => {
            let userId = id.data.id;

            const userBody = userJSON(user, res.profilePicHD);
            console.log(userBody)
            console.log(user)

            API.updateUser(userId, userBody)
              .then(() => {
                console.log(`Updated User: ${userId}`)
                window.location.href = `/profile`
              })
              .catch(error => {
                console.log(error)
              })
          })
          .catch(error => {
            console.log(error)
          });
      })
      .catch(console.error);
  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log(username)
    getInstagramPic(username);


  }

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "username") {
      setUsername(value);
    }
  };

  return (
    <div className="mb-4">
      <div className="mx-auto w-3/4 md:w-1/2 py-8 px-4 md:px-8">
        <div className="flex border rounded shadow-md flex-col items-center md:flex-row md:items-start border-blue-400 p-2 bg-white">
          <img src={profilePic} className="bg-cover bg-center w-2/3 md:w-1/2 rounded m-1" />
          {/* Update */}
          <div className="m-2 text-left self-center">
          <i
            className="fas fa-edit float-right text-teal-600 hover:text-teal-400 p-2"
            style={{ transition: "all .15s ease" }}
            onClick={(event) => clickButtonHandler(event)}
            id="update" />
            <h2 className="text-3xl font-bold">{displayName}</h2>
            <h3 className="italic pt-1 font-semibold text-teal-600">{email}</h3>
            <br />
            <div className="py-2 px-2 bg-teal-600 bg-opacity-25 border rounded text-center mt-2">
              <h4 className="text-2xl text-teal-600 font-bold">{countryCount}</h4>
              <h4>Countries Visited</h4>
              {/* <h4># of state visited: <span>{stateCount}</span></h4> */}
            </div>
          </div>
        </div>
        <button onClick={logoutHandler} className="w-full shadow-md bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 mt-4 rounded">Sign out</button>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden bg-fixed"
            data-backdrop="static">

            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Profile
                    </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="">
                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="country">
                          Instagram Username
                              </label>
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="">
                        <input
                          type="text"
                          className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                          name="username"
                          placeholder={username}
                          id="username"
                          onChange={(event) => onChangeHandler(event)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={event => {
                      handleUpdate(event)
                      setShowModal(false)
                    }}
                  >
                    Save Changes
                      </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
};
export default ProfilePage;