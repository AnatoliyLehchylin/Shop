import React, {useEffect, useContext} from 'react';
import {useSelector} from "react-redux";
import classNames from 'classnames';

import {Product} from "./product";
import {ContextToTable} from "../../context";

import s from "./productList.module.scss";
import shoppingCart from "../../image/shoppingCart.png";
import greenCart from "../../image/green cart.png";
import starColor from "../../image/starColor1.png";
import starWhite from "../../image/starWhite.png"


export function ProductList(props) {
    const {
        addToCart,
        addToFavorites,
        onButton,
        removeButtonCart,
        removeButtonStar,
        counterCartMinus,
        counterStarMinus,
    }= props;

    const { toTable } = useContext(ContextToTable);
    const products = useSelector(store => store.productList);
    const cart = useSelector(store => store.cart);
    const favorites = useSelector(store => store.favorites);


    function PaintProductCard(product) {

        const {name, price, url, number, volume} = product;
        return (

            <Product
                key={number}
                name={name}
                price={price}
                url={url}
                number={number}
                volume={volume}
                counterCartPlus={counterCartPlus}
                counterCartMinus={counterCartMinus}
                counterStarPlus={counterStarPlus}
                counterStarMinus={counterStarMinus}
                onButton={onButton}
                removeButtonCart={removeButtonCart}
                removeButtonStar={removeButtonStar}
                />
        )
    }

    function counterCartPlus(number) {
        addToCart(number);
    }

    function counterStarPlus(number) {
        addToFavorites(number);
    }


    return (
        <>
            <div className={s.header}>
                <p className={s.title}>ALCO-MARKET</p>
                <div className={s.headerWrapp}>
                    <div className={s.headerStarWrapp}>
                        <img className={s.shoppingStar} src={favorites.length > 0 ? starColor : starWhite}/>
                        {favorites.length > 0 && <span className={s.spanStarCounter}>{favorites.length}</span>}
                    </div>
                    <div className={s.headerCartWrapp}>
                        <img className={s.shoppingCart} src={cart.length > 0 ? greenCart : shoppingCart }/>
                        {cart.length > 0 && <span className={s.spanCardCounter}>{cart.length}</span>}
                    </div>
                </div>
            </div>
            <div className={toTable ? classNames(s.productList) : classNames(s.productList, s.productListTable)}>
                {products.length > 0 && products.map(product => PaintProductCard(product))}
            </div>
        </>)
}












