import React from "react";
import CountryCard from '../CountryCard';


const CountryCardContainer = ({ cards }) => {
    
    return (
        <div className="flex flex-wrap justify-center p-6 m-2">
            {cards.map((card) => <CountryCard key={card.id} card={card} />)}
        </div>
    );
}

export default CountryCardContainer;
