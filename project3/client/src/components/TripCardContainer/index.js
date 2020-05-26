import React from "react";
import TripCard from '../TripCard';


const TripCardContainer = ({ cards }) => {
    
    return (
        <div className="flex flex-wrap justify-center p-6 m-2">
            {cards.map((card) => <TripCard key={card.id} card={card} />)}
        </div>
    );
}

export default TripCardContainer;
