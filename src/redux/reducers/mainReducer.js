import {GET_ARR, SELECT_CITY} from "../types/types";

const initialState = {
    city: 'Krasnodar',
    cities: null,
    twoWeeks: null
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CITY:
            return {
                ...state,
                city: action.payload
            }
        case GET_ARR:
            return {
                ...state,
                twoWeeks: action.payload
            }
        default:
            return state
    }
}