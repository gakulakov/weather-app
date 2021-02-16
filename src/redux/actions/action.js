import {GET_ARR, SELECT_CITY} from "../types/types";

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

