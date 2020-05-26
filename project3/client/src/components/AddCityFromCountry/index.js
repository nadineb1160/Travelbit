import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import {useUserContext} from "../../state/UserContext";


function cityJSON(city, countryId) {
    return (
        {
            "cityName": city,
            "CountryId": countryId
        }
    )
}

function AddCityFromCountry({ countryId }) {

    const [city, setCity] = useState("");
    const {user} = useUserContext();
    const history = useHistory();

    const handleAdd = (event) => {
        event.preventDefault();

        const cityBody = cityJSON(city, countryId);
        console.log(cityBody)
     
    
        API.saveCity(cityBody)
        .then(() => {
            console.log("Saved City")
            return (
                history.push(`country/${countryId}/city`)
            )
        })
        .catch(error => {
            console.log(error)
        })
       
    }

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "city") {
            setCity(value);
        } 
    };

    return (
        <div>
            <div className="flex justify-center m-6">
                <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="city">
                                City
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            id="city" 
                            type="text" 
                            name="city"
                            value={city}
                            placeholder="Berlin"
                            onChange={(event) => onChangeHandler(event)} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={event => handleAdd(event)} className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Add +
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCityFromCountry;
