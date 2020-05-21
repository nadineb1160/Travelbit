import React from "react";

function Card({ country }) {

    return (
        // <div className="block">
        //     <div className="flex flex-col">

        //         <div className="bg-white border rounded-lg overflow-hidden m-4 shadow-lg">
        //             <div className="relative h-48">
        //                 <img src="https://cdn.pixabay.com/photo/2018/08/08/18/49/berlin-cathedral-3592874_1280.jpg" alt="bg" className="absolute h-full w-full object-cover"/>
        //             </div>
        //             <div className="px-6 py-4">
        //                 <h3 className="text-gray-900">Location</h3>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full p-3" src="https://cdn.pixabay.com/photo/2018/08/08/18/49/berlin-cathedral-3592874_1280.jpg" alt="Sunset in the mountains"/>
            <div className="px-3 py-2">
                <h1 className="font-bold text-5xl mb-2 marker text-center">Berlin{country}</h1>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
        </div>
    );
}

export default Card;
