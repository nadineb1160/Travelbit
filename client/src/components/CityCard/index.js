import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {useUserContext} from "../../state/UserContext";
import API from "../../utils/API";


function cityJSON(city, countryId) {
    return (
        {
            "cityName": city,
            "CountryId": countryId
        }
    )
}

function CityCard({ card }) {
    const [showModal, setShowModal] = React.useState(false);
    const [city, setCity] = useState(card.cityName);
    // const [imgURL, setImgURL] = useState(card.img);
    const {user} = useUserContext();
    const history = useHistory();

    const clickCardHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();

        let cityId = event.currentTarget.getAttribute('value');
        
        history.push(`/city/${cityId}/trip/`);
    }

    const clickButtonHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const { id } = event.currentTarget;

        if (id === "delete") {
            API.deleteCity(card.id)
                .then(() => {
                    console.log(`Removed ${card.cityName}`)
                    return (
                        // window.location.reload()
                        history.push(`/country/${card.CountryId}/city`),
                        window.location.reload()
                    )
                })
                .catch(error => {
                    console.log(error)
                });
        }
        if (id === "update") {
            setShowModal(true);
        }
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        
        API.getUserByUid(user.uid)
        .then((id) => {
            let userId = id.data.id;

            const cityBody = cityJSON(city, card.CountryId);

            API.updateCity(card.id, cityBody, userId)
                .then(() => {
                    console.log(`Updated City: ${card.cityName}`)
                    // window.location.href = `/country/${card.CountryId}/city`
                    return (
                        history.push(`/country/${card.CountryId}/city`),
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
            <div onClick={(event) => clickCardHandler(event)} className="max-w-sm border rounded overflow-hidden shadow-lg m-3 bg-white"  value={card.id} name={card.cityName}>
                {/* Card Buttons */}
                <div className="p-2">
                    <i 
                    className="fas fa-times float-left text-red-600 hover:text-red-400" 
                    onClick={(event) => clickButtonHandler(event)} 
                    id="delete"/>

                    <i 
                    className="fas fa-edit float-right text-teal-600 hover:text-teal-400"
                    style={{ transition: "all .15s ease" }}
                    onClick={(event) => clickButtonHandler(event)}
                    id="update"/>
                </div>
                {/* Image */}
                <img className="w-full p-3" src={card.img ? card.img : "https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731_1280.jpg"} alt="Travel Map"/>
                {/* City Name */}
                <div className="px-3 py-2">
                    <h1 className="font-bold text-5xl mb-2 marker text-center">{card.cityName}</h1>
                </div>
            </div>


            {showModal ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden bg-fixed"
                    data-backdrop="static">

                    <div className="relative w-auto my-6 mx-auto max-w-sm">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Update City
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <form className="w-full max-w-sm">
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="country">
                                                City
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input
                                                type="text"
                                                className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                name="city"
                                                placeholder={city}
                                                id="city"
                                                onChange={(event) => setCity(event.target.value)} 
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                    onClick={event => {
                                        handleUpdate(event)
                                        setShowModal(false)
                                    }}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        
        </div>
    );
}

export default CityCard;
