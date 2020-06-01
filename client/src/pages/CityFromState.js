import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AddCityFromState from "../components/AddCityFromState";
import CityCardContainer from '../components/CityCardContainer';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";
import BackButton from '../components/BackButton';

const CityFromState = () => {
    console.log("City From State")
    const { user } = useUserContext();
    const { stateId } = useParams();

    const [displayCards, setDisplayCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);


    useEffect(() => {
        setLoading(true);
        
        API.getCitiesFromState(stateId).then((cities) => {

            let cityData = cities.data;

            setDisplayCards(cityData);
            setLoading(false);
        }).catch(error => {
            console.log(error)
        })
       
    }, []);

    const addCityHandler = () => {
        setAdding(true);
    }

    if (loading) return <span>Loading...</span>

    return adding ? (<AddCityFromState stateId={stateId}/>) : (
        <div>
            <BackButton/>
            <div className="flex justify-center">
                <button onClick={addCityHandler} className="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Add City
                </button>
            </div>
           
            <CityCardContainer cards={displayCards} />
        </div>
    )
}

export default CityFromState;