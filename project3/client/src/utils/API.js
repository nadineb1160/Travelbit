import axios from "axios";

export default {
    // Get all countries for user
    getCountries: () => {
        return axios.get("/api/country");
    },
    // Get the country with a given id
    getCountry: (id) => {
        return axios.get(`/api/country/${id}`);
    },
    // Deletes a country with given id
    deleteCountry: (id) => {
        return axios.delete(`/api/country/${id}`)
    },
    // Update country with id
    updateCountry: (id, countryData) => {
        return axios.post(`api/country/${id}`, countryData);
    },
    // Saves a country to the database
    saveCountry: (countryData) => {
        return axios.post("/api/country", countryData);
    }
};