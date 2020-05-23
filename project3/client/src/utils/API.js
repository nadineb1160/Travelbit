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
        return axios.get(`/api/user/${userId}/country`);
    },
    // Get the country with a given id
    getCountry: (userId, countryId) => {
        return axios.get(`/api/user/${userId}/country/${countryId}`);
    },
    // Deletes a country with given id
    deleteCountry: (userId, countryId) => {
        return axios.delete(`/api/user/${userId}/country/${countryId}`)
    },
    // Update country with id
    updateCountry: (userId, countryId, countryData) => {
        return axios.post(`api/user/${userId}/country/${countryId}`, countryData);
    },
    // Saves a country to the database
    saveCountry: (countryData) => {
        console.log(countryData)
        return axios.post(`/api/user/country`, countryData);
    },
    // Get all cities in country for user
    getCities: (userId, countryId) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city`);
    },
    // Get the city with a given id
    getCity: (userId, countryId, cityId) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city/${cityId}`);
    },
    // Deletes a city with given id
    deleteCity: (userId, countryId, cityId) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city/${cityId}`);
    },
    // Update city with id
    updateCity: (userId, countryId, cityId, cityData) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city/${cityId}`, cityData);
    },
    // Saves a city to the database
    saveCity: (userId, countryId, cityData) => {
        return axios.post(`/api/user/${userId}/country${countryId}/city/`, cityData);
    },
    // Get all trips for a city
    getTrips: (userId, countryId, cityId) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city/${cityId}/trip`);
    },
    // Get the trip with a given id
    getTrip: (userId, countryId, cityId, tripId) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city/${cityId}/trip/${tripId}`);
    },
    // Deletes a trip with given id
    deleteTrip: (userId, countryId, cityId, tripId) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city/${cityId}/trip/${tripId}`);
    },
    // Update city with id
    updateTrip: (userId, countryId, cityId, tripId, tripData) => {
        return axios.get(`/api/user/${userId}/country/${countryId}/city/${cityId}/trip/${tripId}`, tripData);
    },
    // Saves a city to the database
    saveTrip: (userId, countryId, cityId, tripData) => {
        return axios.post(`/api/user/${userId}/country${countryId}/city/${cityId}/trip/`, tripData);
    }
};