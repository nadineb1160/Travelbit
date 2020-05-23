import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateUserDocument, auth } from "../../firebase";
import API from "../../utils/API";


function userJSON(user, displayName) {
    return (
        {
            "email": user.email,
            "displayName": displayName,
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
            console.log(displayName);
            let userBody = userJSON(user, displayName);
            generateUserDocument(userBody);
            console.log("user body")
            console.log(userBody)
            API.saveUser(userBody)
                .then(() => {
                    console.log("Saved")
                })
                .catch(error => {
                    console.log("Error saving user in database")
                    console.log(error)
                })
        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setDisplayName("");

        window.location.href = "/"
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
        <div className="mt-8">
            <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
                {error !== null && (
                    <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                        {error}
                    </div>
                )}
                <form className="">
                    <label htmlFor="displayName" className="block">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="my-1 p-1 w-full "
                        name="displayName"
                        value={displayName}
                        placeholder="E.g: Joe Smith"
                        id="displayName"
                        onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="my-1 p-1 w-full"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: joe.smith@gmail.com"
                        id="userEmail"
                        onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="mt-1 mb-3 p-1 w-full"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={event => onChangeHandler(event)}
                    />
                    <button
                        className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                        onClick={event => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign up
                    </button>
                </form>
                <p className="text-center my-3">or</p>
                <button
                    className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
                >
                    Sign In with Google
                </button>
                <p className="text-center my-3">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-500 hover:text-blue-600">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );

};

export default SignUp;