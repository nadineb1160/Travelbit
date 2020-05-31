import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import AddCityFromCountry from "../components/AddCityFromCountry";
import CityCardContainer from '../components/CityCardContainer';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";
import BackButton from '../components/BackButton';

const CityFromCountry = () => {
    console.log("city from country")
    const { user } = useUserContext();
    const { countryId } = useParams();

    const [displayCards, setDisplayCards] = useState([]);
    // const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        console.log(user)
        
        API.getCitiesFromCountry(countryId).then((cities) => {
            console.log("Cities")
            console.log(cities.data);

            let cityData = cities.data;

            setDisplayCards(cityData);
            setLoading(false);
        })
       
    }, []);

    const addCityHandler = (event) => {
        setAdding(true);
    }

    if (loading) return <span>Loading...</span>

    return adding ? (<AddCityFromCountry countryId={countryId}/>) : (
        <div>
            <BackButton/>
            <div className="flex justify-center">
                {/* <h2 className="text-center text-xl font-bold">{name}Countries</h2>
                <br/> */}
                <button onClick={addCityHandler} className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Add City
                </button>
            </div>
           
            <CityCardContainer
                cards={displayCards}
            />
        </div>
    )
}

export default CityFromCountry;