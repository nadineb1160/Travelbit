import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../state/UserContext";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import API from "../../utils/API";


function tripJSON(trip, description, startDate, endDate, cityId) {
    return (
        {
            "tripName": trip,
            "description": description,
            "startDate": startDate,
            "endDate": endDate,
            "CityId": cityId
        }
    )
}

function TripCard({ card }) {
    const [showModal, setShowModal] = useState(false);
    const [trip, setTrip] = useState(card.tripName);
    const [description, setDescription] = useState("");
    const [imgURL, setImgURL] = useState(card.img);
    const { user } = useUserContext();
    const history = useHistory();
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    // Date Format - MM/DD/YYYY
    let tripStart = card.startDate.split(" ").slice(1, 4).join("/");
    let tripEnd = card.endDate.split(" ").slice(1, 4).join("/");

    const clickCardHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let tripId = event.currentTarget.getAttribute('value');
        let tripName = event.currentTarget.getAttribute('name');

        console.log(tripId)
        console.log(tripName)

        // history.push(`/trip/${tripId}/`) 
    }

    const clickButtonHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const { id } = event.currentTarget;

        if (id === "delete") {
            API.deleteTrip(card.id)
                .then(() => {
                    console.log(`Removed ${card.tripName}`)
                    return (
                        // window.location.reload()
                        history.push(`/city/${card.CityId}/trip`)
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

                // Date Format - MM/DD/YYYY
                // Format: Day of week | Month | Day | Year
                tripStart = state[0].startDate.toString().split(" ").slice(0, 4).join(" ");
                tripEnd = state[0].endDate.toString().split(" ").slice(0, 4).join(" ");

                const tripBody = tripJSON(trip, description, tripStart, tripEnd, card.CityId);

                API.updateTrip(card.id, tripBody, userId)
                    .then(() => {
                        console.log(`Updated Trip: ${card.tripName}`)
                        // window.location.href = `/city/${card.CityId}/trip`
                        return (
                            history.push(`/city/${card.CityId}/trip`)
                            // window.location.reload()
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
        if (name === "trip") {
            setTrip(value);
        } else if (name === "description") {
            setDescription(value);
        }
    };

    return (

        <div className="max-w-xl w-2/3 lg:max-w-full lg:flex p-3 justify-center">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${imgURL})` }} title="Travel picture">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                {/* Card */}
                <div className="mb-8">
                    {/* Delete */}
                    <i
                        className="fas fa-times float-right text-red-600 hover:text-red-400"
                        onClick={(event) => clickButtonHandler(event)}
                        id="delete" />
                    <br />
                    {/* Date Range */}
                    <p className="text-sm text-gray-600 flex items-center p-2">
                        <i className="fas fa-calendar-alt pr-2"></i>
                        {tripStart} - {tripEnd}
                    </p>
                    {/* Trip Name */}
                    <div className="text-gray-900 font-bold text-xl mb-2">{card.tripName}</div>
                    {/* Trip Description */}
                    <p className="text-gray-700 text-base">{card.description}</p>
                    {/* Update */}
                    <i
                        className="fas fa-edit float-left text-teal-600 hover:text-teal-400 mt-3"
                        style={{ transition: "all .15s ease" }}
                        onClick={(event) => clickButtonHandler(event)}
                        id="update" />
                </div>
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center flex overflow-auto fixed inset-0 z-50 outline-none focus:outline-none bg-fixed"
                        data-backdrop="static">

                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Update Trip
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
                                                <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="country">
                                                    Trip
                                            </label>
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="md:w-2/3">
                                                <input
                                                    type="text"
                                                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                    name="trip"
                                                    placeholder={trip}
                                                    id="trip"
                                                    onChange={(event) => onChangeHandler(event)}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-1/4">
                                                <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="tripName">
                                                    Description
                                                </label>
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="md:w-full">
                                                <input
                                                    type="text"
                                                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                                    name="description"
                                                    value={description}
                                                    placeholder="Adventure around Eastern Europe with cousin Stef and Mom after interning in Berlin."
                                                    id="description"
                                                    onChange={(event) => onChangeHandler(event)} />
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-6">
                                            <DateRange
                                                name="date"
                                                editableDateInputs={true}
                                                onChange={item => setState([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                ranges={state}
                                                color={"#319795"}
                                                rangeColors={["#319795", "#319795", "#319795"]}
                                                id="date"
                                            />
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

export default TripCard;
