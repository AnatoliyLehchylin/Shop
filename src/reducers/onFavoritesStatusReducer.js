import * as actions from "../actions"

const defaultState = {};

export function onFavoritesStatusReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.GET_ON_FAVORITES_STATUS:
            return {...state, ...action.payload};
        case actions.CHANGE_ON_FAVORITES_STATUS_TRUE:
            return {...state, [action.payload]: true};
        case actions.CHANGE_ON_FAVORITES_STATUS_FALSE:
            return {...state, [action.payload]: false};
        // case actions.CLEAR_FAVORITES_STATUS:
        //     const clearFavoritesState = {};
        //     for (const key in state) {
        //         clearFavoritesState[key] = false;
        //         localStorage.removeItem(`onFavorites${key}`)
        //     }
        //     return {...state, ...clearFavoritesState}
        default:
            return state
    }
}