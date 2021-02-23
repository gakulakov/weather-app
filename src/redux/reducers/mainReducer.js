import {GET_ARR, SELECT_CITY, SHOW_TWO_WEEKS, GET_TWO_WEEKS, SHOW_MODAL, HIDE_MODAL} from "../types/types";

const initialState = {
    city: 'Krasnodar',
    cities: null,
    dataApi: null,
    twoWeeks: false,
    modal: null
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
            case GET_TWO_WEEKS: 
            return {
                ...state,
                dataTwoWeeks: action.payload
            }
            case SHOW_TWO_WEEKS: 
            return{
                ...state,
                twoWeeks: action.payload
            }
            case SHOW_MODAL: 
                return {
                    ...state,
                    modal: action.payload
                }
            case HIDE_MODAL: 
                return {
                    ...state,
                    modal: action.payload
                }
            
        default:
            return state
    }
}