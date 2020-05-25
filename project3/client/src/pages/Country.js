import React, { useEffect, useState } from 'react';
import CountryCardContainer from '../components/CountryCardContainer';
// import Card from '../components/Card';
// import AddCountry from '../components/AddCountry';
import { useUserContext } from "../state/UserContext.js"
import API from "../utils/API";

const Country = () => {
    const { user } = useUserContext();

    const [displayCards, setDisplayCards] = useState([]);
    const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(user)
        API.getUserByUid(user.uid)
        .then((res) => {
            let userId = res.data.id;
            console.log(userId);
    
            API.getCountries(userId).then((countries) => {
            
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
            <header className="relative bg-no-repeat bg-cover lg:bg-center p-6 bg-top-right h-screen" id="country-img">

                <div className="flex justify-center mt-4">
                    {/* <h2 className="text-center text-xl font-bold">{name}Countries</h2>
                    <br/> */}
                    <button onClick={addCountryHandler} className="shadow bg-teal-600 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded popppins">
                        Add Country
                    </button>
                </div>
            
                <CountryCardContainer
                    cards={displayCards}
                />
            </header>
        </div>
    )
}

export default Country;
