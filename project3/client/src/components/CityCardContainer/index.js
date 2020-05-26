import React from "react";
import CityCard from '../CityCard';


const CityCardContainer = ({ cards }) => {
    
    return (
        <div className="flex flex-wrap justify-center p-6 m-2">
            {cards.map((card) => <CityCard key={card.id} card={card} />)}
        </div>
    );
}

export default CityCardContainer;
