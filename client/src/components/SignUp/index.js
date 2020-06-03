import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateUserDocument, auth, signInWithGoogle } from "../../firebase";
import API from "../../utils/API";


function userJSON(user) {
    return (
        {
            "email": user.email,
            "displayName": user.displayName,
            "uid": user.uid
        }
    )
}

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // generateUserDocument(user, { displayName });
            user.updateProfile({
                displayName: displayName
            }).then(() => {
                console.log("Update successful")
                console.log(user)
                // console.log(displayName);
                let userBody = userJSON(user);
                // generateUserDocument(userBody);
                // console.log("user body")
                // console.log(userBody)
                API.saveUser(userBody)
                    .then(() => {
                        console.log("Saved")
                    })
                    .catch(error => {
                        console.log("Error saving user in database")
                        console.log(error)
                    })
            })
                .catch(error => {
                    console.log(error)
                });

            // console.log(user)
            // console.log(displayName);
            // let userBody = userJSON(user, displayName);
            // generateUserDocument(userBody);
            // console.log("user body")
            // console.log(userBody)
            // API.saveUser(userBody)
            //     .then(() => {
            //         console.log("Saved")
            //     })
            //     .catch(error => {
            //         console.log("Error saving user in database")
            //         console.log(error)
            //     })

        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setDisplayName("");

        // window.location.href = "/"
        history.push(`/`)

    };

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
    };

    return (
        <div className="poppins tracking-wider py-6">
            <h1 className="text-3xl mb-4 text-center font-bold">Sign Up</h1>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8 bg-white">
                {error !== null && (
                    <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                        {error}
                    </div>
                )}
                <form className="">
                    <label htmlFor="displayName" className="block font-semibold">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="px-3 py-3 mb-3 placeholder-gray-500 text-gray-700 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                        name="displayName"
                        value={displayName}
                        placeholder="E.g: Joe Smith"
                        id="displayName"
                        onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block font-semibold">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="px-3 py-3 mb-3 placeholder-gray-500 text-gray-700 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: joe.smith@gmail.com"
                        id="userEmail"
                        onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block font-semibold">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={event => onChangeHandler(event)}
                    />
                    <button
                        className="bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold uppercase py-2 px-4 mt-4 w-full rounded"
                        onClick={event => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign up
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
                    Sign In with Google
                </button>
                <p className="text-center my-3">
                    Already have an account?{" "}
                    <Link to="signIn" className="text-teal-500 hover:text-teal-600">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );

};

export default SignUp;