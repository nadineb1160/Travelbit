import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../state/UserContext"
// import "./style.css";


function Navbar() {
  // const {name} = useUserContext();

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light h-60">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 rammeto">TravelBit</span>
      </nav>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/travel" className={window.location.pathname === "/travel" ? "nav-link active" : "nav-link"}>Travel</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}>Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    //   <div className="flex items-center flex-shrink-0 text-white mr-6">
    //     <h1 className="font-semibold text-xl tracking-tight" id="rammeto">Travel <span className="text-gray-900">Bit</span></h1>
    //   </div>
    //   <div className="block lg:hidden">
    //     <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
    //       <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
    //     </button>
    //   </div>
    //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //     <div className="text-sm lg:flex-grow">
    //       <Link to="/" className={window.location.pathname === "/" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Home</Link>
    //       <Link to="/travel" className={window.location.pathname === "/travel" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Travel</Link>
    //       <Link to="/about" className={window.location.pathname === "/about" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>About</Link>

    //     </div>
    //     <div>
    //       <Link to="/profile" className={window.location.pathname === "/profile" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Profile</Link>
    //       <Link to="/signup" className={window.location.pathname === "/signup" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Sign Up</Link>
    //       {/* <Link to="/login" className={window.location.pathname === "/login" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>Login</Link> */}
    //       {/* <Link to="/logout" className={window.location.pathname === "/logout" ? "active block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4" : "nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"} onClick={() => app.auth().signOut()}>Logout</Link> */}
    //     </div>
    //   </div>
    // </nav>
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
