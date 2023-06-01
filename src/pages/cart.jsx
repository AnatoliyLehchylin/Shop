import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames";

import {Product} from "./products/product";
import {Form} from "../UI/Form/form";
import {ContextToTable} from "../context";
import s from "./cart.module.scss";
import st from "./products/productList.module.scss";

import yashik from "../image/yashik.jpg";
import starColor from "../image/starColor1.png";
import starWhite from "../image/starWhite.png";
import greenCart from "../image/green cart.png";
import shoppingCart from "../image/shoppingCart.png";


export function Cart(props) {

    const {onButton, removeButtonCart, counterCartMinus} = props;
    const products = useSelector(store => store.productList);
    const cart = useSelector(store => store.cart);
    const favorites = useSelector(store => store.favorites);
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
                    removeButtonCart={removeButtonCart}
                    counterCartMinus={counterCartMinus}
                />
            </>
        )
    }

    return (
        <div>
            <div className={st.header}>
                <p className={st.title}>CART</p>
                <div className={st.headerWrapp}>
                    <div className={st.headerStarWrapp}>
                        <img className={st.shoppingStar} src={favorites.length > 0 ? starColor : starWhite}/>
                        {favorites.length > 0 && <span className={st.spanStarCounter}>{favorites.length}</span>}
                    </div>
                    <div className={st.headerCartWrapp}>
                        <img className={st.shoppingCart} src={cart.length > 0 ? greenCart : shoppingCart}/>
                        {cart.length > 0 && <span className={st.spanCardCounter}>{cart.length}</span>}
                    </div>
                </div>
            </div>
            {cart.length < 1 &&
                <div className={s.cartEmpty}>
                    <h1 className={s.cartEmptyTitle}>CART IS EMPTY</h1>
                    <img className={s.cartBox} src={yashik}/>
                </div>}
            <div className={toTable ? classNames(s.wrapper) : classNames(s.wrapperTable)}>
                <div className={toTable ? classNames(s.productWrapp) : classNames(s.productWrapp, s.productWrappTable)}>
                    {products.map(product => cart.includes(product.number) && PaintProductCard(product))}
                </div>
                <div className={s.formWrapp}>
                    {cart.length > 0 && <Form/>}
                </div>
            </div>
        </div>
    )

}
