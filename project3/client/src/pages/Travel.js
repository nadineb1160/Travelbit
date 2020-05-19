import React, {useEffect, useState} from 'react';
import CardContainer from '../components/CardContainer';
import {useUserContext} from "../state/UserContext.js"
import API from "../utils/API";

const Travel = () => {
    const {name, getUserToken} = useUserContext();

    const [displayCards, setDisplayCards] = useState([]);
    const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     API.getCountries().then((countries) => {
    //         setDisplayCards(countries);
    //         setLoading(false);
    //     })
    // }, []);



    return (
        <div>
            <h2></h2>
            <CardContainer 
            cards={displayCards}
            />
        </div>
    )
}

export default Travel;
