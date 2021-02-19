import {GET_ARR, SELECT_CITY, SHOW_TWO_WEEKS} from "../types/types";

export const selectCity = (item) => {
    return{
        type: SELECT_CITY,
        payload: item
    }
}

export const getArr = (api) => {
    return {
        type: GET_ARR,
        payload: api
    }
}

export const showTwoWeeks = () => {
    return{
        type: SHOW_TWO_WEEKS,
        payload: true
    }
}

