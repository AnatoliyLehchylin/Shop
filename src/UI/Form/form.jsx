import {useFormik} from "formik";
import * as Yup from "yup";
import {PatternFormat} from 'react-number-format';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useContext} from "react";

import {ClearCart, ClearCartStatus} from "../../actions";
import s from './form.module.scss'
import {ContextToTable} from "../../context";

export function Form() {

    const cart = useSelector(store => store.cart);
    const products = useSelector(store => store.productList);
    const dispatch = useDispatch();
    const {toTable} = useContext(ContextToTable);

    function clear() {
        dispatch(ClearCartStatus());
        dispatch(ClearCart());
    }

    function resultConsole(values) {
        console.log(values);
        products.map(product => cart.includes(product.number) && console.log(product.name, product.volume))
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: '',
            address: '',
            phone: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(3, 'too short!').max(15, 'too long!').required('Required!'),
            lastName: Yup.string().min(3, 'too short!').max(15, 'too long!').required('Required!'),
            age: Yup.number().min(18, 'You are under 18 years old').max(90, 'You are not advised to drink alcohol').required('Required!'),
            address: Yup.string().min(3, 'too short!').max(25, 'too long!').required('Required!'),
            phone: Yup.string().min(7, 'too short!').max(20, 'too long!').required('Required!'),
        }),
        onSubmit: (values, {resetForm}) => {
            resultConsole(values);
            clear();
            resetForm();
        }
    })

    return (

        <form className={toTable ? classNames(s.form) : classNames(s.formTable)}  onSubmit={formik.handleSubmit}>
            <div className={s.formTitle}>PURCHASE FORM</div>
            <div className={s.inputContainer}>
                <label>First Name</label>
                <input className={s.input}
                       id='firstName'
                       name='firstName'
                       type='text'
                       placeholder='FirstName'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ?
                    <p className={s.error}>{formik.errors.firstName}</p> : null}
            </div>
            <div className={s.inputContainer}>
                <label>Last Name</label>
                <input className={s.input}
                       id='lastName'
                       name='lastName'
                       type='text'
                       placeholder='LastName'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ?
                    <p className={s.error}>{formik.errors.lastName}</p> : null}
            </div>
            <div className={s.inputContainer}>
                <label>Age</label>
                <input className={s.input}
                       id='age'
                       name='age'
                       type='number'
                       placeholder='Age'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.age}
                />
                {formik.touched.age && formik.errors.age ? <p className={s.error}>{formik.errors.age}</p> : null}
            </div>
            <div className={s.inputContainer}>
                <label>Address</label>
                <input className={s.input}
                       id='address'
                       name='address'
                       type='text'
                       placeholder='Address'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ?
                    <p className={s.error}>{formik.errors.address}</p> : null}
            </div>
            <div className={s.inputContainer}>
                <label>Phone Number</label>
                <PatternFormat className={s.input}
                               id='phone'
                               name='phone'
                               onChange={formik.handleChange}
                               value={formik.values.phone}
                               format="(###) ###-##-##" allowEmptyFormatting mask="#"/>
            </div>
            <button className={s.checkout} type='submit'>CHECKOUT</button>
        </form>
    )
}