import React, {useState, useEffect} from "react";

function SearchCard({ image }) {

    return (
        <div className="rounded shadow-lg">
            <img src={image.webformatURL} alt="random" className="w-full" />

        </div>

    );
}

export default SearchCard;
