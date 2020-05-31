import React, {useState, createRef} from "react";
import API from "../../utils/API";
import {useUserContext} from "../../state/UserContext";
import SearchCardContainer from '../SearchCardContainer';
import BackButton from '../BackButton';


function countryJSON(country, continent, imgURL, userId) {
    return (
        {
            "countryName": country,
            "continent": continent,
            "img": imgURL,
            "UserId": userId
        }
    )
}

function AddCountry() {
    const [country, setCountry] = useState("");
    const [continent, setContinent] = useState("");
    const [imgURL, setImgURL] = useState("");
    const {user} = useUserContext();

    const handleAdd = (event) => {
        event.preventDefault();
     
        API.getUserByUid(user.uid)
        .then((id) => {
            let userId = id.data.id;

            const countryBody = countryJSON(country, continent, imgURL, userId);

            API.saveCountry(countryBody, userId)
            .then(() => {
                console.log("Saved Country")
                return (
                    window.location.href = "/travel"
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

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "country") {
            setCountry(value);
        } else if (name === "continent") {
            setContinent(value);
        } else if (name === "img") {
            setImgURL(value);
        }
    };

    // const readURL = (event) => {
    
    //     if(event.target.files[0]) {
    //         let reader = new FileReader();

    //         reader.onload = function (e) {
    //             console.log(e.target.result)
    //             setImgURL(e.target.result)
    //         };

    //         reader.readAsDataURL(event.target.files[0]);
    //     }
    // }

    return (
        <div>
            <BackButton/>
            <div className="flex justify-center m-6">
                <form className="w-full max-w-sm bg-teal-600 bg-opacity-75 p-3 rounded">
                    {/* Country */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="country">
                                Country
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                            type="text" 
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            name="country"
                            value={country}
                            placeholder="Germany" 
                            id="country" 
                            onChange={(event) => onChangeHandler(event)} />
                        </div>
                    </div>
                    {/* Continent */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="continent">
                                Continent
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <select 
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            name="continent"
                            value={continent}
                            id="continent"
                            onChange={(event) => onChangeHandler(event)} >
                                <option>Africa</option>
                                <option>Antarctica</option>
                                <option>Australia</option>
                                <option>Asia</option>
                                <option>Europe</option>
                                <option>North America</option>
                                <option>South America</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
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
                            onChange={(event) => onChangeHandler(event)} />
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

export default AddCountry;
