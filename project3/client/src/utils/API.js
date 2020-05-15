import axios from "axios";

export default {
    getCountries: () => {
        return axios.get("/api/country");
    },
    // Get the country with a given id
    getCountry: (id) => {
        return axios.get(`/api/country/${id}`);
    },
    // Deletes a country with given id
    deleteCountry: (id) => {
        return axios.delete(`/api/country${id}`)
    },
    // Saves a country to the database
    saveCountry: (countryData) => {
        return axios.post("/api/country", countryData);
    }
    // Update country with id
};