import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import {useUserContext} from "../../state/UserContext";


function tripJSON(trip, cityId) {
    return (
        {
            "tripName": trip,
            "CityId": cityId
        }
    )
}

function AddTrip({ cityId }) {
    const [trip, setTrip] = useState("");
    const {user} = useUserContext();
    const history = useHistory();

    const handleAdd = (event) => {
        event.preventDefault();

        const tripBody = tripJSON(trip, cityId);
        console.log(tripBody)
     
    
        // API.saveTrip(tripBody)
        // .then(() => {
        //     console.log("Saved Trip")
        //     return (
        //         history.push(`/city/${cityyId}/trip`)
        //     )
        // })
        // .catch(error => {
        //     console.log(error)
        // })
       
    }

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "trip") {
            setTrip(value);
        } 
    };

    return (
        <div>

            <div className="flex justify-center m-6">
                <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="trip">
                                Trip
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                            type="text" 
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            name="trip"
                            value={trip}
                            placeholder="Road Trip Summer 2014" 
                            id="trip" 
                            onChange={(event) => onChangeHandler(event)} />
                        </div>
                    </div>
                   

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={event => handleAdd(event)} className="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Add +
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTrip;
