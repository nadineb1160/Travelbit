// import React from 'react';
// import app from "../firebase";
// import SignUp from "../components/SignUp"

// const SignUp = () => {
    
//     const handleSignUp = useCallback(
//         async event => {
//             event.preventDefault();
//             const { email, password } = event.target.elements;
//             try {
//                 await app
//                     .auth()
//                     .createUserWithEmailAndPassword(email.value, password.value);
//                 history.push("/");
//             } catch (error) {
//                 alert(error);
//             }
//         }, [history]
//     );

//     return (
//         // <SignUp/>
//         <div className="flex justify-center m-6">
//             <form onSubmit={handleSignUp} className="w-full max-w-sm">
//                 <div className="md:flex md:items-center mb-6">
//                     <div className="md:w-1/3">
//                         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
//                             Username
//                         </label>
//                     </div>
//                     <div className="md:w-2/3">
//                         <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" value="Jane Doe"/>
//                     </div>
//                 </div>
//                 <div className="md:flex md:items-center mb-6">
//                     <div className="md:w-1/3">
//                         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
//                             Password
//                             </label>
//                     </div>
//                     <div className="md:w-2/3">
//                         <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-username" type="password" placeholder="******************"/>
//                     </div>
//                 </div>
        
//                 <div className="md:flex md:items-center">
//                     <div className="md:w-1/3"></div>
//                     <div className="md:w-2/3">
//                         <button className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default SignUp;