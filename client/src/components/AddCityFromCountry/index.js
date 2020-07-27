import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import {useUserContext} from "../../state/UserContext";
import BackButton from '../BackButton';
import SearchCardContainer from '../SearchCardContainer';


function cityJSON(city, imgURL, countryId) {
    return (
        {
            "cityName": city,
            "img": imgURL,
            "CountryId": countryId
        }
    )
}

function AddCityFromCountry({ countryId }) {
    const [city, setCity] = useState("");
    const [imgURL, setImgURL] = useState("");
    const {user} = useUserContext();
    const history = useHistory();

    const handleAdd = (event) => {
        event.preventDefault();

        API.getUserByUid(user.uid)
        .then((id) => {
            let userId = id.data.id;

            const cityBody = cityJSON(city, imgURL, countryId);
        
            API.saveCity(cityBody, userId)
            .then(() => {
                console.log("Saved City")
                return (
                    history.push(`/country/${countryId}/city`),
                    window.location.reload()
                )
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
            <BackButton/>
            <div className="flex justify-center m-6">
                <form className="w-full max-w-sm bg-teal-600 bg-opacity-75 p-3 rounded">
                    {/* City */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="city">
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
                            onChange={(event) => setCity(event.target.value)} />
                        </div>
                    </div>
                    {/* Image URL */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="img">
                                Image URL
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                            type="text" 
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            name="img"
                            value={imgURL}
                            placeholder="https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731__480.jpg" 
                            id="img" 
                            onChange={(event) => setImgURL(event.target.value)} />
                        </div>
                    </div>
                    {/* Add */}
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={event => handleAdd(event)} className="shadow bg-white focus:shadow-outline focus:outline-none text-teal-600 font-bold py-2 px-4 rounded" type="button">
                                Add +
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <SearchCardContainer />
        </div>
    );
}

export default AddCityFromCountry;
