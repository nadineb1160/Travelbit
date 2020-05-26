import React from "react";
import { useHistory } from "react-router-dom";
import State from "../../pages/State";
import Home from "../../pages/Home";
import City from "../../pages/CityFromCountry";
// import City from "../../pages/City";
// import { useState } from "react";

function CountryCard({ card }) {
    const history = useHistory();

    // const [selectedCountryId, setSelectedCountryId] = useState();

    const clickCardHandler = (event) => {
        event.preventDefault();
        // console.log(event.currentTarget)
        let countryId = event.currentTarget.getAttribute('value');
        let countryName = event.currentTarget.getAttribute('name');
        console.log(countryId)
        console.log(countryName)

        if (countryName === "United States of America" || countryName === "USA" || countryName === "United States") {
            console.log("states");
            return (
                history.push(`/country/${countryId}/state`)
                
            )
        } else {
            return (
                history.push(`/country/${countryId}/city`)
            )
        }

    }

    return (
        <div onClick={(event) => clickCardHandler(event)} className="max-w-sm border rounded overflow-hidden shadow-lg m-3 bg-white"  value={card.id} name={card.countryName}>
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
