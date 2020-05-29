import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AddTrip from "../components/AddTrip";
import TripCardContainer from '../components/TripCardContainer';
import { useUserContext } from "../state/UserContext.js";
import API from "../utils/API";

const Trip = () => {
    console.log("Hello made it to trip")
    const { user } = useUserContext();
    const { cityId } = useParams();

    const [displayCards, setDisplayCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);

    console.log(cityId)
    console.log(displayCards)

    useEffect(() => {
        setLoading(true);
        console.log(user)
        
        API.getTrips(cityId).then((cities) => {
            console.log("Cities")
            console.log(cities.data);

            let cityData = cities.data;

            setDisplayCards(cityData);
            setLoading(false);
        })
        
        
    }, []);

    const addStateHandler = (event) => {
        
        setAdding(true);
        
    }

    if (loading) return <span>Loading...</span>

    return adding ? (<AddTrip cityId={cityId}/>) : (

        <div>
            <div className="flex justify-center mt-4">
                
                <button onClick={addStateHandler} className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
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
