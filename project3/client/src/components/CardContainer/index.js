import React, {useState, useEffect} from "react";
import Card from '../Card';


const CardContainer = () => {

    return (
       <div className="w-1/3 flex p-6">
           <Card/>
           <Card/>
       </div>
    )
}

export default CardContainer
