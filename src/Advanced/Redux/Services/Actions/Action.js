//Action.js

import { type } from "@testing-library/user-event/dist/type"
import { ADD_TO_CART } from "../Reducers/Constants"
import { REMOVE_TO_CART } from "../Reducers/Constants";

export const addToCart = (data) => {
    console.log(data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = () => {
    console.log("remove to cart",);
    return {
        type: 'REMOVE_TO_CART',

    }
}