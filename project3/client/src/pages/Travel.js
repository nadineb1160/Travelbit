import React, { useEffect, useState } from 'react';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import AddCountry from '../components/AddCountry';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";

const Travel = () => {
    const { user } = useUserContext();
    const { name } = user;

    // const { name, getUserToken } = useUserContext();

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

    const addCountryHandler = (event) => {
        return (

            window.location.href = "/addCountry"
        )
    }


    return (
        <div>
            {/* <h2 className="text-center">{name}'s Travels</h2> */}
            <button onClick={addCountryHandler} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Button
            </button>           
            {/* <AddCountry/> */}
            <CardContainer
                cards={displayCards}
            />
            <Card />
        </div>
    )
}

export default Travel;
