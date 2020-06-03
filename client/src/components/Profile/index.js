import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

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
                // window.location.href = `/profile`
                return (
                  history.push(`/profile`),
                  window.location.reload()
                )
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
          <img src={profilePic || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAflBMVEX39/cAAAD////8/Pz19fXY2NiRkZHNzc3y8vK4uLh8fHzl5eXBwcGrq6uNjY2ioqKysrLh4eEzMzOHh4cTExPs7OxqampwcHDR0dFHR0cuLi6Pj49ubm4iIiIoKCioqKheXl46OjoaGhpXV1dPT0+bm5tCQkIODg5aWlo4ODguwKv7AAAH90lEQVR4nO2d53qjOhCGYcZ0cIm713GLiXfv/wYPmDguCJui0Qgf3j+n5dnDF0kjaZoMo6Ojo6Ojo6OjFJgCAOlfuL9FLokq1wqj2B6P+/HAcwIjUcn9UVJAwNHQ/zDvWY69oPUKEdzQP5hiVn3HaLFARGdeoOyHw9hqqT7oDVbPtZ359lpoZcC1S0g7MxkY7dKHRlxW25lBm8YPvEklcaa5CYH7o0sC06+K2lJ201bog2ENbSlD/eWhMaspzjRnPc1XHwZldoEiPkdaDx84DbSl6GxcwGsoLtkbtJUHUWNxpvlHU3lSxJnmWEt5EqZlhq2hPGxqUK5E2snDQJo403S02/c2EtWZU24190D9E4qIpVaDJ8lcXok1WnpSF12Gpc/owVG6ur026lD2vEzRZm66BOJMM+CWlQE+ibqZHoMn36RkLHRYerAmUrfUYfCohk6LAxm8cKY34Mg/eDQGM4N9S4dqTudqzLkHD6t6nSvhMouTd2cVEfFOTUKbksK8KfRIxTEfxzAkVjfknJpER8wrrIdN/CRWN+EcuxGxONMc8YlDWQ7aYjy+wYPSkf/aMDqmoU4IuRo7PnUo1UUrZMU3MynvBxfYxCkwmYynFeIjdAbbHU/BhsDofsC6mSlVCNnUbRWoY9vOcaBAHdstASl9KhfYrudvrk7FuuObmRSRrUf4rIqK/Y5vR6D2qqTw7eYLBer4vO104Z8rfKkr1N7MFDZxBjZJpC3HB6NfZUeujtHzAH1ydX1Gvwr9FYjR1Y4WuTrOxAd6txFnfBKWxOK+OaMk8IdYHWsKOPlJkzGMYNAvPN5UOOKF98EbNyd2HDHu5Wdone3caX5AGgZiz6SiDFD63JlUpFOTP4UR9mTiJuxDR+nU5LaYKXQbug5Z7WSJcBqk1hJe8tj8tHcQ1MmkbHQYOrKLAnPm6S8km8KEW9UFksHTp/AcvqWLO3BrukKQuKLLqkuRng7HmB6WB2WfpfXY6y7AWKo4xuiBELnBLh1OmLdI3RW0qXn9RWI9/V47cTJvQiOtTEqGtLmpzynlFkl286+W4iQ5pg/MNXfFTCWoY68GLURCeo6n6bxMadzbSL+d7hZoFjXhdz4/p1GShyatHZ7QYF/YaWtQrtSWp9vFQEzNsBB76XxJavVw0iFoUI4ajSZb0Pj0FwweW5c/Z2LpLQ4f/7FKrXaupatWxhPBXTz+8qH8hSg3KyGcatPgHM7t2HNnKHTLhb7yrZTTPWWmRYd6hCDO0h7ypyhwXq8+QRvsnwYEE+4O9QiGd/XT5s9RiNGL9iuCFuY30c79gG+GIlj3puNL8DNGVJzQ8jkw8qYS771PuxAZzGliSLa52Mi3m/9NIzq+cADXjqD1PPZyoc6DHSgewNywXb5EtG8hoDUc71annx86rb78yELRJxc00545CvWBMdwXzbaCu3X6mgwYPTfBgPPLMsI/uHAXWUWCSUxAYiSfJtT6tZ86wOd3wz/0FiaZkq98zpuapyoICifED/MRqT6EsIxTr19j+LCUz+Lvgkwf4rBk3c9nWPUjYFEyOL2kMTBgDIoe9hGwq/QWAEwr5Ct9V/7VldAWn17/j2/xg7L6YFrRV7GX+8gOGoOK2s76yhiBxATX8MP8kzd+yWmxhraUmSPcs2+kYVizyG0vRx+C16Ct1sFODyXC70j+/WJc89eWIsO+wGJf/wMyZoPzk3DZ03c/r+CBMfIaZz5+NfRXQCArXvzxNR/H22FCNLD9XTW3SyHzBo8IIdJ31GrKn7o+GAip+9jJYOLVWX7oUnVKls2x+itC0l4ZUUFcbXfHHm1PU9nsqwwfWG1YcXeUj0hLf6lCBWVrSCXn66miXGxT8gMq6ijzVEtrxSUns5eTs6XTMuPV2lPSzIeOFwV7PdK26+R8Pp+XKnrXUfI8+7HdQ2eap2errk2HSzFP+rEo6CFMzZOmHio6aFFTmN+ppB8mNYVZPeS9YFRwKBq7d5iYhb0hlLTDpKdgar6BxUz5FKtT0ZdcBUKr+QZbeUYsUkf8+I06hM/sAPdXSUNQjaKkkakaBG26lDR/VoMgw5qoWwMHJ8HC4/4mieSe2VHykoMqcqX4LQjVlSe38BS0oFVHrkEeVki10Z/eg7p3OWRmPJgVBR1oVfJwx3srk5nzSb+Zusf7+Xt4HS48bue077aq5nE3J39BUiW5uo+3Mpr5QNdbODMzBB1M3mjwRB7Nt1l5BSX59O8sqmAl1Ca/bRYPQUEg4S0OLMUdTCrUqurKs/7ZNQrFteL0vOETjtp8ixVVN97LM9rrgiiT5gdtDePlq5+F8kZtdNzOX83K39kJKp46lcqHUyF1GN12pfptKxZ1QdCecJ7dq15R0hZ9fbdmnW3Vsj/1TOIa4/arr7elf+KuPt9ewzYJCAtdJ6gvo4cHQm+o3wb45Unrv4IQbHUSuNxKbmyRCIz0OIEeZUu7CHRDn9c7cVoPCbs9IMBoO2NyWx/jxfMSaDkKcRStFY/h0XZ6BbXPFAphGtrHBvXU5dmst5YBqvsbYTKIQWjvCEv1VuuBMy1qNaNGIriWZ88klVhf2Mxiz3IZhd1KTDQagTOM/WNDi3Naru3oXHyPGgi7JesC0AusMLLHs+O/8qtys9z59sBzRi7oJ+uBS7MDNKYjywm9aBvb47Hv+/PZmfU8+ftxPx5EQ89ZWEHv/OOouSoRN50dHvn5T9xf2NHR0dHR0dHR0dHxP+I/5GCV1ORSJDUAAAAASUVORK5CYII='} className="bg-cover bg-center w-2/3 md:w-1/2 rounded m-1" />
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