import React, {useState, useEffect} from "react";
import Card from '../Card';


const CardContainer = ({ cards }) => {


    return (
       <div className="flex p-6">
           {cards.map((card) => <Card card={card}/>)}
       </div>
    );
}

export default CardContainer
