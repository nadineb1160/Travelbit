import React from 'react';

const Home = () => {
    return (
        <div>

            <header className="relative bg-no-repeat bg-cover lg:bg-center p-6 bg-top-right" id="bg-img">

                <div className="max-w-5xl mx-auto lg:py-32 py-2">
                    <h2 className="lg:text-5xl text-4xl font-semibold text-white leading-none mb-4">Travel back in time</h2>

                    <div className="flex items-center flex-wrap justify-start max-w-2xl lg:mx-0 mx-auto">
                        <div className="lg:pr-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wide">Find new places to explore</p>
                            <button className="transition bg-white px-10 py-3 rounded shadow font-bold hover:bg-gray-300 block w-full text-center border-2 border-white">Explore</button>
                        </div>
                        <div className="lg:pl-5 w-full lg:w-1/2 mb-4 lg:mb-0">
                            <p className="text-white mb-2 tracking-wide">Look back in time</p>
                            <button className="transition bg-transparent px-10 py-3 rounded shadow font-bold hover:bg-gray-800 text-white block w-full text-center border-2 border-white">Remember</button>
                            
                        </div>
                    </div>
                </div>

            </header>
            {/* <div className="mt-4">
                <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-teal-500 text-sm text-white uppercase tracking-wider font-semibold">Explore</a>
            </div>
            <h1 className="mt-6 text-2xl font-bold text-gray-900" id="marker"><span className="text-teal-500">Travel </span>back in time</h1>
             */}
            {/* <img className="w-full" src="https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067_1280.png" alt="moutain"/> */}
            {/* <img class="mt-6 shadow-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3BrOUS69Iri4zvzdjA844B57PyLFG1WfPNlJumjOsaPCFz3nC&usqp=CAU" alt="Woods"/> */}
        </div>
    )
}

export default Home;
