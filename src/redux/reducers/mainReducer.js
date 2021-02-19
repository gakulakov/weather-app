import {GET_ARR, SELECT_CITY, SHOW_TWO_WEEKS} from "../types/types";

const initialState = {
    city: 'Krasnodar',
    cities: null,
    dataApi: null,
    twoWeeks: false
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
                dataApi: action.payload
            }
            case SHOW_TWO_WEEKS: 
            return{
                ...state,
                twoWeeks: action.payload
            }
        default:
            return state
    }
}