import PropTypes from 'prop-types';
import {useContext} from "react";
import {ContextToTable} from "../../context";
import classNames from 'classnames';

import s from './Button.module.scss';


export function Button(props) {
const {onClick, text, backgroundColor} = props;
    const {toTable} = useContext(ContextToTable);

    return (
        <button type='button' className={toTable ? classNames (s.btn) : classNames(s.btnTable)} onClick={onClick} style={{backgroundColor: backgroundColor}}>
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    backgroundColor: PropTypes.string
}

Button.defaultProps = {
    text: 'Button',
    backgroundColor: '#FFFF'
}
