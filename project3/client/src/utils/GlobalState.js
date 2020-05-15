import React, { createContect, useReducer, useContext } from "react";
import {
    ADD_COUNTRY,
    UPDATE_COUNTRY,
    REMOVE_COUNTRY,
    ADD_FAVORITE,
    UPDATE_FAVORITES,
    REMOVE_FAVORITE,
    LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_COUNTRY:
            return {
                ...state,
                countries: [action.post, ...state.countries],
                loading: false
            };

        case UPDATE_COUNTRY:
            return {
                ...state,
                posts: [...action.countries],
                loading: false
            };

        case REMOVE_COUNTRY:
            return {
                ...state,
                countries: state.countries.filter((country) => {
                    return country._id !== action._id;
                })
            };

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [action.post, ...state.favorites],
                loading: false
            };

        case UPDATE_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites],
                loading: false
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((post) => {
                    return post._id !== action._id;
                })
            };

        case LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        countries: [],
        favorites: [],
        loading: false
    });

    return <Provider value={[state, dispatch]}{...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext)
};

export { StoreProvider, useStoreContext };