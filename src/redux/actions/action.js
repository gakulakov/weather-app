import {GET_ARR, SELECT_CITY, SHOW_TWO_WEEKS, GET_TWO_WEEKS, SHOW_MODAL, HIDE_MODAL} from "../types/types";

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

export const getTwoWeeks = (api) => {
    return {
        type: GET_TWO_WEEKS,
        payload: api
    }
}

export const showTwoWeeks = () => {
    return{
        type: SHOW_TWO_WEEKS,
        payload: true
    }
}

export const showModalHandler = (data) => {
    return{
        type: SHOW_MODAL,
        payload: {
            data: data,
            show: true
        }
    }
}

export const hideModalHandler = () => {
    return{
        type: HIDE_MODAL,
        payload: null
    }
}

