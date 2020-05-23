import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../state/UserContext";


function Navbar() {

  return (

    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 className="font-semibold text-xl tracking-tight rammeto">Travel <span className="text-gray-900">Bit</span></h1>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className={window.location.pathname === "/" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Home</Link>
          <Link to="/travel" className={window.location.pathname === "/travel" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Travel</Link>
          <Link to="/about" className={window.location.pathname === "/about" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>About</Link>

        </div>
        <div>
          <Link to="/profile" className={window.location.pathname === "/profile" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Profile</Link>
          <Link to="/signup" className={window.location.pathname === "/signup" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Sign Up</Link>
          <Link to="/signin" className={window.location.pathname === "/signin" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Sign In</Link>
          {/* <Link to="/logout" className={window.location.pathname === "/logout" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"} onClick={() => app.auth().signOut()}>Logout</Link> */}
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
