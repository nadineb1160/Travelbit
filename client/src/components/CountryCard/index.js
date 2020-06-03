import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {useUserContext} from "../../state/UserContext";
import API from "../../utils/API";

function countryJSON(country, continent, userId) {
    return (
        {
            "countryName": country,
            "continent": continent,
            "UserId": userId
        }
    )
}

function CountryCard({ card }) {
    const [showModal, setShowModal] = React.useState(false);
    const [country, setCountry] = useState(card.countryName);
    const [continent, setContinent] = useState(card.continent);
    const [imgURL, setImgURL] = useState(card.img);
    const {user} = useUserContext();
    const history = useHistory();

    const clickCardHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        let countryId = event.currentTarget.getAttribute('value');
        let countryName = event.currentTarget.getAttribute('name');

        if (countryName === "United States of America" || countryName === "USA" || countryName === "United States") {
            console.log("states");
            return (
                history.push(`/country/${countryId}/state`),
                window.location.reload()
            )
        } else {
            return (
                history.push(`/country/${countryId}/city`),
                window.location.reload()
            )
        }
    }

    const clickButtonHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const { id } = event.currentTarget;

        if (id === "delete") {
            API.deleteCountry(card.id)
                .then(() => {
                    console.log(`Removed ${card.countryName}`)
                    return (
                        history.push(`/travel`),
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

            const countryBody = countryJSON(country, continent, userId);

            API.updateCountry(card.id, countryBody, userId)
                .then(() => {
                    console.log(`Saved Country: ${card.countryName}`)
                    // window.location.href = "/travel"
                    return (
                        history.push(`/travel`),
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

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "country") {
            setCountry(value);
        } else if (name === "continent") {
            setContinent(value);
        }
    };

    return (
        <div>
            <div onClick={(event) => clickCardHandler(event)} className="max-w-sm border rounded overflow-hidden shadow-lg m-3 bg-white" value={card.id} name={card.countryName}>
                <div className="p-2">
                    <i className="fas fa-times float-left text-red-600 hover:text-red-400" onClick={(event) => clickButtonHandler(event)} id="delete"></i>
                    <i className="fas fa-edit float-right text-teal-600 hover:text-teal-400"
                    style={{ transition: "all .15s ease" }}
                    onClick={(event) => clickButtonHandler(event)}
                    id="update"></i>
                </div>
                    
                <img className="w-full p-3" src={imgURL} alt="Travel Map" />
                <div className="px-3 py-2">
                    <h1 className="font-bold text-5xl mb-2 marker text-center">{card.countryName}</h1>
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
                                        Update Country
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
                                                    Country
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <input
                                                    type="text"
                                                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                    name="country"
                                                    placeholder={country}
                                                    id="country"
                                                    onChange={(event) => onChangeHandler(event)} 
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">

                                            <div className="md:w-1/3">
                                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="continent">
                                                    Continent
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <select
                                                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                    name="continent"
                                                    value={continent}
                                                    id="continent"
                                                    onChange={(event) => onChangeHandler(event)} 
                                                >
                                                    <option>Africa</option>
                                                    <option>Antarctica</option>
                                                    <option>Australia</option>
                                                    <option>Asia</option>
                                                    <option>Europe</option>
                                                    <option>North America</option>
                                                    <option>South America</option>
                                                </select>
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
            

export default CountryCard;
