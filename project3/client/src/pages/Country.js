import React, { useEffect, useState } from 'react';
import CountryCardContainer from '../components/CountryCardContainer';
// import Card from '../components/Card';
// import AddCountry from '../components/AddCountry';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";

const Country = () => {
    const { user } = useUserContext();
    const { name } = user;

    const [displayCards, setDisplayCards] = useState([]);
    const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(user)
        API.getUserByUid(user.uid)
        .then((id) => {
            let userId = id.data.id;
            console.log(userId);
    
            API.getCountries(userId).then((countries) => {
                console.log("Countries")
                console.log(countries.data);

                let countryData = countries.data;

                setDisplayCards(countryData);
                setLoading(false);
            })
        });
        
    }, []);

    const addCountryHandler = (event) => {
        return (
            window.location.href = "/addCountry"
        )
    }


    return (
        <div>
            <div className="flex justify-center">
                {/* <h2 className="text-center text-xl font-bold">{name}Countries</h2>
                <br/> */}
                <button onClick={addCountryHandler} className="bg-teal-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Add Country
                </button>
            </div>
           
            <CountryCardContainer
                cards={displayCards}
            />
        </div>
    )
}

export default Country;
