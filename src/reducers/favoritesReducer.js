import * as actions from "../actions"

const defaultState = [];

export function favoritesReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.GET_FAVORITES:
            return [...state, ...action.payload];
        case actions.ADD_TO_FAVORITES:
            return [...state, action.payload];
        case actions.REMOVE_FROM_FAVORITES:
            return state.filter(elem => elem !== action.payload);
        // case actions.CLEAR_FAVORITES:
        //     localStorage.removeItem('starArray');
        //     return state.slice(state.length, state.length + 1);
        default:
            return state
    }

}


