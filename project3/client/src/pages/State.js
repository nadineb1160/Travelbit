import React, { useEffect, useState } from 'react';
import StateCardContainer from '../components/StateCardContainer';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";

const State = ({countryId}) => {
    console.log("Hello made it to state")
    const { user } = useUserContext();
    const { name } = user;

    const [displayCards, setDisplayCards] = useState([]);
    // const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);

    console.log(countryId)

    useEffect(() => {
        setLoading(true);
        console.log(user)
        API.getUserByUid(user.uid)
        .then((id) => {
            let userId = id.data.id;
            console.log(userId);
    
            API.getStates(userId, countryId).then((states) => {
                console.log("States")
                console.log(states.data);

                let stateData = states.data;

                setDisplayCards(stateData);
                setLoading(false);
            })
        });
        
    }, []);

    const addStateHandler = (event) => {
        return (
            window.location.href = "/addState"
        )
    }


    return (
        <div>
            <div className="flex justify-center">
                {/* <h2 className="text-center text-xl font-bold">{name}Countries</h2>
                <br/> */}
                <button onClick={addStateHandler} className="bg-teal-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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
