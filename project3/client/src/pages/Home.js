import React from 'react';

const Home = () => {

    const rememberOnClickHandler = () => {
        window.location.href = "/travel"
    }
    const exploreOnClickHandler = () => {
        window.location.href = "/travel"
    }

    return (
        <div>

            <header className="relative bg-no-repeat bg-cover lg:bg-center p-6 bg-top-right h-screen" id="bg-img">

                <div className="max-w-2xl mx-auto lg:py-32 py-10 align-middle">
                    <div className="bg-teal-700 bg-opacity-25 p-4 m-8 rounded">
                        <h2 className="lg:text-5xl text-4xl text-center font-semibold text-white mb-2 leading-none elite">Travel | <span className="text-gray-900">Bit</span></h2>
                        <h2 className="lg:text-5xl text-4xl text-center font-semibold text-white leading-none mb-2 dancing">Travel back in time</h2>
                    </div>
                    <h3></h3>

                    <div className="flex items-center flex-wrap justify-start max-w-xl lg:mx-0 mx-auto text-xl">
                        <div className="lg:pr-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wide">Look at past adventures</p>
                            <button onClick={rememberOnClickHandler} className="transition bg-white px-10 py-3 rounded shadow font-bold hover:bg-gray-300 text-gray-900 block w-full text-center border-2 border-white elite" name="remember">Remember</button>
                        </div>
                        <div className="lg:pl-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wide">Find new places to explore</p>
                            <button onClick={exploreOnClickHandler} className="transition bg-transparent px-10 py-3 rounded shadow font-bold hover:bg-gray-800 text-white block w-full text-center border-2 border-white elite" name="explore">Explore</button>

                        </div>
                    </div>
                </div>

            </header>

            <section className="container px-4 p-10" id="country-img">
            
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">View past trips</h4>
                        <p className="text-gray-600 mb-8">Travel | Bit allows you to store your travels so that you can remember past and share with others.</p>
                    </div>
                    <div className="w-full md:w-1/4">
                        <img src="https://images.unsplash.com/photo-1551526793-fc99b5ea9919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="pr-5 pb-4" alt="Bridge" />
                    </div>
                    <div className="w-full md:w-1/4">
                        <img src="https://images.unsplash.com/photo-1568887759898-723db7949b52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="" alt="Bridge" />
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 mb-4">
                        <img src="https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__480.jpg" alt="Exploring" />
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Exploring (Coming soon!)</h4>
                        <p className="text-gray-600 mb-8">We hope to implement a social feature to this app that allows for sharing (exporting) trips or building a platform to view other users travels.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
