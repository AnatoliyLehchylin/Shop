import {createStore, applyMiddleware} from "redux";
import {combineReducers} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {productListReducer} from "../reducers/productListReducer";
import {cartReducer} from "../reducers/cartReducer";
import {favoritesReducer} from "../reducers/favoritesReducer";
import {productReducer} from "../reducers/productReducer";
import {onCartStatusReducer} from "../reducers/onCartStatusReducer";
import {onFavoritesStatusReducer} from "../reducers/onFavoritesStatusReducer";

const rootReducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,
    onCartStatus: onCartStatusReducer,
    favorites: favoritesReducer,
    onFavoritesStatus: onFavoritesStatusReducer,
    product: productReducer,
})

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);