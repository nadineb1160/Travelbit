import React from 'react';
import { useUserContext } from "../state/UserContext";

const Home = () => {
    const { user } = useUserContext();

    const OnClickHandler = event => {
        const { id } = event.currentTarget;
        if (id === "remember") {
            window.location.href = "/travel";
        } else if (id === "explore") {
            // Update to explore when made
            window.location.href = "/travel";
        } else if (id === "signin") {
            window.location.href = "/signin";
        }
    }
   
    return (
        <div>
            <header className="relative bg-no-repeat bg-cover lg:bg-center p-6 bg-top-right h-screen" id="bg-img">
                <div className="max-w-2xl mx-auto lg:py-32 py-10 align-middle">
                    <div className="bg-teal-700 bg-opacity-50 border-8 border-double border-white p-4 m-8 rounded">
                        <h2 className="lg:text-5xl text-4xl text-center font-semibold text-white mb-2 leading-none elite">Travel | <span className="text-gray-900">Bit</span></h2>
                        <h2 className="lg:text-5xl text-4xl text-center font-semibold text-white leading-none mb-2 dancing">Travel back in time</h2>
                    </div>

                    {user ?
                    <div className="flex items-center flex-wrap justify-start max-w-xl lg:mx-0 mx-auto text-xl">
                        <div className="lg:pr-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wide font-bold">Look at past adventures</p>
                            <button onClick={(event) => OnClickHandler(event)} className="transition bg-gray-100 bg-opacity-75 px-10 py-3 rounded shadow font-bold hover:bg-gray-300 text-gray-900 block w-full text-center border-2 border-white elite" id="remember">Remember</button>
                        </div>
                        <div className="lg:pl-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wide font-bold">Find new places to explore</p>
                            <button onClick={(event) => OnClickHandler(event)} className="transition bg-gray-900 bg-opacity-75 px-10 py-3 rounded shadow font-extrabold hover:bg-gray-800 text-white block w-full text-center border-2 border-white elite" id="explore">Explore</button>

                        </div>
                    </div>
                    :
                    <div className="flex items-center flex-wrap justify-center max-w-xl lg:mx-0 mx-auto text-xl">
                        <div className="w-2/3  mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wider text-center popppins">Sign In to share your past adventures</p>
                            <button onClick={(event) => OnClickHandler(event)} className="transition bg-white px-10 py-3 rounded shadow font-extrabold hover:bg-gray-300 text-gray-900 block w-full text-center border-2 border-white elite" id="signin">Sign In</button>
                        </div>
                    </div>
                    }
                </div>

            </header>

            <section className="container px-4 p-10" id="country-img">
            
                <div className="flex items-center flex-wrap mb-10">
                    <div className="w-full md:w-1/2 pr-2 mb-4">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">View past trips</h4>
                        <p className="text-gray-600 text-semibold mb-6">TravelBit allows you to store your travels so that you can remember past and share with others.</p>
                    </div>
                    <div className="w-1/2 md:w-1/4">
                        <img src="https://images.unsplash.com/photo-1551526793-fc99b5ea9919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="pr-5 pb-4 rounded" alt="Bridge" />
                    </div>
                    <div className="w-1/2 md:w-1/4">
                        <img src="https://images.unsplash.com/photo-1568887759898-723db7949b52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="rounded" alt="Bridge" />
                    </div>
                </div>

                <div className="flex items-center flex-wrap">
                    <div className="w-full md:w-1/2 mb-4">
                        <img src="https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__480.jpg" className="rounded" alt="Exploring" />
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Explore (Coming soon!)</h4>
                        <p className="text-gray-600 mb-8">We hope to implement an explore page to view new trips and a social feature to this app that allows for sharing (exporting) trips or viewing other users travels.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
