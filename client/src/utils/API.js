import axios from "axios";

const headers = user => ({authorization: user ? true : false});

export default {
    
    // ***** USER ******

    // Get all users
    getUsers: () => {
        return axios({url: `/api/user`});
    },
    // // Get user with a given id
    // getUser: (userId) => {
    //     return axios.get(`/api/user/${userId}`);
    // },
    // Get user with a uid
    getUserByUid: (uid) => {
        return axios({url: `/api/user/${uid}`, headers: headers(uid)});
    },
    // Update user with id
    updateUser: (userId, userData) => {
        return axios({url: `/api/user/${userId}`, data: userData, headers: headers(userId), method: "PUT"});
    },
    // Saves a user to the database
    saveUser: (userData) => {
        return axios({url: "/api/user", data: userData, headers: headers(userData.uid), method: "POST"});
    },

    // ***** COUNTRY ******

    // Get all countries for user
    getCountries: (userId) => {
        return axios({url: `/api/country/byUser/${userId}`, headers: headers(userId)});
    },
    // Get the country with a given id
    getCountry: (countryId, userId) => {
        return axios({url: `/api/country/${countryId}`, headers: headers(userId)});
    },
    // Deletes a country with given id
    deleteCountry: (countryId, userId) => {
        return axios({url: `/api/country/${countryId}`, headers: headers(userId), method: "DELETE"})
    },
    // Update country with id
    updateCountry: (countryId, countryData, userId) => {
        console.log("api")
        return axios({url: `/api/country/${countryId}`, data: countryData, headers: headers(userId), method: "PUT"});
    },
    // Saves a country to the database
    saveCountry: (countryData, userId) => {
        return axios({url: `/api/country`, data: countryData, headers: headers(userId), method: "POST"});
    },

    // ***** STATE ******

    // Get all states in country
    getStates: (countryId, userId) => {
        return axios({url: `/api/state/byCountry/${countryId}`, headers: headers(userId)});
    },
    // Get the city with a given id
    getState: (stateId, userId) => {
        return axios({url: `/api/state/${stateId}`, headers: headers(userId)});
    },
    // Deletes a city with given id
    deleteState: (stateId, userId) => {
        return axios({url: `/api/state/${stateId}`, headers: headers(userId), method: "DELETE"});
    },
    // Update city with id
    updateState: (stateId, stateData, userId) => {
        return axios({url: `/api/state/${stateId}`, data: stateData, headers: headers(userId), method: "PUT"});
    },
    // Saves a city to the database
    saveState: (stateData, userId) => {
        return axios({url: `/api/state`, data: stateData, headers: headers(userId), method: "POST"});
    },

    // ***** CITY ******


    // Get all cities in country for user
    getCitiesFromCountry: (countryId, userId) => {
        return axios({url: `/api/city/byCountry/${countryId}`, headers: headers(userId)});
    },
    // Get all cities in state for user
    getCitiesFromState: (stateId, userId) => {
        return axios({url: `/api/city/byState/${stateId}`, headers: headers(userId)});
    },
    // Get the city with a given id
    getCity: (cityId, userId) => {
        return axios({url: `/api/city/${cityId}`, headers: headers(userId)});
    },
    // Deletes a city with given id
    deleteCity: (cityId, userId) => {
        return axios({url: `/api/city/${cityId}`, headers: headers(userId), method: "DELETE"});
    },
    // Update city with id
    updateCity: (cityId, cityData, userId) => {
        return axios({url: `/api/city/${cityId}`, data: cityData,  headers: headers(userId), method: "PUT"});
    },
    // Saves a city to the database
    saveCity: (cityData, userId) => {
        return axios({url: `/api/city`, data: cityData, headers: headers(userId), method: "POST"});
    },

    // ***** TRIP ******


    // Get all trips for a city
    getTrips: (cityId, userId) => {
        return axios({url: `/api/trip/byCity/${cityId}`, headers: headers(userId)});
    },
    // Get the trip with a given id
    getTrip: (tripId, userId) => {
        return axios({url: `/api/trip/${tripId}`, headers: headers(userId)});
    },
    // Deletes a trip with given id
    deleteTrip: (tripId, userId) => {
        return axios({url: `/api/trip/${tripId}`, headers: headers(userId), method: "DELETE"});
    },
    // Update city with id
    updateTrip: (tripId, tripData, userId) => {
        return axios({url: `/api/trip/${tripId}`, data: tripData, headers: headers(userId), method: "PUT"});
    },
    // Saves a city to the database
    saveTrip: (tripData, userId) => {
        return axios({url: `/api/trip`, data: tripData, headers: headers(userId), method: "POST"});
    }
};