import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';

import {Button} from "../../UI/Button/button";
import {Modal} from "../../UI/Modal/modal";
import {ModalTrue, ModalFalse, OnFavoritesStatusTrue, OnFavoritesStatusFalse} from "../../actions";
import {OnCartStatusTrue} from "../../actions";
import {OnCartStatusFalse} from "../../actions";

import star from "../../image/starWhite.png"
import starColor from "../../image/starColor1.png"
import s from "./product.module.scss"
import {ContextToTable} from "../../context";


export function Product(props) {

    const dispatch = useDispatch();
    const {
        name,
        price,
        url,
        number,
        volume,
        counterCartPlus,
        counterCartMinus,
        counterStarPlus,
        counterStarMinus,
        onButton,
        removeButtonCart,
        removeButtonStar,
    } = props;

    const [header, setHeader] = useState('');
    const [closeButton, setCloseButton] = useState(false);
    const [text, setText] = useState('');
    const [actions, setActions] = useState(<></>);

    const modalStatus = useSelector(store => store.product);
    const openModal = modalStatus[number];

    const onCartStatus = useSelector(store => store.onCartStatus);
    const onCart = onCartStatus[number];

    const onFavoritesStatus = useSelector(store => store.onFavoritesStatus);
    const onStar = onFavoritesStatus[number];

    const { toTable } = useContext(ContextToTable);

    useEffect(() => {
        if (!!localStorage.getItem(`onStar${number}`)) {
            dispatch(OnFavoritesStatusTrue(number))
        }
    }, [])

    useEffect(() => {

        if (!!localStorage.getItem(`onCart${number}`)) {
            dispatch(OnCartStatusTrue(number))
        }
    }, [])


    function handleClickDeleteProduct() {
        counterCartMinus(number);
        dispatch(OnCartStatusFalse(number));
        localStorage.removeItem(`onCart${number}`);
        closeModal()
    }

    function handleClickDeleteProductFav() {
        counterStarMinus(number);
        dispatch(OnFavoritesStatusFalse(number));
        localStorage.removeItem(`onStar${number}`)
    }

    function handleClickStar() {

        if (!!onStar) {
            dispatch(OnFavoritesStatusFalse(number));
            counterStarMinus(number);
            localStorage.removeItem(`onStar${number}`);
        } else {
            dispatch(OnFavoritesStatusTrue(number));
            counterStarPlus(number);
            localStorage.setItem(`onStar${number}`, 'true');
        }
    }

    function handleClickCart() {

        if (!!onCart) {
            dispatch(OnCartStatusFalse(number));
            counterCartMinus(number);
            localStorage.removeItem(`onCart${number}`)
        } else {
            dispatch(OnCartStatusTrue(number));
            counterCartPlus(number);
            localStorage.setItem(`onCart${number}`, 'true')
        }
        closeModal()
    }

    function showModalFirst() {
        dispatch(ModalTrue(number));
        setHeader("Добавити обраний товар до кошика?");
        setText("Міністерство охорони здоров'я попереджає: помірне споживання алкоголю корисне для Вашого здоров'я!");
        setCloseButton(true);
        setActions(<>
            <Button onClick={handleClickCart} text={'Ok'} backgroundColor={'#5dc259'} />
            <Button onClick={closeModal} text={'Cancel'} backgroundColor={'#dc6161'} />
        </>)
    }

    function showModalCart() {
        dispatch(ModalTrue(number));
        setHeader("Видалити обраний товар з кошика?");
        setText("Товар буде видалено з кошика!");
        setCloseButton(true);
        setActions(<>
            <Button onClick={handleClickDeleteProduct} text={'Ok'} backgroundColor={'#5dc259'} />
            <Button onClick={closeModal} text={'Cancel'} backgroundColor={'#dc6161'} />
        </>)
    }

    function closeModal() {
        dispatch(ModalFalse(number))
    }


    return (
        <>
            {toTable && <div className={s.product}>
                <div className={s.imageWrapp}>
                    <img className={s.image} src={url} alt={'productFoto'}/>
                    {!!removeButtonCart && <span className={s.modalCloseButton}><button className={s.closeButton}
                                                                                        onClick={showModalCart}>X</button></span>}
                    {!!removeButtonStar && <span className={s.modalCloseButtonStar}><button className={s.closeButton}
                                                                                            onClick={handleClickDeleteProductFav}><img
                        className={s.Star} src={starColor} alt="star"/></button></span>}
                </div>
                <p className={s.name}>{name}</p>
                <p className={s.price}>{price}</p>
                <div className={s.wrappVolume}>
                    <p className={s.number}>Арт.{number}</p>
                    <p className={s.volume}>Об'єм: {volume}</p>
                </div>
                {!!onButton && <div className={s.buttonWrapper}>
                    {!onCart && <Button onClick={showModalFirst} text={'ADD TO CART'} backgroundColor={'#94ef96'} />}
                    {onCart && <Button onClick={handleClickCart} text={'REMOVE FROM CART'} backgroundColor={'#2ac72a'} />}
                    <button className={s.buttonStar} onClick={handleClickStar}>
                        <img className={s.Star} src={onStar ? starColor : star} alt="star"/>
                    </button>
                </div>}
            </div>}

            {!toTable && <div className={s.productTable}>
                <div className={s.nameTable}>{name}</div>
                <div className={s.priceTable}>{price}</div>
                <div className={s.wrappVolumeTable}>
                    <p className={s.numberTable}>Арт.{number}</p>
                    <p className={s.volumeTable}>Об'єм: {volume}</p>
                </div>
                <div className={s.imageWrappTable}>
                    <img className={s.imageTable} src={url} alt={'productFoto'}/>
                    {!!removeButtonCart && <span className={s.modalCloseButtonTable}><button className={s.closeButton}
                                                                                        onClick={showModalCart}>X</button></span>}
                    {!!removeButtonStar && <span className={s.modalCloseButtonStar}><button className={s.closeButton}
                                                                                            onClick={handleClickDeleteProductFav}><img
                        className={s.StarTable} src={starColor} alt="star"/></button></span>}
                </div>
                {!!onButton && <div className={s.buttonWrapperTable}>
                    {!onCart && <Button onClick={showModalFirst} text={'ADD TO CART'} backgroundColor={'#94ef96'} />}
                    {onCart && <Button onClick={handleClickCart} text={'REMOVE FROM CART'} backgroundColor={'#2ac72a'} />}
                    <button className={s.buttonStarTable} onClick={handleClickStar}>
                        <img className={s.StarTable} src={onStar ? starColor : star} alt="star"/>
                    </button>
                </div>}
            </div>}

            <Modal header={header} closeButton={closeButton} text={text} actions={actions} openModal={openModal} closeModal={closeModal} />
        </>
    )
}


Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string,
    url: PropTypes.string,
    number: PropTypes.number.isRequired,
    volume: PropTypes.string,
}

Product.defaultProps = {
    price: '000.00',
    volume: '0.0 l',
}
