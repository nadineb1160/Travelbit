import React, {useState, useEffect} from "react";

function SearchCard({ image }) {
    // const tags = image.tags.split(',');

    return (
        <div className="rounded shadow-lg">
            {/* Change image src={image.webformatURL} */}
            <img src={image.webformatURL} alt="random" className="w-full" />

        </div>

    );
}

export default SearchCard;
