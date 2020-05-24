import React from 'react';

const Home = () => {

    const onClickHandler = (event) => {

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
                            <button onClick={onClickHandler} className="transition bg-white px-10 py-3 rounded shadow font-bold hover:bg-gray-300 text-gray-900 block w-full text-center border-2 border-white elite" name="remember">Remember</button>
                        </div>
                        <div className="lg:pl-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wide">Find new places to explore</p>
                            <button onClick={onClickHandler} className="transition bg-transparent px-10 py-3 rounded shadow font-bold hover:bg-gray-800 text-white block w-full text-center border-2 border-white elite" name="explore">Explore</button>
                            
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Home;
