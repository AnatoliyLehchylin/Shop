import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames";

import {Product} from "./products/product";
import {ContextToTable} from "../context";
import s from "./favorites.module.scss";
import st from "./products/productList.module.scss"

import starWhite from "../image/starWhite.png";
import starColor from "../image/starColor1.png";
import greenCart from "../image/green cart.png";
import shoppingCart from "../image/shoppingCart.png";

export function Favorite(props) {
    const {onButton, removeButtonStar, counterStarMinus} = props;
    const products = useSelector(store => store.productList);
    const favorites = useSelector(store => store.favorites);
    const cart = useSelector(store => store.cart);
    const {toTable} = useContext(ContextToTable);

    function PaintProductCard(product) {

        const {name, price, url, number, volume} = product;

        return (
            <>
                <Product
                    key={number}
                    name={name}
                    price={price}
                    url={url}
                    number={number}
                    volume={volume}
                    onButton={onButton}
                    removeButtonStar={removeButtonStar}
                    counterStarMinus={counterStarMinus}
                />
            </>
        )
    }

    return (
        <div>
            <div className={st.header}>
                <p className={st.title}>FAVORITES</p>
                <div className={st.headerWrapp}>
                    <div className={st.headerStarWrapp}>
                        <img className={st.shoppingStar} src={favorites.length > 0 ? starColor : starWhite}/>
                        {favorites.length > 0 && <span className={st.spanStarCounter}>{favorites.length}</span>}
                    </div>
                    <div className={st.headerCartWrapp}>
                        <img className={st.shoppingCart} src={cart.length > 0 ? greenCart : shoppingCart }/>
                        {cart.length > 0 && <span className={st.spanCardCounter}>{cart.length}</span>}
                    </div>
                </div>
            </div>
            {favorites.length < 1 &&
                <div className={s.favoritesEmpty}>
                    <h1 className={s.favoritesEmptyTitle}>FAVORITES IS EMPTY</h1>
                    <img className={s.favoritesBox} src={starWhite}/>
                </div>}
            <div className={s.wrapper}>
                <div className={toTable ? classNames(s.productWrapp) : classNames(s.productWrapp, s.productWrappTable)}>
                    {products.map(product => favorites.includes(product.number) && PaintProductCard(product))}
                </div>
            </div>
        </div>
    )
}
