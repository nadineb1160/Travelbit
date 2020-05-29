import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import {useUserContext} from "../../state/UserContext";


function stateJSON(state, countryId) {
    return (
        {
            "stateName": state,
            "CountryId": countryId
        }
    )
}

function AddState({ countryId }) {
    const [state, setState] = useState("");
    const {user} = useUserContext();
    const history = useHistory();

    const handleAdd = (event) => {
        event.preventDefault();

        const stateBody = stateJSON(state, countryId);
        console.log(stateBody)
     
    
        API.saveState(stateBody)
        .then(() => {
            console.log("Saved State")
            return (
                history.push(`/country/${countryId}/state`),
                window.location.reload()
            )
        })
        .catch(error => {
            console.log(error)
        })
       
    }

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "state") {
            setState(value);
        } 
    };

    return (
        <div>

            <div className="flex justify-center m-6">
                <form className="w-full max-w-sm bg-teal-600 bg-opacity-75 p-3 rounded">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="state">
                                State
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                            type="text" 
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            name="state"
                            value={state}
                            placeholder="California" 
                            id="state" 
                            onChange={(event) => onChangeHandler(event)} />
                        </div>
                    </div>
                   

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
        </div>
    );
}

export default AddState;
