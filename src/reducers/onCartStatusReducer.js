import * as actions from "../actions"

const defaultState = {};

export function onCartStatusReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.GET_ON_CART_STATUS:
            return {...state, ...action.payload};
        case actions.CHANGE_ON_CART_STATUS_TRUE:
            return {...state, [action.payload]: true};
        case actions.CHANGE_ON_CART_STATUS_FALSE:
            return {...state, [action.payload]: false};
        case actions.CLEAR_CART_STATUS:
            const clearCartState = {};
            for (const key in state) {
                clearCartState[key] = false;
                localStorage.removeItem(`onCart${key}`)
            }
            return {...state, ...clearCartState}
        default:
            return state
    }
}