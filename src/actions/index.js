import {request} from "../tools/request";

const API_URL = './drinks.json';

export const GET_DRINKS = "GET_DRINKS";
export const GET_MODAL_STATUS = "GET_MODAL_STATUS";
export const CHANGE_MODAL_STATUS_TRUE = "CHANGE_MODAL_STATUS_TRUE";
export const CHANGE_MODAL_STATUS_FALSE = "CHANGE_MODAL_STATUS_FALSE";

export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_ON_CART_STATUS = "GET_ON_CART_STATUS";
export const CHANGE_ON_CART_STATUS_TRUE = "CHANGE_ON_CART_STATUS_TRUE";
export const CHANGE_ON_CART_STATUS_FALSE = "CHANGE_ON_CART_STATUS_FALSE";
export const CLEAR_CART_STATUS = "CLEAR_CART_STATUS";

export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
// export const CLEAR_FAVORITES = "CLEAR_FAVORITES";
export const GET_ON_FAVORITES_STATUS = "GET_ON_FAVORITES_STATUS";
export const CHANGE_ON_FAVORITES_STATUS_TRUE = "CHANGE_ON_FAVORITES_STATUS_TRUE";
export const CHANGE_ON_FAVORITES_STATUS_FALSE = "CHANGE_ON_FAVORITES_STATUS_FALSE";
// export const CLEAR_FAVORITES_STATUS = "CLEAR_FAVORITES_STATUS";

export const actionDrinks = (response) => ({type: GET_DRINKS, payload: response});
export const actionModalStatus = (modalStatus) => ({type: GET_MODAL_STATUS, payload: modalStatus});
export const actionModalTrue = (number) => ({type: CHANGE_MODAL_STATUS_TRUE, payload: number});
export const actionModalFalse = (number) => ({type: CHANGE_MODAL_STATUS_FALSE, payload: number});

export const actionGetCart = (cartArray) => ({type: GET_CART, payload: cartArray});
export const actionAddCart = (number) => ({type: ADD_TO_CART, payload: number});
export const actionRemoveCart = (number) => ({type: REMOVE_FROM_CART, payload: number});
export const actionClearCart = () => ({type: CLEAR_CART});

export const actionClearCartStatus = () => ({type: CLEAR_CART_STATUS});
export const actionOnCartStatus = (onCartStatus) => ({type: GET_ON_CART_STATUS, payload: onCartStatus});
export const actionOnCartStatusTrue = (number) => ({type: CHANGE_ON_CART_STATUS_TRUE, payload: number});
export const actionOnCartStatusFalse = (number) => ({type: CHANGE_ON_CART_STATUS_FALSE, payload: number});
// export const actionModalTrue = (number) => ({type: CHANGE_MODAL_STATUS_TRUE, payload: number});
// export const actionModalFalse = (number) => ({type: CHANGE_MODAL_STATUS_FALSE, payload: number});

export const actionGetFavorites = (starArray) => ({type: GET_FAVORITES, payload: starArray});
export const actionAddFavorites = (number) => ({type: ADD_TO_FAVORITES, payload: number});
export const actionRemoveFavorites = (number) => ({type: REMOVE_FROM_FAVORITES, payload: number});
// const actionClearFavorites = () => ({type: CLEAR_FAVORITES});

// const actionClearFavoritesStatus = () => ({type: CLEAR_FAVORITES_STATUS});
export const actionOnFavoritesStatus = (onFavoritesStatus) => ({type: GET_ON_FAVORITES_STATUS, payload: onFavoritesStatus});
export const actionOnFavoritesStatusTrue = (number) => ({type: CHANGE_ON_FAVORITES_STATUS_TRUE, payload: number});
export const actionOnFavoritesStatusFalse = (number) => ({type: CHANGE_ON_FAVORITES_STATUS_FALSE, payload: number});

//MODAL
export const ModalTrue = (number) => (dispatch) => {
    dispatch(actionModalTrue(number))
};

export const ModalFalse = (number) => (dispatch) => {
    dispatch(actionModalFalse(number))
};

//CART
export const GetCart =() => (dispatch) => {
    const getCart = JSON.parse(localStorage.getItem('cartArray'));
    const cart = [];
    for (const key in getCart) {
        cart.push(getCart[key])
    }
    dispatch(actionGetCart(cart))
};

export const AddCart = (number) => (dispatch) => {
        dispatch(actionAddCart(number))
};

export const RemoveCart = (number) => (dispatch) => {
    dispatch(actionRemoveCart(number))
};

export const ClearCart = () => (dispatch) => {
    dispatch(actionClearCart())
};

export const ClearCartStatus = () => (dispatch) => {
    dispatch(actionClearCartStatus())
};

export const OnCartStatusTrue = (number) => (dispatch) => {
    dispatch(actionOnCartStatusTrue(number))
};

export const OnCartStatusFalse = (number) => (dispatch) => {
    dispatch(actionOnCartStatusFalse(number))
};

//FAVORITES
export const GetFavorites =() => (dispatch) => {
    const getStar = JSON.parse(localStorage.getItem('starArray'));
    const star = [];
    for (const key in getStar) {
        star.push(getStar[key])
    }
    dispatch(actionGetFavorites(star))
};

export const AddFavorites = (number) => (dispatch) => {
    dispatch(actionAddFavorites(number))
};

export const RemoveFavorites = (number) => (dispatch) => {
    dispatch(actionRemoveFavorites(number))
};

export const OnFavoritesStatusTrue = (number) => (dispatch) => {
    dispatch(actionOnFavoritesStatusTrue(number))
};

export const OnFavoritesStatusFalse = (number) => (dispatch) => {
    dispatch(actionOnFavoritesStatusFalse(number))
};



export const fetchAllProducts = () => async (dispatch) => {
    const response = await request(API_URL)

    if (response) {
        dispatch(actionDrinks(response));

        const modalStatus = {};
        const onCartStatus = {};
        const onFavoritesStatus = {};

        response.forEach(item => {
            for (const key in item) {
                if (key === "number") {
                    modalStatus[item[key]] = false;
                    onCartStatus[item[key]] = false;
                    onFavoritesStatus[item[key]] = false;
                }
            }
        });
        dispatch(actionModalStatus(modalStatus));
        dispatch(actionOnCartStatus(onCartStatus));
        dispatch(actionOnFavoritesStatus(onFavoritesStatus));
    }
}