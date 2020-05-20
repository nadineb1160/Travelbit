import React from "react";

function Card({ card }) {

    return (
        <div className="block">
            <div className="flex flex-col">

                <div className="bg-white border rounded-lg overflow-hidden m-4 shadow-lg">
                    <div className="relative h-48">
                        <img src="https://cdn.pixabay.com/photo/2018/08/08/18/49/berlin-cathedral-3592874_1280.jpg" alt="bg" className="absolute h-full w-full object-cover"/>
                    </div>
                    <div className="px-6 py-4">
                        <h3 className="text-gray-900">Location</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
