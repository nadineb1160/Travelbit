import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import AddState from "../components/AddState";
import StateCardContainer from '../components/StateCardContainer';
import { useUserContext } from "../state/UserContext.js";
import API from "../utils/API";
import BackButton from '../components/BackButton';

const State = () => {
    console.log("Hello made it to state")
    const { user } = useUserContext();
    const { countryId } = useParams();

    const [displayCards, setDisplayCards] = useState([]);
    // const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);
    const history = useHistory();

    console.log(countryId)
    // console.log(displayCards)

    useEffect(() => {
        setLoading(true);
        console.log(user)
       
        API.getStates(countryId).then((states) => {
            console.log("States")
            
            let stateData = states.data;
            console.log(stateData);

            setDisplayCards(stateData);
            setLoading(false);
        })
        
    }, []);

    const addStateHandler = (event) => {
        
        setAdding(true);
        
    }

    if (loading) return <span>Loading...</span>

    return adding ? (<AddState countryId={countryId}/>) : (

        <div>
            <BackButton/>
            <div className="flex justify-center">
        
                <button onClick={addStateHandler} className="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Add State
                </button>
            </div>
            
            <StateCardContainer
                cards={displayCards}
            />
        </div>
    )
    
}

export default State;
