import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../state/UserContext"
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  // const {name} = useUserContext();
  return (

    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <h1 class="font-semibold text-xl tracking-tight" id="rammeto">Travel<span className="text-gray-900">Bit</span></h1>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link to="/" className={window.location.pathname === "/" ? "active block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" : "nav-link"}>Home</Link>
          <Link to="/travel" className={window.location.pathname === "/" ? "active block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" : "nav-link"}>Travel</Link>
          <Link to="/about" className={window.location.pathname === "/" ? "active block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" : "nav-link"}>About</Link>

        </div>
        <div>
          <Link to="/profile" className={window.location.pathname === "/" ? "active block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" : "nav-link"}>Profile</Link>
          <Link to="/login" className={window.location.pathname === "/" ? "active block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" : "nav-link"}>Login</Link>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     {/* {name} */}
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
    //       {/* Home */}
    //       <li className="nav-item">
    //         <Link
    //           to="/"
    //           className={
    //             window.location.pathname === "/"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       {/* Travel */}
    //       <li className="nav-item">
    //         <Link
    //           to="/travel"
    //           className={
    //             window.location.pathname === "/travel"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           Travel
    //         </Link>
    //       </li>
    //       {/* About */}
    //       <li className="nav-item">
    //         <Link
    //           to="/about"
    //           className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       {/* Profile */}
    //       <li className="nav-item">
    //         <Link
    //           to="/profile"
    //           className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
    //         >
    //           Profile
    //         </Link>
    //       </li>
    //       {/* Login and Logout */}
    //       <li className="nav-item">
    //         <Link
    //           to="/login"
    //           className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
    //         >
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
