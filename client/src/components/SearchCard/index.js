import React, {useState, useEffect} from "react";

function SearchCard({ image }) {
    // const tags = image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Change image src={image.webformatURL} */}
            <img src="https://source.unsplash.com/random" alt="random" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Country Name
                 </div>
            </div>

            {/* <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag}
                    </span>
                ))}
            </div> */}
        </div>

    );
}

export default SearchCard;
