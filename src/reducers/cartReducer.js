import * as actions from "../actions"

const defaultState = [];

export function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.GET_CART:
            return [...state, ...action.payload];
        case actions.ADD_TO_CART:
            return [...state, action.payload];
        case actions.REMOVE_FROM_CART:
            return state.filter(elem => elem !== action.payload);
        case actions.CLEAR_CART:
                localStorage.removeItem('cartArray');
            return state.slice(state.length, state.length + 1);
        default:
            return state
    }
}