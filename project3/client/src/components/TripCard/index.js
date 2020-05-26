import React from "react";
import { useHistory } from "react-router-dom";


function TripCard({ card }) {
    const history = useHistory();

    const clickCardHandler = (event) => {
        event.preventDefault();
       
        let tripId = event.currentTarget.getAttribute('value');
        let tripName = event.currentTarget.getAttribute('name');
        
        console.log(tripId)
        console.log(tripName)
        
        // history.push(`/trip/${tripId}/`) 

    }

    return (
        <div onClick={(event) => clickCardHandler(event)} className="max-w-sm border rounded overflow-hidden shadow-lg m-3 bg-white"  value={card.id} name={card.tripName}>
            <img className="w-full p-3" src="https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731__480.jpg" alt="Travel Map"/>
            <div className="px-3 py-2">
                <h1 className="font-bold text-5xl mb-2 marker text-center">{card.tripName}</h1>
            </div>
        
        </div>
    );
}

export default TripCard;
