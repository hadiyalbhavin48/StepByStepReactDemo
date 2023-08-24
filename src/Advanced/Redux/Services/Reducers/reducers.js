//reducers.js

import { ADD_TO_CART, REMOVE_TO_CART } from "./Constants"
const initielState = {
    cardData: []
}
export default function cartItem(state = initielState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('add to cart reducers', action);
            return {
                ...state,
                cardData: action.data
            }
        case REMOVE_TO_CART:
            console.log('remove to cart reducers', action);
            return {
                ...state.pop()

            }
        default:
            return state
    }
}
