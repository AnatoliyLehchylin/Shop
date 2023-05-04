import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";

import {ProductList} from "./pages/products/productList";
import {Cart} from "./pages/cart";
import {Favorite} from "./pages/favorite";
import {Layout} from "./pages/layout";
import {AddCart, fetchAllProducts, GetCart, GetFavorites, RemoveCart, AddFavorites, RemoveFavorites} from "./actions";
import s from './App.module.scss';

export function App() {
    const dispatch = useDispatch();

    const cart = useSelector(store => store.cart);
    const favorites = useSelector(store => store.favorites)

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);


    useEffect(() => {
        dispatch(GetCart())
    }, []);

    useEffect(() => {
        localStorage.setItem('cartArray', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        dispatch(GetFavorites())
    }, []);

    useEffect(() => {
        localStorage.setItem('starArray', JSON.stringify(favorites));
    }, [favorites]);


    function AddToCart(number) {
        dispatch(AddCart(number))
    }

    function AddToFavorites(number) {
        dispatch(AddFavorites(number))
    }

    function RemoveFromCart(number) {
        dispatch(RemoveCart(number))
    }

    function RemoveFromFavorites(number) {
        dispatch(RemoveFavorites(number))
    }

    function CounterCartMinus(number) {
        RemoveFromCart(number);
    }

    function CounterStarMinus(number) {
        RemoveFromFavorites(number);
    }

    return (
        <div className={s.app}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ProductList
                        addToCart={AddToCart}
                        addToFavorites={AddToFavorites}
                        counterCartMinus={CounterCartMinus}
                        counterStarMinus={CounterStarMinus}
                        onButton={true}
                        removeButtonCart={false}
                        removeButtonStar={false}
                    />}/>
                    <Route path="cart" element={<Cart
                        onButton={false}
                        removeButtonCart={true}
                        counterCartMinus={CounterCartMinus}
                    />}/>
                    <Route path="favorite" element={<Favorite
                        onButton={false}
                        removeButtonStar={true}
                        counterStarMinus={CounterStarMinus}/>}/>
                </Route>
            </Routes>
        </div>
    )
}

