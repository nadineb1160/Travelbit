import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../state/UserContext";
import { auth } from "../../firebase";
// import "./style.css";

function UserSignedIn() {
  const { user } = useUserContext();
  console.log(user)
  // const { displayName } = user;

  const logoutHandler = () =>  {
    auth.signOut().then(function() {
      // Sign-out successful.
      console.log("Logged out")
      window.location.href = "/"
    }).catch(error => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <div className="justify-end">
      {user ?
      <Link to="/travel" className={window.location.pathname === "/travel" ? "block lg:inline-block lg:mt-0 text-gray-900 mr-4" : "block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Travel<i className="fas fa-globe pl-2"></i></Link>
      :
      null
      }

      {user ? 
        <Link to="/profile" className={window.location.pathname === "/profile" ? "block lg:inline-block lg:mt-0 text-gray-900 mr-4" : "block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Profile<i className="fas fa-user-circle pl-2"></i></Link>
        :
        <Link to="/about" className={window.location.pathname === "/about" ? "block lg:inline-block lg:mt-0 text-gray-900 mr-4" : "block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>About<i className="fas fa-passport pl-2"></i></Link>
      }

      {user ?
        
        <Link to="/logout" className={window.location.pathname === "/logout" ? "block lg:inline-block lg:mt-0 text-gray-900 mr-4" : "block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"} onClick={logoutHandler}>Logout<i className="fas fa-sign-out-alt pl-2"></i></Link>
        :
        <Link to="/signin" className={window.location.pathname === "/signin" ? "block lg:inline-block lg:mt-0 text-gray-900 mr-4" : "block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Sign In<i className="fas fa-sign-in-alt pl-2"></i></Link>
        
      }
    </div>

  )
}

function Navbar() {

  const onClickHandler = () => {
    window.location.href = "/"
  }

  return (

    <nav className="flex items-center justify-between flex-wrap bg-teal-700 bg-opacity-75 px-6 py-3 pt-8 border-8 border-double border-white">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 onClick={onClickHandler} className="font-semibold text-4xl tracking-tight elite">Travel | <span className="text-gray-900">Bit</span></h1>
      </div>

      <div className="w-full block lg:flex lg:items-center lg:w-auto text-lg poppins tracking-wide">
        <div>
          <Link to="/" className={window.location.pathname === "/" ? "block lg:inline-block lg:mt-0 text-gray-900 mr-4" : "block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Home<i className="fas fa-home pl-2"></i></Link>
        </div>
        <UserSignedIn/>
      </div>
    </nav>
  );
}

export default Navbar;
