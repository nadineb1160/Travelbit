import React, { useEffect, useState } from 'react';
import CityCardContainer from '../components/CityCardContainer';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";

const City = ({ countryId }) => {
    console.log(countryId)

    const { user } = useUserContext();

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
            <div className="flex justify-center mt-4">
                {/* <h2 className="text-center text-xl font-bold">{name}Countries</h2>
                <br/> */}
                <button onClick={addCityHandler} className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Add City
                </button>
            </div>
           
            {/* <CityCardContainer
                cards={displayCards}
            /> */}
        </div>
    )
}

export default City;