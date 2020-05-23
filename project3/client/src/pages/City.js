import React, { useEffect, useState } from 'react';
import CityCardContainer from '../components/CityCardContainer';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";

const City = ({ countryId }) => {
    const { user } = useUserContext();
    const { name } = user;

    const [displayCards, setDisplayCards] = useState([]);
    // const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(user)
        API.getUserByUid(user.uid)
        .then((id) => {
            let userId = id.data.id;
            console.log(userId);
    
            API.getCities(userId, countryId).then((cities) => {
                console.log("Cities")
                console.log(cities.data);

                let cityData = cities.data;

                setDisplayCards(cityData);
                setLoading(false);
            })
        });
        
    }, []);

    const addCityHandler = (event) => {
        return (
            window.location.href = "/addCity"
        )
    }


    return (
        <div>
            <div className="flex justify-center">
                {/* <h2 className="text-center text-xl font-bold">{name}Countries</h2>
                <br/> */}
                <button onClick={addCityHandler} className="bg-teal-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Add City
                </button>
            </div>
           
            <CityCardContainer
                cards={displayCards}
            />
        </div>
    )
}

export default City;