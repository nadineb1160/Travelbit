import axios from "axios";

export default {
    // Get all users
    getUsers: () => {
        return axios.get(`/api/user`);
    },
    // // Get user with a given id
    // getUser: (userId) => {
    //     return axios.get(`/api/user/${userId}`);
    // },
    // Get user with a uid
    getUserByUid: (uid) => {
        return axios.get(`/api/user/${uid}`);
    },
    // Update user with id
    updateUser: (userId, userData) => {
        return axios.post(`api/user/${userId}`, userData);
    },
    // Saves a user to the database
    saveUser: (userData) => {
        return axios.post("/api/user", userData);
    },
    // Get all countries for user
    getCountries: (userId) => {
        return axios.get(`/api/country/byUser/${userId}`);
    },
    // Get the country with a given id
    getCountry: (countryId) => {
        return axios.get(`/api/country/${countryId}`);
    },
    // Deletes a country with given id
    deleteCountry: (countryId) => {
        return axios.delete(`/api/country/${countryId}`)
    },
    // Update country with id
    updateCountry: (countryId, countryData) => {
        return axios.post(`api/country/${countryId}`, countryData);
    },
    // Saves a country to the database
    saveCountry: (countryData) => {
        return axios.post(`/api/country`, countryData);
    },
    // Get all states in country
    getStates: (countryId) => {
        return axios.get(`/api/state/byCountry/${countryId}`);
    },
    // Get the city with a given id
    getState: (stateId) => {
        return axios.get(`/api/state/${stateId}`);
    },
    // Deletes a city with given id
    deleteState: (stateId) => {
        return axios.get(`/api/state/${stateId}`);
    },
    // Update city with id
    updateState: (stateId, stateData) => {
        return axios.get(`/api/state/${stateId}`, stateData);
    },
    // Saves a city to the database
    saveState: (stateData) => {
        return axios.post(`/api/state`, stateData);
    },
    // Get all cities in country for user
    getCitiesFromCountry: (countryId) => {
        return axios.get(`/api/city/byCountry/${countryId}`);
    },
    // Get all cities in state for user
    getCitiesFromState: (stateId) => {
        return axios.get(`/api/city/byCountry/${stateId}`);
    },
    // Get the city with a given id
    getCity: (cityId) => {
        return axios.get(`/api/city/${cityId}`);
    },
    // Deletes a city with given id
    deleteCity: (cityId) => {
        return axios.get(`/api/city/${cityId}`);
    },
    // Update city with id
    updateCity: (cityId, cityData) => {
        return axios.get(`/api/city/${cityId}`, cityData);
    },
    // Saves a city to the database
    saveCity: (cityData) => {
        return axios.post(`/api/city`, cityData);
    },
    // Get all trips for a city
    getTrips: (cityId) => {
        return axios.get(`/api/trip/byCity/${cityId}`);
    },
    // Get the trip with a given id
    getTrip: (tripId) => {
        return axios.get(`/api/trip/${tripId}`);
    },
    // Deletes a trip with given id
    deleteTrip: (tripId) => {
        return axios.get(`/api/trip/${tripId}`);
    },
    // Update city with id
    updateTrip: (tripId, tripData) => {
        return axios.get(`/api/trip/${tripId}`, tripData);
    },
    // Saves a city to the database
    saveTrip: (tripData) => {
        return axios.post(`/api/trip`, tripData);
    }
};