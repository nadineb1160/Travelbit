import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import AddTrip from "../components/AddTrip";
import TripCardContainer from '../components/TripCardContainer';
import { useUserContext } from "../state/UserContext.js";
import API from "../utils/API";
import BackButton from '../components/BackButton';

const Trip = () => {
    const { user } = useUserContext();
    const { cityId } = useParams();

    const [displayCards, setDisplayCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(user)
        
        API.getTrips(cityId).then((cities) => {
    
            let cityData = cities.data;

            setDisplayCards(cityData);
            setLoading(false);
        })
        
        
    }, []);

    const addStateHandler = () => {
        
        setAdding(true);
        
    }

    if (loading) return <span>Loading...</span>

    return adding ? (<AddTrip cityId={cityId}/>) : (

        <div>
            <BackButton/>
            <div className="flex justify-center">
                <button onClick={addStateHandler} className="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Add Trip
                </button>
            </div>
            
            <TripCardContainer
                cards={displayCards}
            />
        </div>
    )
    
}

export default Trip;
