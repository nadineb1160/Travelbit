import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AddCityFromCountry from "../components/AddCityFromCountry";
import CityCardContainer from '../components/CityCardContainer';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";
import BackButton from '../components/BackButton';

const CityFromCountry = () => {
    const { user } = useUserContext();
    const { countryId } = useParams();

    const [displayCards, setDisplayCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(user)

        API.getUserByUid(user.uid)
        .then((res) => {
            console.log(res)
            let userId = res.data.id;
            console.log(userId);
        
        
            API.getCitiesFromCountry(countryId, userId).then((cities) => {
            
                let cityData = cities.data;

                setDisplayCards(cityData);
                setLoading(false);
            }).catch((error) => {
                console.log(error)
            });
        }).catch((error) => {
            console.log(error)
        });
       
    }, [countryId, user]);

    const addCityHandler = (event) => {
        setAdding(true);
    }

    if (loading) return <span>Loading...</span>

    return adding ? (<AddCityFromCountry countryId={countryId}/>) : (
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

export default CityFromCountry;