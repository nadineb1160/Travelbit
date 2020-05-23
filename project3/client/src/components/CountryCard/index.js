import React from "react";
import State from "../../pages/State";
import City from "../../pages/City";
import { useState } from "react";

function CountryCard({ card }) {

    // const [selectedCountryId, setSelectedCountryId] = useState();

    const clickCardHandler = (event) => {
        event.preventDefault();
        console.log(event.currentTarget)
        let cardId = event.currentTarget.getAttribute('value');
        let cardName = event.currentTarget.getAttribute('name');
        console.log(cardId)
        console.log(cardName)

        if (cardName === "United States of America" || cardName === "USA" || cardName === "United States") {
            console.log("states");
            return (
                <State countryId={cardId}></State>
            )
        }
        
        // return (
            
        // )

    }

    return (
        <div onClick={clickCardHandler} className="max-w-sm border rounded overflow-hidden shadow-lg m-3"  value={card.id} name={card.countryName}>
            <img className="w-full p-3" src="https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731__480.jpg" alt="Travel Map"/>
            <div className="px-3 py-2">
                <h1 className="font-bold text-5xl mb-2 marker text-center">{card.countryName}</h1>
            </div>
            {/* <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div> */}
        </div>
    );
}

export default CountryCard;
