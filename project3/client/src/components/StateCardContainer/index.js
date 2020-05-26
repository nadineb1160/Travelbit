import React from "react";
import StateCard from '../StateCard';


const StateCardContainer = ({ cards }) => {
    
    return (
        <div className="flex flex-wrap justify-center p-6 m-2">
            {cards.map((card) => <StateCard key={card.id} card={card} />)}
        </div>
    );
}

export default StateCardContainer;
