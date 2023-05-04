import * as actions from "../actions"

const defaultState = {};

export function productReducer(state = defaultState, action) {
    switch (action.type) {
        case actions.GET_MODAL_STATUS:
            return { ...state, ...action.payload };
        case actions.CHANGE_MODAL_STATUS_TRUE:
            return {...state, [action.payload]: true};
        case actions.CHANGE_MODAL_STATUS_FALSE:
            return {...state, [action.payload]: false};
        default:
            return state
    }
}

