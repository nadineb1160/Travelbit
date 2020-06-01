import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth.sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  return (
    <div className="poppins tracking-wider py-6">
      <h1 className="text-3xl mb-4 text-center font-bold">
        Reset your Password
      </h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8 bg-white">
        <form action="">
          {emailHasBeenSent && (
            <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="w-full block font-semibold">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            className="px-3 py-3 mb-3 placeholder-gray-500 text-gray-700 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10"
          />
          <button
            className="bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold uppercase py-2 px-4 mt-2 w-full rounded"
            onClick={event => sendResetEmail(event)}
          >
            Send me a reset link
          </button>
        </form>
        <Link
         to ="/signin"
          className="my-2 text-teal-500 hover:text-teal-400 text-center block"
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};
export default PasswordReset;