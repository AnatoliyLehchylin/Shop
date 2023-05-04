import * as actions from "../actions"

const defaultState = [];

export function productListReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.GET_DRINKS:
            return [...state, ...action.payload];
        default:
           return state
    }
}
