import { Outlet, Link } from "react-router-dom";
import { useContext} from "react";

import {ContextToTable} from "../context";
import s from "./layout.module.scss"

export function Layout () {
    const { toTable, handleChange } = useContext(ContextToTable);

    return (
        <>
            <div className={s.layoutWrapper}>
                <button className={s.layoutButton} onClick={() => handleChange()}>
                    {toTable ? 'Table': 'Cards'}</button>
                <div className={s.layout}>
                    <li >
                        <Link className={s.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={s.link} to="favorite">Favorites</Link>
                    </li>
                    <li>
                        <Link className={s.link} to="cart">Cart</Link>
                    </li>
                </div>
            </div>
                <Outlet />
        </>
    )
}