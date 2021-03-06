import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";
import { useUserContext } from "../../state/UserContext"


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { user } = useUserContext();
    const history = useHistory();

    const signInWithEmailAndPasswordHandler =
        (event, email, password) => {
            event.preventDefault();
            auth.signInWithEmailAndPassword(email, password)
                .then(
                    // console.log(user)
                    // history.push("/")
                )
                .catch(error => {
                    setError(error.message);
                    // setError("Error signing in with password and email!");
                    console.error("Error signing in with password and email", error);
                });
            if(!user) {
                history.push("/")
            }

        };


    return (
        <div className="poppins tracking-wider py-6">
            <h1 className="text-3xl mb-4 text-center font-bold">Sign In</h1>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8 bg-white">
                {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
                <form className="">
                    <label htmlFor="userEmail" className="block font-semibold">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="px-3 py-3 mb-3 placeholder-gray-500 text-gray-700 relative bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: joesmith@gmail.com"
                        id="userEmail"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="userPassword" className="block font-semibold">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button className="bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold uppercase py-2 px-4 mt-4 w-full rounded" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                        Sign in
                    </button>
                </form>
                <p className="text-center my-3">or</p>
                <button
                    className="bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold uppercase py-2 px-4 w-full rounded" 
                    onClick={() => {
                        try {
                          signInWithGoogle();
                        } catch (error) {
                          console.error("Error signing in with Google", error);
                        }
                      }}
                >
                    Sign in with Google
                </button>
                <p className="text-center my-3">
                    Don't have an account?{" "}
                    <Link to="signUp" className="text-teal-500 hover:text-teal-600">
                        Sign up here
                    </Link>
                    <br />
                    <Link to="passwordReset" className="text-teal-500 hover:text-teal-600">
                        Forgot Password?
                    </Link>
                </p>
            </div>
        </div >
    );
};

export default SignIn;